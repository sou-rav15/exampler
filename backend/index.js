const express= require('express');
const cors= require('cors');
const dotenv=require('dotenv');
dotenv.config();
const cookieParser =require('cookie-parser');
const morgan =require('morgan');
const helmet =require('helmet');
const connectDb= require('./config/ConnectDb.js');
const router = require('./route/user.route.js');
const http = require("http");
const app= express()
const { executecpp, executeJs, executePython, executeJava } = require('./executionhandler.js'); 
app.use(cors({
    credentials: true,
    origin:process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy:false
}))
const PORT=8000||process.env.PORT;
app.use('/api/user',router);
app.get('/',(req, res)=>{
    res.send("heyyy")
})

const server = http.createServer(app);
const { Server } = require("socket.io");

// server
const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST"]
    }
  });
let onlineuser=0;
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    onlineuser++;
    console.log(`${onlineuser} connected`);
    // io.to(roomId).emit("updateUserCount", onlineuser);
    
  
    socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
        console.log(`User joined room: ${roomId}`);
      });
    // Listen for messages from client
    socket.on("sendMessage", ({ roomId, message }) => {
        io.to(roomId).emit("receiveMessage", message); // Send message only in this room
      });
    socket.on("codeChange", ({roomId, code})=>{
      io.to(roomId).emit("codeUpdate", code);
    })
  
// run code
socket.on('runCode', async ({ roomId, code, language }) => {
  console.log("Received Code:", code);
  console.log("Language:", language);
  try {
    let output = '';
    switch (language) {
      case 'cpp':
        console.log('cpp called');
        
        output = await executecpp(code);
        console.log('output->', output);
        
        break;
      case 'javascript':
        output = await executeJs(code);
        break;
      case 'py':
        output = await executePython(code);
        break;
      case 'java':
        output = await executeJava(code);
        break;
      default:
        output = 'Unsupported language';
    }

    io.to(roomId).emit('codeOutput', output); 
    console.log('dt->', output);
    
    // Send result back to the room
  } catch (error) {
    console.log('in error');
    console.log('error',error);
    io.to(roomId).emit('codeOutput',error);
  }
});

    // When user disconnects
    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });
connectDb().then(()=>{
    server.listen(PORT,()=>{
 
        console.log("server is running ",PORT);
    })
}) 
