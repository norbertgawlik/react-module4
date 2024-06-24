import { useEffect, useState } from "react";

type S<T> = {
    data : undefined,
    isLoading: true,
    isError : false,
    error : string
} | {
    data : T,
    isLoading: false,
    isError : false,
    error : string,
} | {
    data : undefined,
    isLoading : false,
    isError : true,
    error : string
};


export const useApi = <T>(fetcher : () => Promise<T>) => {
    const [state,setState] = useState<S<T>>({
        data : undefined,
        isLoading: true,
        isError : false,
        error : ''
    });

    const {data,isLoading,isError,error} = state;

    useEffect(()=>{
        const loadData = async () => {
            try{
                const data = await fetcher();
                setState({
                    data : data,
                    isLoading: false,
                    isError : false,
                    error : ''
                });
            }catch(e){
                setState({
                    data : undefined,
                    isLoading: false,
                    isError : true,
                    error : (e as Error).message
                })
            }
        };
        loadData();
    },[]);

    return {data,isLoading,isError,error};
};