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
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="yes" name="answer1" id="answer_yes1" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes1">はい<br /><br /></label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="maybe" name="answer1" id="answer_maybe1" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe1">どちらでもない</label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="no" name="answer1" id="answer_no1" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no1">いいえ<br /><br /></label>
                                </li>
                            </ul>
                        </div>
                        <div className="text-lg font-bold mt-[20px]">何事もはっきりさせないと気が済まない</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="yes" name="answer2" id="answer_yes2" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes2">はい<br /><br /></label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="maybe" name="answer2" id="answer_maybe2" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe2">どちらでもない</label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="no" name="answer2" id="answer_no2" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no2">いいえ<br /><br /></label>
                                </li>
                            </ul>
                        </div>
                        <div className="text-lg font-bold mt-[20px]">他人の問題でも親身になって考える</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="yes" name="answer3" id="answer_yes3" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes3">はい<br /><br /></label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="maybe" name="answer3" id="answer_maybe3" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe3">どちらでもない</label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="no" name="answer3" id="answer_no3" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no3">いいえ<br /><br /></label>
                                </li>
                            </ul>
                        </div>
                        <div className="text-lg font-bold mt-[20px]">一人の人間と長い間付き合うことができる</div>
                        <div className="pt-[20px] flex justify-evenly">
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="yes" name="answer4" id="answer_yes4" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes4">はい<br /><br /></label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="maybe" name="answer4" id="answer_maybe4" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe4">どちらでもない</label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="no" name="answer4" id="answer_no4" />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no4">いいえ<br /><br /></label>
                                </li>
                            </ul>
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