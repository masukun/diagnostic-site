import React from 'react'

function ChangePageButton(props: any) {
  return (
    <div>
      <button className="fixed text-center mt-[20px] ml-[140px]" onClick={() => props.select(props.content,props.nextId)}>
        <a className="block shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">無料診断Start!!</a>
      </button>
    </div>
  )
}

export default ChangePageButton