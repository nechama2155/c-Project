import { createSlice } from "@reduxjs/toolkit"
import { assessorThunk } from "./get/assessorThunk";
import { editAssessorThunk } from "./edit/editAssessorThunk";
import { deleteAssessorThunk } from "./delete/deleteAssessorThunk";
import { addAssessorThunk } from "./add/addAssessorThunk";
import { assessorByIdThunk } from "./get/assessorByIdThunk";
import { yourAssessorsThunk } from "./get by customer/yourAssessorsThunk";
import { fullCustomerThunk } from "./get/fullCustomerThunk";
import { fullAssessorManagerThunk } from "./get/fullAssessorManagerThunk";


export const INITIALSTATE = {

    sucsses: false,
    assessors: [],
    thisAssessor: {},
    assessorEdit:{},
    token:-1,
}

export const assessorSlice = createSlice({
    name: 'assessor',
    initialState: INITIALSTATE,
    reducers: {
        editAssessor(state,action){
            state.assessorEdit = action.payload;
        }
    },

    extraReducers: (builder) => {

        builder.addCase(assessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        // הוספת מקרה שהטנק הסתיים בהצלחה
        builder.addCase(assessorThunk.fulfilled, (state, action) => {

            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(assessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //getById
        builder.addCase(assessorByIdThunk.pending, (state, action) => {
            state.loading = true;
        });
        // הוספת מקרה שהטנק הסתיים בהצלחה
        builder.addCase(assessorByIdThunk.fulfilled, (state, action) => {

            state.thisAssessor = action.payload;
            state.token = 1;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(assessorByIdThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })

        //edit

        builder.addCase(editAssessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editAssessorThunk.fulfilled, (state, action) => {
         debugger
            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(editAssessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //delete
        builder.addCase(deleteAssessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteAssessorThunk.fulfilled, (state, action) => {

            // state.assessors.token = action.payload;
            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(deleteAssessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //add
        builder.addCase(addAssessorThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addAssessorThunk.fulfilled, (state, action) => {

           console.log(state.assessors);
            state.assessors = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(addAssessorThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
          //get assessors by customer
   builder.addCase(yourAssessorsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(yourAssessorsThunk.fulfilled, (state, action) => {

    state.assessors = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(yourAssessorsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
//get full by customer
builder.addCase(fullCustomerThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullCustomerThunk.fulfilled, (state, action) => {
  
    state.assessors = action.payload.assessors;
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
  
    state.assessors = action.payload.assessors;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorManagerThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
    }

});
export const {editAssessor}  = assessorSlice.actions;

