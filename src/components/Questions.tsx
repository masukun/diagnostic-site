import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

function Questions(props: any) {
  const [offset, setOffset] = useState(0); // 何番目のアイテムから表示するか
  const perPage: number = 6; // 1ページあたりに表示したいアイテムの数
  const handlePageChange = (data: any) => {
    let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
    setOffset(page_number * perPage); // offsetを変更し、表示開始するアイテムの番号を変更
  }
  return (
    <div>
      <main className="relative h-[100vh] w-[100%]">
        <div className="rounded-[4px] box-border h-[592px] max-w-[432px] py-0 px-[1rem] w-[100%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          {/* ここで `questions` をループさせて問題文を表示する、ただしページネーションの実装を行う必要がある。 */}
          {
            Object.values(props.questions)
              .slice(offset, offset + perPage).map((questionContent: any) => (
                <>
                {console.log(props.answers[questionContent.question_id])}
                  <div className="text-lg font-bold mt-[20px]">{questionContent.text}</div><div className="pt-[20px] flex justify-evenly">
                    {/* // 答え選択用の radio ボタン, こいつらが選択された時のイベントで `setAnswers()` が適切に実行できれば良い */}
                    <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                      <li className="relative" key={`yes${questionContent.question_id.toString()}`}>
                        <input className="sr-only peer" type="radio" checked={(props.answers[questionContent.question_id] === undefined) ? false : props.answers[questionContent.question_id]["selected"] === 0} name={`answer${questionContent.question_id}`} id={`answer_yes${questionContent.question_id}`} onChange={() => { props.handleSetAnswer(questionContent.question_id, 0) }} />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_yes${questionContent.question_id}`}>はい<br /><br /></label>
                      </li>
                      <li className="relative" key={`maybe${questionContent.question_id.toString()}`}>
                        <input className="sr-only peer" type="radio" checked={(props.answers[questionContent.question_id] === undefined) ? false : props.answers[questionContent.question_id]["selected"] === 1} name={`answer${questionContent.question_id}`} id={`answer_maybe${questionContent.question_id}`} onChange={() => { props.handleSetAnswer(questionContent.question_id, 1) }} />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_maybe${questionContent.question_id}`}>どちらでもない</label>
                      </li>
                      <li className="relative" key={`no${questionContent.question_id.toString()}`}>
                        <input className="sr-only peer" type="radio" checked={(props.answers[questionContent.question_id] === undefined) ? false : props.answers[questionContent.question_id]["selected"] === 2} name={`answer${questionContent.question_id}`} id={`answer_no${questionContent.question_id}`} onChange={() => { props.handleSetAnswer(questionContent.question_id, 2) }} />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={`answer_no${questionContent.question_id}`}>いいえ<br /><br /></label>
                      </li>
                    </ul>
                  </div>

                </>
              ))
          }
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={Math.ceil(Object.values(props.questions).length / perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
            marginPagesDisplayed={2} // 一番最初と最後を基準にして、そこからいくつページ数を表示するか
            pageRangeDisplayed={5} // アクティブなページを基準にして、そこからいくつページ数を表示するか
            onPageChange={handlePageChange} // クリック時のfunction
            containerClassName={'flex items-center justify-center mb-2.5 gap-y-5 gap-x-2'} // ページネーションであるulに着くクラス名
            pageClassName={'inline-flex w-10 h-10 justify-center text-base font-bold items-center rounded-3xl g-slate-300'}
            pageLinkClassName={'inline-flex w-10 h-10 justify-center text-base font-bold items-center rounded-3xl rounded-full g-slate-300'}
            // subContainerClassName={'pages pagination'}
            activeClassName={'active'} // アクティブなページのliに着くクラス名
            previousClassName={'inline-flex w-10 h-10 justify-center text-base font-bold items-center rounded-3xl g-slate-300'} // 「<」のliに着けるクラス名
            nextClassName={'inline-flex w-10 h-10 justify-center text-base font-bold items-center rounded-3xl g-slate-300'} // 「>」のliに着けるクラス名
            disabledClassName={'pagination__disabled'} // 使用不可の「<,>」に着くクラス名
          />
        </div>
      </main>
    </div>
  )
}

export default Questions