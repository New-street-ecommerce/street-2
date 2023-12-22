import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()
// import { User } from '../types'

interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  picture: string;
  dateOfBirth: Date;

}
const signUp = async (req: Request,res: Response)=> {
    
try {
    const {email,name,username,password,dateOfBirth}:User= req.body;
    const user = await prisma.user.findUnique({
  where: {
    email,
  }
})
if (user !== null) {
    return res.status(409).send("userAlreadyExist");
  }
   await prisma.user.create({data:{
    email,
    name,
    username,
    password,
    dateOfBirth
  }
    })
    return res.status(201).send("succesful")

}
catch (error){
res.send(error)
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