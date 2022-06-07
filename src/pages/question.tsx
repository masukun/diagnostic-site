import Link from 'next/link'
import { join } from 'path';
import React, { useState } from 'react'
import { Questions } from '../components'
import defaultDataset from '../dataset'

interface Answer {
    content: string,
}

export default class App extends React.Component<{}, { questions: Answer[], currentId: string, dataset: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: [],
            currentId: "init",
            dataset: defaultDataset,
        }
        this.selectAnswer = this.selectAnswer.bind(this)
    }

    displayNextQuestion = (nextQuestionId: string) => {
        this.setState({
            questions: this.state.dataset[nextQuestionId].questions,
            currentId: nextQuestionId,
        })
    }

    selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
        switch (true) {
            case (nextQuestionId === "init"):
                this.displayNextQuestion(nextQuestionId)
                break;
            default:
                const questions: Answer[] = this.state.questions;
                questions.push({
                    content: selectedAnswer
                })
                this.setState({ questions: questions })
                this.displayNextQuestion(nextQuestionId)
                break;
        }
    }

    componentDidMount() {
        const initAnswer = ""
        this.selectAnswer(initAnswer, this.state.currentId)
    }

    render() {
        return (
            <div>
                <main className="relative h-[100vh] w-[100%]">
                    <div className="rounded-[4px] box-border h-[592px] max-w-[432px] py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <Questions ques={this.state.questions} select={this.selectAnswer}/>
                    </div>
                </main>
            </div>
        );
    }
}