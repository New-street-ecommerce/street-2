import { PrismaClient } from '@prisma/client'


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
        try{
            const

        }catch{

        }
      }
}




getone 
addcol





export default productController