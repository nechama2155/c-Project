  import { createAsyncThunk } from "@reduxjs/toolkit";

export const editApplicationThunk = createAsyncThunk(

    'editApplicationThunk',

    async (details) => {
        const response = await fetch(`https://localhost:7132/Applications/Update`,{
            method: 'PUT',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        if (response.ok) {
        //  let data = await response.json();
        //  console.log(data);
        //  return data;
        return  true;
        }
        else {
            throw new Error('Failed to fetch');
        }
    }
);



