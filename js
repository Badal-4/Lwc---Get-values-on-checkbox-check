   import { LightningElement,track } from 'lwc';

export default class LwcCheckboxValue extends LightningElement {

    value = 'integration';

    get options() {
        return [
            { label: 'Salesforce Integration', value: 'integration' },
            { label: 'Salesforce LWC', value: 'salesforceLWC' },
            { label: 'Aura Component', value: 'auraComponent' },
        ];
    }

    @track integrationVal = true;
    @track salesforceLWCVal = false;
    @track auraComponentVal = false;
    
    handleChange(event) {
            
        this.value = event.detail.value;        
        //alert('value!!! ' + this.value);
        if (this.value == 'integration'){
            this.integrationVal = true;
        }else{
            this.integrationVal = false;
        }
       
        if (this.value == 'salesforceLWC'){
            this.salesforceLWCVal = true;
        }else{
            this.salesforceLWCVal = false;
        }
        
        if (this.value == 'auraComponent'){
            this.auraComponentVal = true;
        }else{
            this.auraComponentVal = false;
        }
    }

}
