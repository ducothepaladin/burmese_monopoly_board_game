import { useEffect, useState } from "react";
import { renderColor } from "../../helper/renderColor";

export const CityBoxInfo = ({currentBox}) => {

    const [color, setColor] = useState("");

    useEffect(() => {
        if(currentBox) {
            setColor(renderColor(currentBox.group));
        }
    },[currentBox, color])


    return (<>
    <div className='float-end px-4 py-2 bg-green-500 rounded-full'><span className='font-bold'>ပိုင်ရှင်</span>- Me</div>
        <h1 className='text-3xl font-bold mb-8'>{currentBox.name}</h1>
        <div style={{backgroundColor: color? color: "red"}} className="py-[2px] rounded-full mb-3"></div>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name} - {currentBox.info['burmese']}</p>
        <p className='mb-3'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-5 font-bold'>ပိုင်ဆိုင်မှုများ </h2>
        <p className='mb-3'><span className='font-bold'>အိမ်</span> - 0</p>
        <p className='mb-3'><span className='font-bold'>ဟိုတယ်</span> - 0</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}

export const EnergyBoxInfo = ({currentBox}) => {


    return (<>
    <div className='float-end px-4 py-2 bg-green-500 rounded-full'><span className='font-bold'>ပိုင်ရှင်</span>- Me</div>
        <h1 className='text-3xl font-bold mb-8'>{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name} - {currentBox.info['burmese']}</p>
        <p className='mb-3'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}

export const TransportationBoxInfo = ({currentBox}) => {


    return (<>
    <div className='float-end px-4 py-2 bg-green-500 rounded-full'><span className='font-bold'>ပိုင်ရှင်</span>- Me</div>
        <h1 className='text-3xl font-bold mb-8'>{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name} - {currentBox.info['burmese']}</p>
        <p className='mb-3'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}


export const StartBoxInfo = ({currentBox}) => {

    return(<>
        <h1 className="text-3xl font-bold mb-8">{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name} - {currentBox.info['burmese']}</p>
        <p className='mb-3'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}


export const JailBoxInfo = ({currentBox}) => {

    return(<>
        <h1 className="text-3xl font-bold mb-8">{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name}</p>
        <p className='mb-5'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}

export const ChanceBoxInfo = ({currentBox}) => {

    return(<>
        <h1 className="text-3xl font-bold mb-8">{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name}</p>
        <p className='mb-5'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}

export const ChestBoxInfo = ({currentBox}) => {

    return(<>
        <h1 className="text-3xl font-bold mb-8">{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name}</p>
        <p className='mb-5'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}

export const InComeTexBoxInfo = ({currentBox}) => {

    return(<>
        <h1 className="text-3xl font-bold mb-8">{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name}</p>
        <p className='mb-5'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p>{currentBox.decription}</p>
    </>)
}

export const GusetHouseBoxInfo = ({currentBox}) => {

    return(<>
        <h1 className="text-3xl font-bold mb-8">{currentBox.name}</h1>
        <p className='text-xl font-bold mb-5'>ID - <span className='ms-3'>#{currentBox.id + 1}</span></p>
        <p className='mb-3'><span className='font-bold'>Info(Burmese)</span>: {currentBox.name}</p>
        <p className='mb-5'><span className='font-bold'>Info(English)</span>: {currentBox.info['eng']}</p>
        <h2 className='text-2xl mb-3 font-bold'>အကြောင်းအရာ</h2>
        <p className="mb-6">{currentBox.decription}</p>
        <div className="flex justify-between">
            <button className="px-8 py-3 bg-yellow-600 rounded-full">မနားပါ။</button>
            <button className="px-8 py-3 bg-green-600 rounded-full">နားမည်။</button>
        </div>
    </>)
}