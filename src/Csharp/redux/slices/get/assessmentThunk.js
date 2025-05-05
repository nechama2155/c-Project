import { createAsyncThunk } from "@reduxjs/toolkit";


export const assessmentThunk = createAsyncThunk(
    'assessmentThunk',
    async () => {
        debugger
        const res = await fetch(`http://localhost:5278/Assessment/GetAll`,
            {
                method: 'GET',
                // body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (res.ok) {
            debugger
            const data = await res.json();
            console.log(data);
           return data;
    
    }
        else throw new Error("Faild to fetch");
    }
)