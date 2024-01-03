import {useRef} from "react";
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper.jsx";
import { ToastContainer } from 'react-toastify';
import {Create} from "../../APIServices/ContCRUDServices.jsx";
import FullscreenLoader from "../Common/FullscreenLoader.jsx";
import {withRouter} from "react-router";

const CreateForm = (props) => {
    let ContactName,ContactEmail,Phone,Address,Pic,Loader = useRef();

    const SaveData = () => {
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
            Create(Contact_Name,Contact_Email,Phone_Num,Cont_Address,Image)
                .then((Result)=>{
                    Loader.classList.add("d-none")
                    if(Result===true){
                        SuccessToast("Data Save Success")
                        ContactName.value='';
                        ContactEmail.value='';
                        Phone.value='';
                        Address.value='';
                        Pic.value='';
                    }else{
                        ErrorToast("Request Failed");
                    }
                })
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="colmd-4 p-2">
                    <label>Contact Name</label>
                    <input ref={(input)=>ContactName=input} type="text" className="form-control"/>
                </div>
                <div className="colmd-4 p-2">
                    <label>Contact Email</label>
                    <input ref={(input)=>ContactEmail=input} type="text" className="form-control"/>
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
                    <button onClick={SaveData} className="btn btn-success w-100">save</button>
                    <ToastContainer />
                </div>
            </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullscreenLoader/>
            </div>
        </div>
    );
};

export default withRouter(CreateForm);