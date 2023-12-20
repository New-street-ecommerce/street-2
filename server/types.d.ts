interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  picture: string;
  dateOfBirth: string;

}

interface Artist {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  bio: string;
  dateOfBirth: string;
  profilePic: string;
  coverPic: string;
}

interface Post {
  id: number;
  content: string;
  picture: string;
  artistId: number;
}

interface Brand {
  id: number;
  name: string;
  picture: string;
}

interface Collection {
  id: number;
  name: string;
  brandId: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  isNew: boolean;
  category: string
  pictures: string[];
}

interface Question {
  id: number;
  question: string;
  userId: number;
}
interface Comment {
  id: number;
  content: string;
  userId: number;
  postId: number;
}

interface Cart {
  userId: number;
  productId: number;
}

export {
  User,Artist,Post,Question,Collection,Comment,Brand,Product,Cart
}