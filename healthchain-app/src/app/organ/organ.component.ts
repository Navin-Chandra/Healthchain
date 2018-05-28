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
import { organService } from './organ.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-organ',
	templateUrl: './organ.component.html',
	styleUrls: ['./organ.component.css'],
  providers: [organService]
})
export class organComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          donorId = new FormControl("", Validators.required);
        
  
      
          donorName = new FormControl("", Validators.required);
        
  
      
          donoraadharNumber = new FormControl("", Validators.required);
        
  
      
          organDonated = new FormControl("", Validators.required);
        
  
      
          receipientName = new FormControl("", Validators.required);
        
  
      
          receipientaadharNumber = new FormControl("", Validators.required);
        
  


  constructor(private serviceorgan:organService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          donorId:this.donorId,
        
    
        
          donorName:this.donorName,
        
    
        
          donoraadharNumber:this.donoraadharNumber,
        
    
        
          organDonated:this.organDonated,
        
    
        
          receipientName:this.receipientName,
        
    
        
          receipientaadharNumber:this.receipientaadharNumber
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceorgan.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
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
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.ey.healthchain.organ",
      
        
          "donorId":this.donorId.value,
        
      
        
          "donorName":this.donorName.value,
        
      
        
          "donoraadharNumber":this.donoraadharNumber.value,
        
      
        
          "organDonated":this.organDonated.value,
        
      
        
          "receipientName":this.receipientName.value,
        
      
        
          "receipientaadharNumber":this.receipientaadharNumber.value
        
      
    };

    this.myForm.setValue({
      
        
          "donorId":null,
        
      
        
          "donorName":null,
        
      
        
          "donoraadharNumber":null,
        
      
        
          "organDonated":null,
        
      
        
          "receipientName":null,
        
      
        
          "receipientaadharNumber":null
        
      
    });

    return this.serviceorgan.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "donorId":null,
        
      
        
          "donorName":null,
        
      
        
          "donoraadharNumber":null,
        
      
        
          "organDonated":null,
        
      
        
          "receipientName":null,
        
      
        
          "receipientaadharNumber":null 
        
      
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


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.ey.healthchain.organ",
      
        
          
        
    
        
          
            "donorName":this.donorName.value,
          
        
    
        
          
            "donoraadharNumber":this.donoraadharNumber.value,
          
        
    
        
          
            "organDonated":this.organDonated.value,
          
        
    
        
          
            "receipientName":this.receipientName.value,
          
        
    
        
          
            "receipientaadharNumber":this.receipientaadharNumber.value
          
        
    
    };

    return this.serviceorgan.updateAsset(form.get("donorId").value,this.asset)
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


  deleteAsset(): Promise<any> {

    return this.serviceorgan.deleteAsset(this.currentId)
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

    return this.serviceorgan.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "donorId":null,
          
        
          
            "donorName":null,
          
        
          
            "donoraadharNumber":null,
          
        
          
            "organDonated":null,
          
        
          
            "receipientName":null,
          
        
          
            "receipientaadharNumber":null 
          
        
      };



      
        if(result.donorId){
          
            formObject.donorId = result.donorId;
          
        }else{
          formObject.donorId = null;
        }
      
        if(result.donorName){
          
            formObject.donorName = result.donorName;
          
        }else{
          formObject.donorName = null;
        }
      
        if(result.donoraadharNumber){
          
            formObject.donoraadharNumber = result.donoraadharNumber;
          
        }else{
          formObject.donoraadharNumber = null;
        }
      
        if(result.organDonated){
          
            formObject.organDonated = result.organDonated;
          
        }else{
          formObject.organDonated = null;
        }
      
        if(result.receipientName){
          
            formObject.receipientName = result.receipientName;
          
        }else{
          formObject.receipientName = null;
        }
      
        if(result.receipientaadharNumber){
          
            formObject.receipientaadharNumber = result.receipientaadharNumber;
          
        }else{
          formObject.receipientaadharNumber = null;
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
        
      
        
          "donorName":null,
        
      
        
          "donoraadharNumber":null,
        
      
        
          "organDonated":null,
        
      
        
          "receipientName":null,
        
      
        
          "receipientaadharNumber":null 
        
      
      });
  }

}
