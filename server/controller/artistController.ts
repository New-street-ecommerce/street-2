import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
// import { Artist } from '../types.d.ts';
const prisma = new PrismaClient();

interface Post {
  id: number;
  artistId: number;
  content: string;
  picture: string;
}
interface Artist {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  bio: string;
  dateOfBirth: string;
  profilePic: string;
  coverPic: string;
}

export const addpost = async (req: Request, res: Response) => {
  const { content, picture }: Post = req.body;
  const { artistId } = req.params;
  try {
    const post: Post = await prisma.post.create({
      data: {
        content: content,
        picture: picture,
        artistId: Number(artistId),
      },
    });
    res.status(201).json(post);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateProfil = async (req: Request, res: Response) => {
  const { name,bio }: { name: string,bio:string } = req.body;
  const { artistId } = req.params;

  try {
    const updatedProfil = await prisma.artist.update({
      where: {
        id: Number(artistId),
      },
      data: {
        name: name,
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
    const { email, name, username, password, dateOfBirth }: Artist = req.body;
    const existingArtist = await prisma.artist.findUnique({
      where: {
        email,
      },
    });

    if (existingArtist !== null) {
      return res.status(409).json({ error: "Artist Already Exists" });
    }

   
    const parsedDateOfBirth = new Date(dateOfBirth);
    const isoDateOfBirth = parsedDateOfBirth.toISOString();

    await prisma.artist.create({
      data: {
        email,
        name,
        username,
        password,
        dateOfBirth: isoDateOfBirth,
      },
    });

    return res.status(201).json({ message: "Artist created successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Internal Server Error" });
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
      res.status(200).send(Artist);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const data = await prisma.post.findMany();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

