import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomSelection = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substr(2, 8); // Generate random room ID
    navigate(`/chat/${newRoomId}`);
  };

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      navigate(`/chat/${roomId}`);
    }
  };

  return (
    <>
     <section className=' w-full h-130 flex justify-between 
      max-[949px]:block max-[949px]:h-220   max-[949px]:mb-4
      items-center space-x-2 p-4 mb-7 '  >
        {/* start of box 1 */}
        
        <div className='w-[50%] h-[85%] 
        flex justify-center items-center flex-col
        max-[949px]:w-full max-[949px]:h-[40%]
        '>
        <div  className='w-[93%] h-[83%]  py-10 flex justify-between items-evenly flex-col
          space-y-4 max-[425px]:mb-20 
           transition-all duration-300 ease-in-out
        '>
        <div className='w-[70%]
         transition-all duration-100 ease-in-out
         text-[24px] font-bold max-[616px]:text-[20px] max-[269px]:text-[18px] max-[269px]:leading-5'>
            </div>
        <div className=' w-[80%]
         transition-all duration-100 ease-in-out
        text-[20px] text-[#5b5b5e] max-[616px]:text-[16px] max-[269px]:text-[14px] max-[269px]:leading-5 font-bold'>code Together, instanly</div>
        <div className=' w-[90%] 
         transition-all duration-100 ease-in-out
        text-[16px] text-[#5b5b5e] max-[616px]:text-[11px] max-[269px]:text-[10px] max-[269px]:leading-4 text-justify '><p>
       Whether you're working on a project, solving coding problems, or teaching someone to code, our real-time code editor allows 
       you to collaborate seamlessly with others.
          </p></div>
          <div><button className='bg-blue-400 px-4 py-2 text-[11px] text-white cursor-pointer
         
            transition-all duration-100 ease-in-out
           shadow-xl hover:bg-blue-600 active:translate-y-1
          '  onClick={handleCreateRoom}>create room</button></div>
        </div>
        </div>
        {/* end of box 1 */}
        <div className='w-[50%] h-[85%] flex justify-center items-center 
        max-[949px]:w-full max-[949px]:h-[51%]
        max-[362px]:h-[30%]
        max-[292px]:mt-10
       max-[506px]:h-[35%]
        transition-all duration-100 ease-in-out
        '>
        <div className='w-[83%] h-[83%] bg-[#14293b]   rounded-3xl overflow-hidden inner
shadow-[inset_20px_31px_11px_4px_rgba(0,0,0,0.3)]   
 transition-all duration-300 ease-in-out     '>
          <img src="./homepage1.png" alt="homepage1" className=' w-full h-full rounded-3xl  object-fit
           translate-x-9 translate-y-12
            transition-all duration-300 ease-in-out
           max-[362px]:translate-x-7 max-[362px]:translate-y-6
           ' />
        </div>
        </div>

      </section >
      {/* end of section 1 */}
      {/* start of section 2 */}
      <section className=" w-full h-60 flex space-y-2 mb-2 bg-red-200">
        < div className=" h-50 w-[80%] py-4 px-6 mb-2">
        <div><p className="text-[16px] text-gray-400 mb-2 text-justify">Join the room using room Id if you have know any or just create the one</p></div>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
         
          className='lg:w-[50%] w-[70%]  mx-auto h-12 p-4 mb-4 
          outline-2 outline-offset-2 outline-blue-400 rounded-lg
          focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
          transition duration-300 ease-in-out
          ' 
        />
        <div><button className='bg-green-400 px-4 py-2 text-[11px] text-white cursor-pointer
         
         transition-all duration-100 ease-in-out
        shadow-xl hover:bg-green-600 active:translate-y-1
       '  onClick={handleJoinRoom}>join room</button></div>
        </div>
        
     

      </section>
      {/* endo of section 2 */}
      {/* start of section 3 */}
      <section className="w-full h-auto py-10 bg-blue-200">
       <div className=" w-[60%]  max-[860px]:w-[95%] bg-red-100 h-auto px-3 py-5 mb-4">
       <div >
            <h2 className="font-bold">What We Offer:</h2>
        </div>
            <div >
                <h2 className=" font-semibold text-[32px] max-[860px]:text-[24px]  max-[392px]:text-[16px]">🔴 Live Coding</h2>
               <p className="text-[16px] text-justify max-[392px]:text-[13px]">
               No need to refresh or reload! Watch as your teammates type in real-time, making collaboration seamless and efficient. Whether you're pair programming, debugging, or learning together, 
               changes reflect instantly across all connected users.
                </p>
            </div>
            {/* border */}
            <div className="border-b-1 border-gray-300">

            </div>
            <div>
               <h2  className=" font-semibold text-[32px] max-[860px]:text-[24px]  max-[392px]:text-[16px]"> 🌍 Multiple Language Support </h2>
               <p  className="text-[16px] italic text-justify max-[392px]:text-[13px]">
               Whether you're coding in JavaScript, Python, C++, Java, or more, our platform supports multiple programming languages. Easily
                switch between them and run your code directly within the environment.
                </p>
            </div>
            {/* border */}
            <div className="border-b-1 border-gray-300">

            </div>
            <div >
               <h2 className=" font-semibold text-[32px] max-[860px]:text-[24px]  max-[392px]:text-[16px]"> 🔒 rivate Rooms </h2>
               <p className="text-[16px] italic text-justify max-[392px]:text-[13px]"> 
               Create dedicated coding rooms where only invited users can join. This ensures a safe, distraction-free
                environment, perfect for team projects, interviews, or personal practice.
               </p>
            </div>
            {/* border */}
            <div className="border-b-1 border-gray-300"></div>
            <div>
               <h2 className=" font-semibold text-[32px] max-[860px]:text-[24px]  max-[392px]:text-[16px]">💬 Built-in Chat</h2>
               <p  className="text-[16px] italic text-justify max-[392px]:text-[13px]"> 
               Stay in sync with your team using the integrated chat system. Discuss logic, share ideas, or troubleshoot errors—all 
               within the same platform. No need for third-party messaging apps!
               </p>
            </div>
               {/* border */}
               <div className="border-b-1 border-gray-300"></div>
            <div>
               <h2 className=" font-semibold text-[32px] max-[860px]:text-[24px]  max-[392px]:text-[16px] ">📜 Code History</h2>
               <p  className="text-[16px] italic text-justify max-[392px]:text-[13px]">
               Never lose your progress! Every code edit is recorded, allowing you to review, track, and restore previous versions. This is especially useful 
               for debugging, learning from past mistakes, or revisiting old solutions.
               </p>
            </div>
               {/* border */}
               <div className="border-b-1 border-gray-300"></div>
       </div>
      </section>
      {/* end of section 3 */}
      {/* start of section4 */}
      <section className="w-full h-auto py-7 mb-10 bg-amber-200">
       <div className=" w-[60%] max-[860px]:w-[95%] h-auto px-3 py- 10 ">
       <div >
            <h2 className="font-bold">Code Room Ethics – Guidelines for a Respectful and Productive Environment</h2>
        </div>
            <div >
               <h2 className=" font-semibold text-[32px] max-[860px]:text-[24px]  max-[392px]:text-[16px]">🚫 No Spamming</h2>
               <p className="text-[16px] text-justify  max-[392px]:text-[13px]">
               Avoid flooding the chat or code editor with unnecessary messages or code. 
               This disrupts the workflow and makes collaboration harder for others.
               </p>
            </div>
            {/* border */}
            <div className="border-b-1 border-gray-300">

            </div>
            <div>
               <h2  className=" font-semibold text-[32px]  max-[860px]:text-[24px]  max-[392px]:text-[16px]"> 🗣️ Respectful Communication </h2>
               <p  className="text-[16px] italic text-justify  max-[392px]:text-[13px]">Always be polite and professional when chatting with others. Avoid offensive language, personal
                 attacks, or harassment. Treat others with the same respect you’d expect.</p>
            </div>
            {/* border */}
            <div className="border-b-1 border-gray-300">

            </div>
            <div >
               <h2 className=" font-semibold text-[32px]  max-[860px]:text-[24px]  max-[392px]:text-[16px]">🔞 No Vulgar or Inappropriate Content </h2>
               <p className="text-[16px] italic text-justify  max-[392px]:text-[13px]">
               Keep the discussions and code professional. Avoid sharing or writing offensive, discriminatory, 
               or illegal content. This applies to both the chat and the code editor.
               </p>
            </div>
            {/* border */}
            <div className="border-b-1 border-gray-300"></div>
            <div>
               <h2 className=" font-semibold text-[32px]  max-[860px]:text-[24px]  max-[392px]:text-[16px]">🔐 Maintain Privacy & Security</h2>
               <p  className="text-[16px] italic text-justify  max-[392px]:text-[13px]"> 
               Do not share sensitive or personal information in chat or code. Keep passwords, 
               API keys, and confidential data private to avoid security risks.
                </p>
            </div>
               {/* border */}
               <div className="border-b-1 border-gray-300"></div>
            <div>
               <h2 className=" font-semibold text-[32px]  max-[860px]:text-[24px]  max-[392px]:text-[16px]">💡 No Plagiarism – Give Credit Where Due</h2>
               <p  className="text-[16px] italic text-justify  max-[392px]:text-[13px]">
               If you're using someone else’s code, give proper credit and avoid claiming 
               it as your own. Respect copyright laws and intellectual property rights.
               </p>
            </div>
               {/* border */}
               <div className="border-b-1 border-gray-300"></div>
            <div>
               <h2 className=" font-semibold text-[32px]  max-[860px]:text-[24px]  max-[392px]:text-[16px] ">⚖️ No Malicious or Harmful Code</h2>
               <p  className="text-[16px] italic text-justify  max-[392px]:text-[13px]">
               Do not write or share code that could harm others, such as viruses, malware, or phishing scripts. The platform is for
                learning, coding, and collaboration—not hacking or unethical activities.
               </p>
            </div>
               {/* border */}
               <div className="border-b-1 border-gray-300"></div>
            <div>
               <h2 className=" font-semibold text-[32px]  max-[860px]:text-[24px] max-[392px]:text-[16px]">✅ Collaborate & Help Each Other</h2>
               <p  className="text-[16px] italic text-justify  max-[392px]:text-[13px]">
               Encourage constructive feedback, help others debug their code, and share knowledge
                in a positive way. This platform is for learning, growth, and teamwork!
               </p>
            </div>
               {/* border */}
               <div className="border-b-1 border-gray-300"></div>
       </div>
      </section>

    
    </>
  );
};

export default RoomSelection;
