import { FC } from "react";
import ArrowOpen from "components/IconsComponents/ArrowOpen";

type divider = {
  heading?: string;
  single?: boolean;
  openable?: boolean;
  open?: boolean;
  gray?: boolean;
  setOpen?: (open: boolean) => {};
};

const Divider: FC<divider> = ({
  heading,
  single,
  gray,
  openable,
  open,
  setOpen,
}) => {
  return (
    <>
      {gray && (
        <>
          <h2 className="text-lg select-none mt-12 ml-1  text-gray-600 mb-1">
            {heading}
          </h2>
          <div className="h-[1px] mt-1 mb-10 w-full bg-gray-200" />
        </>
      )}
      {single && <div className="h-1 mt-3 mb-10 w-full bg-red-600" />}
      {openable && (
        <>
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-start items-baseline gap-4 cursor-pointer"
          >
            <h2 className="text-base select-none mt-10 text-gray-600 mb-1 underline decoration-red-600 decoration-4 underline-offset-[14px]">
              {heading}
            </h2>
            {openable && <ArrowOpen open={open} />}
          </div>
          <hr className="mt-2 mb-10" />
        </>
      )}
      {!openable ||
        (!gray && (
          <>
            <div className="flex justify-start items-baseline gap-4 cursor-pointer">
              <h2 className="text-base select-none mt-10 mb-6 text-gray-600  underline decoration-red-600 decoration-4 underline-offset-[14px]">
                {heading}
              </h2>
            </div>
            {/* <hr className="mt-2 mb-10" /> */}
          </>
        ))}
    </>
  );
};

export default Divider;
