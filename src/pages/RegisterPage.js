import { Fragment } from "react";
import Register from '../components/auth/Register';
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getListUser } from "../Util/auth";

const RegisterPage = () => {
  return <Register />;
}

export default RegisterPage;

export async function action({request}){
    let listUser = getListUser() ?? [];
    const data = await request.formData();

    //Validate Request
    if(data.get('email') === '' || data.get('password') === '' || data.get('fullname') === '' || data.get('phone') === ''){
      return{
        message: 'Please enter complete'
      }
    }

    if(data.get('password').length <= 8){
      return{
        message: 'Password must be more than 8'
      }
    }

    for(let key in listUser){
      if(data.get('email') === listUser[key].email){
        return{
          message: 'Email already exists'
        }
      }
    }

    //Add new User
    const newUser = {
      email: data.get('email'),
      password: data.get('password'),
      fullName: data.get('fullname'),
      phone: data.get('phone')
    }
    
    listUser.push(newUser);
    localStorage.setItem('ListUserAssigniment3', JSON.stringify(listUser));

    return redirect('/');
}