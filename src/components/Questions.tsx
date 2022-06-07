import React from 'react'
import { ChangePageButton, AnswerButton } from './index'

function Questions(props: any) {
    return (
        <div>
            {props.ques.map((value: any, index: number) => {
                return (
                    <>
                        <div className="text-lg font-bold mt-[20px]">{value}</div><div className="pt-[20px] flex justify-evenly" key={index}>
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <AnswerButton index={index} pointCalculate={props.pointCalculate} key={index.toString()} >はい</AnswerButton>
                                <AnswerButton index={index} pointCalculate={props.pointCalculate} key={index.toString()} >どちらでもない</AnswerButton>
                                <AnswerButton index={index} pointCalculate={props.pointCalculate} key={index.toString()} >いいえ</AnswerButton>
                            </ul>
                        </div>
                    </>
                )
            })}
            <div>
                <ChangePageButton display={props.display} nextId={props.nextId} />
            </div>
        </div>
    )
}

export default Questions