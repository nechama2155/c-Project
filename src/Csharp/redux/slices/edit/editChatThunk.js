
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editChatThunk = createAsyncThunk(

    'editChatThunk',

    async (details) => {
        const response = await fetch(`https://localhost:7132/Chat/Update`,{
            method: 'PUT',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        if (response.ok) {
         let data = await response.json();
         console.log(data);
         return data;
        }
        else {
            throw new Error('faild to fetch');
        }
    }
);



