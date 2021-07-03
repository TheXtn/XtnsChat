import {hash,compare} from 'bcryptjs'
export async function hashpassword(password){
    const hashed=await hash(password,12)
    return hashed
}
export async function verif(password,hashpassword){
    const haja=await compare(password,hashpassword)
    return haja
}