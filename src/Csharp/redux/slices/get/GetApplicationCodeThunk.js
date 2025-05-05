import { createAsyncThunk } from "@reduxjs/toolkit";


export const getApplicationCodeThunk = createAsyncThunk(
    'getApplicationCodeThunk',
    async () => {
        const res = await fetch("http://localhost:5278/Applications/GetApplicationCode"
        )

        if (res.ok) {
            const data = await res.text();
            return data;
        }
        else throw new Error("Faild to fetch");
    }
)


