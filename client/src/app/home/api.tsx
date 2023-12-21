import {useQuery} from "@tanstack/react-query"
import axios from "axios"

const fetchProducts = ()=>{
    const data = useQuery({
    queryKey: ["products"],
     queryFn: ()=>
     fetch("http://localhost:5001/product/all").then(
        (res)=> {
            console.log(res)
            res.json()} )
    })

    return data
}

export default fetchProducts;