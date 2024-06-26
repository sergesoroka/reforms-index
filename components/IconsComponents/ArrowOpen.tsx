import React from "react";

function ArrowOpen({ open }) {
  return (
    <span
      className={
        open
          ? "rotate-90 transition-transform"
          : "rotate-0 transition-transform"
      }
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="15.5564"
          y="7.77817"
          width="2"
          height="11"
          transform="rotate(135 15.5564 7.77817)"
          fill="#8D8D8D"
        />
        <rect
          x="14.1422"
          y="6.36395"
          width="2"
          height="11"
          transform="rotate(45 14.1422 6.36395)"
          fill="#8D8D8D"
        />
      </svg>
    </span>
  );
}

export default ArrowOpen;
