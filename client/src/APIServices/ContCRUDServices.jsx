import axios from "axios";

export function Create(ContactName,ContactEmail,Phone,Address,Pic){
    let URL="http://localhost:5000/api/v1/createContact";
    let PostBody={
        ContactName:ContactName,
        ContactEmail:ContactEmail,
        Phone:Phone,
        Address:Address,
        Pic:Pic
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}



export function Read(){
    let URL="http://localhost:5000/api/v1/readContact";
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}



export function ReadByID(id){
    let URL="http://localhost:5000/api/v1/readContactById/" +id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}



export function Delete(id){
    let URL="http://localhost:5000/api/v1/deleteContact/"+id;
    return  axios.get(URL).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}



export function Update(id,ContactName,ContactEmail,Phone,Address,Pic){
    let URL="http://localhost:5000/api/v1/updateContact/"+id;
    let PostBody={
        ContactName:ContactName,
        ContactEmail:ContactEmail,
        Phone:Phone,
        Address:Address,
        Pic:Pic
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

