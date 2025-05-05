import { createAsyncThunk } from "@reduxjs/toolkit";


export const myApartmentDetailsThunk = createAsyncThunk(
    'myApartmentDetailsThunk',
    async (id) => {
        const res = await fetch(`https://localhost:7132/Assessor/GetApartmentsDetails/${id}`,
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