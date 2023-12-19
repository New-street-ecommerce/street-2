import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()
import { User } from '../types'


const signup = async (req: Request,res: Response)=> {
    
try {
    const {name,username,email,dateOfBirth,password}:User= req.body;
    const user = await prisma.user.findUnique({
  where: {
    email,
  },
})
}
catch (error){

}
}





export {signup}