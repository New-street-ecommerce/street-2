import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';
const prisma = new PrismaClient()

const addToFavList = async (req: Request, res: Response)=>{
    try{
    console.log(req.body)
    const {userId, productId} : {userId: number, productId : number} = req.body
    const query = await prisma.favList.create({
        data : {
            userId,
            productId
        }
    })
    res.send(query)
    }catch(error){
        res.send(error)
    }
}

const getProducts = async (req: Request, res: Response)=>{
    try{
        const query = await prisma.favList.findMany({
            where: {
                userId: parseInt(req.params.id),
            },
            include: {
                Product: true,
            }
        })
        res.send(query)
    }catch(error){
        res.send(error)
    }
}
const deleteProduct = async (req: Request, res: Response)=>{
    try{
        const query = await prisma.favList.delete({
            where: {
              Id: parseInt(req.params.id)
            }
        })
        res.send(query)
    } catch(error){
        res.send(error)
    }
}

export {addToFavList, getProducts, deleteProduct}