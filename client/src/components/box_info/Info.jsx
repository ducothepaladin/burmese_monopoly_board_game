import React, { useContext, useEffect, useState } from 'react';
import { CentralStore } from '../../contexts/CentralStoreProvider';
import { boxDatas } from '../../assets/staticData';
import { RenderBoxInfo } from './BoxInfoComponent';

export default function Info() {

  const { players, currentBox, setCurrentBox } = useContext(CentralStore);

  useEffect(() => {
    if(players.length > 1) {
      const playerBoxInfo = players.filter(pl => pl.id === 0)[0].current_position;
      setCurrentBox(boxDatas[playerBoxInfo]);
    }
  },[players]);


  return (
    <div className='p-5'>
        <div className='w-full  p-8 bg-slate-800  text-white border  rounded-lg'>
            {currentBox && <RenderBoxInfo group={currentBox.group} info={currentBox} />}
        </div>
    </div>
  )
}
