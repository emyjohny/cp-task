import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


const options ={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser;

  constructor(private http:HttpClient) { 
    
  }

  login(email,password){
const data={
  email,
  password
}
return this.http.post(environment.apiUrl+"/users/user/login",data,options)
  }

register(firstName,lastName,mobileNumber,email,password){
  const data={
    firstName,
    lastName,
    mobileNumber,
    email,
    password
  }
  return this.http.post(environment.apiUrl+"/users/user/create",data)
}
}
