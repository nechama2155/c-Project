import {createSlice} from "@reduxjs/toolkit"
import { apartmentDetailsThunk } from "./get/apartmentDetailsThunk";
import { addApartmentDetailsThunk } from "./add/addApartmentDetailsThunk";
import { myApartmentDetailsThunk } from "./get by assessor/myApartmentDetailsThunk";
import { yourApartmentDetailsThunk } from "./get by customer/yourApartmentsDetailsThunk";
import { fullAssessorThunk } from "./get/fullAssessorThunk";
import { fullCustomerThunk } from "./get/fullCustomerThunk";
import { fullAssessorManagerThunk } from "./get/fullAssessorManagerThunk";



export const INITIALSTATE = {

    apartmentsDetails:[],  
    sucsses: false,
}

export const apartmentDetailsSlice = createSlice({
name: 'apartmentDetails',
initialState: INITIALSTATE,
reducers: {
    
},

extraReducers: (builder) => {
//get
    builder.addCase(apartmentDetailsThunk.pending, (state,action) => {
        state.loading = true;
    });
    builder.addCase(apartmentDetailsThunk.fulfilled, (state, action) => {
        state.apartmentsDetails = action.payload;
        state.sucsses = true;
        state.loading = false;
    });
    builder.addCase(apartmentDetailsThunk.rejected, (state, action) => {
        state.token =-1;
        state.loading = false;
    })
//add
builder.addCase(addApartmentDetailsThunk.pending, (state, action) => {
    state.loading = true;
});
builder.addCase(addApartmentDetailsThunk.fulfilled, (state, action) => {
    state.apartmentsDetails = action.payload;
    state.sucsses = true;
    state.loading = false;
});
builder.addCase(addApartmentDetailsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})



 //get apartmentDetails by assessor
 builder.addCase(myApartmentDetailsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(myApartmentDetailsThunk.fulfilled, (state, action) => {

    state.apartmentsDetails = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(myApartmentDetailsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
//get apartmentDetails by customer
builder.addCase(yourApartmentDetailsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(yourApartmentDetailsThunk.fulfilled, (state, action) => {

    state.apartmentsDetails = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(yourApartmentDetailsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})

//get full by assessor
builder.addCase(fullAssessorThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullAssessorThunk.fulfilled, (state, action) => {
  
    state.apartmentsDetails = action.payload.apartmentsDetails;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
  //get full by customer
builder.addCase(fullCustomerThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullCustomerThunk.fulfilled, (state, action) => {
  
    state.apartmentsDetails = action.payload.apartmentsDetails;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullCustomerThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
    //get full by manager
builder.addCase(fullAssessorManagerThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullAssessorManagerThunk.fulfilled, (state, action) => {
  
    state.apartmentsDetails = action.payload.apartmentsDetails;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorManagerThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
}
});

export const {} = apartmentDetailsSlice.actions;