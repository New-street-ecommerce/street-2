interface User {
  id: Int;
  email: String;
  name: String;
  username: String;
  password: String;
  picture: String;
  dateOfBirth: DateTime;
  comments: Comment[];
  questions: Question[];
  favoriteArtists: Artist[];
  favoriteBrands: Brand[];
  cart: Product[];
  favList: Product[];
}

interface Artist {
  id: number;
  email: string
  name: string
  username: string
  password: string
  bio: string
  dateOfBirth: DateTime;
  profilePic: string
  coverPic: string
  posts: Post[];
  followers: User[];
}

interface Post {
  id: Int;
  content: String;
  picture: String;
  artistId: Int;
  comments: Comment[];
  artist: Artist;
}

interface Brand {
  id: Int;
  name: String;
  picture: String;
  collections: Collection[];
  followers: User[];
}

interface Collection {
  id: Int;
  name: String;
  brandId: Int;
  brand: Brand;
  products: Product[];
}

interface Product {
  id: Int;
  name: String;
  price: Float;
  isNew: Boolean;
  pictures: String[];
  collectionId: Int;
  collection: Collection;
  clients: User[];
  users: User[];
}

interface Question {
  id: Int;
  question: String;
  userId: Int;
  user: User;
}
interface Comment {
  id: Int;
  content: String;
  userId: Int;
  postId: Int;
  post: Post;
  user: User;
}
