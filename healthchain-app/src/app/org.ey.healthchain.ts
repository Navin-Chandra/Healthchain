import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.ey.healthchain{
   export class donors extends Participant {
      donorId: string;
      aadharNumber: string;
      donorFirstName: string;
      donorLastName: string;
      donorDob: string;
      donorAge: number;
      donorGender: string;
      donorPhoneNumber: number;
      donorEmailId: string;
      donorMotherTongue: string;
      donorEthnicity: string;
      donorBloodGroup: string;
      donorHeight: string;
      donorWeight: string;
      donorCreateTime: Date;
      donorCauseOfDeath: string;
      donorOrganDonated: string;
      donorStatus: string;
      donorHereditaryDiseaseIfAny: string;
      donorNonHereditaryDiseaseIfAny: string;
      donorAntigenData: string;
   }
   export class receipients extends Participant {
      receipientId: string;
      aadharNumber: string;
      receipientFirstName: string;
      receipientLastName: string;
      receipientDob: string;
      receipientAge: number;
      receipientGender: string;
      receipientPhoneNumber: number;
      receipientEmailId: string;
      receipientMotherTongue: string;
      receipientEthnicity: string;
      receipientBloodGroup: string;
      receipientHeight: string;
      receipientWeight: string;
      receipientCreateTime: Date;
      receipientRequiredOrgan: string;
      receipientReasonForRequeset: string;
      receipientAntigenData: string;
   }
   export class organ extends Asset {
      donorId: string;
      donorName: string;
      donoraadharNumber: string;
      organDonated: string;
      receipientName: string;
      receipientaadharNumber: string;
   }
// }
