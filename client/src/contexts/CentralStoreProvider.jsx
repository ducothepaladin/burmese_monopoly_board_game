import { createContext, useState } from "react"

export const CentralStore = createContext();

export default function CentralStoreProvider({children}) {


    const [players, setPlayers] = useState([]);
    const [ boxs, setBoxs ] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(null);



  return (
    <CentralStore.Provider value={{
        players,setPlayers,
        boxs, setBoxs,
        currentPlayer, setCurrentPlayer,
    }}>
        {children}
    </CentralStore.Provider>
  )
}
