







import { createAsyncThunk } from "@reduxjs/toolkit";


export const fullAssessorThunk = createAsyncThunk(
    'fullAssessorThunk',
    async (id) => {
        const res = await fetch(`http://localhost:5278/Assessor/GetFullA/${id}`,
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