import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios"
import {app} from "../firebase/config";
// import { useQueryClient } from "react-query";
interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  picture: string;
  dateOfBirth: string;
}

export const register = () => {
  const query = useMutation({
    mutationFn: async (object: {email: string, password: string}) => {
    // console.log(object.password,object.email);
      const auth = getAuth(app);
      
      const res: any = await createUserWithEmailAndPassword(
        auth,
        object.email,
        object.password
      );
      
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    },
    onError: (error, variables, context) => {
        // Boom ba ye!
        console.log(error);
        
      },
  });
  return query;
};

export const login = () => {
    const query = useMutation({
        mutationFn: async(object: {email:string,password:string})=>{
            const auth= getAuth(app)
            const res:any = await signInWithEmailAndPassword(auth, object.email, object.password)
            localStorage.setItem("user", JSON.stringify(res))
            console.log(res)
            return res
        },
        onError: (error,variables,context) => {
            console.log(error)
        }
    })
    return query
}

export const registerDb = ()=> {
    const query= useMutation({
        mutationFn: async(object: {email:string,name:string,username:string,dateOfBirth:string})=>{
             const  res :any = await axios.post("http://localhost:5000/user/signup",object)
             console.log(res)
             console.log(object)
             return res
        },
        onError: (error,variables,context) => {
            console.log(error)
        }
    })
    return query
}

export const loginDb = ()=> {
    const query= useMutation({
        mutationFn: async(object: {email:string})=>{
             const  res :any = await axios.post("http://localhost:5000/user/signin",object)
             console.log(res)
             return res
        },
        onError: (error,variables,context) => {
            console.log(error)
        }
    })
    return query
}
export const useDeleteCart = (id : any) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["cart"],
    mutationFn: (id :any) => {
      return axios.delete(`http://localhost:5001/cart/${id}`);
    },
    onSuccess: () => {
      // Invalidate and refetch the "cart" query
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return query;
};
