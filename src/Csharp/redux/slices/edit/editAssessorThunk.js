
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editAssessorThunk = createAsyncThunk(

    'editAssessorThunk',

    async (details ) => {
        const response = await fetch(`https://localhost:7132/Assessor/Update`,{
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



