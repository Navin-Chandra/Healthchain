import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { participantLoginService } from './singup.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [participantLoginService]
})
export class SingupComponent implements OnInit {
  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          participantId = new FormControl("", Validators.required);
        
  
      
          userName = new FormControl("", Validators.required);
        
  
      
          password = new FormControl("", Validators.required);
        
  
      
          participants = new FormControl("", Validators.required);
        
  
      
          participantMailId = new FormControl("", Validators.required);
        
  
      
          participantPhoneNumber = new FormControl("", Validators.required);
        
  


  constructor(private serviceparticipantLogin:participantLoginService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          participantId:this.participantId,
        
    
        
          userName:this.userName,
        
    
        
          password:this.password,
        
    
        
          participants:this.participants,
        
    
        
          participantMailId:this.participantMailId,
        
    
        
          participantPhoneNumber:this.participantPhoneNumber
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceparticipantLogin.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.ey.healthchain.login.participantLogin",
      
        
          "participantId":this.participantId.value,
        
      
        
          "userName":this.userName.value,
        
      
        
          "password":this.password.value,
        
      
        
          "participants":this.participants.value,
        
      
        
          "participantMailId":this.participantMailId.value,
        
      
        
          "participantPhoneNumber":this.participantPhoneNumber.value
        
      
    };

    this.myForm.setValue({
      
        
          "participantId":null,
        
      
        
          "userName":null,
        
      
        
          "password":null,
        
      
        
          "participants":null,
        
      
        
          "participantMailId":null,
        
      
        
          "participantPhoneNumber":null
        
      
    });

    return this.serviceparticipantLogin.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "participantId":null,
        
      
        
          "userName":null,
        
      
        
          "password":null,
        
      
        
          "participants":null,
        
      
        
          "participantMailId":null,
        
      
        
          "participantPhoneNumber":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.ey.healthchain.login.participantLogin",
      
        
          
        
    
        
          
            "userName":this.userName.value,
          
        
    
        
          
            "password":this.password.value,
          
        
    
        
          
            "participants":this.participants.value,
          
        
    
        
          
            "participantMailId":this.participantMailId.value,
          
        
    
        
          
            "participantPhoneNumber":this.participantPhoneNumber.value
          
        
    
    };

    return this.serviceparticipantLogin.updateParticipant(form.get("participantId").value,this.participant)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceparticipantLogin.deleteParticipant(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceparticipantLogin.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "participantId":null,
          
        
          
            "userName":null,
          
        
          
            "password":null,
          
        
          
            "participants":null,
          
        
          
            "participantMailId":null,
          
        
          
            "participantPhoneNumber":null 
          
        
      };



      
        if(result.participantId){
          
            formObject.participantId = result.participantId;
          
        }else{
          formObject.participantId = null;
        }
      
        if(result.userName){
          
            formObject.userName = result.userName;
          
        }else{
          formObject.userName = null;
        }
      
        if(result.password){
          
            formObject.password = result.password;
          
        }else{
          formObject.password = null;
        }
      
        if(result.participants){
          
            formObject.participants = result.participants;
          
        }else{
          formObject.participants = null;
        }
      
        if(result.participantMailId){
          
            formObject.participantMailId = result.participantMailId;
          
        }else{
          formObject.participantMailId = null;
        }
      
        if(result.participantPhoneNumber){
          
            formObject.participantPhoneNumber = result.participantPhoneNumber;
          
        }else{
          formObject.participantPhoneNumber = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "participantId":null,
        
      
        
          "userName":null,
        
      
        
          "password":null,
        
      
        
          "participants":null,
        
      
        
          "participantMailId":null,
        
      
        
          "participantPhoneNumber":null 
        
      
      });
  }
}
