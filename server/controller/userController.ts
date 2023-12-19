import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

const signup = async (req: Request,res: Response)=> {
try {
    if (req.params){
    const {name,username,dateOfBirth,password} = req.body
    }
}
catch (error){

}
}





export {signup}