import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormInputSchema, FormInputType } from './schema/form'

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputType>({
        resolver: zodResolver(FormInputSchema),
    })

    const onSubmit: SubmitHandler<FormInputType> = (data) => console.log(data)

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
                        {...register('name')}
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                        placeholder="例）山田 太郎"
                    />
                    {errors.name && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            {errors.name.message}
                        </div>
                    )}
                </label>
                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">メールアドレス</div>
                    <input
                        type="text"
                        {...register('email')}
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                        placeholder="例）mail@example.com"
                    />
                    {errors.email && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            {errors.email.message}
                        </div>
                    )}
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">年齢</div>
                    <input
                        type="text"
                        {...register('age', { valueAsNumber: true })}
                        className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                    />
                    {errors.age && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            {errors.age.message}
                        </div>
                    )}
                </label>

                <label className="flex flex-col space-y-1">
                    <div className="text-sm font-bold mb-1">
                        お問い合わせ内容
                    </div>
                    <textarea
                        {...register('content')}
                        className="h-36 border px-2 py-1"
                    ></textarea>
                    {errors.content && (
                        <div className="text-red-500 pl-1 pt-1 text-xs">
                            {errors.content.message}
                        </div>
                    )}
                </label>

                <div className="flex flex-col items-center space-y-1">
                    <div className="flex flex-row items-center space-x-2">
                        <label className="flex flex-row items-center space-x-2">
                            <input
                                type="checkbox"
                                {...register('agree')}
                                value="true"
                                className="h-5 w-5"
                            />
                            <p>個人情報取り扱いに同意する</p>
                            {errors.agree && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {errors.agree.message}
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
