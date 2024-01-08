import React from "react";
// let Total =0;
export const Student=(props)=>{
    console.log(props)
    return(
    <>
    <h1>Student Details</h1>
    <table  className="table table-danger" style={{textAlign:"center"}}  >
        <thead>
            <tr>
                <th >std ID</th>
                <th>Std Name</th>
                <th>Age</th>
                <th colSpan={3} > Marks</th>
                <th>Total Marks</th>
                <th>Average</th>
                <th>Pass/Fail</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th rowSpan={3}>Telugu</th>
                <th rowSpan={3}>English</th>
                <th rowSpan={3}>Maths</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.stdData.map((item,index)=>{
            //    Total =(item.sMarks[0].telugu + item.sMarks[0].english + item.sMarks[0].maths);
                return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.sName}</td>
                        <td>{item.sAge}</td>
                        {item.sMarks.map((sum,index)=>{
                            return(
                               <>
                                   <td>{sum.telugu}</td>
                                    <td>{sum.english}</td>
                                    <td>{sum.maths}</td>
                                    <td>{`${sum.telugu+sum.english+sum.maths}`}</td>
                                    <td>{`${(sum.telugu+sum.english+sum.maths)/3}`}</td>
                                    <td>{`${((sum.telugu+sum.english+sum.maths)/3)>60?'Pass':'Fail'}`}</td>
                               </>
                            )
                        })}
                    </tr>
                )
            })}

            
        </tbody>
    </table>
    </>
    )
}