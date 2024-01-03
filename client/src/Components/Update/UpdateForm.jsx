import {ToastContainer} from "react-toastify";
import FullscreenLoader from "../Common/FullscreenLoader.jsx";
import {useEffect, useRef} from "react";
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import { ReadByID, Update} from "../../APIServices/ContCRUDServices";
import {withRouter} from "react-router";

const UpdateForm = (props) => {

    let ContactName,ContactEmail,Phone,Address,Pic,Loader = useRef();
    const UpdateData = () => {
        let Contact_Name = ContactName.value;
        let Contact_Email = ContactEmail.value;
        let Phone_Num = Phone.value;
        let Cont_Address = Address.value;
        let Image = Pic.value;

        if(isEmpty(Contact_Name)){
            ErrorToast("Contact Name Required");
        }
        else if(isEmpty(Contact_Email)){
            ErrorToast("Contact Email Required");
        }
        else if(isEmpty(Phone_Num)){
            ErrorToast("Contact Number Required");
        }
        else if(isEmpty(Cont_Address)){
            ErrorToast("Contact Address Required");
        }
        else if(isEmpty(Image)){
            ErrorToast("Contact Image Required");
        }
        else{
            Loader.classList.remove("d-none")
            Update(props.id,Contact_Name,Contact_Email,Phone_Num,Cont_Address,Image)
                .then((Result)=>{
                    Loader.classList.add("d-none")
                    if(Result===true){
                        SuccessToast("Data Save Success")
                        props.history.push("/read");
                    }else{
                        ErrorToast("Request Failed");
                    }
                })
        }
    }
    useEffect(()=>{
        ReadByID(props.id).then((Result)=>{
            if (Result && Result.length > 0) {
                ContactName.value = Result[0]['ContactName']
                ContactEmail.value = Result[0]['ContactEmail']
                Phone.value = Result[0]['Phone']
                Address.value = Result[0]['Address']
                Pic.value = Result[0]['Pic']
            } else {
                // Handle the case where Result is empty or undefined
            }
        })
    })


    return (
        <div className="container">
            <div className="row">
                <div className="colmd-4 p-2">
                    <label>Contact Name</label>
                    <input ref={(input)=>ContactName=input} type="text" className="form-control"/>
                </div>
                <div className="colmd-4 p-2">
                    <label>Contact Email</label>
                    <input ref={(input)=>ContactEmail=input}  type="text" className="form-control"/>
                </div>
                <div className="colmd-4 p-2">
                    <label>Phone Number</label>
                    <input ref={(input)=>Phone=input} type="text" className="form-control"/>
                </div>
                <div className="colmd-4 p-2">
                    <label>Address</label>
                    <input ref={(input)=>Address=input} type="text" className="form-control"/>
                </div><div className="colmd-4 p-2">
                <label>Picture</label>
                <input ref={(input)=>Pic=input} type="text" className="form-control"/>
            </div>
            </div>
            <br/>
            <div className="row">
                <div className="colmd-4 p-2">
                    <button onClick={UpdateData} className="btn btn-success w-100">save</button>
                    <ToastContainer />
                </div>
            </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullscreenLoader/>
            </div>
        </div>
    );
};

export default withRouter(UpdateForm);