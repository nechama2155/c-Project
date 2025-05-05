import { createAsyncThunk } from "@reduxjs/toolkit";


export const addApplicationThunk = createAsyncThunk(
    'addApplicationThunk',
    async (details) => {
        
        const res = await fetch("https://localhost:7132/Applications/Add",
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
            if(data==false)
                return null;
            return data;
    }
        else throw new Error("Faild to fetch");
    }
)