import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';
const prisma = new PrismaClient()

const postQuestion  = async (req: Request, res: Response) =>{
    try{
        const {question, userId} : {question: string, userId : number} = req.body
        const newQuestion = await prisma.question.create({
            data: {
                question,
                userId
            }
        })
        res.send(newQuestion)
    }catch(error){
        res.send(error)
    }
}
const getQuestions = async (req: Request, res: Response) =>{
    try{
        const query =  await prisma.question.findMany()
        res.send(query)
    }catch(error){
        res.send(error)
    }
}
export {postQuestion,getQuestions}