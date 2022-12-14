import { useState, useEffect } from "react";

export default function Home() {
  const [dataResponse, setDataResponse] = useState([]);
  useEffect (()=> {
    const getPageData = async() => {
      const apiUrlEndPoint = `http://localhost:3000/api/getdata`;
      const response = await fetch(apiUrlEndPoint);
      const res = await response.json();
      setDataResponse(res.products);
    }
    getPageData();
  },[]);
  return (
    <div>
      {dataResponse.map((produk)=>
        <div key={produk.productid}>
          <span>{produk.productid}</span>
          <h1>{produk.productname}</h1>
          <p>{produk.productdescription}</p>
        </div>
      )}
    </div>
  )
}
