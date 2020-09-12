import { fetchSinToken } from "../helpers/fetch"

export const startLogin = (email,password)=>{
    return async()=>{
        const resp = await fetchSinToken('auth',{email,password},'POST');
        const body = await resp.json();

        console.log(body);
    }
}