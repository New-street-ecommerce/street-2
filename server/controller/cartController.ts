import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addToBasket = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const userId = parseInt(req.body.userId, 10);
    const itemId = parseInt(req.body.itemId, 10);

    const item = await prisma.cart.create({
      data: {
        userId,
        productId: itemId,
      },
    });

    res.status(201).send("successful");
  } catch (error) {
    res.send("failed");
  }
};

const getBasket = async (req: Request, res: Response): Promise<void> => {
  try {
    const basket = await prisma.cart.findMany({
      
          where: {
            userId: parseInt(req.params.id, 10),
          },
        
     
    });

    res.send(basket);
  } catch (error) {
    res.send(error);
  }
};

export { addToBasket, getBasket };