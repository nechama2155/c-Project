import {createSlice} from "@reduxjs/toolkit"
import { customerThunk } from "./get/customerThunk";
import { editCustomerThunk } from "./edit/editCustomerthunk";
import { deleteCustomerThunk } from "./delete/deleteCustomerThunk ";
import { addCustomerThunk } from "./add/addCustomerThunk ";
import { customerByIdThunk } from "./get/customerByIdThunk";
import { myCustomersThunk } from "./get by assessor/myCustomersThunk";
import { fullAssessorThunk } from "./get/fullAssessorThunk";
import { fullAssessorManagerThunk } from "./get/fullAssessorManagerThunk";


export const INITIALSTATE = {
   
    sucsses: false,
    customers:[],
    thisCustomer:[],
    customerEdit:{},
    customerChose:{},
   token:-1
}

export const customerSlice = createSlice({
name: 'customer',
initialState: INITIALSTATE,
reducers: {
    editCustomer(state,action){
        state.customerEdit = action.payload;
    },
    setCustomerChose(state,action){
        state.customerChose = action.payload;
    },
    
},

extraReducers: (builder) => {
//get
    builder.addCase(customerThunk.pending, (state,action) => {
        // state.loading = true;
    });
   
    builder.addCase(customerThunk.fulfilled, (state, action) => {
     
        state.customers = action.payload;
        state.sucsses = true;
        state.loading = false;
    });
    builder.addCase(customerThunk.rejected, (state, action) => {
        state.token =-1;
        state.loading = false;
    })
    //getById
    builder.addCase(customerByIdThunk.pending, (state,action) => {
        state.loading = true;
    });
   
    builder.addCase(customerByIdThunk.fulfilled, (state, action) => {
     
        state.thisCustomer = action.payload;
        state.token = 1;
        state.sucsses = true;
        state.loading = false;
    });
    builder.addCase(customerByIdThunk.rejected, (state, action) => {
        state.token =-1;
        state.loading = false;
    })
//edit

builder.addCase(editCustomerThunk.pending, (state, action) => {
    //  state.loading = true;
});
builder.addCase(editCustomerThunk.fulfilled, (state, action) => {
    state.customers = action.payload;
    state.sucsses = true;
    // state.loading = false
});
builder.addCase(editCustomerThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
//delete
builder.addCase(deleteCustomerThunk.pending, (state, action) => {
    state.loading = true;
});
builder.addCase(deleteCustomerThunk.fulfilled, (state, action) => {

    state.customers = action.payload;
    state.sucsses = true;
    state.loading = false;
});

builder.addCase(deleteCustomerThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
//add
builder.addCase(addCustomerThunk.pending, (state, action) => {
    state.loading = true;
});
builder.addCase(addCustomerThunk.fulfilled, (state, action) => {
    state.customers = action.payload;
    state.sucsses = true;
    state.loading = false;
});
builder.addCase(addCustomerThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
//get customers by assessor
builder.addCase(myCustomersThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(myCustomersThunk.fulfilled, (state, action) => {

    state.customers = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(myCustomersThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
//get full by assessor
builder.addCase(fullAssessorThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullAssessorThunk.fulfilled, (state, action) => {
  
    state.customers = action.payload.customers;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
  //get full by manager
builder.addCase(fullAssessorManagerThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullAssessorManagerThunk.fulfilled, (state, action) => {
  
    state.customers = action.payload.customers;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorManagerThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
}

});
export const {editCustomer,setCustomerChose} = customerSlice.actions;