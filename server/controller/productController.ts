import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()



const filterPrice = (minPrice:Number, maxPrice:Number, callback:Function) => {
    prisma.product.findMany({
        where: {
          price: {
            [prisma.Op.between]: [minPrice, maxPrice],
          },
        },
      })
      .then((results:Object) => {
        callback(null, results);
      })
      .catch((error:Error) => {
        callback(error, null);
      });
  };
 const productController = {

  getall: async (req: any, res: any) => {
    try {
      const response = await prisma.product.findMany();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getCat: async (req:any, res:any) => {
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
      res.status(400).send(err);
    }
  },

  getCol:async (req:any,res:any)=>{},
  getbrand:async (req:any,res:any)=>{},

  
  filterbyPrice:async (req:any,res:any)=>{
    const minPrice = req.params.minPrice;
    const maxPrice = req.params.maxPrice;
  
    console.log(`Received request with minPrice: ${minPrice}, maxPrice: ${maxPrice}`);
  
    filterPrice(minPrice, maxPrice, (err:Error, results:any) => {
      if (err) {
        console.error(err, "Error filtering by price");
        res.status(500).json({ error: 'Error filtering by price' });
      } else {
        res.json(results);
      }
    });
  },


  addProduct : async (req: any, res: any) => {
    try {
      const response: any = await prisma.product.create({
        data: {
          name: req.body.name, 
          price: req.body.price, 
          isNew: req.body.isNew, 
          pictures: req.body.pictures, 
        },
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  




};
export default productController