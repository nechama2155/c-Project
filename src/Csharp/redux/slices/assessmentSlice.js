import { createSlice } from "@reduxjs/toolkit"
import { assessmentThunk } from "./get/assessmentThunk";
import { editAssessmentThunk } from "./edit/editAssessmentThunk";
import { myAssessmentsThunk } from "./get by assessor/myAssessmentsThunk";
import { yourAssessmentsThunk } from "./get by customer/yourAssessmentsThunk";
import { fullAssessorThunk } from "./get/fullAssessorThunk";
import { fullCustomerThunk } from "./get/fullCustomerThunk";
import { fullAssessorManagerThunk } from "./get/fullAssessorManagerThunk";


export const INITIALSTATE = {

    assessments: [],
    assessmentsEdit: {},
    isMy:{},
    sucsses: false,

}
export const assessmentSlice = createSlice({
    name: 'assessment',
    initialState: INITIALSTATE,
    reducers: {
        editAssessment(state, action) {
            state.assessmentsEdit = action.payload;
        },
        setIsMy(state,action){
        state.isMy = action.payload;
        }
    },

    extraReducers: (builder) => {

        builder.addCase(assessmentThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(assessmentThunk.fulfilled, (state, action) => {
            state.assessments = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        builder.addCase(assessmentThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //edit

        builder.addCase(editAssessmentThunk.pending, (state, action) => {
            //  state.loading = true;
        });
        builder.addCase(editAssessmentThunk.fulfilled, (state, action) =>{

            if(action.payload){
                state.assessments.forEach((element,ind)=>{
                if(element.assessmentId === state.isMy.assessmentId){
                  state.assessments[ind] = state.isMy;
                }
                });
            }
            // state.sucsses = action.payload;
        });
        builder.addCase(editAssessmentThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
             //get assessments by assessor
builder.addCase(myAssessmentsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(myAssessmentsThunk.fulfilled, (state, action) => {

    state.assessments = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(myAssessmentsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
    
   //get assessments by assessor
   builder.addCase(yourAssessmentsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(yourAssessmentsThunk.fulfilled, (state, action) => {

    state.assessments = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(yourAssessmentsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})

//get full by assessor
builder.addCase(fullAssessorThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullAssessorThunk.fulfilled, (state, action) => {
  
    state.assessments = action.payload.assessments;
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
  
    state.assessments = action.payload.assessments;
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
  
    state.assessments = action.payload.assessments;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorManagerThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
}

});
export const { editAssessment,setIsMy } = assessmentSlice.actions;