import React from "react";

const initiators = [
  { id: 1, name: "Усі ініціатори" },
  { id: 2, name: "Презідент" },
  { id: 3, name: "Міндовкілля" },
];

function Initiators({ setInitiatorName }) {
  return (
    <>
      {initiators.map((item) => (
        <button
          key={item.id}
          className="border border-solid rounded-full mx-2 mb-2  px-3 py-1 text-sm"
          onClick={() => setInitiatorName(item.name)}
        >
          {item.name}
        </button>
      ))}
    </>
  );
}

export default Initiators;
