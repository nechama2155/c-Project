import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";
import { customerSlice } from "./slices/customerSlice";
import { assessorSlice } from "./slices/assessorsSlice";
import { userSlice } from "./slices/userSlice";
import { assessmentSlice } from "./slices/assessmentSlice";
import { applicationSlice } from "./slices/applicationsSlice";
import { apartmentDetailsSlice } from "./slices/apartmentDetailsSlice";
import { chatSlice } from "./slices/chatSlice";
const reducers = combineSlices(userSlice,customerSlice,assessorSlice,assessmentSlice,applicationSlice,apartmentDetailsSlice,chatSlice);

export const STORE = configureStore({
    reducer: reducers
    
})