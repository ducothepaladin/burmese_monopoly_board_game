import Board from "../components/board/Board";
import Info from "../components/box_info/Info";

export default function PlayGround() {
  return (
    <div className='w-full h-full p-5 grid grid-cols-12'>
            <div className='col-span-1'>hello</div>
            <div className='col-span-8'>
                <Board />
            </div>
            <div className='col-span-3'>
              <Info />
            </div>
    </div>
  )
}
