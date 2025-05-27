import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

const SendStory = () => {
  return (
    <div className="flex w-[21rem] h-[15rem] border-2 rounded-3xl">
      <form className="flex flex-col gap-5 p-5">
        <h1 className="text-xl font-medium">Seen  Story</h1>
        <div className="flex gap-3">
          <div className="flex items-center justify-center p-3 w-11 h-11 rounded-full border-2 border-slate-300">
            <FaUserAlt />
          </div>
          <textarea
            className="focus:outline-transparent w-[15rem] p-2 resize-none overflow-hidden border-gray-300"
            rows="4"
            placeholder="Apa yang sedang terjadi?"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <input type="file" id="fileUpload" className="hidden" />
          <label htmlFor="fileUpload" className="cursor-pointer">
            <CiImageOn className="text-3xl text-blue-500 hover:text-blue-700" />
          </label>

          <button className="p-1 w-14 text-sm rounded-xl text-white bg-blue-500">Kirim</button>
        </div>
      </form>
    </div>
  );
};

export default SendStory;
