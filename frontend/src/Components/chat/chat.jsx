import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import 'codemirror/lib/codemirror.css'
import './chat.css'
// import { dracula } from "@uiw/codemirror-themes";
// import { draculaInit } from "@uiw/codemirror-themes";

// import 'codemirror/theme/cobalt.css'
// import { vscodeDark } from "@uiw/codemirror-theme-vscode"; 
// Connect to WebSocket server
const socket = io("http://localhost:8000");

const Chat = () => {
    const [code, setCode] = useState("// Write your code here...");
    const [language, setLanguage] = useState("javascript");
    const [output, setOutput] = useState(" outout display here");
  
    const { roomId } = useParams();
    console.log('roomId', roomId);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const runCode = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/run", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ code, language }),
  //     });

  //     const data = await response.json();
  //     setOutput(data.output);
  //   } catch (error) {
  //     setOutput("Error executing code");
  //   }
  // };
 
  const getLanguageMode = () => {
    switch (language) {
      case "javascript":
        return javascript();
      case "python":
        return python();
      case "cpp":
        return cpp();
      default:
        return javascript();
    }
  };

  useEffect(() => {
    socket.emit("joinRoom", roomId);
  
    const handleReceiveMessage = (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    };
    socket.on("codeUpdate", (newcode)=>{

      setCode(newcode);
    })
    socket.on("codeOutput", (data) => {
      console.log('data->',data);
      setOutput(data||"no dta");
    });
    socket.on("receiveMessage", handleReceiveMessage);
  
    return () => {
      socket.off("codeOutput"); 
      socket.off("codeUpdate")
      socket.off("receiveMessage", handleReceiveMessage); // Cleanup on unmount
    };
  }, [roomId]); // Depend only on `roomId`
  const runCode = () => {
    socket.emit("runCode", { code, language, roomId });
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
        socket.emit("sendMessage", { roomId, message }); // Send message to server
      setMessage("");
    }
  };

  const handleCodeChange=(newCode)=>{
    console.log('newcode->', newCode);
    
    setCode(newCode);
    socket.emit("codeChange",{roomId, code:newCode})
  }
  return (
    <><div className="bg-black">
    <section className="bg-[#22272c] w-full h-15" >
        <h4 className="text-white">Room Name :{roomId}</h4>
    </section>
    <section className="bg-black w-full h-130 py-2 px-2 mb-4 flex justify-between">
        {/* chat */}
        <div className=" text-white bg-[#22272c] w-[26%] h-auto py-4 px-4 overflow-y-auto">
        <h2>Simple Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
      className=" py-3 px-2 mt-3 outline-1 rounded-2xl"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button className=" text-black text-[12px] py-1 px-2 ml-2
         transition-all duration-200 ease-in-out
        shadow-xl active:translate-y-1
       bg-gray-300 mt-2 cursor-pointer" onClick={sendMessage}>Send</button>
        </div>
        {/* code */}
        <div className="  w-[73%] h-[98%]">

        <div className="flex flex-col items-center h-[100%] w-[100%] p-4 justify-start bg-[#22272c] ">
     

      {/* Language Selector */}
      <select
        className="mb-2 p-1 border rounded hover:cursor-pointer bg-blue-800 text-white"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
      </select>

      {/* CodeMirror Editor */}
      <CodeMirror
  value={code}
  height="70vh"
  width="70vw"
  // theme={dracula}
  
  extensions={[getLanguageMode()]}
  onChange={handleCodeChange}
 
/>

      {/* Run Code Button */}
      {/* <button
        className="bg-blue-500 text-white p-2 mt-2 rounded"
        onClick={runCode}
      >
        Run Code
      </button> */}

      {/* Output Section */}
      {/* <div className="mt-4 w-3/4 p-2 bg-gray-100 border rounded">
        <h3 className="font-semibold">Output:</h3>
        <pre>{output}</pre>
      </div> */}
    </div>



        </div>
        {/* <div className=" bg-amber-200 w-[10%] h-95%"></div> */}

    </section>
     <section className="bg-[#22272c] w-full h-auto py-2 px-2 mb-10">
     <div>
     <button
        className="bg-green-700 text-white p-2 mt-2 rounded
        outline-none border-none hover:cursor-pointer
          transition transform active:scale-95 active:bg-green-700
        "
        onClick={runCode}
      >
        Run Code
      </button>
      <div>
      <div className="mt-4 w-3/4 p-2 bg-gray-700 min-h-[300px] max-h-[700px] overflow-auto border rounded">
        <h3 className="font-semibold text-white">Output:</h3>
        <pre className="text-white">{output}</pre>
      </div> 
      </div>
     </div>
     </section>
     </div>
    </>
  );
};

export default Chat;
