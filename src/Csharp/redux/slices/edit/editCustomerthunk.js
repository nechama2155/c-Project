
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editCustomerThunk = createAsyncThunk(

    'editCustomerThunk',

    async (details) => {
        const response = await fetch(`http://localhost:5278/Customer/Update`,{
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



