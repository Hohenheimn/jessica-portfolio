import React, { useRef, useEffect } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

type ShowImage = {
  setView: Function;
  isView: string | null | undefined;
};

export default function ShowImage({ setView, isView }: ShowImage) {
  const modal = useRef<any>();

  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!modal?.current?.contains(e.target)) {
        setView(null);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  });

  return (
    <div className=" fixed top-0 left-0 h-screen overflow-auto w-full bg-[#00000040] z-[99999] flex justify-center items-center origin-top 480px:p-5">
      <aside ref={modal} className=" relative bg-[#f0f0f0] w-10/12 h-[90vh]">
        {isView === undefined || isView === null || isView === "" ? (
          <div className="flex w-full h-full items-center justify-center">
            <h2>No Image Registered</h2>
          </div>
        ) : (
          <div className=" relative w-full h-full flex justify-center items-center">
            <button
              className=" absolute top-4 right-4 z-20 cursor-pointer bg-primary text-white px-5 py-2 rounded-md"
              onClick={() => setView(null)}
            >
              Close
            </button>

            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
            >
              <TransformComponent>
                <img src={`${isView}`} alt="test" />
              </TransformComponent>
            </TransformWrapper>
          </div>
        )}
      </aside>
    </div>
  );
}
