

import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAssessorThunk = createAsyncThunk(

    'deleteAssessorThunk',

    async ( id ) => {
        const response = await fetch(`https://localhost:7132/Assessor/Delete/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        if (response.ok) {
        const data = await response.json();
         return data;
        }
        else {
            throw new Error('faild to fetch');
        }
    }
);