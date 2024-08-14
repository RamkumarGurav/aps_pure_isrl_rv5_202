"use client";

import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ModalBare from "./ModalBare";

export default function MCBareWithProps({
  triggerBtnClasses,
  triggerBtnText,
  prop1,
  prop2,
}: {
  triggerBtnClasses: string;
  triggerBtnText: string;
  prop1?: any;
  prop2?: any;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className=" w-full flex items-center justify-center ">
      <button
        onClick={() => (modalOpen ? close() : open())}
        className={`${triggerBtnClasses}`}
      >
        {triggerBtnText}
      </button>
      <ModalBare
        closeIt={close}
        modalOpen={modalOpen}
        backdropClasses={`fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/80 flex justify-center items-center`}
        modalClasses={`z-[999999] relative bg-white w-[clamp(50%,700px,90%)] sm:w-auto h-[min(50%,300px)] sm:h-auto m-auto  rounded-md overflow-hidden flex flex-col items-center bg-white`}
      >
        {/* ===========>> CORNER CANCEL BUTTONS <<=========== */}
        {/* <MdOutlineCancelPresentation
          size={24}
          onClick={close}
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500"
        /> */}

        <IoMdClose
          size={30}
          onClick={close}
          className="absolute top-2 right-2 cursor-pointer p-1 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900"
        />

        {/* <IoMdCloseCircle
          size={24}
          onClick={close}
          className="absolute top-2 right-2 cursor-pointer  text-gray-500 hover:text-gray-900"
        /> */}

        {/* ==================>END<================== */}

        {/* ===========> ModalContents Container <=========== */}
        <div
          className={`px-4 py-10 flex flex-col justify-center items-center w-[300px] h-[200px] `}
        >
          <h1 className="text-2xl fond-semibold mb-3">Are you Sure?</h1>
          <div className={`flex justify-center items-center gap-4 mx-auto`}>
            <button className={`btn btn-primary`}>Yes</button>
            <button className={`btn btn-secondary`} onClick={() => close()}>
              No
            </button>
          </div>
        </div>
        {/* ==================>END<================== */}
      </ModalBare>
    </div>
  );
}
