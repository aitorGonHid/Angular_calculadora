import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ud34';

  screenDisplay:number = 0;
  operador1:number = 0;
  operador2:number = 0;
  sol: number = 0;
  operador1set = false;
  operator = '';
  decimals = false;
  nDecimals = 10;

  operador1Set=false;
  operacionSet=false;

  OnInit() {
    this.cleanSreen();
  }

  addNumber(digit: any){
    if (!this.decimals) {
      if (isNaN(digit)) {
        if (digit == '0') {
          this.screenDisplay = this.screenDisplay*10;
        } else if (digit == '0s') {
          this.screenDisplay = this.screenDisplay*100;
        }
      } else {
          this.screenDisplay = (this.screenDisplay*10) + Number(digit);
      }
    } else {
      this.screenDisplay+=(Number(digit)/this.nDecimals);
      this.nDecimals*=10;
    }

  }

  startDecimals() {
    this.decimals = true;
  }

  setOperator(operation: string) {
    this.operador1Set=true;
    this.operator = operation;
    this.operador1 = this.screenDisplay;
    this.cleanSreen();
  }

  cleanSreen() {
    this.screenDisplay = 0;
    this.decimals=false;
    this.nDecimals=10;
  }

  reset() {
    this.cleanSreen();
    this.operador1=0;
    this.operador2=0;
    this.operator='';
  }

  solution() {
    this.operador2 = this.screenDisplay;
    if (this.operador2 !== null) {
      switch(this.operator) {
        case('+'):
          this.sol = this.operador1 + this.operador2;
          break;
        case('-'):
          this.sol = this.operador1 - this.operador2;
          break;
        case('/'):
          this.sol = this.operador1 / this.operador2;
          break;
        case('*'):
          this.sol = this.operador1 * this.operador2;
          break;
      }
      this.printSol();
    }
  }

  printSol() {
    this.screenDisplay = this.sol;
  }


}
