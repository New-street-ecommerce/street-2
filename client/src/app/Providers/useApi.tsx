import { useQuery } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";


const auth =getAuth()
const register = async (email:string, password:string) => {
    let user = null,
        error = null;
   
        const res:any = await createUserWithEmailAndPassword(auth, email, password);
        const users = (await res.json());
        localStorage.setItem("user", JSON.stringify(user))
        return users
    }
    