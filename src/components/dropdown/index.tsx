import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import './styles.sass'

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <p className="title">
        {title}
        </p>
        <MdKeyboardArrowDown className={`dropdown-arrow ${isOpen ? "open" : ""}`} fontSize={24}/>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="dropdown-content-wrapper"
      >
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;

