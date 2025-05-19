import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
import { useNavigate } from "react-router-dom";
import { myApplicationsThunk } from "../../redux/slices/get by assessor/myApplicationsThunk";
import { yourApplicationsThunk } from "../../redux/slices/get by customer/yourApplicationsThunk";

export const Applications = () => {
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const dispatch = useDispatch();
    const applicationsDetails = useSelector(state => state.application.applications);
    const type = useSelector(state => state.user.t);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);


    // useEffect(() => {
    //     if (applicationsDetails.length === 0) {
    //         if (type === "a") {
    //             if (thisAssessor.isManager)
    //                 dispatch(applicationThunk());
    //             // else
    //                 // dispatch(myApplicationsThunk(thisAssessor.assessorId));
    //         }
    //         else if (type == 'c')
    //             dispatch(yourApplicationsThunk(thisCustomer.customerId));
    //     }
    // }, [])
    
    return <div >
        {applicationsDetails.length > 0 && <table>
            <thead>
                <tr>
                    <th>applicationId</th>
                    <th>assessorId</th>
                    <td>applicationDate</td>
                    <td>lastApplicationDate</td>
                    <td>applicationStatus</td>

                </tr>
            </thead>
            <tbody>

                {applicationsDetails && applicationsDetails.map(d => {
                    return <tr key={d.applicationId} onClick={() => { setSelected(true); setSelectedAs(d) }} className={(selected && selectedAs === d) ? "s" : "r"}>
                        <td>{d.applicationId}</td>
                        <td>{d.assessorId}</td>
                        <td>{d.applicationDate}</td>
                        <td>{d.lastApplicationDate}</td>
                        <td>{d.applicationStatus}</td>

                    </tr>
                })}

            </tbody>
        </table>}
       
    </div>

}