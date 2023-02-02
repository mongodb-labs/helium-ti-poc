import React, { useState } from 'react';

import DropDownClosed from '../Assets/dropDownClosed';
import DropDownOpen from '../Assets/dropDownOpen';

export default function Accordion({
  title,
  body = <></>,
  defaultIsOpen = false,
}: {
  title: string;
  body?: JSX.Element;
  defaultIsOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={onToggle}
        className="uppercase text-left flex items-center justify-between bg-emerald-200 rounded-md py-3 px-4 w-4/12"
      >
        <span>{title}</span>
        {isOpen ? DropDownOpen : DropDownClosed} 
      </button>
      {isOpen && (
        <div className="py-4 px-4">
          {body}
        </div>
      )}
    </div>
  )
}