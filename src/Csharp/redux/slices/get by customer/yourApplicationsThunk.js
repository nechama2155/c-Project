import { createAsyncThunk } from "@reduxjs/toolkit";


export const yourApplicationsThunk = createAsyncThunk(
    'yourApplicationsThunk',
    async (id) => {
        const res = await fetch(`https://localhost:7132/Customer/GetApplications/${id}`,
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