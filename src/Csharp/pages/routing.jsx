
import { Route, Routes } from "react-router-dom"
import { Login } from "./login"
import { Home } from "./home"
import { Customers } from "./Customer/customers"
import { Assessors } from "./Assessor/assessors"
import { Assessment } from "./Assessment/assessment"
import { Applications } from "./Application/applications"
import { ApartmentDetails } from "./ApartmentDetails/apartmentDetails";
import { AddAssessor } from "./Assessor/addAssessor"
import { EditAssessor } from "./Assessor/editAssessor";
import { AddCustomer } from "./Customer/addCustomer"
import { EditCustomer } from "./Customer/editCustomer"
import { NewApplication } from "./newApplication"
import { About } from "./about"
import { MyDetails } from "./myDetails"
import { LastChats } from "./lastChats"
import { NewChat } from "./newChat"
import { EditAssessment } from "./Assessment/editAssessment"
import { FullApplications } from "./fullApplications"
import { Folder } from "@mui/icons-material"
import Folders from "./folders"
import FoldersDemo from "./folderDemo"
import FilePreview from "./file"
// import { Folders } from "./folders"



export const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path={'home'} element={<Home />} >
                {/* <Route path={'home/'} element={<About/>} /> */}
                <Route path={'about'} element={<About />} />
                <Route path={'customers'} element={<Customers />} >
                    <Route path={'addCustomer'} element={<AddCustomer />} />
                    <Route path={'editCustomer'} element={<EditCustomer />} />
                    <Route path={'myDetails'} element={<MyDetails />} />
                    {/* <Route path={'full'} element={<FullApplications />} /> */}
                </Route>
                <Route path={'fullApplications'} element={<FullApplications />} >
                    <Route path={'newChat'} element={<NewChat />} />
                </Route>
                <Route path={'lastChats'} element={<LastChats />} />
                <Route path={'assessors'} element={<Assessors />} >
                    <Route path={'editAssessor'} element={<EditAssessor />} />
                    <Route path={'addAssessor'} element={<AddAssessor />} />
                </Route>
                <Route path={'assessments'} element={<Assessment />} >
                    <Route path={'editAssessment'} element={<EditAssessment />} />
                </Route>
                <Route path={'applications'} element={<Applications />} />
                <Route path={'newApplication'} element={<NewApplication />} />
                <Route path={'apartmentDetails'} element={<ApartmentDetails />} />
                <Route path={'folders'} element={<Folders />} />
                <Route path={'folderDemo'} element={<FoldersDemo/>} />
                <Route path={'filePreview'} element={<FilePreview/>} />


            </Route>



        </Routes>
    </>
}
