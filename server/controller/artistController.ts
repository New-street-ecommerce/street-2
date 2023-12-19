import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const addpost=async(req:Request,res:Response)=>{
    const body: Post =req.body
    const{artistId: String}= req.params
    try {
        const post =await prisma.post.create({
            data:body
        })
    } catch (error) {
        
    }
}