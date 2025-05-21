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

            const text = await res.text();
            if(text === "wait")
                return text; 
            if(text===false)
                return false;
            return text;
            // const data = await res.json();
            // return data;
    }
        else return false;
        // throw new Error("Faild to fetch");
    }
)