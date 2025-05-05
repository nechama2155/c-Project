import { createAsyncThunk } from "@reduxjs/toolkit";


export const ChatsThunk = createAsyncThunk(
    'ChatsThunk',
    async (id) => {
        const res = await fetch(`https://localhost:7132/Chat/GetAll`,
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