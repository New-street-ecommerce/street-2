import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface Post {
    id: number;
    artistId: number;
    content: string;
    picture: string;
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

  export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const data = await prisma.post.findMany();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  