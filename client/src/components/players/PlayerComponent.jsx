import { renderPosition } from "../../helper/renderPosition";
import { CentralStore } from "../../contexts/CentralStoreProvider";
import { useContext } from "react";
import { boxDatas, playerStatueColor } from "../../assets/staticData";

export function RenderPlayer({box, color}) {
    let positionObj = null;
    if(box) {
       positionObj = renderPosition(box)
    }


  return (
    <div className="z-20 flex justify-center transition-all duration-500 items-center" style={{...positionObj}}>
        <div style={{backgroundColor: `${color}`}} className="rounded-full border border-black w-10 h-10">
        </div>
    </div>
  )
}



export function CurrentPlayerDisplay() {

  const {currentPlayer, players} = useContext(CentralStore);


  return (<div className="absolute left-[10rem] text-sm z-40 bg-black p-5 rounded-lg text-white top-[10rem]">
    <p className="px-4 py-3 mb-2 text-sm bg-blue-300 rounded-full text-black">{currentPlayer && currentPlayer.name} ၏အလှည့်</p>
    <h1>ကစားသမားများ၏တည်နေရာ</h1>
    <ul>{players.map((pl, i) => {
      return (<li key={i} className="p-3 mb-2 text-white">
        <span style={{backgroundColor: `${playerStatueColor[pl.id]}`}} className="p-1 border border-white rounded-full me-3"></span><span>{boxDatas[pl.current_position].name}</span>
      </li>)
    })}</ul>
  </div>)

}
