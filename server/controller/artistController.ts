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
export const updateName = async (req: Request, res: Response) => {
  const { name }: { name: string } = req.body;
  const { artistId } = req.params;

  try {
    const updatedName = await prisma.artist.update({
      where: {
        id: Number(artistId),
      },
      data: {
        name: name,
      },
    });

    res.status(201).json(updatedName);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateBio = async (req: Request, res: Response) => {
  const { bio }: { bio: string } = req.body;
  const { artistId } = req.params;
  try {
    const updatedBio = await prisma.artist.update({
      where: {
        id: Number(artistId),
      },
      data: {
        bio: bio,
      },
    });
    res.status(201).json(updatedBio);
  } catch (error: any) {
    console.log(error);
    res.status(404).send(error);
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

// export const signUp = async (req: Request, res: Response) => {
//   try {
//     const { email, name, username, dateOfBirth }: Artist = req.body;
//     const Artist = await prisma.artist.findUnique({
//       where: {
//         email,
//       },
//     });
//     if (Artist !== null) {
//       return res.status(409).send("Artist Already Exist");
//     }
//     await prisma.artist.create({
//       data : {
//         email,
//         name,
//         username,
//         dateOfBirth,
//       },
//     });
//     return res.status(201).send("succesful");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

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
  const { artistId } = req.params;

  try {
    const data = await prisma.post.findMany({
      where: {
        id: Number(artistId),
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
