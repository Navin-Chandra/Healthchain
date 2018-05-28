import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginService } from './login.service';
import { participantLogin } from '../org.ey.healthchain.login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { validateConfig } from '@angular/router/src/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[loginService]
})
export class LoginComponent implements OnInit {

  constructor(private serviceloginTransaction:loginService, private router : Router) { }

  private errorMessage;
  private participant;

  public users : participantLogin;

  ngOnInit() {
  }

  submitLogin(login)
 {
   var loginObj = login.value;
   console.log('userName>>> '+loginObj.userName);
   console.log('passWord>>> '+loginObj.password);
   /*this.serviceloginTransaction.getparticipant(loginObj.userName,loginObj.password).subscribe(
     val =>this.users = val
   );*/
   this.serviceloginTransaction.getparticipant(loginObj.userName,loginObj.password)
    .toPromise()
    .then((participant)=>{
      this.users = participant[0]
     if(this.users.userName!=null){
     console.log("user name is !!!"+this.users.userName);
     this.router.navigate(['dashboard']);
     }
    })
    .catch(this.handlePromiseError)
 }

 signUp()
 {
   this.router.navigate(['signup']);
 }

 handlePromiseError(error : Response){
   console.error(error);
   throw(error);
 }
}
