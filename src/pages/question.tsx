import Link from 'next/link'
import React from 'react'

function question() {
    return (
        <div>
            <main className="block">
                <div className="relative h-[100vh] w-[100%]">
                    <div className="rounded-[4px] box-border h-[592px] max-w-[432px] 
          py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <div className="text-lg font-bold mt-[20px]">実行に移す前に、しっかり計画を立てる</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">はい<input className="hidden" type="radio" name="data[0]" value="5" /><span className="radio m-yes"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">どちらでもない<input className="hidden" type="radio" name="data[0]" value="3" /><span className="radio m-neither"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">いいえ<input className="hidden" type="radio" name="data[0]" value="1" /><span className="radio m-no"></span></label>
                        </div>
                        <div className="text-lg font-bold mt-[20px]">何事もはっきりさせないと気が済まない</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">はい<input className="hidden" type="radio" name="data[0]" value="5" /><span className="radio m-yes"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">どちらでもない<input className="hidden" type="radio" name="data[0]" value="3" /><span className="radio m-neither"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">いいえ<input className="hidden" type="radio" name="data[0]" value="1" /><span className="radio m-no"></span></label>
                        </div>
                        <div className="text-lg font-bold mt-[20px]">他人の問題でも親身になって考える</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">はい<input className="hidden" type="radio" name="data[0]" value="5" /><span className="radio m-yes"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">どちらでもない<input className="hidden" type="radio" name="data[0]" value="3" /><span className="radio m-neither"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">いいえ<input className="hidden" type="radio" name="data[0]" value="1" /><span className="radio m-no"></span></label>
                        </div>
                        <div className="text-lg font-bold mt-[20px]">一人の人間と長い間付き合うことができる</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">はい<input className="hidden" type="radio" name="data[0]" value="5" /><span className="radio m-yes"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">どちらでもない<input className="hidden" type="radio" name="data[0]" value="3" /><span className="radio m-neither"></span></label>
                            <label className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl hover:bg-red-200 peer-checked:bg-red-200">いいえ<input className="hidden" type="radio" name="data[0]" value="1" /><span className="radio m-no"></span></label>
                        </div>
                        <Link href="/question">
                            <button className="fixed text-center mt-[20px] ml-[140px]">
                                <a className="block shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">無料診断Start!!</a>
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default question