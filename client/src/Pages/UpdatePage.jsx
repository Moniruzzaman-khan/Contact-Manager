import React from 'react';
import ContNavBar from "../Components/Common/ContNavBar.jsx";
import UpdateForm from "../Components/Update/UpdateForm.jsx";
import {useParams} from "react-router";

const UpdatePage = () => {
    const params = useParams();
    return (
        <div>
            <ContNavBar/>
            <UpdateForm id={params['id']}/>
        </div>
    );
};

export default UpdatePage;