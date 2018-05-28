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
import { donorsService } from './donors.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-donors',
	templateUrl: './donors.component.html',
	styleUrls: ['./donors.component.css'],
  providers: [donorsService]
})
export class donorsComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          donorId = new FormControl("", Validators.required);
        
  
      
          aadharNumber = new FormControl("", Validators.required);
        
  
      
          donorFirstName = new FormControl("", Validators.required);
        
  
      
          donorLastName = new FormControl("", Validators.required);
        
  
      
          donorDob = new FormControl("", Validators.required);
        
  
      
          donorAge = new FormControl("", Validators.required);
        
  
      
          donorGender = new FormControl("", Validators.required);
        
  
      
          donorPhoneNumber = new FormControl("", Validators.required);
        
  
      
          donorEmailId = new FormControl("", Validators.required);
        
  
      
          donorMotherTongue = new FormControl("", Validators.required);
        
  
      
          donorEthnicity = new FormControl("", Validators.required);
        
  
      
          donorBloodGroup = new FormControl("", Validators.required);
        
  
      
          donorHeight = new FormControl("", Validators.required);
        
  
      
          donorWeight = new FormControl("", Validators.required);
        
  
      
          donorCreateTime = new FormControl("", Validators.required);
        
  
      
          donorCauseOfDeath = new FormControl("", Validators.required);
        
  
      
          donorOrganDonated = new FormControl("", Validators.required);
        
  
      
          donorStatus = new FormControl("", Validators.required);
        
  
      
          donorHereditaryDiseaseIfAny = new FormControl("", Validators.required);
        
  
      
          donorNonHereditaryDiseaseIfAny = new FormControl("", Validators.required);
        
  
      
          donorAntigenData = new FormControl("", Validators.required);
        
  


  constructor(private servicedonors:donorsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          donorId:this.donorId,
        
    
        
          aadharNumber:this.aadharNumber,
        
    
        
          donorFirstName:this.donorFirstName,
        
    
        
          donorLastName:this.donorLastName,
        
    
        
          donorDob:this.donorDob,
        
    
        
          donorAge:this.donorAge,
        
    
        
          donorGender:this.donorGender,
        
    
        
          donorPhoneNumber:this.donorPhoneNumber,
        
    
        
          donorEmailId:this.donorEmailId,
        
    
        
          donorMotherTongue:this.donorMotherTongue,
        
    
        
          donorEthnicity:this.donorEthnicity,
        
    
        
          donorBloodGroup:this.donorBloodGroup,
        
    
        
          donorHeight:this.donorHeight,
        
    
        
          donorWeight:this.donorWeight,
        
    
        
          donorCreateTime:this.donorCreateTime,
        
    
        
          donorCauseOfDeath:this.donorCauseOfDeath,
        
    
        
          donorOrganDonated:this.donorOrganDonated,
        
    
        
          donorStatus:this.donorStatus,
        
    
        
          donorHereditaryDiseaseIfAny:this.donorHereditaryDiseaseIfAny,
        
    
        
          donorNonHereditaryDiseaseIfAny:this.donorNonHereditaryDiseaseIfAny,
        
    
        
          donorAntigenData:this.donorAntigenData
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicedonors.getAll()
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
      $class: "org.ey.healthchain.donors",
      
        
          "donorId":this.donorId.value,
        
      
        
          "aadharNumber":this.aadharNumber.value,
        
      
        
          "donorFirstName":this.donorFirstName.value,
        
      
        
          "donorLastName":this.donorLastName.value,
        
      
        
          "donorDob":this.donorDob.value,
        
      
        
          "donorAge":this.donorAge.value,
        
      
        
          "donorGender":this.donorGender.value,
        
      
        
          "donorPhoneNumber":this.donorPhoneNumber.value,
        
      
        
          "donorEmailId":this.donorEmailId.value,
        
      
        
          "donorMotherTongue":this.donorMotherTongue.value,
        
      
        
          "donorEthnicity":this.donorEthnicity.value,
        
      
        
          "donorBloodGroup":this.donorBloodGroup.value,
        
      
        
          "donorHeight":this.donorHeight.value,
        
      
        
          "donorWeight":this.donorWeight.value,
        
      
        
          "donorCreateTime":this.donorCreateTime.value,
        
      
        
          "donorCauseOfDeath":this.donorCauseOfDeath.value,
        
      
        
          "donorOrganDonated":this.donorOrganDonated.value,
        
      
        
          "donorStatus":this.donorStatus.value,
        
      
        
          "donorHereditaryDiseaseIfAny":this.donorHereditaryDiseaseIfAny.value,
        
      
        
          "donorNonHereditaryDiseaseIfAny":this.donorNonHereditaryDiseaseIfAny.value,
        
      
        
          "donorAntigenData":this.donorAntigenData.value
        
      
    };

    this.myForm.setValue({
      
        
          "donorId":null,
        
      
        
          "aadharNumber":null,
        
      
        
          "donorFirstName":null,
        
      
        
          "donorLastName":null,
        
      
        
          "donorDob":null,
        
      
        
          "donorAge":null,
        
      
        
          "donorGender":null,
        
      
        
          "donorPhoneNumber":null,
        
      
        
          "donorEmailId":null,
        
      
        
          "donorMotherTongue":null,
        
      
        
          "donorEthnicity":null,
        
      
        
          "donorBloodGroup":null,
        
      
        
          "donorHeight":null,
        
      
        
          "donorWeight":null,
        
      
        
          "donorCreateTime":null,
        
      
        
          "donorCauseOfDeath":null,
        
      
        
          "donorOrganDonated":null,
        
      
        
          "donorStatus":null,
        
      
        
          "donorHereditaryDiseaseIfAny":null,
        
      
        
          "donorNonHereditaryDiseaseIfAny":null,
        
      
        
          "donorAntigenData":null
        
      
    });

    return this.servicedonors.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "donorId":null,
        
      
        
          "aadharNumber":null,
        
      
        
          "donorFirstName":null,
        
      
        
          "donorLastName":null,
        
      
        
          "donorDob":null,
        
      
        
          "donorAge":null,
        
      
        
          "donorGender":null,
        
      
        
          "donorPhoneNumber":null,
        
      
        
          "donorEmailId":null,
        
      
        
          "donorMotherTongue":null,
        
      
        
          "donorEthnicity":null,
        
      
        
          "donorBloodGroup":null,
        
      
        
          "donorHeight":null,
        
      
        
          "donorWeight":null,
        
      
        
          "donorCreateTime":null,
        
      
        
          "donorCauseOfDeath":null,
        
      
        
          "donorOrganDonated":null,
        
      
        
          "donorStatus":null,
        
      
        
          "donorHereditaryDiseaseIfAny":null,
        
      
        
          "donorNonHereditaryDiseaseIfAny":null,
        
      
        
          "donorAntigenData":null 
        
      
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
      $class: "org.ey.healthchain.donors",
      
        
          
        
    
        
          
            "aadharNumber":this.aadharNumber.value,
          
        
    
        
          
            "donorFirstName":this.donorFirstName.value,
          
        
    
        
          
            "donorLastName":this.donorLastName.value,
          
        
    
        
          
            "donorDob":this.donorDob.value,
          
        
    
        
          
            "donorAge":this.donorAge.value,
          
        
    
        
          
            "donorGender":this.donorGender.value,
          
        
    
        
          
            "donorPhoneNumber":this.donorPhoneNumber.value,
          
        
    
        
          
            "donorEmailId":this.donorEmailId.value,
          
        
    
        
          
            "donorMotherTongue":this.donorMotherTongue.value,
          
        
    
        
          
            "donorEthnicity":this.donorEthnicity.value,
          
        
    
        
          
            "donorBloodGroup":this.donorBloodGroup.value,
          
        
    
        
          
            "donorHeight":this.donorHeight.value,
          
        
    
        
          
            "donorWeight":this.donorWeight.value,
          
        
    
        
          
            "donorCreateTime":this.donorCreateTime.value,
          
        
    
        
          
            "donorCauseOfDeath":this.donorCauseOfDeath.value,
          
        
    
        
          
            "donorOrganDonated":this.donorOrganDonated.value,
          
        
    
        
          
            "donorStatus":this.donorStatus.value,
          
        
    
        
          
            "donorHereditaryDiseaseIfAny":this.donorHereditaryDiseaseIfAny.value,
          
        
    
        
          
            "donorNonHereditaryDiseaseIfAny":this.donorNonHereditaryDiseaseIfAny.value,
          
        
    
        
          
            "donorAntigenData":this.donorAntigenData.value
          
        
    
    };

    return this.servicedonors.updateParticipant(form.get("donorId").value,this.participant)
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

    return this.servicedonors.deleteParticipant(this.currentId)
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

    return this.servicedonors.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "donorId":null,
          
        
          
            "aadharNumber":null,
          
        
          
            "donorFirstName":null,
          
        
          
            "donorLastName":null,
          
        
          
            "donorDob":null,
          
        
          
            "donorAge":null,
          
        
          
            "donorGender":null,
          
        
          
            "donorPhoneNumber":null,
          
        
          
            "donorEmailId":null,
          
        
          
            "donorMotherTongue":null,
          
        
          
            "donorEthnicity":null,
          
        
          
            "donorBloodGroup":null,
          
        
          
            "donorHeight":null,
          
        
          
            "donorWeight":null,
          
        
          
            "donorCreateTime":null,
          
        
          
            "donorCauseOfDeath":null,
          
        
          
            "donorOrganDonated":null,
          
        
          
            "donorStatus":null,
          
        
          
            "donorHereditaryDiseaseIfAny":null,
          
        
          
            "donorNonHereditaryDiseaseIfAny":null,
          
        
          
            "donorAntigenData":null 
          
        
      };



      
        if(result.donorId){
          
            formObject.donorId = result.donorId;
          
        }else{
          formObject.donorId = null;
        }
      
        if(result.aadharNumber){
          
            formObject.aadharNumber = result.aadharNumber;
          
        }else{
          formObject.aadharNumber = null;
        }
      
        if(result.donorFirstName){
          
            formObject.donorFirstName = result.donorFirstName;
          
        }else{
          formObject.donorFirstName = null;
        }
      
        if(result.donorLastName){
          
            formObject.donorLastName = result.donorLastName;
          
        }else{
          formObject.donorLastName = null;
        }
      
        if(result.donorDob){
          
            formObject.donorDob = result.donorDob;
          
        }else{
          formObject.donorDob = null;
        }
      
        if(result.donorAge){
          
            formObject.donorAge = result.donorAge;
          
        }else{
          formObject.donorAge = null;
        }
      
        if(result.donorGender){
          
            formObject.donorGender = result.donorGender;
          
        }else{
          formObject.donorGender = null;
        }
      
        if(result.donorPhoneNumber){
          
            formObject.donorPhoneNumber = result.donorPhoneNumber;
          
        }else{
          formObject.donorPhoneNumber = null;
        }
      
        if(result.donorEmailId){
          
            formObject.donorEmailId = result.donorEmailId;
          
        }else{
          formObject.donorEmailId = null;
        }
      
        if(result.donorMotherTongue){
          
            formObject.donorMotherTongue = result.donorMotherTongue;
          
        }else{
          formObject.donorMotherTongue = null;
        }
      
        if(result.donorEthnicity){
          
            formObject.donorEthnicity = result.donorEthnicity;
          
        }else{
          formObject.donorEthnicity = null;
        }
      
        if(result.donorBloodGroup){
          
            formObject.donorBloodGroup = result.donorBloodGroup;
          
        }else{
          formObject.donorBloodGroup = null;
        }
      
        if(result.donorHeight){
          
            formObject.donorHeight = result.donorHeight;
          
        }else{
          formObject.donorHeight = null;
        }
      
        if(result.donorWeight){
          
            formObject.donorWeight = result.donorWeight;
          
        }else{
          formObject.donorWeight = null;
        }
      
        if(result.donorCreateTime){
          
            formObject.donorCreateTime = result.donorCreateTime;
          
        }else{
          formObject.donorCreateTime = null;
        }
      
        if(result.donorCauseOfDeath){
          
            formObject.donorCauseOfDeath = result.donorCauseOfDeath;
          
        }else{
          formObject.donorCauseOfDeath = null;
        }
      
        if(result.donorOrganDonated){
          
            formObject.donorOrganDonated = result.donorOrganDonated;
          
        }else{
          formObject.donorOrganDonated = null;
        }
      
        if(result.donorStatus){
          
            formObject.donorStatus = result.donorStatus;
          
        }else{
          formObject.donorStatus = null;
        }
      
        if(result.donorHereditaryDiseaseIfAny){
          
            formObject.donorHereditaryDiseaseIfAny = result.donorHereditaryDiseaseIfAny;
          
        }else{
          formObject.donorHereditaryDiseaseIfAny = null;
        }
      
        if(result.donorNonHereditaryDiseaseIfAny){
          
            formObject.donorNonHereditaryDiseaseIfAny = result.donorNonHereditaryDiseaseIfAny;
          
        }else{
          formObject.donorNonHereditaryDiseaseIfAny = null;
        }
      
        if(result.donorAntigenData){
          
            formObject.donorAntigenData = result.donorAntigenData;
          
        }else{
          formObject.donorAntigenData = null;
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
      
        
          "donorId":null,
        
      
        
          "aadharNumber":null,
        
      
        
          "donorFirstName":null,
        
      
        
          "donorLastName":null,
        
      
        
          "donorDob":null,
        
      
        
          "donorAge":null,
        
      
        
          "donorGender":null,
        
      
        
          "donorPhoneNumber":null,
        
      
        
          "donorEmailId":null,
        
      
        
          "donorMotherTongue":null,
        
      
        
          "donorEthnicity":null,
        
      
        
          "donorBloodGroup":null,
        
      
        
          "donorHeight":null,
        
      
        
          "donorWeight":null,
        
      
        
          "donorCreateTime":null,
        
      
        
          "donorCauseOfDeath":null,
        
      
        
          "donorOrganDonated":null,
        
      
        
          "donorStatus":null,
        
      
        
          "donorHereditaryDiseaseIfAny":null,
        
      
        
          "donorNonHereditaryDiseaseIfAny":null,
        
      
        
          "donorAntigenData":null 
        
      
      });
  }

}
