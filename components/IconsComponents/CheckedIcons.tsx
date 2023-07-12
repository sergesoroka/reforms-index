import React from "react";

function CheckedIcons({ checked }) {
  //   const renderIcon = () => {
  //     if(checked) {
  //       return (
  //         <svg
  //       width="14"
  //       height="14"
  //       viewBox="0 0 14 14"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <circle cx="7" cy="7" r="6.5" stroke="#E64E27" />
  //       <circle cx="7" cy="7" r="4" fill="#E64E27" />
  //     </svg>
  //       ) } else {
  //         return (

  //         )
  //       }
  //     }
  //   }

  return (
    <div>
      {checked ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="6.5" stroke="#E64E27" />
          <circle cx="7" cy="7" r="4" fill="#E64E27" />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="6.5" stroke="#636363" />
        </svg>
      )}
    </div>
  );
}

export default CheckedIcons;
