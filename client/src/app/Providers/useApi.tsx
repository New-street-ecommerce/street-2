import { useMutation, useQuery } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios"
import {app} from "../firebase/config";
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
            
            console.log(res)
            return res
        },
        onError: (error,variables,context) => {
            console.log(error)
        }
    })
    return query
}

export const registerDb = (input:string)=> {
    const query= useMutation({
        mutationFn: async(object: {email:string,name:string,username:string,dateOfBirth:string})=>{
             const  res :any = await axios.post(`http://localhost:5000/${input}/signup`,object)
             console.log(res)
             console.log(object)
             localStorage.setItem("user", JSON.stringify(res))
             return res
        },
        onError: (error,variables,context) => {
            console.log(error)
        }
    })
    return query
}

export const loginDb = (input:string)=> {
    const query= useMutation({
        mutationFn: async(object: {email:string})=>{
             const  res :any = await axios.post(`http://localhost:5000/${input}/signin`,object)
             localStorage.setItem("user", JSON.stringify(res))
             return res
        },
        onError: (error,variables,context) => {
            console.log(error)
        }
    })
    return query
}

