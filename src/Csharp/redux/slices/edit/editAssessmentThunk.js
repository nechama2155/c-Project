  import { createAsyncThunk } from "@reduxjs/toolkit";

export const editAssessmentThunk = createAsyncThunk(

    'editAssessmentThunk',

    async (details) => {
        console.log("Sending to server:", JSON.stringify(details, null, 2)); // לוג מפורט
        
        const response = await fetch(`https://localhost:7132/Assessment/Update`,{
            method: 'PUT',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        console.log("Server response status:", response.status); // הוסף לוג
        
        if (response.ok) {
         let data = await response.json();
         console.log("Server response data:", data);
         return data;
        }
        else {
            const errorText = await response.text();
            console.error("Server error response:", errorText);
            throw new Error(`Failed to update: ${response.status} - ${errorText}`);
        }
    }
);



