import React from "react";

export default function FiltersIcon() {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 2L0 2" stroke="#E64E27" />
      <path d="M0 9L21 9" stroke="#E64E27" />
      <path d="M21 16L0 16" stroke="#E64E27" />
      <circle cx="16" cy="2" r="1.5" fill="white" stroke="#E64E27" />
      <circle
        cx="2"
        cy="2"
        r="1.5"
        transform="matrix(-1 0 0 1 7 7)"
        fill="white"
        stroke="#E64E27"
      />
      <circle cx="16" cy="16" r="1.5" fill="white" stroke="#E64E27" />
    </svg>
  );
}
