import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


interface Artist {
  id: number;
  email: string;
  name: string;
  username: string;
  bio: string;
  dateOfBirth: string;
  profilePic: string;
  coverPic: string;
}



export const updateProfil = async (req: Request, res: Response) => {
  const { username,bio }: { username: string,bio:string } = req.body;
  const { artistId } = req.params;

  try {
    const updatedProfil = await prisma.artist.update({
      where: {
        id: Number(artistId),
      },
      data: {
        username,
        bio: bio,
      },
    });

    res.status(201).json(updatedProfil);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePfp = async (req: Request, res: Response) => {
  const { profilePic }: { profilePic: string } = req.body;
  const { artistId } = req.params;
  try {
    const updatedPfp = await prisma.artist.update({
      where: {
        id: Number(artistId),
      },
      data: {
        profilePic: profilePic,
      },
    });
    res.status(201).json(updatedPfp);
  } catch (error: any) {
    console.log(error);
    res.status(404).send(error);
  }
};
export const updateCoverPic = async (req: Request, res: Response) => {
  const { coverPic } = req.body;
  const { artistId } = req.params;
  try {
    const updatedCoverPic = await prisma.artist.update({
      where: {
        id: Number(artistId),
      },
      data: {
        coverPic: coverPic,
      },
    });
    res.status(201).json(updatedCoverPic);
  } catch (error: any) {
    console.log(error);
    res.status(404).send(error);
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, name, username, dateOfBirth }: Artist = req.body;
    const artist = await prisma.artist.findUnique({
      where: {
        email,
      },
    });
    if (artist !== null) {
      const artist = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
     return  res.send(artist);
    }
    await prisma.artist.create({
      data : {
        email,
        name,
        username,
        dateOfBirth,
      },
    });
    return res.status(201).send(artist);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const Artist = await prisma.artist.findUnique({
      where: { email: req.body.email },
    });
    if (!Artist) {
      res.status(409).send("Artist does not exist");
    } else {
      res.status(200).send( Artist);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getArtistById = async (req: Request, res: Response) =>{
  
  let artistId= Number(req.params.artistId)
  try {
    const getemail=await prisma.artist.findUnique({
      where:{id:artistId},
    })
    if (!getemail) {
      res.status(409).send("Artist does not exist");
  }else{
    res.status(200).send(getemail)
  }} catch (error:any) {
    res.status(500).send(error)
  }
}


