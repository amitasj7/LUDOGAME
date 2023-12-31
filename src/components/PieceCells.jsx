import React from "react";

const PieceCells = (prop) => {
  return (
    <div className="relative bg-teal-800 w-full top-0 bottom-0 left-0 right-0 min-h-full">
      <div key={prop.value} className="border  p-2 absolute top-14 left-14 ">
        {prop.value} A
      </div>
      <div
        key={`${prop.value}` + "B"}
        className="border p-2 absolute top-14 right-14"
      >
        {/* {`${prop.value}` + "B"} */}
        {prop.value} B
      </div>
      <div
        key={prop.value}
        className="border  p-2 absolute  bottom-14 right-14"
      >
        {prop.value} C
      </div>
      <div key={prop.value} className="border p-2 absolute bottom-14 left-14">
        {prop.value} D
      </div>
    </div>
  );
};
export default PieceCells;
