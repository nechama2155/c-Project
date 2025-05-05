
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCustomerThunk = createAsyncThunk(

    'deleteCustomerThunk',

    async ( id ) => {
        const response = await fetch(`https://localhost:7132/Customer/Delete/${id}`,
        {
            method: 'DELETE',
           // body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        if (response.ok) {
        //  let data = await response.json();
        //  console.log(data);
        const data = await response.json();
         return data;
        }
        else {
            throw new Error('faild to fetch');
        }
    }
);