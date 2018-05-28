/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { receipientsService } from './receipients.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-receipients',
	templateUrl: './receipients.component.html',
	styleUrls: ['./receipients.component.css'],
  providers: [receipientsService]
})
export class receipientsComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          receipientId = new FormControl("", Validators.required);
        
  
      
          aadharNumber = new FormControl("", Validators.required);
        
  
      
          receipientFirstName = new FormControl("", Validators.required);
        
  
      
          receipientLastName = new FormControl("", Validators.required);
        
  
      
          receipientDob = new FormControl("", Validators.required);
        
  
      
          receipientAge = new FormControl("", Validators.required);
        
  
      
          receipientGender = new FormControl("", Validators.required);
        
  
      
          receipientPhoneNumber = new FormControl("", Validators.required);
        
  
      
          receipientEmailId = new FormControl("", Validators.required);
        
  
      
          receipientMotherTongue = new FormControl("", Validators.required);
        
  
      
          receipientEthnicity = new FormControl("", Validators.required);
        
  
      
          receipientBloodGroup = new FormControl("", Validators.required);
        
  
      
          receipientHeight = new FormControl("", Validators.required);
        
  
      
          receipientWeight = new FormControl("", Validators.required);
        
  
      
          receipientCreateTime = new FormControl("", Validators.required);
        
  
      
          receipientRequiredOrgan = new FormControl("", Validators.required);
        
  
      
          receipientReasonForRequeset = new FormControl("", Validators.required);
        
  
      
          receipientAntigenData = new FormControl("", Validators.required);
        
  


  constructor(private servicereceipients:receipientsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          receipientId:this.receipientId,
        
    
        
          aadharNumber:this.aadharNumber,
        
    
        
          receipientFirstName:this.receipientFirstName,
        
    
        
          receipientLastName:this.receipientLastName,
        
    
        
          receipientDob:this.receipientDob,
        
    
        
          receipientAge:this.receipientAge,
        
    
        
          receipientGender:this.receipientGender,
        
    
        
          receipientPhoneNumber:this.receipientPhoneNumber,
        
    
        
          receipientEmailId:this.receipientEmailId,
        
    
        
          receipientMotherTongue:this.receipientMotherTongue,
        
    
        
          receipientEthnicity:this.receipientEthnicity,
        
    
        
          receipientBloodGroup:this.receipientBloodGroup,
        
    
        
          receipientHeight:this.receipientHeight,
        
    
        
          receipientWeight:this.receipientWeight,
        
    
        
          receipientCreateTime:this.receipientCreateTime,
        
    
        
          receipientRequiredOrgan:this.receipientRequiredOrgan,
        
    
        
          receipientReasonForRequeset:this.receipientReasonForRequeset,
        
    
        
          receipientAntigenData:this.receipientAntigenData
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicereceipients.getAll()
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
      $class: "org.ey.healthchain.receipients",
      
        
          "receipientId":this.receipientId.value,
        
      
        
          "aadharNumber":this.aadharNumber.value,
        
      
        
          "receipientFirstName":this.receipientFirstName.value,
        
      
        
          "receipientLastName":this.receipientLastName.value,
        
      
        
          "receipientDob":this.receipientDob.value,
        
      
        
          "receipientAge":this.receipientAge.value,
        
      
        
          "receipientGender":this.receipientGender.value,
        
      
        
          "receipientPhoneNumber":this.receipientPhoneNumber.value,
        
      
        
          "receipientEmailId":this.receipientEmailId.value,
        
      
        
          "receipientMotherTongue":this.receipientMotherTongue.value,
        
      
        
          "receipientEthnicity":this.receipientEthnicity.value,
        
      
        
          "receipientBloodGroup":this.receipientBloodGroup.value,
        
      
        
          "receipientHeight":this.receipientHeight.value,
        
      
        
          "receipientWeight":this.receipientWeight.value,
        
      
        
          "receipientCreateTime":this.receipientCreateTime.value,
        
      
        
          "receipientRequiredOrgan":this.receipientRequiredOrgan.value,
        
      
        
          "receipientReasonForRequeset":this.receipientReasonForRequeset.value,
        
      
        
          "receipientAntigenData":this.receipientAntigenData.value
        
      
    };

    this.myForm.setValue({
      
        
          "receipientId":null,
        
      
        
          "aadharNumber":null,
        
      
        
          "receipientFirstName":null,
        
      
        
          "receipientLastName":null,
        
      
        
          "receipientDob":null,
        
      
        
          "receipientAge":null,
        
      
        
          "receipientGender":null,
        
      
        
          "receipientPhoneNumber":null,
        
      
        
          "receipientEmailId":null,
        
      
        
          "receipientMotherTongue":null,
        
      
        
          "receipientEthnicity":null,
        
      
        
          "receipientBloodGroup":null,
        
      
        
          "receipientHeight":null,
        
      
        
          "receipientWeight":null,
        
      
        
          "receipientCreateTime":null,
        
      
        
          "receipientRequiredOrgan":null,
        
      
        
          "receipientReasonForRequeset":null,
        
      
        
          "receipientAntigenData":null
        
      
    });

    return this.servicereceipients.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "receipientId":null,
        
      
        
          "aadharNumber":null,
        
      
        
          "receipientFirstName":null,
        
      
        
          "receipientLastName":null,
        
      
        
          "receipientDob":null,
        
      
        
          "receipientAge":null,
        
      
        
          "receipientGender":null,
        
      
        
          "receipientPhoneNumber":null,
        
      
        
          "receipientEmailId":null,
        
      
        
          "receipientMotherTongue":null,
        
      
        
          "receipientEthnicity":null,
        
      
        
          "receipientBloodGroup":null,
        
      
        
          "receipientHeight":null,
        
      
        
          "receipientWeight":null,
        
      
        
          "receipientCreateTime":null,
        
      
        
          "receipientRequiredOrgan":null,
        
      
        
          "receipientReasonForRequeset":null,
        
      
        
          "receipientAntigenData":null 
        
      
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
      $class: "org.ey.healthchain.receipients",
      
        
          
        
    
        
          
            "aadharNumber":this.aadharNumber.value,
          
        
    
        
          
            "receipientFirstName":this.receipientFirstName.value,
          
        
    
        
          
            "receipientLastName":this.receipientLastName.value,
          
        
    
        
          
            "receipientDob":this.receipientDob.value,
          
        
    
        
          
            "receipientAge":this.receipientAge.value,
          
        
    
        
          
            "receipientGender":this.receipientGender.value,
          
        
    
        
          
            "receipientPhoneNumber":this.receipientPhoneNumber.value,
          
        
    
        
          
            "receipientEmailId":this.receipientEmailId.value,
          
        
    
        
          
            "receipientMotherTongue":this.receipientMotherTongue.value,
          
        
    
        
          
            "receipientEthnicity":this.receipientEthnicity.value,
          
        
    
        
          
            "receipientBloodGroup":this.receipientBloodGroup.value,
          
        
    
        
          
            "receipientHeight":this.receipientHeight.value,
          
        
    
        
          
            "receipientWeight":this.receipientWeight.value,
          
        
    
        
          
            "receipientCreateTime":this.receipientCreateTime.value,
          
        
    
        
          
            "receipientRequiredOrgan":this.receipientRequiredOrgan.value,
          
        
    
        
          
            "receipientReasonForRequeset":this.receipientReasonForRequeset.value,
          
        
    
        
          
            "receipientAntigenData":this.receipientAntigenData.value
          
        
    
    };

    return this.servicereceipients.updateParticipant(form.get("receipientId").value,this.participant)
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

    return this.servicereceipients.deleteParticipant(this.currentId)
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

    return this.servicereceipients.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "receipientId":null,
          
        
          
            "aadharNumber":null,
          
        
          
            "receipientFirstName":null,
          
        
          
            "receipientLastName":null,
          
        
          
            "receipientDob":null,
          
        
          
            "receipientAge":null,
          
        
          
            "receipientGender":null,
          
        
          
            "receipientPhoneNumber":null,
          
        
          
            "receipientEmailId":null,
          
        
          
            "receipientMotherTongue":null,
          
        
          
            "receipientEthnicity":null,
          
        
          
            "receipientBloodGroup":null,
          
        
          
            "receipientHeight":null,
          
        
          
            "receipientWeight":null,
          
        
          
            "receipientCreateTime":null,
          
        
          
            "receipientRequiredOrgan":null,
          
        
          
            "receipientReasonForRequeset":null,
          
        
          
            "receipientAntigenData":null 
          
        
      };



      
        if(result.receipientId){
          
            formObject.receipientId = result.receipientId;
          
        }else{
          formObject.receipientId = null;
        }
      
        if(result.aadharNumber){
          
            formObject.aadharNumber = result.aadharNumber;
          
        }else{
          formObject.aadharNumber = null;
        }
      
        if(result.receipientFirstName){
          
            formObject.receipientFirstName = result.receipientFirstName;
          
        }else{
          formObject.receipientFirstName = null;
        }
      
        if(result.receipientLastName){
          
            formObject.receipientLastName = result.receipientLastName;
          
        }else{
          formObject.receipientLastName = null;
        }
      
        if(result.receipientDob){
          
            formObject.receipientDob = result.receipientDob;
          
        }else{
          formObject.receipientDob = null;
        }
      
        if(result.receipientAge){
          
            formObject.receipientAge = result.receipientAge;
          
        }else{
          formObject.receipientAge = null;
        }
      
        if(result.receipientGender){
          
            formObject.receipientGender = result.receipientGender;
          
        }else{
          formObject.receipientGender = null;
        }
      
        if(result.receipientPhoneNumber){
          
            formObject.receipientPhoneNumber = result.receipientPhoneNumber;
          
        }else{
          formObject.receipientPhoneNumber = null;
        }
      
        if(result.receipientEmailId){
          
            formObject.receipientEmailId = result.receipientEmailId;
          
        }else{
          formObject.receipientEmailId = null;
        }
      
        if(result.receipientMotherTongue){
          
            formObject.receipientMotherTongue = result.receipientMotherTongue;
          
        }else{
          formObject.receipientMotherTongue = null;
        }
      
        if(result.receipientEthnicity){
          
            formObject.receipientEthnicity = result.receipientEthnicity;
          
        }else{
          formObject.receipientEthnicity = null;
        }
      
        if(result.receipientBloodGroup){
          
            formObject.receipientBloodGroup = result.receipientBloodGroup;
          
        }else{
          formObject.receipientBloodGroup = null;
        }
      
        if(result.receipientHeight){
          
            formObject.receipientHeight = result.receipientHeight;
          
        }else{
          formObject.receipientHeight = null;
        }
      
        if(result.receipientWeight){
          
            formObject.receipientWeight = result.receipientWeight;
          
        }else{
          formObject.receipientWeight = null;
        }
      
        if(result.receipientCreateTime){
          
            formObject.receipientCreateTime = result.receipientCreateTime;
          
        }else{
          formObject.receipientCreateTime = null;
        }
      
        if(result.receipientRequiredOrgan){
          
            formObject.receipientRequiredOrgan = result.receipientRequiredOrgan;
          
        }else{
          formObject.receipientRequiredOrgan = null;
        }
      
        if(result.receipientReasonForRequeset){
          
            formObject.receipientReasonForRequeset = result.receipientReasonForRequeset;
          
        }else{
          formObject.receipientReasonForRequeset = null;
        }
      
        if(result.receipientAntigenData){
          
            formObject.receipientAntigenData = result.receipientAntigenData;
          
        }else{
          formObject.receipientAntigenData = null;
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
      
        
          "receipientId":null,
        
      
        
          "aadharNumber":null,
        
      
        
          "receipientFirstName":null,
        
      
        
          "receipientLastName":null,
        
      
        
          "receipientDob":null,
        
      
        
          "receipientAge":null,
        
      
        
          "receipientGender":null,
        
      
        
          "receipientPhoneNumber":null,
        
      
        
          "receipientEmailId":null,
        
      
        
          "receipientMotherTongue":null,
        
      
        
          "receipientEthnicity":null,
        
      
        
          "receipientBloodGroup":null,
        
      
        
          "receipientHeight":null,
        
      
        
          "receipientWeight":null,
        
      
        
          "receipientCreateTime":null,
        
      
        
          "receipientRequiredOrgan":null,
        
      
        
          "receipientReasonForRequeset":null,
        
      
        
          "receipientAntigenData":null 
        
      
      });
  }

}
