
import axios from "axios";


export const baseURL= 'https://bayut.p.rapidapi.com';

export const fetchAPI= async (url)=>{

  const data= await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '50fc836829msh6ee6a74c39608e4p143c2bjsn6e27d1cc6256'
    }
  })
  return data;
}