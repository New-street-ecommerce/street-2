import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()
import { User } from '../types'


const signUp = async (req: Request,res: Response)=> {
    
try {
    const {email,name,username,dateOfBirth}:User= req.body;
    const user = await prisma.user.findUnique({
  where: {
    email,
  }
})
if (user !== null) {
    return res.status(409).send("userAlreadyExist");
  }
   const users = await prisma.user.create({data:{
    email,
    name,
    username,
    dateOfBirth
  }
    })
    return res.status(201).send(users)

}
catch (error){
res.status(500).send(error)
}
}

const signIn = async (req:Request,res:Response) => {
    try {
       const user = await prisma.user.findUnique({where: {email:req.body.email}})
       if (!user){
        res.status(409).send("User does not exist")}
        else {res.status(200).send(user)}
       
    }
catch(error){
    res.send(error)
}
}




export {signUp,signIn}