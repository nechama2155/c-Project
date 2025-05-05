import {createSlice} from "@reduxjs/toolkit"
import { loginThunk } from "./loginThunk";


export const INITIALSTATE = {
    users:{
        userId:"",
        token:null,
    },
 t:null,
sucsses: false,
}

export const userSlice = createSlice({
name: 'user',
initialState: INITIALSTATE,
reducers: {
 addUser(state,action){
    state.users.userId= action.payload;
   
} ,
setType(state,action){
    state.t = action.payload;
   
}
},

extraReducers: (builder) => {

    builder.addCase(loginThunk.pending, (state,action) => {
        state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.t = action.payload;
        state.sucsses = true;
        state.loading = false;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
    })

}

});
export const {addUser,setType} = userSlice.actions;
