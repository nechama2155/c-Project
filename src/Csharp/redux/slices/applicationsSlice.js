import { createSlice } from "@reduxjs/toolkit"
import { applicationThunk } from "./get/applicatiionThunk";
import { editApplicationThunk } from "./edit/editApplicationThunk";
import { getApplicationCodeThunk } from "./get/GetApplicationCodeThunk";
import { addApplicationThunk } from "./add/addApplicationThunk";
import { myApplicationsThunk } from "./get by assessor/myApplicationsThunk";
import { yourApplicationsThunk } from "./get by customer/yourApplicationsThunk";
import { fullAssessorThunk } from "./get/fullAssessorThunk";
import { fullCustomerThunk } from "./get/fullCustomerThunk";
import { fullAssessorManagerThunk } from "./get/fullAssessorManagerThunk";

export const INITIALSTATE = {

    applications: [],
    myApplications: [],
    applicationEdit: {},
    thisAssessor:[],
    sucsses: false,
    code:-1,
    wait: false,

}

export const applicationSlice = createSlice({
    name: 'application',
    initialState: INITIALSTATE,
    reducers: {
        editApplication(state, action) {
            state.applicationEdit = action.payload;
        }
    },

    extraReducers: (builder) => {
        //get
        builder.addCase(applicationThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(applicationThunk.fulfilled, (state, action) => {
            state.applications = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        builder.addCase(applicationThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
        })
        //get code 
        builder.addCase(getApplicationCodeThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getApplicationCodeThunk.fulfilled, (state, action) => {
            state.code = action.payload;
            state.sucsses = true;
            state.loading = false;
        });
        builder.addCase(getApplicationCodeThunk.rejected, (state, action) => {
            // state.token =-1;
            state.loading = false;
        })
        //edit

        builder.addCase(editApplicationThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editApplicationThunk.fulfilled, (state, action) => {
            // מצא את ה-application שעודכן
            const updatedApplicationIndex = state.applications.findIndex(
                app => app.applicationId === action.meta.arg.applicationId
            );
            
            if (updatedApplicationIndex !== -1) {
                const currentStatus = state.applications[updatedApplicationIndex].applicationStatus;
                
                // עדכן את הסטטוס בהתאם לסטטוס הנוכחי
                if (currentStatus === 11) {
                    // שמאי רגיל: 11 -> 12
                    state.applications[updatedApplicationIndex].applicationStatus = 12;
                } else if (currentStatus === 12) {
                    // מנהל שמאי: 12 -> 13
                    state.applications[updatedApplicationIndex].applicationStatus = 13;
                }
                
                // עדכן גם את תאריך העדכון האחרון
                state.applications[updatedApplicationIndex].lastApplicationDate = new Date().toISOString();
            }
            
            state.loading = false;
            state.success = true;
        });
        builder.addCase(editApplicationThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //add
        builder.addCase(addApplicationThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addApplicationThunk.fulfilled, (state, action) => {
           // state.applications = action.payload;
           var arr=[]
           if(action.payload === "wait"){
               state.wait = true;
           }
           else if(!action.payload){
               state.sucsses = false;
           }
           else{
            arr=[...arr,action.payload]
            state.thisAssessor =arr;
            state.sucsses = true;
            state.loading = false;
           }
         
        });
        // הוספת מקרה שהטנק נכשל 
        builder.addCase(addApplicationThunk.rejected, (state, action) => {
            state.token = -1;
            state.loading = false;
            state.sucsses = false;
        })
        //get applications by assessor
builder.addCase(myApplicationsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(myApplicationsThunk.fulfilled, (state, action) => {

    state.applications = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(myApplicationsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
   //get applications by customer
   builder.addCase(yourApplicationsThunk.pending, (state, action) => {
    state.loading = true;
});
// הוספת מקרה שהטנק הסתיים בהצלחה
builder.addCase(yourApplicationsThunk.fulfilled, (state, action) => {

    state.myApplications = action.payload;
    state.sucsses = true;
    state.loading = false;
});
// הוספת מקרה שהטנק נכשל 
builder.addCase(yourApplicationsThunk.rejected, (state, action) => {
    state.token = -1;
    state.loading = false;
})
   
//get full by assessor
builder.addCase(fullAssessorThunk.pending, (state,action) => {
    // state.loading = true;
  });
  
  builder.addCase(fullAssessorThunk.fulfilled, (state, action) => {
  
    state.applications = action.payload.applications;
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
  
    state.applications = action.payload.applications;
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
  
    state.applications = action.payload.applications;
    state.sucsses = true;
    state.loading = false;
  });
  builder.addCase(fullAssessorManagerThunk.rejected, (state, action) => {
    state.token =-1;
    state.loading = false;
  })
}



});
export const { editApplication } = applicationSlice.actions;