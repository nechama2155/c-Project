import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginThunk = createAsyncThunk(
    'loginThunk',

    async (id) => {
        const res = await fetch(`http://localhost:5278/Assessor/whichType/${id}`,
            {
                method: 'GET',
                // body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json'
                }
               
            }
        )
        console.log("start");
        if (res.ok) {
            
        console.log("res:"+res);
        
            const data = await res.text();
            console.log(data);
           return data;
    
    }
        else throw new Error("Faild to fetch");
    }
)


