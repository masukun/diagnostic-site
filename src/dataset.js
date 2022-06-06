const defaultDataset = {
    "init": {
        questions: [
            {content: "実行に移す前に、しっかり計画を立てる"},
            {content: "何事もはっきりさせないと気が済まない"},
            {content: "他人の問題でも親身になって考える"},
            {content: "一人の人間と長い間付き合うことができる"},
            {content: "見栄や評価よりも実利を大切にする"},
            {content: "目標を達成するまで粘り強く行動できる"},
        ],
        nextId: "next1",
    },
    "next1": {
        questions: [
            {content: "仕事を依頼したい"},
            {content: "エンジニアのキャリアについて相談したい"},
            {content: "プログラミングの魅力について教えてほしい！"},
            {content: "お付き合いしたい"},
        ],
        nextId: "next2",
    },
    "next2": {
        questions: [
            {content: "仕事を依頼したい"},
            {content: "エンジニアのキャリアについて相談したい"},
            {content: "プログラミングの魅力について教えてほしい！"},
            {content: "お付き合いしたい"},
        ],
        nextId: "next3",
    },
}

export default defaultDataset