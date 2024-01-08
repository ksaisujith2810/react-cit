import React from "react";
import { Student } from "./students";


export const StudentData=()=>{
    const stds=[
        {id:1,
        sName:"K.SaiSujith",
        sAge:25,
        sMarks:[{
            telugu:50,
            english:60,
            maths:75
        }]
       },
        {id:2,
        sName:"V.Yaswanth",
        sAge:24,
        sMarks:[{
            telugu:55,
            english:40,
            maths:65
        }]
       },
        {id:3,
        sName:"T.Vikas",
        sAge:26,
        sMarks:[{
            telugu:85,
            english:60,
            maths:55
        }]
       }
    ]
    
    return(
        <div>
            <h2>Students Data</h2>
            <Student stdData={stds} marks={stds.smarks}/>
        </div>
    )
}