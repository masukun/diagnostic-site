import React from 'react'
import { ChangePageButton, AnswerButton } from './index'

function Questions(props: any) {
    return (
        <div>
            {props.ques.map((value: any, index: number) => {
                { console.log(index) }
                return (
                    <>
                        <div className="text-lg font-bold mt-[20px]">{value.content}</div><div className="pt-[20px] flex justify-evenly" key={index}>
                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                <AnswerButton index={value.index}>はい</AnswerButton>
                                <AnswerButton index={value.index}>どちらでもない</AnswerButton>
                                <AnswerButton index={value.index}>いいえ</AnswerButton>
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