import React, {useState, useEffect} from 'react'


function fetchData(){
  // const response = await fetch('https://api.qlay.ai/api/v1/products?page=1&pageSize=100&q=hair');
  // const data = await response.json();
  // return data
  const [data, setData] = useState([] as any)

  useEffect(()=>{
    fetch('https://staging-api.qlay.ai/api/v1/products?page=1&pageSize=100&lang=ja',{
      method: "GET"
    })
    .then((response)=>response.json())
    .then((data)=>{
      setData(data.data);
    })
    // .catch(err=>console.log(err))
  }, [])

  return data;
}

export default fetchData


