import React from "react";
import Experts from "components/Experts/Experts";

function HomeExperts({ baseURL }) {
  return (
    <div className="w-full">
      <Experts baseURL={baseURL} />
    </div>
  );
}

export default HomeExperts;
