import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()
import { Artist,User } from '../types'

const followArtist = async (req: Request,res: Response)=> {
    let artistId= Number(req.params.artistId)
    let userId: number= Number(req.params.userId)
try {
const artist = await prisma.artist.update({
    where: {
        id: artistId,
    },
    data: {
        followers: {
            connect: {id:userId}
        }
    }
})
res.send(artist)
}
catch(error){
    res.send(error)
}
}

const unfollowArtist = async (req: Request,res: Response)=> {
    let artistId= Number(req.params.artistId)
    let userId: number= Number(req.params.userId)
try {
const artist = await prisma.artist.update({
    where: {
        id: artistId,
    },
    data: {
        followers: {
            disconnect: {id:userId}
        }
    }
})
res.send(artist)
}
catch(error){
    res.send(error)
}
}



export {followArtist,unfollowArtist}