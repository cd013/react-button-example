import React from "react";
import { RegisterForm } from "./RegisterForm";
import { RegisterButton } from "./RegisterButton";

export const Registration = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="w-96 p-6 m-auto lg:max-w-xl">
          <RegisterButton onClick={() => setShowModal(true)} />
        </div>
      </div>

      {showModal ? (
        <div onClick={() => setShowModal(false)}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                onClick={(e) => {
                  // do not close modal if anything inside modal content is clicked
                  e.stopPropagation();
                }}
              >
                <RegisterForm />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
};
