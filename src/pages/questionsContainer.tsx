import { off } from 'process';
import React, { useState, FC, useEffect } from 'react'
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
    const [point, setPoint] = useState(0);

    const handleSetAnswer = (questionId: number, selectedAnswer: SelectedAnswer) => {
        const answerContent = {
            [questionId]: {
                selected: selectedAnswer
            }
        }
        const prevAnswer = { ...answers }
        const lastAnswer = Object.assign(prevAnswer, answerContent)
        setAnswers(lastAnswer)
    }

    useEffect(() => {
        let totalPoints = 0;
        Object.values(answers).map((answer: any) => {
            if (answer.selected === 0) {
                totalPoints = totalPoints + 1;
            } else if (answer.selected === 1) {
                totalPoints = totalPoints;
            } else if (answer.selected === 2) {
                totalPoints = totalPoints - 1
            }
        })
        setPoint(totalPoints)
    }, [answers])


    return (
        <div>
            <Questions
                answers={answers}
                questions={questions}
                handleSetAnswer={handleSetAnswer}
                point={point} />
        </div>
    )
}