
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
  export default Product;