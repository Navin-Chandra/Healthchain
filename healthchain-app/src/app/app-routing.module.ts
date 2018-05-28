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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { organComponent } from './organ/organ.component';


  import { donorsComponent } from './donors/donors.component';
  import { receipientsComponent } from './receipients/receipients.component';
  import { participantLoginComponent } from './participantLogin/participantLogin.component';
  import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'organ', component: organComponent},
    
    
      { path: 'donors', component: donorsComponent},
      
      { path: 'receipients', component: receipientsComponent},
      
      { path: 'participantLogin', component: participantLoginComponent},

      { path: 'login', component: LoginComponent},

      { path: 'signup', component: SingupComponent},

      { path: 'dashboard', component: DashboardComponent},
      
      
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
