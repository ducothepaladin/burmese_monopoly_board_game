import Board from "../components/board/Board"

export default function PlayGround() {
  return (
    <div className='w-full h-full p-5 grid grid-cols-12'>
            <div className='col-span-2'>hello</div>
            <div className='col-span-7'>
                <Board />
            </div>
            <div className='col-span-3'>hello</div>
    </div>
  )
}
