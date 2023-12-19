import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';

const prisma = new PrismaClient()


const productController = {
    getall: async (req: any, res: any) => {
        try {
          const response = await prisma.collection.findMany();
          res.status(200).json(response);
        } catch (error) {
          res.status(500).json({ error });
        }
      },


      getone:async (req:any,res:any)=>{
        const col = req.params.col;
    try {
      const ress = await prisma.collection.findMany({ where: { name: col } });
      if (ress.length > 0) {
        res.status(200).send(ress);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
      },



      addcol: async (req: Request, res: Response) => {
        try {
          const response: any = await prisma.collection.create({
            data: {
              name: req.body.name,
              brandId: req.body.brandId,
              
            },
          });
          res.status(200).json(response);
        } catch (error) {
          res.status(500).json({ error });
        }
      }

}







export default productController