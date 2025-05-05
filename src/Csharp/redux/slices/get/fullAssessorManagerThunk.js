import { createAsyncThunk } from "@reduxjs/toolkit";


export const fullAssessorManagerThunk = createAsyncThunk(
    'fullAssessorManagerThunk',
    async () => {
        const res = await fetch(`http://localhost:5278/Assessor/GetFullM`,
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