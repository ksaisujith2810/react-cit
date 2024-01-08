import React from "react";
import { Products } from "./products";

export const Data=()=>{
    const product = [
        {
            pName:"product1",
            price:200,
            quantity:20
        },
        {
            pName:"product2",
            price:250,
            quantity:25
        },
        {
            pName:"product1",
            price:300,
            quantity:30
        },
    ]
    return(
        <div>
            <Products dataa={product} ProductName={'Product Name'} productprice={'ProductPrice'} productQuantity={'ProductQuantity'}/>
        </div>
    )
}