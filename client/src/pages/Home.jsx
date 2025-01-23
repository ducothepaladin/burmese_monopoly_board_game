import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {CentralStore} from "../contexts/CentralStoreProvider.jsx";


export default function Home() {

  const setUpBoxRef = useRef(null);
  const selectPlayerRef = useRef([]);
  const [totalPlayer, setTotalPlayer] = useState(2);
  const [playerID, setPlayerID] = useState(0);
  const { players, setPlayers } = useContext(CentralStore);
  const playableQuantity = ["နှစ်ဦး", "သုံးဦး", "လေးဦး", "ငါးဦး"];


  useEffect(() => {

    setPlayers([{
      id: playerID,
      name: "Me",
      current_position: 0,
      role: 0,
    }]);

    selectPlayerRef.current[0].classList.add("bg-gray-400","text-gray-900");

  },[]);

  const playerQtSetUp = (index) => {
    const qt = index + 2;
    if(players.length <= qt) {
      setTotalPlayer(qt);
      selectPlayerRef.current.forEach((el,i) => {
        if(i === index) {
          el.classList.add("bg-gray-400","text-gray-900");
        } else {
          el.classList.remove("bg-gray-400","text-gray-900");
        }
      })
    }
  }


  const addPlayer = (id) => {
    setPlayers([...players,{
      id: playerID + 1,
      name: "Computer",
      current_position: 0,
      role: 3,
    }]);
    setPlayerID(prev => prev + 1);
    
  }


  const removePlayer = (index) => {
    setPlayers((prev) => {
      const newValue = prev.filter((_,i) => i != index);
      return newValue;
    });
  }



  const openPlayerSetUpBox = () => {
    setUpBoxRef.current.classList.toggle("hidden");
  }
    


  return (
    <div className='h-lvh flex justify-center relative items-end home-bg lg:bg-cover bg-contain'>
      <div ref={setUpBoxRef} className="absolute w-full h-full hidden">
      <div className="absolute w-full h-full bg-black opacity-55"></div>
      <div className="absolute left-1/2 top-1/3 w-[30rem] h-auto bg-gray-900 border border-white rounded-lg p-5 translate-x-[-15rem] text-white">
        <span onClick={openPlayerSetUpBox} className="float-right text-lg cursor-pointer"><i className="fa-solid fa-xmark"></i></span>
        <h1 className="text-center w-full text-3xl mb-8">ကစားမည့်ဦးရေရွေးချယ်ပါ</h1>
        <div className="flex mb-5 gap-x-1 justify-center ">
          {playableQuantity.map((qt, i) => {

            return(
              <div ref={(el) => selectPlayerRef.current[i] = el} key={i} onClick={() => playerQtSetUp(i)} className="w-[10rem] text-center select-none cursor-pointer border border-white rounded-md p-3">{qt}</div>
            )
          })}
        </div>
        <h1 className="text-lg">ကစားသမားများ</h1>
        <ul className="p-3 border mb-8 border-white rounded-md">
          {players.map((pl, index) => {

            return (
              <li key={index} className="p-2"><span>{pl.name}</span>
                {index > 0 && <span onClick={() => removePlayer(index)} className="float-right cursor-pointer"><i className="fa-solid fa-xmark"></i></span>}
              </li>
            )
          })}
          <hr className="mb-2" />
          {players.length < totalPlayer && <li onClick={addPlayer} className="p-2 py-1 bg-gray-400 active:bg-gray-900 w-[8rem] text-center rounded-full text-gray-900 cursor-pointer select-none"><span className="me-3">Add Player</span><span><i className="fa-solid fa-circle-plus"></i></span></li>}
        </ul>
        <div className="w-full flex justify-center cursor-pointer ">
          {players.length === totalPlayer? <Link to="/playground" className="w-full rounded-lg hover:bg-green-400 bg-green-700  px-4 py-3 text-center">စတင်မည်</Link>: <span className="px-4 py-3 rounded-lg select-none text-center text-black bg-yellow-300 w-full">
            ကစားသမားမစုံသေးပါ</span>}
        </div>
      </div>
      </div>
      <div className=" flex mb-16 gap-x-10">
          <div  style={{lineHeight: "6rem"}} onClick={openPlayerSetUpBox} className="bg-blue-400 select-none cursor-pointer hover:bg-blue-300 border border-blue-950 lg:active:scale-110 px-4 rounded-lg py-3 text-3xl font-mono w-[24rem] h-[8rem] text-center">ကစားမည်</div>
      </div>
    </div>
  )
}
