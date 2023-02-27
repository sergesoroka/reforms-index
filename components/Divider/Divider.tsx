import { FC } from "react";

type divider = { mode: string };

const Divider: FC<divider> = ({ mode }) => {
  const mainDivider = {
    height: "4px",
    backgroundColor: "#E64E27",
    borderWidth: 0,
    margin: "1rem 0",
  };
  const commonDivider = {
    height: "1px",
    backgroundColor: "#E5E5E5",
    borderWidth: 0,
    margin: "1rem 0",
  };
  return <hr style={mode === 'first' ? mainDivider : commonDivider}></hr>;
};

export default Divider;
