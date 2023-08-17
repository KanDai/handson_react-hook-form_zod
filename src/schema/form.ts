import { z } from 'zod'

export const FormInputSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'お名前は必須です' })
        .max(20, { message: 'お名前は20文字以内で入力してください' }),
    email: z
        .string()
        .min(1, { message: 'メールアドレスは必須です' })
        .email({ message: 'メールアドレスの形式で入力してください' }),
    age: z
        .number({
            invalid_type_error: '年齢は数値で入力してください',
        })
        .min(18, { message: '18歳以上99歳以下で入力してください' })
        .max(99, { message: '18歳以上99歳以下で入力してください' }),
    content: z.string().min(1, { message: 'お問い合わせ内容は必須です' }),
    agree: z.literal('true', {
        errorMap: () => ({
            message: '個人情報取り扱いに同意する必要があります',
        }),
    }),
})
export type FormInputType = z.infer<typeof FormInputSchema>
