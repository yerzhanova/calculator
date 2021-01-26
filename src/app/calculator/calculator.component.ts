import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  onToggle:boolean = true;
  monthlyAmount: number = 0;
  numberOfMonth: number = 0;
  currentDate: string = '';
  calculateForm = new FormGroup({
    totalAmount: new FormControl(''),
    finishDate: new FormControl('')
  })
  startMonth: number = new Date().getMonth();
  currentMonth = this.startMonth;
  startYear = new Date().getFullYear();
  currentYear = this.startYear;
  monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  ngOnInit(): void {
  
    // console.log("current month is", currentDate);
    console.log();
    
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
  
  }
  calculate(): void {
    this.numberOfMonth = (this.currentYear - this.startYear) + (this.currentMonth - this.startMonth);
    console.log(this.numberOfMonth, "n of month");
    this.monthlyAmount = this.numberOfMonth>0?this.calculateForm.value.totalAmount/this.numberOfMonth:0;
    console.log(this.monthlyAmount, "monthly");
  }

  nextMonth():void {
    console.log("next month");
    if (this.currentMonth === 11){
      this.currentMonth = 0;  
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
    console.log()
  }

  prevMonth():void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
    console.log("prev month");
  }
}
