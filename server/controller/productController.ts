import { PrismaClient, Product as PrismaProduct } from '@prisma/client';


const prisma = new PrismaClient();

interface Product {
  id: number;
  name: string;
  price: number;
  isNew: boolean;
  pictures: string[];
  collectionId: number;
  collection: any;
  clients: any[];
  users: any[];
}
interface ProductController {
  getAll: (req: any, res: any) => void;
  getCat: (req: any, res: any) => void;
  getCol: (req: any, res: any) => void;
  getBrand: (req: any, res: any) => void;
  addProduct: (req: any, res: any) => void;
}

const productController: ProductController = {
  getAll: async (req: any, res: any) => {
    try {
      const response = await prisma.product.findMany();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getCat: async (req: any, res: any) => {
    const catg = req.params.catg;
    try {
      const allcat = await prisma.product.findMany({ where: { name: catg } });
      if (allcat.length > 0) {
        res.status(200).send(allcat);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },

  getCol: async (req: any, res: any) => {
    const col = req.params.col;
    try {
      const allcol = await prisma.product.findMany({ where: { name: col } });
      if(allcol.length){
      res.status(200).json(allcol);
    } else {
      res.status(200).send([])
    }} catch(error) {
    console.error(error);
    res.status(500).send(error)
  }
},

  getBrand: async (req: any, res: any) => {
    // Implement based on requirements
  },

    addProduct: async (req: any, res: any) => {
      const { name, price, isNew, pictures, collectionId }: Product = req.body; // Assuming ProductInput is the expected Prisma input type for creating a product

      try {
        const response = await prisma.product.create({
          data: {
            name,
            price,
            isNew,
            pictures,
            collection: { connect: { id: collectionId } },
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the product.' })
      }
    },
    }


export default productController;