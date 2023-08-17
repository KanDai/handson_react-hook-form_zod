import { useForm, SubmitHandler } from 'react-hook-form'

type FormInput = {
    name: string
    email: string
    age?: number
    content: string
    agree: boolean
}

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

    return (
        <main className="container relative mx-auto py-10 px-10">
            <div className="mx-auto lg:w-[800px]">
                <h1 className="text-2xl font-bold text-center pb-10">
                    お問い合わせ
                </h1>
            </div>

            <form
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-10"
            >
                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">お名前</div>
                    <input
                        type="text"
                        {...register('name', {
                            required: true,
                            maxLength: 20,
                        })}
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                        placeholder="例）山田 太郎"
                    />
                    {errors?.name?.type === 'required' && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            お名前は必須です
                        </div>
                    )}
                    {errors?.name?.type === 'maxLength' && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            お名前は20文字以内で入力してください
                        </div>
                    )}
                </label>
                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">メールアドレス</div>
                    <input
                        type="text"
                        {...register('email', {
                            required: true,
                            pattern: /.+@.+\..+/,
                        })}
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                        placeholder="例）mail@example.com"
                    />
                    {errors?.email?.type === 'required' && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            メールアドレスは必須です
                        </div>
                    )}
                    {errors?.email?.type === 'pattern' && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            メールアドレスの形式で入力してください
                        </div>
                    )}
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">年齢</div>
                    <input
                        type="text"
                        {...register('age', {
                            min: 18,
                            max: 99,
                            pattern: /[0-9]+/,
                        })}
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                    />
                    {(errors?.age?.type === 'min' ||
                        errors?.age?.type === 'max') && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            18歳以上99歳以下で入力してください
                        </div>
                    )}
                    {errors?.age?.type === 'pattern' && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            数字で入力してください
                        </div>
                    )}
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">
                        お問い合わせ内容
                    </div>
                    <textarea
                        {...register('content', {
                            required: true,
                        })}
                        className="h-36 border px-2 py-1"
                    ></textarea>
                    {errors?.content?.type === 'required' && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            お問い合わせ内容は必須です
                        </div>
                    )}
                </label>

                <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-row items-center space-x-2">
                        <label className="flex flex-row items-center space-x-2">
                            <input
                                type="checkbox"
                                {...register('agree', {
                                    required: true,
                                })}
                                value="true"
                                className="h-5 w-5"
                            />
                            <p>個人情報取り扱いに同意する</p>
                            {errors?.agree?.type === 'required' && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    個人情報取り扱いに同意する必要があります
                                </div>
                            )}
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
