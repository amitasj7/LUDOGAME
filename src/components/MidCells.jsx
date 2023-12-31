import React, { useState } from "react";

const MidCells = (prop) => {
  /*   
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ]);
 */
  function rowElementsCreate(rowIndex, numCols) {
    const rowElements = Array.from({ length: numCols }, (_, index) => {
      const colIndex = index;
      const cellValue = rowIndex * numCols + colIndex + 1;
      return (
        <div key={cellValue} className="w-1/3 h-[39px] border  ">
          {cellValue}
        </div>
      );
    });

    return (
      <div className="bg-red-600 w-full flex flex-row justify-between">
        {rowElements}
      </div>
    );
  }
  function CellsAB() {
    const numRows = 6;
    const numCols = 3;

    const matrixElements = Array.from({ length: numRows }, (_, index) => {
      const rowIndex = index;
      //   const colIndex = index % numCols;
      //   const cellValue = rowIndex * numCols  + 1;

      return (
        <div key={index} className="">
          {rowElementsCreate(rowIndex, numCols)}
        </div>
      );
    });

    return (
      <div className="  bg-teal-300 flex flex-col w-full">{matrixElements}</div>
    );
  }

  function CellsCD() {
    const numRows = 3;
    const numCols = 6;
    const matrixElements = [];

    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      const rowElements = [];

      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        // Calculate a unique value for each cell based on row and column indices
        const cellValue = rowIndex * numCols + colIndex + 1;

        rowElements.push(
          <div key={colIndex} className="border w-1/6 h-[41px] ">
            {cellValue}
          </div>
        );
      }

      matrixElements.push(
        <div key={rowIndex} className=" flex w-full">
          {rowElements}
        </div>
      );
    }

    return <div className="w-full">{matrixElements}</div>;
  }

  return (
    <div className="w-full">
      {prop.value == "A" || prop.value == "B"
        ? //     <div key={prop.value}>
          //       {/* {prop.value} */}
          //       {/* {prop.matrix[0][2]} */}
          //       {prop.value}
          //       {matrix.map((row, rowIndex) => (
          //         <div key={rowIndex} className="flex">
          //           {row.map((cell, colIndex) => (
          //             <div key={colIndex} className="border m-2 p-2">
          //               {cell}
          //             </div>
          //           ))}
          //         </div>
          //       ))}
          //     </div>

          CellsAB()
        : CellsCD()}
    </div>
  );
};

export default MidCells;
