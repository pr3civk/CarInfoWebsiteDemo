import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    if (modalRoot && elRef.current) {
      modalRoot.appendChild(elRef.current);
    }

    return () => {
      if (modalRoot && elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(
    <div className="bg-[#1e1b4baa] fixed left-0 right-0 bottom-0 top-0 z-10 flex">
      <div className="fixed top-1/3 left-2/4 translate-x-[-50%] rounded p-9 w-fit text-center dark:text-sky-700 text-white text-nowrap bg-indigo-950 dark:bg-slate-100">
        {children}
      </div>
    </div>,
    elRef.current,
  );
};

export default Modal;
