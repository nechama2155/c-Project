import { createSlice } from "@reduxjs/toolkit"
import { addChatThunk } from "./add/addChatThunk";
import { ChatsThunk } from "./get/ChatsThunk";
import { fullAssessorThunk } from "./get/fullAssessorThunk";
import { fullCustomerThunk } from "./get/fullCustomerThunk";
import { fullAssessorManagerThunk } from "./get/fullAssessorManagerThunk";

export const INITIALSTATE = {
    sucsses: false,
    applicationId:0,
    to:"",
    chats:[],
    getChats:[],
    sendChats:[],

}

export const chatSlice = createSlice({
name: 'chat',
initialState: INITIALSTATE,
reducers: {
  setApplicationId(state,action){
    state.applicationId = action.payload;
  } ,
  setTo(state,action){
    state.to = action.payload;
  } ,
  myChats(state,action){
    state.chats = action.payload;
  },
  setGetAndSend(state,action){
    state.getChats = action.payload.get;
    state.sendChats = action.payload.send;
  },
  setIsRead(state,action){
    state.chats = state.chats.map(c=>{
      if(c.chatId === action.payload){
        c.read = true;
      }
    });
    state.getChats = state.getChats.map(c=>{
      if(c.chatId === action.payload){
        c.read = true;
      }
    });
    state.sendChats = state.sendChats.map(c=>{
      if(c.chatId === action.payload){
        c.read = true;
      }
    });
  }
  
},
extraReducers: (builder) => {
//get
builder.addCase(ChatsThunk.pending, (state,action) => {
  // state.loading = true;
});

builder.addCase(ChatsThunk.fulfilled, (state, action) => {

  state.chats = action.payload;
  state.sucsses = true;
  state.loading = false;
});
builder.addCase(ChatsThunk.rejected, (state, action) => {
  state.token =-1;
  state.loading = false;
})
//get full  by assessor
builder.addCase(fullAssessorThunk.pending, (state,action) => {
  // state.loading = true;
});

builder.addCase(fullAssessorThunk.fulfilled, (state, action) => {

  state.chats = action.payload.chats;
  state.getChats = state.chats.filter(c=> c.from === "c");
  state.sendChats = state.chats.filter(c=> c.from === "a");
  state.sucsses = true;
  state.loading = false;
});
builder.addCase(fullAssessorThunk.rejected, (state, action) => {
  state.token =-1;
  state.loading = false;
})
//get full  by customer
builder.addCase(fullCustomerThunk.pending, (state,action) => {
  // state.loading = true;
});

builder.addCase(fullCustomerThunk.fulfilled, (state, action) => {

  state.chats = action.payload.chats;
  state.getChats = state.chats.filter(c=> c.from === "a");
  state.sendChats = state.chats.filter(c=> c.from === "c");
  state.sucsses = true;
  state.loading = false;
});
builder.addCase(fullCustomerThunk.rejected, (state, action) => {
  state.token =-1;
  state.loading = false;
})
//get full  by manager
builder.addCase(fullAssessorManagerThunk.pending, (state,action) => {
  // state.loading = true;
});

builder.addCase(fullAssessorManagerThunk.fulfilled, (state, action) => {

  state.chats = action.payload.chats;
  state.getChats = state.chats.filter(c=> c.from === "c");
  state.sendChats = state.chats.filter(c=> c.from === "a");
  state.sucsses = true;
  state.loading = false;
});
builder.addCase(fullAssessorManagerThunk.rejected, (state, action) => {
  state.token =-1;
  state.loading = false;
})
//add
builder.addCase(addChatThunk.pending, (state, action) => {
  state.loading = true;
});
builder.addCase(addChatThunk.fulfilled, (state, action) => {
  state.chats = action.payload;
  state.sucsses = true;
  state.loading = false;
});
builder.addCase(addChatThunk.rejected, (state, action) => {
  state.token = -1;
  state.loading = false;
})
}
});
export const {setApplicationId,setTo,myChats,setGetAndSend,setIsRead} = chatSlice.actions;