import React from 'react'

function AnswerButton(props: any) {
    return (
        <div>
            {(props.children === "はい") && (
                <li className="relative">
                    <input className="sr-only peer" type="radio" value="yes" name={`answer${props.index}`} id={`answer_yes${props.index}`} />
                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_yes${props.index}`}>{props.children}<br /><br /></label>
                </li>
            )}
            {(props.children === "どちらでもない") && (
                <li className="relative">
                    <input className="sr-only peer" type="radio" value="yes" name={`answer${props.index}`} id={`answer_maybe${props.index}`} />
                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_maybe${props.index}`}>{props.children}</label>
                </li>
            )}
            {(props.children === "いいえ") && (
                <li className="relative">
                    <input className="sr-only peer" type="radio" value="yes" name={`answer${props.index}`} id={`answer_no${props.index}`} />
                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_no${props.index}`}>{props.children}<br /><br /></label>
                </li>
            )}
        </div>
    )
}

export default AnswerButton