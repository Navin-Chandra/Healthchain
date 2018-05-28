import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.ey.healthchain.login{
   export class participantLogin extends Participant {
      participantId: string;
      userName: string;
      password: string;
      participants: ParticipantType;
      participantMailId: string;
      participantPhoneNumber: string;
   }
   export enum ParticipantType {
      HOSPITAL,
   }
   export class ReturnUserId extends Event {
      userId: string;
   }
   export class LoginStatus extends Event {
      status: string;
   }
// }
