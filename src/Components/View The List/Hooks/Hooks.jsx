import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading]= useState([]);

    useEffect(() => {
        const CardData = async () =>{
            setLoading(true);
            const res = await fetch('/Books.json');
            const data = await res.json();
            // console.log(data);
            setData(data);
            setLoading(false);
        }
        CardData();
    }, [])
    return {data, loading} 
       
};

export default Hooks;