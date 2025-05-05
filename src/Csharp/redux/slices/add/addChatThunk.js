import { createAsyncThunk } from "@reduxjs/toolkit";


export const addChatThunk = createAsyncThunk(
    'addChatThunk',
    async (details) => {
        const res = await fetch("https://localhost:7132/Chat/Add",
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