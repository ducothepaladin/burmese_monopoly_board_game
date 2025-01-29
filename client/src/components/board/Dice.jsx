import { useContext, useEffect, useRef, useState } from "react";
import { CentralStore } from "../../contexts/CentralStoreProvider";
import { diceRolling } from "../../game/dice";
import { playerStep } from "../../game/player";

export default function Dice() {
  const dice1 = useRef(null);
  const dice2 = useRef(null);
  const { currentPlayer, players, setCurrentPlayer, setPlayers, boxs } =
    useContext(CentralStore);
  const [order, setOrder] = useState(false);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [isYourTurn, setIsYourTurn] = useState(true);
  const [isRolling, setIsRolling] = useState(false);
  let animationFrame;

  useEffect(() => {
    if (order) {
      if (currentPlayer.role === 3) {
        setIsYourTurn(false);
        rollingDiceHandle(true);
      } else {
        setIsYourTurn(true);
      }
    }
  }, [currentPlayer, order]);

  function playerTurnUpdate() {
    const nextIndex = (playerIndex + 1) % players.length;
    setPlayerIndex(nextIndex);
    setCurrentPlayer(players[nextIndex]);
  }

  function rollingAnimation() {
    dice1.current.innerText = diceRolling();
    dice2.current.innerText = diceRolling();
    animationFrame = requestAnimationFrame(rollingAnimation);
  }

  function playerOrder(totalDiceNum) {
    const orderedPlayers = players
      .map((pl) => {
        return {
          ...pl,
          order: pl.role === 3 ? diceRolling() + diceRolling() : totalDiceNum,
        };
      })
      .sort((a, b) => b.order - a.order);
    setOrder(true);
    setPlayers(orderedPlayers);
    setCurrentPlayer(orderedPlayers[0]);
  }

  function playerMovement(totalDiceNum, index) {
    let step = 0;
    setIsYourTurn(false);
    const movementInterval = setInterval(() => {
      setPlayers((prev) => playerStep(prev, index, boxs.length));
      step++;
      if (step >= totalDiceNum) {
        clearInterval(movementInterval);
        playerTurnUpdate();
      }
    }, 500);
  }

  const rollingDiceHandle = (isAI = false) => {
    if (isRolling) return;
    setIsRolling(true);
    rollingAnimation();
    setTimeout(() => {
      cancelAnimationFrame(animationFrame);
      const totalDiceNum =
        Number(dice1.current.textContent) + Number(dice2.current.textContent);
      if (order || isAI) {
        playerMovement(totalDiceNum, playerIndex);
      } else {
        playerOrder(totalDiceNum);
      }
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div
      style={{
        top: "19%",
        right: "24%",
        width: "10%",
        height: "10%",
      }}
      className="absolute flex aspect-square flex-col justify-center items-center"
    >
      <div className="flex gap-x-1">
        <div
          ref={dice1}
          className="w-2/3 h-2/3 bg-black text-white border border-white p-3 text-center text-2xl flex justify-center items-center"
        >
          <span className="p-3">1</span>
        </div>
        <div
          ref={dice2}
          className="w-2/3 h-2/3 bg-black text-white border border-white p-3 text-center text-2xl flex justify-center items-center"
        >
          <span className="p-3">5</span>
        </div>
      </div>
      {isYourTurn && !isRolling && (
        <div
          onClick={() => rollingDiceHandle(false)}
          className="px-3 py-2 bg-red-700 w-full text-center text-white rounded-md select-none cursor-pointer"
        >
          Roll
        </div>
      )}
    </div>
  );
}
