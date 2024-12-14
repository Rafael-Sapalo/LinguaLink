import z,  { string, optional, object } from 'zod'



// These are the object for the middleware
const UserBasicRegister = object({
    username: string().min(1),
    email: string().min(1),
    password: string().min(8)
})

const UserBasicLogin = object({
    username: string().min(1).optional(),
    email: string().min(1).optional(),
    password: string().min(1)
})


// These are the types for user register
type UserBasicRegisterType = z.infer<typeof UserBasicRegister>
type UserBasicLoginType = z.infer<typeof UserBasicLogin>

export {
    UserBasicRegister,
    UserBasicLogin,
    type UserBasicRegisterType,
    type UserBasicLoginType
}
