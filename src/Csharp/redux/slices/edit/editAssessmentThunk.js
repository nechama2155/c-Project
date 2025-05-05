
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editAssessmentThunk = createAsyncThunk(

    'editAssessmentThunk',

    async (details ) => {
        const response = await fetch(`https://localhost:7132/Assessment/Update`,{
            method: 'PUT',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        if (response.ok) {
         let data = await response.json();
         console.log("data:"+data);
         return data;
        }
        else {
            throw new Error('faild to fetch');
        }
    }
);



