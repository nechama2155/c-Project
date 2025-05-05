
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editApplicationThunk = createAsyncThunk(

    'editApplicationThunk',

    async ({ details }) => {
        const response = await fetch(`https://localhost:5278/Applications/Update`,{
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



