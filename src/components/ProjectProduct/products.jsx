import React from "react";

export const Products = (props) => {
    // console.log('object',dataa)
    return(
        <>
            <h1>Products</h1>
            <table className="table table-success">
                <thead>
                    <tr>
                        <th>{props.ProductName}</th>
                        <th>{props.productprice}</th>
                        <th>Quantity</th>
                        <th>Product Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dataa.map((pro,index) => {
                        return(
                        <tr key={index}>
                            <td>{pro.pName}</td>
                            <td>{pro.price}</td>
                            <td>{pro.quantity}</td>
                            <td>{`${pro.price*pro.quantity}`}</td>
                        </tr>
                    )})}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{props.dataa.reduce((acc,curr)=>acc+ curr.price,0)}</td>
                        <td>{props.dataa.reduce((acc,curr)=>acc+ curr.quantity,0)}</td>
                        <td>{props.dataa.reduce((acc,curr)=> acc + curr.price* curr.quantity ,0)}</td>    
                    </tr>
                </tfoot>
            </table>
        </>
    )
};