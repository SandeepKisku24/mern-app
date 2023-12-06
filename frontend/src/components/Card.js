import React ,{useState, useEffect} from "react";


function Card(){

    const [data, setData]  = useState();

    async function getData(){

    const response =  await fetch(`${window.location.origin}`);
    const result  = await response.json();
    
    if(!response.ok){
      console.log("error " + result.console.error);
    }

    if(response.ok){
      setData(result);
      // console.log(data);
    }
  }

  useEffect(()=>{
    getData();
  },[]);

  console.log(data);

    return (
        <div className=" cards_for_name">
            {data?.map((ele)=> {
                return (
                    <h1>name: {ele.email}</h1>
                )
            }
            )}
        </div>
    )
}

export default Card;