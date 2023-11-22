import { Fragment } from "react";
import { redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/auth/Login';
import { getListUser } from "../Util/auth";
import { authActions } from "../store";

const LoginPage = () => {
    return (
        <Fragment>
            <Login />
        </Fragment>
    );
}

export default LoginPage;

export async function action({request}){
    let listUser = getListUser() ?? [];
    const data = await request.formData();

    //Validate Request
    if(data.get('email') === '' || data.get('password') === '' ){
      return{
        message: 'Please enter email and password'
      }
    }

    //Check Login
    for(let key in listUser){
      if(data.get('email') === listUser[key].email && data.get('password') === listUser[key].password){
        const currentUser = {
            email: listUser[key].email,
            fullName: listUser[key].fullName,
            phone: listUser[key].phone          
        };

        localStorage.setItem("currentUserAssignment3", JSON.stringify(currentUser));

        return redirect('/');
      }
      else{
        return{
            message: 'Wrong email or password'
          }
      }
    }
}