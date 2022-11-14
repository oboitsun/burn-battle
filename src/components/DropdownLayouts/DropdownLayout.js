import { useRef } from "react";
import Btn from "../Btn/Btn";
import useOutsideClick from "../helpers/hooks";
export default function DropdownLayout({ children, show, setShowDropdown }) {
  const ref = useRef();
  const closeDropDown = () => {
    setShowDropdown(false);
  };
  useOutsideClick(ref, () => closeDropDown());

  return (
    <div
      ref={ref}
      className={`transition-all  absolute min-w-max  z-20  rounded-md top-[calc(100%+4px)] right-0 ${
        show ? "opacity-100 " : "opacity-0 pointer-events-none"
      }`}
    >
      <Btn color={""}>
        <div className="flex flex-col">{children}</div>
      </Btn>
    </div>
  );
}
