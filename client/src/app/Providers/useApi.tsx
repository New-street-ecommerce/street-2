import { useMutation, useQuery } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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
    console.log(object.password,object.email);
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
