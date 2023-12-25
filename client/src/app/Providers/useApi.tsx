import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,FacebookAuthProvider  } from "firebase/auth";
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

export const signInWithGoogle =  (input:string) => {
  const query = useMutation({
    mutationFn: async () => {
        const auth= getAuth(app)
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        console.log(user)
        const object = {email:user.email,name:user.displayName,username:user.displayName}
        const  res :any = await axios.post(`http://localhost:5000/${input}/signup`,object)
        localStorage.setItem("user", JSON.stringify(res))

      },
      onError: (error,variables,context) => {
        console.log(error)
    }} )
       return query 
    }


export const signInWithFacebook = async () => {
  try {
    const auth= getAuth(app)
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    localStorage.setItem("user", JSON.stringify(user));

    console.log("User signed in with Facebook:", user);

  } catch (error:any) {
    console.error("Error during Facebook sign-in:", error);
  }
}
