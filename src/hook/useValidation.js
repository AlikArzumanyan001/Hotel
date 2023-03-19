import { useState } from "react";

export default function(){
    const [eror,setEror] = useState()
    const [erordata,setErordata] = useState()
    const [erorname,seterorname] = useState()
    function Validation(value,type){
        let name = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
        let data =  /^\d{4}-\d{2}-\d{2}$/;
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(value) && type === "email"){
            setEror("Invalid Email")
        }else if(regEmail.test(value) && type === "email"){
            setEror("True Email")
        }else if(!name.test(value) && type === "text"){
            seterorname("Invalid Name")
        }else if(name.test(value) && type === "text"){
            seterorname("True Name")
        }else if(!data.test(value) && type === "date"){
            setErordata("Invalid Date")
        }else if(data.test(value) && type === "date"){
            setErordata("True Date")
        }
    }

    return [eror,erordata,erorname,Validation]
}