import { Post, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
interface Comment {
    id: number;
    content: string;
    userId: number;
    postId: number;
  }





  export const addComment = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { postId } = req.params;
    const { content }: { content: string } = req.body;
    try {
        const commentAdded = await prisma.comment.create({
            data: {
                userId: Number(userId),
                postId: Number(postId),
                content: content
            }
        });
        res.status(201).json(commentAdded);
    } catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
};


export const getAllComments = async (req: Request, res: Response) => {
    const { postId } = req.params; // Change 'postID' to 'postId'

    console.log("Received postId:", postId);

    const postIdNumber = Number(postId);
    if (isNaN(postIdNumber)) {
        return res.status(400).json({ msg: "Invalid post ID" });
    }

    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: postIdNumber
            }
        });
        res.status(200).json(comments);
    } catch (error: any) {
        console.error("Error:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

