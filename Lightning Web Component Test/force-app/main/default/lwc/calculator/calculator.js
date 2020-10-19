import { LightningElement ,track} from 'lwc';

export default class Calculator extends LightningElement {
    @track lable='';
result=0;
fNumber=0;
sNumber=0;

handleChange(event){
   
   if(event.target.name==='fNumber'){
       this.fNumber=event.target.value;
   }
   if(event.target.name==='sNumber'){
       this.sNumber=event.target.value;
   }

}


 handleClick(event) {
        this.lable = event.target.label;
        if(this.lable==='+'){
            this.result='sum =  '+(parseFloat(this.fNumber)+parseFloat(this.sNumber));
        }else if(this.lable==='-'){
            this.result='sub =  '+(parseFloat(this.fNumber)-parseFloat(this.sNumber));
        }else if(this.lable==='*'){
            this.result='mul =  '+(parseFloat(this.fNumber)*parseFloat(this.sNumber));
        }else if(this.lable==='/'){
            this.result='div =  '+(parseFloat(this.fNumber)/parseFloat(this.sNumber));
        }
    }
}