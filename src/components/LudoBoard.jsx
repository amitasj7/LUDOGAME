import React from "react";
import MidCells from "./MidCells";
import PieceCells from "./PieceCells";
import Piece from "./Piece";
import ludoImage from "../assets/ludo_board.jpg";

const LudoBoard = () => {
  return (
    <div className="bg-orange-600 flex flex-col justify-center items-center w-full min-h-screen">
      Hello LudoBoard
      <div className="p-3 bg-teal-400 w-7/12 m-5 flex flex-col relative">
        <img
          src={ludoImage}
          alt="Ludo _board Pic"
          className="w-full h-full object-cover absolute z-[5] m-auto top-0 bottom-0 left-0 right-0"
        />
        <div className="z-[10]">
          <div className="p-2 bg-red-200 w-full min-h-[40%] flex flex-row">
            <div className="bg-green-500 w-2/5 relative">
              <PieceCells value={1} />
              <Piece value={1} />
            </div>
            <div className="bg-purple-500 w-1/5">
              <MidCells value="B" />
            </div>
            <div className="bg-green-500 w-2/5">
              <PieceCells value={2} />
            </div>
          </div>
          <div className=" bg-orange-700 w-full min-h-[20%] flex flex-row">
            <div className="bg-green-500 w-2/5">
              <MidCells value="C" />
            </div>
            <div className="bg-teal-500 mx-2 w-1/5"></div>
            <div className="bg-green-500 w-2/5">
              <MidCells value="D" />
            </div>
          </div>
          <div className="p-2 bg-red-200 w-full min-h-[40%] flex">
            <div className="bg-green-500 w-2/5">
              <PieceCells value={3} />
            </div>
            <div className="bg-purple-500 w-1/5">
              <MidCells value="A" />
            </div>
            <div className="bg-green-500 w-2/5">
              <PieceCells value={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LudoBoard;
