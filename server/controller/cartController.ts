import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Cart } from '../types';


const prisma = new PrismaClient();

const removeFromBasket = async (req: Request, res: Response): Promise<void> => {
 try { 
   const query = await prisma.cart.delete({
    where: {
      id: parseInt(req.params.id)
    },
  })
  res.send(query)
}catch(error){
  res.send(error)
}
}

const addToBasket = async (req: Request, res: Response): Promise<void> => {
  try {
    
  const { userId,productId}:Cart = req.body
   console.log(req.body)

    const item = await prisma.cart.create({
      data:  {
        productId,
        userId,
      },
    });

    res.status(201).send("successful");
  } catch (error) {
    res.send(error);
  }
};

const getBasket = async (req: Request, res: Response): Promise<void> => {
  try {
    const basket = await prisma.cart.findMany({
      
          where: {
            userId: parseInt(req.params.id, 10),
          },
          include:{
            product: true
          },
        
     
    });

    res.send(basket);
  } catch (error) {
    res.send(error);
  }
};

export { addToBasket, getBasket, removeFromBasket };