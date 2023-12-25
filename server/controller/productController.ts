import { PrismaClient, Product as PrismaProduct } from '@prisma/client';


const prisma = new PrismaClient();

interface Product {
  id: number;
  name: string;
  price: number;
  isNew: boolean;
  pictures: string[];
  category: string;
  collectionId: number;
  collection: any;
  clients: any[];
  users: any[];
}


const  ProductController = {
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
      const allcat = await prisma.product.findMany({ where: { category: catg } });
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

  getNew: async (req: any, res: any) => {
    try {
      const response = await prisma.product.findMany({where:{isNew:true}});
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

 filterbyPrice : async (req: any, res: any) => {
  const minPrice = parseFloat(req.params.minprice);
  const maxPrice = parseFloat(req.params.maxprice);

  try {
    const products = await prisma.product.findMany({
      where: {
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},



    addProduct: async (req: any, res: any) => {
      const { name, price, isNew, pictures,category, collectionId }: Product = req.body; 
      try {
        const response = await prisma.product.create({
          data: {
            name,
            price,
            isNew,
            pictures,
            collection: { connect: { id: collectionId } },
            category,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the product.' })
      }
    },
    }


export default ProductController;