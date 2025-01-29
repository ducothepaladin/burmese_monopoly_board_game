import { createContext, useState } from "react";
import { currencyData } from "../assets/staticData";

export const CentralStore = createContext();

export default function CentralStoreProvider({children}) {


    const [players, setPlayers] = useState([]);
    const [ boxs, setBoxs ] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [currentBox, setCurrentBox] = useState({});
    const [bank, setBank] = useState(currencyData);
    



  return (
    <CentralStore.Provider value={{
        players,setPlayers,
        boxs, setBoxs,
        currentPlayer, setCurrentPlayer,
        currentBox, setCurrentBox,
        bank, setBank,
    }}>
        {children}
    </CentralStore.Provider>
  )
}
