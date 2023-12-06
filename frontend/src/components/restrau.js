import React ,{useState, useEffect} from "react";
import Block from "./Block";
import restaurent_img from "./rest.png"
function Restrau(){
    var price=0,quant=0,count =0;
    const [data, setData]  = useState();
    var [price1, prices]  = useState(0);
    var [quant1, totalquant]  = useState(0);
    var [count1, countItems]  = useState(0);
    

    async function getData(){

    const response =  await fetch(`${window.location.origin}/rest`);
    const result  = await response.json();
    
    if(!response.ok){
      console.log("error " + result.console.error);
    }
  
    if(response.ok){
      setData(result);
    }
  }

  setInterval(()=>{
    prices(price);
    totalquant(quant);
    countItems(count);
    // prices(price);
  },500000000000000000)

  useEffect(()=>{
    getData();
  },[]);

  const items = data;

    
    return (

        <div className=" cards_for_restrau">
            {data?.map((ele)=> {
                return (
                    <div className="pages" key = {ele.name}>

                        <div className="details-of-restrau">

                        <div className="img-part">
                        <img src= {restaurent_img} alt="no image" style={{width : "250px", height : "140px"}}></img>
                        </div>

                        <div className="det-Part">

                        <div> Order id : {ele.id}</div>
                        <div><h2 style={{color : "green"}}>{ele.name}</h2></div>
                        <div> Owner Name : {ele.ownerName}</div>
                        <br/>
                        <div className="email_part"> <div className="material-symbols-outlined box">phone</div> <div> : {ele.contactno}</div> <div className="space"></div> <div className="material-symbols-outlined box" >mail</div> <div> : {ele.email}  </div></div>
                        <br/> 
                        <div className="email_part subs"> <div className="material-symbols-outlined box">diamond</div> <div> : {ele.subscription} subscription</div>   </div>
                        </div>

                        <div className="edit-delete-side">
                        <div className="email_part">
                           <div className="material-symbols-outlined box " style = {{color :"red"}}>Delete</div> <div className="delete-but">  Delete</div> <div className="space"></div>
                            <div className="material-symbols-outlined box" style = {{color :"green"}} >edit</div> <div style = {{color :"green"}}> Edit  </div>
                        </div>
                        <br />
                        <div className="email_part" style = {{color :"#F4B400"}}>
                           <div className="material-symbols-outlined box">calendar_month</div> <div style = {{color :"#F4B400"}}>Delivery Calendar</div>
                        </div>
                        <br/>
                        <div className="email_part" style = {{color :"#fff", backgroundColor :"green", padding: "1%", borderRadius: "2px"}}>
                           <div className="material-symbols-outlined box">pending_actions</div> <div style = {{color :"#fff"}}>Delivery Calendar</div>
                        </div>
                        
                        </div>

                        </div>

                        <br />
                        
                        <div className="collection-boxes">
                        <Block cName="gtype" head = "Onboarding Date" value = {ele.onBoardingDate} uniq ="1"  unit =""/>
                        <Block cName="wtype" head = "Total Items" value = {count1} uniq ="2"  unit =""/>
                        <Block cName="gtype" head = "Total Quantity" value = {quant1} uniq ="3" unit ="KG" />
                        <Block cName="wtype"head = "Price" value = {price1} uniq ="4"  unit =".00"/>
                        <Block cName="gtype" head = "Address " value = {ele.address} uniq ="5" unit =" "/>
                        </div>

                        <div className="items-in-the-page">
                        <br/>
                        <div className="eachItem_heading">
                          <div className="item_det"><p>Name</p></div>
                          <div className="item_det"><p>Company</p></div>
                          <div className="item_det"><p>Quantity</p></div>
                          <div className="item_det"><p>Price</p></div>
                        </div>
                        <br/>

                        
                        {ele.items?.map((i)=>{
                            price  = price +i.price;
                            quant = quant +i.quantity;
                            count++;
                          return (
                            <div key  = {i.id} className="eachItem">
                              <div className="item_det">{i.name}</div>
                              <div className="item_det">{i.company}</div>
                              <div className="item_det">{i.quantity}</div>
                              <div className="item_det">{i.price}</div>
                              <br/>
                            </div>
                          )
                        })}
                        </div>


                    </div>
                )
            }
            )}

        </div>
    )
}

export default Restrau;