import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

result: string = '';
longButtons: string[] = ['AC', 'CE', 'Prime', '!'];
buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

private prevValue: string = '';
private curValue: string = '';

addToExpression(value: string){
  
  if (this.result != ''){
    this.prevValue = this.curValue;
    this.curValue = value;
  }

  if(value == 'AC'){
    this.result = '';
  }else if(value == 'CE'){
    this.result = this.prevValue != "=" ? this.result.slice(0, -1) : this.result;
  }else if(value == '!'){
    var i:number = 0;
    var copy:string = this.result;
    var j:number = +copy;
    var k:number = 1;
    for(i=1;i<=j;i++)
    {
      k*=i;
    }
    var ans:string = k .toString();
    this.result = ans;
  }else if(value == 'Prime'){
    var i:number = 0;
    var copy:string = this.result;
    var j:number = +copy;
    var count:number = 0;
    for(i=2;i<=j;j++)
    {
      if(j%i==0)
      count++;
    }
    var ans:string = '';
    if(count==2)
    {
      ans = "Prime";
    }
    else
    {
      ans = "Not Prime";
    }
    this.result = ans;
  }else if(value == '='){
    this.result = eval(this.result);
  }else{
    this.result += value;
  }
}

}
