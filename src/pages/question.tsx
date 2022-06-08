import React, { useState, FC } from 'react'
import ReactPaginate from 'react-paginate';
import RadioButton from '../components/RadioButton';

// 0 はい, 1 どちらでもない, 2 いいえ
type SelectedAnswer = 0 | 1 | 2 | null

type Question = {
    [id: number]: {
        text: string;
    }
}
// ページ関係なく全ての質問を連想配列として保存
const questions: Question = {
    0: {
        text: "実行に移す前に、しっかり計画を立てる",
    },
    1: {
        text: "何事もはっきりさせないと気が済まない",
    },
    2: {
        text: "他人の問題でも親身になって考える",
    },
    3: {
        text: "一人の人間と長い間付き合うことができる",
    },
    4: {
        text: "見栄や評価よりも実利を大切にする",
    },
    5: {
        text: "目標を達成するまで粘り強く行動できる",
    },
    6: {
        text: "新しいアイデアを出すのに苦労しない",
    },
    7: {
        text: "態度や行動で人からよく誤解されることがある",
    },
    8: {
        text: "要領やコツを人から学び取ることが得意",
    },
    9: {
        text: "自分が納得したことでないと行動しない",
    },
    10: {
        text: "ルールは必ず守る",
    },
    11: {
        text: "いつも同じような人と付き合うことが多い",
    },
    12: {
        text: "あまり落ち込んだり、クヨクヨすることはない",
    },
    13: {
        text: "急に飽きることがある",
    },
    14: {
        text: "何か欲しいと思ったら諦めきれない",
    },
    15: {
        text: "人を羨ましいと思うことが少ない",
    },
    16: {
        text: "気分や気持ちを切り替えることが上手",
    },
    17: {
        text: "控えめな方だ",
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
    let []
    //paginationの実装用
    const [offset, setOffset] = useState(0); // 何番目のアイテムから表示するか
    const perPage: number = 6; // 1ページあたりに表示したいアイテムの数

    const handleSetAnswer = (questionId: number, selectedAnswer: SelectedAnswer) => {
        const answerContent = {
            [questionId]: {
                selected: selectedAnswer
            }
        }
        setAnswers(answerContent)
    }

    const handlePageChange = (data: any) => {
        let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
        setOffset(page_number * perPage); // offsetを変更し、表示開始するアイテムの番号を変更
    }


    // const handleAnswerReset = () => {
    //     setValue(false);
    // }
    return (
        <div>
            <div>
                <main className="relative h-[100vh] w-[100%]">
                    <div className="rounded-[4px] box-border h-[592px] max-w-[432px] py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        {/* ここで `questions` をループさせて問題文を表示する、ただしページネーションの実装を行う必要がある。 */}
                        {
                            Object.values(questions)
                                .slice(offset, offset + perPage).map((questionContent: any, question_id: number) => (
                                    <>
                                        <div className="text-lg font-bold mt-[20px]">{questionContent.text}</div><div className="pt-[20px] flex justify-evenly">
                                            {/* // 答え選択用の radio ボタン, こいつらが選択された時のイベントで `setAnswers()` が適切に実行できれば良い */}
                                            <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                                                <li className="relative" key={`yes${question_id.toString()}`}>
                                                    <input className="sr-only peer" type="radio" name={`answer${question_id}`} id={`answer_yes${question_id}`} checked={answers[question_id].selected === 0} onChange={() => {}} onClick={() => { handleSetAnswer(question_id, 0) }} />
                                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_yes${question_id}`}>はい<br /><br /></label>
                                                    {/* <RadioButton
                                                        label="はい"
                                                        value={questionContent.selectAnswer}
                                                        onClick={() => { handleSetAnswer }}
                                                        question_id={question_id}
                                                        onChange={handleValue(question_id,value)} /> */}
                                                </li>
                                                <li className="relative" key={`maybe${question_id.toString()}`}>
                                                    <input className="sr-only peer" type="radio" name={`answer${question_id}`} id={`answer_maybe${question_id}`} checked={answers[question_id].selected === 1} onClick={() => { handleSetAnswer(question_id, 1) }} />
                                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_maybe${question_id}`}>どちらでもない</label>
                                                    {/* <RadioButton
                                                        label="どちらでもない"
                                                        value={questionContent.checked}
                                                        onClick={() => { handleSetAnswer }}
                                                        question_id={question_id}
                                                        onChange={handleValue(question_id,value)} /> */}
                                                </li>
                                                <li className="relative" key={`no${question_id.toString()}`}>
                                                    <input className="sr-only peer" type="radio" name={`answer${question_id}`} id={`answer_no${question_id}`} checked={answers[question_id].selected === 2} onClick={() => { handleSetAnswer(question_id, 2) }} />
                                                    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_no${question_id}`}>いいえ<br /><br /></label>
                                                    {/* <RadioButton
                                                        label="いいえ"
                                                        value={questionContent.checked}
                                                        onClick={() => { handleSetAnswer }}
                                                        question_id={question_id}
                                                        onChange={handleValue(question_id,value)} /> */}
                                                </li>
                                            </ul>
                                        </div>

                                    </>
                                ))
                        }
                        <ReactPaginate
                            // onClick={() => {handleAnswerReset}}
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            pageCount={Math.ceil(Object.values(questions).length / perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
                            marginPagesDisplayed={2} // 一番最初と最後を基準にして、そこからいくつページ数を表示するか
                            pageRangeDisplayed={5} // アクティブなページを基準にして、そこからいくつページ数を表示するか
                            onPageChange={handlePageChange} // クリック時のfunction
                            containerClassName={'flex mx-auto'} // ページネーションであるulに着くクラス名
                            // subContainerClassName={'pages pagination'}
                            activeClassName={'active'} // アクティブなページのliに着くクラス名
                            previousClassName={'pagination__previous'} // 「<」のliに着けるクラス名
                            nextClassName={'pagination__next'} // 「>」のliに着けるクラス名
                            disabledClassName={'pagination__disabled'} // 使用不可の「<,>」に着くクラス名
                        />
                    </div>
                </main>
            </div>
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