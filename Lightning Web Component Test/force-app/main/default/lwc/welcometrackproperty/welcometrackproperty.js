import { LightningElement ,track} from 'lwc';

export default class Welcometrackproperty extends LightningElement {
    @track greetings;

    handleGreetingchange(event)
    {
        this.greetings=event.target.value;

    }
}