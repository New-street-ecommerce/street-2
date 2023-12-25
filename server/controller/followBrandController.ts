import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()
import { Brand,User } from '../types'

const followBrand = async (req: Request,res: Response)=> {
    let brandId= Number(req.params.brandId)
    let userId: number= Number(req.params.userId)
try {
const brand:Brand = await prisma.brand.update({
    where: {
        id: brandId,
    },
    data: {
        followers: {
            connect: {id:userId}
        }
    }
})
res.send(brand)
}
catch(error){
    res.send(error)
}
}

const unfollowBrand = async (req: Request,res: Response)=> {
    let brandId= Number(req.params.brandId)
    let userId: number= Number(req.params.userId)
try {
const brand:Brand = await prisma.brand.update({
    where: {
        id: brandId,
    },
    data: {
        followers: {
            disconnect: {id:userId}
        }
    }
})
res.send(brand)
}
catch(error){
    res.send(error)
}
}



export {followBrand,unfollowBrand}