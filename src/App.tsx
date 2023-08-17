function App() {
    return (
        <main className="container relative mx-auto py-10 px-10">
            <div className="mx-auto lg:w-[800px]">
                <h1 className="text-2xl font-bold text-center pb-10">
                    お問い合わせ
                </h1>
            </div>

            <form
                method="post"
                onSubmit={(event) => {
                    event.preventDefault()
                    console.log(event)
                    console.log('送信しました')
                }}
                className="flex flex-col space-y-10"
            >
                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">お名前</div>
                    <input
                        type="text"
                        name="name"
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                        placeholder="例）山田 太郎"
                    />
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">メールアドレス</div>
                    <input
                        type="text"
                        name="email"
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                        placeholder="例）mail@example.com"
                    />
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">年齢</div>
                    <input
                        type="text"
                        name="age"
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                    />
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">
                        お問い合わせ内容
                    </div>
                    <textarea
                        name="content"
                        className="h-36 border px-2 py-1"
                    ></textarea>
                </label>

                <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-row items-center space-x-2">
                        <label className="flex flex-row items-center space-x-2">
                            <input
                                type="checkbox"
                                name="agree"
                                value="true"
                                className="h-5 w-5"
                            />
                            <p>個人情報取り扱いに同意する</p>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={false}
                    className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center"
                >
                    送信する
                </button>
            </form>
        </main>
    )
}

export default App
