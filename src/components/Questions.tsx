import React from 'react'
import { ChangePageButton } from './index'

function Questions(props: any) {
    return (
        <div>
            {props.ques.map((value: any, index: number) => {
                { console.log(index) }
                return (
                    <>
                        <div className="text-lg font-bold mt-[20px]">{value.content}</div><div className="pt-[20px] flex justify-evenly" key={index}>
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="yes" name={`answer${index}`} id={`answer_yes${index}`} />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_yes${index}`}>はい<br /><br /></label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="maybe" name={`answer${index}`} id={`answer_maybe${index}`} />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_maybe${index}`}>どちらでもない</label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="no" name={`answer${index}`} id={`answer_no${index}`} />
                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_no${index}`}>いいえ<br /><br /></label>
                                </li>
                            </ul>
                        </div>
                        {(index === 5) && (
                            <div>
                                <ChangePageButton select={props.select} content={value.content} nextId={value.nextId} />
                            </div>
                        )}
                    </>
                )
            })}
        </div>
    )
}

export default Questions