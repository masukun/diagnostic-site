import React from 'react'

const RadioButton = (props: any) => {
    return (
        <>
            {(props.label === "はい") && (
                <>
                    <input  type="radio" checked={props.value} name={`answer${props.question_id}`} id={`answer_yes${props.question_id}`} onClick={() => { props.onClick(props.question_id, 0) }} onChange={props.onChange}  />
                    <label  htmlFor={`answer_yes${props.question_id}`}>はい<br /><br /></label>
                </>
            )}
            {(props.label === "どちらでもない") && (
                <>
                    <input  type="radio" checked={props.value} name={`answer${props.question_id}`} id={`answer_maybe${props.question_id}`} onClick={() => { props.onClick(props.question_id, 1) }} onChange={props.onChange}  />
                    <label  htmlFor={`answer_maybe${props.question_id}`}>はい</label>
                </>
            )}
            {(props.label === "いいえ") && (
                <>
                    <input  type="radio" checked={props.value} name={`answer${props.question_id}`} id={`answer_no${props.question_id}`} onClick={() => { props.onClick(props.question_id, 2) }} onChange={props.onChange}  />
                    <label  htmlFor={`answer_no${props.question_id}`}>いいえ<br /><br /></label>
                </>
            )}
        </>
    );
};

export default RadioButton