import { createAsyncThunk } from "@reduxjs/toolkit";


export const addCustomerThunk = createAsyncThunk(
    'addCustomerThunk',
    async (details) => {
        const res = await fetch("https://localhost:7132/Customer/Add",
            {
                method: 'POST',
                body: JSON.stringify(details),
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