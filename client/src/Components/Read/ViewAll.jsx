import {useEffect, useState} from "react";
import {Delete, Read} from "../../APIServices/ContCRUDServices.jsx";
import FullscreenLoader from "../Common/FullscreenLoader.jsx";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper.jsx";
import {ToastContainer} from "react-toastify";
import {withRouter} from "react-router";


const ViewAll = (props) => {


    let [DataList, setDataList] = useState([])

    useEffect(() => {
        Read().then((Result)=>{
            setDataList(Result);
        })
    },[])


    const DeleteItem=(id)=>{
        Delete(id).then((result)=>{
            if(result===true){
                SuccessToast("Delete Success")
                props.history.push("/read")
            }
            else{
                ErrorToast("Request Fail Try Again");
            }
        })
    }

    const UpdateItem=(id)=>{
        props.history.push("/update/"+id)
    }

    if(DataList.length>0){
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Contact Name</th>
                        <th>Contact Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        DataList.map((item,i)=>{
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td>{item.ContactName}</td>
                                    <td>{item.ContactEmail}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Address}</td>
                                    <td><img className="w-50 h-auto" src={item.Pic}/></td>
                                    <td><button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger mx-1"><i/>Delete</button>
                                        <button onClick={UpdateItem.bind(this,item._id)} className="btn  btn-success "><i/>Update</button>
                                        <ToastContainer/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }else{
        return (
            <div>
                <FullscreenLoader/>
            </div>
        )
    }

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Contact Name</th>
                    <th>Contact Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default withRouter(ViewAll);