import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';
const prisma = new PrismaClient()


module.exports = {
  createBrand: async (req: Request, res: Response) => {
    try {
      const { name, picture }: { name: string, picture: string } = req.body;
      const newBrand = await prisma.brand.create({ data: {
        name: name,
        picture: picture
      }});
      res.status(201).json(newBrand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  // getBrands: async (req, res) => {
  //   try {
  //     const brands = await Brand.findAll();
  //     res.status(200).json(brands);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // },
};