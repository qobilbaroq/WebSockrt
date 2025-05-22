import { CiImageOn } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

const Chat = () => {
  return (
    <div className="flex w-[21rem] h-[30rem] border-2 rounded-3xl">
      <form className="flex flex-col justify-between gap-5 p-5">
        <div className="flex gap-3">
          <div className="flex items-center justify-center p-3 w-11 h-11 rounded-full border-2 border-slate-300">
            <FaUserAlt />
          </div>
          <h1 className="text-xl font-medium">joshua</h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className=" p-2 rounded-lg bg-blue-100">Lorem ipsum dolor sit amet, consectetur </p>
          <p className=" p-2 rounded-lg bg-blue-100">Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div className="flex gap-3">  
          <input type="text" className="p-1 w-[14rem] border rounded-lg"/>
          <button className="p-1 w-14 text-sm rounded-xl text-white bg-blue-500">
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
