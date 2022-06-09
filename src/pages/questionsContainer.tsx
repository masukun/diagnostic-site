import { off } from 'process';
import React, { useState, FC } from 'react'
import ReactPaginate from 'react-paginate';
import Questions from '../components/Questions';

// 0 はい, 1 どちらでもない, 2 いいえ
type SelectedAnswer = 0 | 1 | 2 

type Question = {
    [id: number]: {
        text: string;
        question_id: number;
    }
}
// ページ関係なく全ての質問を連想配列として保存
const questions: Question = {
    0: {
        text: "実行に移す前に、しっかり計画を立てる",
        question_id: 0,
    },
    1: {
        text: "何事もはっきりさせないと気が済まない",
        question_id: 1,
    },
    2: {
        text: "他人の問題でも親身になって考える",
        question_id: 2,
    },
    3: {
        text: "一人の人間と長い間付き合うことができる",
        question_id: 3,
    },
    4: {
        text: "見栄や評価よりも実利を大切にする",
        question_id: 4,
    },
    5: {
        text: "目標を達成するまで粘り強く行動できる",
        question_id: 5,
    },
    6: {
        text: "新しいアイデアを出すのに苦労しない",
        question_id: 6,
    },
    7: {
        text: "態度や行動で人からよく誤解されることがある",
        question_id: 7,
    },
    8: {
        text: "要領やコツを人から学び取ることが得意",
        question_id: 8,
    },
    9: {
        text: "自分が納得したことでないと行動しない",
        question_id: 9,
    },
    10: {
        text: "ルールは必ず守る",
        question_id: 10,
    },
    11: {
        text: "いつも同じような人と付き合うことが多い",
        question_id: 11,
    },
    12: {
        text: "あまり落ち込んだり、クヨクヨすることはない",
        question_id: 12,
    },
    13: {
        text: "急に飽きることがある",
        question_id: 13,
    },
    14: {
        text: "何か欲しいと思ったら諦めきれない",
        question_id: 14,
    },
    15: {
        text: "人を羨ましいと思うことが少ない",
        question_id: 15,
    },
    16: {
        text: "気分や気持ちを切り替えることが上手",
        question_id: 16,
    },
    17: {
        text: "控えめな方だ",
        question_id: 17,
    },
}
// question_id には `questions` で割り振られた id が入る
type AnswerContent = {
    [question_id: number]: {
        selected: SelectedAnswer;
    }
}
export default function App() {
    let [answers, setAnswers] = useState<AnswerContent>({})

    const handleSetAnswer = (questionId: number, selectedAnswer: SelectedAnswer) => {
        const answerContent = {
            [questionId]: {
                selected: selectedAnswer
            }
        }
        setAnswers(answerContent)
    }

    
    return (
        <div>
            <Questions 
            answers={answers}
            questions={questions} 
            handleSetAnswer={handleSetAnswer} />
        </div>
    )
}






























































// export default class App extends React.Component<{}, { questions:[],currentId: number, dataset: any, pointNumber: number, nextId: string, answers: Answer[] }> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             questions: [],
//             currentId: 0,
//             dataset: defaultDataset,
//             pointNumber: 1,
//             nextId: "",
//             answers: [
//                 {
//                     questionId: 0,
//                     selectedBtn: 1,
//                 },
//                 {
//                     questionId: 1,
//                     selectedBtn: 1,
//                 },
//                 {
//                     questionId: 2,
//                     selectedBtn: 1,
//                 },
//             ]
//         }
//         this.pointCalculate = this.pointCalculate.bind(this)
//     }

//     displayNextQuestion = (nextQuestionId: number) => {
//         this.setState({
//             questions: this.state.dataset[nextQuestionId].questions,
//             currentId: nextQuestionId,
//             nextId: this.state.dataset[nextQuestionId].nextId,
//             answers: this.state.dataset[nextQuestionId].answers
//         })
//         {
//             this.state.answers.map((value: any) => {
//                 console.log(value)
//             })
//         }
//     }

//     // selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
//     //     switch (true) {
//     //         case (nextQuestionId === "init"):
//     //             this.displayNextQuestion(nextQuestionId)
//     //             break;
//     //         default:
//     //             this.displayNextQuestion(nextQuestionId)
//     //             break;
//     //     }
//     // }

//     pointCalculate = (answerContent: string,) => {
//         let point = this.state.pointNumber;
//         if (answerContent === "はい") {
//             point += 1
//         } else if (answerContent === "いいえ") {
//             point -= 1
//         }
//         this.setState({ pointNumber: point })
//     }

//     componentDidMount() {
//         this.displayNextQuestion(this.state.currentId)
//     }

//     render() {
//         return (
//             <div>
//                 <main className="relative h-[100vh] w-[100%]">
//                     <div className="rounded-[4px] box-border h-[592px] max-w-[432px] py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
//                         <Questions ques={this.state.questions} nextId={this.state.nextId} display={this.displayNextQuestion} pointCalculate={this.pointCalculate} />
//                     </div>
//                 </main>
//             </div>
//         );
//     }
// }