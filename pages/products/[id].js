import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const {id} = router.query;
  const [dataResponse, setDataResponse] = useState([]);
  useEffect (()=> {
    const getPageData = async() => {
      const apiUrlEndPoint = `http://localhost:3000/api/getdata-lib`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: id
        }),
      };
      const response = await fetch(apiUrlEndPoint, postData);
      const res = await response.json();
      setDataResponse(res.products);
    }   
    getPageData();
  },[router.query.id, router.isReady, id]);
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
