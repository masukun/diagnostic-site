import React, { useState } from 'react'
import { Questions } from '../components'
import defaultDataset from '../dataset'

export default class App extends React.Component<{}, { questions: string[], currentId: string, dataset: any ,pointNumber:number, nextId:string,answers:string[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: [],
            currentId: "init",
            dataset: defaultDataset,
            pointNumber: 1,
            nextId: "",
            answers: [],
            
        }
        this.pointCalculate = this.pointCalculate.bind(this)
    }

    displayNextQuestion = (nextQuestionId: string) => {
        this.setState({
            questions: this.state.dataset[nextQuestionId].questions,
            currentId: nextQuestionId,
            nextId: this.state.dataset[nextQuestionId].nextId,
            answers: this.state.dataset[nextQuestionId].answers
        })
        {this.state.answers.map((value:any) => {
            console.log(value)
        })}
    }

    // selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
    //     switch (true) {
    //         case (nextQuestionId === "init"):
    //             this.displayNextQuestion(nextQuestionId)
    //             break;
    //         default:
    //             this.displayNextQuestion(nextQuestionId)
    //             break;
    //     }
    // }

    pointCalculate = (answerContent:string,) => {
        let point = this.state.pointNumber;
        if(answerContent === "はい") {
            point += 1
        } else if(answerContent === "いいえ"){
            point -= 1
        }
        this.setState({pointNumber:point})
    }

    componentDidMount() {
        this.displayNextQuestion(this.state.currentId)
    }

    render() {
        return (
            <div>
                <main className="relative h-[100vh] w-[100%]">
                    <div className="rounded-[4px] box-border h-[592px] max-w-[432px] py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <Questions ques={this.state.questions} nextId={this.state.nextId} display={this.displayNextQuestion} pointCalculate={this.pointCalculate} />
                    </div>
                </main>
            </div>
        );
    }
}