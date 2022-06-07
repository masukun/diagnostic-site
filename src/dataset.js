const defaultDataset = {
    "init": {
        questions: [
            {content: "実行に移す前に、しっかり計画を立てる"},
            {content: "何事もはっきりさせないと気が済まない"},
            {content: "他人の問題でも親身になって考える"},
            {content: "一人の人間と長い間付き合うことができる"},
            {content: "見栄や評価よりも実利を大切にする"},
            {content: "目標を達成するまで粘り強く行動できる",nextId: "next1"},
        ],
    },
    "next1": {
        questions: [
            {content: "新しいアイデアを出すのに苦労しない"},
            {content: "態度や行動で人からよく誤解されることがある"},
            {content: "要領やコツを人から学び取ることが得意"},
            {content: "自分が納得したことでないと行動しない"},
            {content: "ルールは必ず守る"},
            {content: "いつも同じような人と付き合うことが多い",nextId: "next2"},
        ],
    },
    "next2": {
        questions: [
            {content: "あまり落ち込んだり、クヨクヨすることはない"},
            {content: "急に飽きることがある"},
            {content: "何か欲しいと思ったら諦めきれない"},
            {content: "人を羨ましいと思うことが少ない"},
            {content: "気分や気持ちを切り替えることが上手"},
            {content: "控えめな方だ",nextId: "next1"},
        ],
    },
}

export default defaultDataset