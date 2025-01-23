import React, { useContext, useEffect, useState } from "react";
import { boxDatas, playerStatueColor } from "../../assets/staticData";
import { CentralStore } from "../../contexts/CentralStoreProvider";
import { boardBoxInit } from "../../helper/boardBoxInit";
import { RenderBoxContent } from "./BoxComponent";
import { renderPosition } from "../../helper/renderPosition";
import { RenderPlayer, CurrentPlayerDisplay } from "../players/PlayerComponent";
import Dice from "./Dice";

function LogoAndTitle() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div style={{ transform: "rotate(325deg)" }}>
        <h1 className="text-center text-black text-6xl font-bold">
          မြို့ပတ် - ကစားနည်း
        </h1>
        <p className="text-center text-yellow-600 font-bold text-2xl">
          မိုနိုပိုလီ
        </p>
        <h1 className="text-center text-6xl font-mono text-red-600 font-bold">
          MONOPOLY
        </h1>
        <p className="text-center text-2xl font-bold text-black">
          PROPERTY TRADING BOARD GAME
        </p>
      </div>
    </div>
  );
}

export default function Board() {
  const { boxs, setBoxs, players, setCurrentPlayer } = useContext(CentralStore);

  useEffect(() => {
    setBoxs(boardBoxInit());
    setCurrentPlayer(players[0]);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative aspect-square w-[90vw] max-w-[80rem] bg-lime-300 border border-black">
        <CurrentPlayerDisplay />
        {players.map((pl, index) => {
          return (
            <div key={index}>
              <RenderPlayer box={boxs[pl.current_position]} color={playerStatueColor[pl.id]} />
            </div>
          );
        })}
        <Dice />
        <LogoAndTitle />
        {boxs.map((box, index) => {
          const positionApply = renderPosition(box);
          return (
            <div
              key={index}
              style={{ ...positionApply }}
              className="bg-black flex justify-center select-none items-center"
            >
              <div
                style={{
                  width: "calc(100% - 3px)",
                  height: "calc(100% - 3px)",
                }}
                className=" bg-lime-300 flex flex-col justify-center items-center"
              >
                <RenderBoxContent
                  group={boxDatas[index].group}
                  boxInfo={{
                    degree: box.rotateDegree,
                    boxData: boxDatas[index],
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
