import { createAsyncThunk } from "@reduxjs/toolkit";


export const yourAssessorsThunk = createAsyncThunk(
    'yourAssessorsThunk',
    async (id) => {
        const res = await fetch(`https://localhost:7132/Customer/GetAssessors/${id}`,
            {  
                method: 'GET',
                // body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (res.ok) {
            const data = await res.json();
           return data;
    
    }
        else throw new Error("Faild to fetch");
    }
)