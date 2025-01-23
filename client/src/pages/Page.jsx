import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import "./Page.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CentralStore } from "../contexts/CentralStoreProvider";

export default function Page() {

  const navigate = useNavigate();
  const { players } = useContext(CentralStore);


  useEffect(() => {

    if(players.length <= 1) {
      navigate("/");
    }
  },[])



  return (
    <div>
        <header>
            <Navbar />
        </header>
        <Outlet />
    </div>
  )
}
