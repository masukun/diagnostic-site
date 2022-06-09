import Link from 'next/link'
import React from 'react'
import Boy from '../../public/images/pose_genki01_boy.png'

function bigPage() {
    return (
        <div>
            <main className="block">
                <div className="relative h-[100vh] w-[100%]">
                    <div className="rounded-[4px] box-border h-[592px] max-w-[432px] 
          py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <h1 className="text-center text-xl ml-[65px]">あなたは以下の職業が向いています</h1>
                        <p></p>
                        <div>
                            <img src={Boy.src} className="ml-[70px]" width="320" height="200"></img>
                        </div>
                        <Link href="/">
                            <button className="fixed text-center mt-[20px] ml-[140px]">
                                <a className="block shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">トップページへ戻る</a>
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default bigPage