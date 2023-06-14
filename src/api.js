import axios from "axios"
export  const fetchProducts=async()=>{
  const product=await axios.get("https://fakestoreapi.com/products").then(response=>response.data)

  return product
}
