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
  title1:string = '';
  title2:string = '';
  message: string = '';
  amountType = 'Total';
  calculateForm = new FormGroup({
    totalAmount: new FormControl('25000'),
    finishDate: new FormControl('')
  })
  startMonth: number = new Date().getMonth();
  currentMonth: number = this.startMonth;
  startYear: number = new Date().getFullYear();
  currentYear: number = this.startYear;
  monthList: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  ngOnInit(): void {
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
    this.monthlyAmount = this.calculateForm.value.totalAmount;
    this.title1 = this.onToggle?'Total amount':'Monthly amount';
    this.title2 = this.onToggle?'Reach goal by':'Save until';
    this.message = `You are planning ${this.numberOfMonth} monthly deposits to reach your ${this.calculateForm.value.totalAmount} goal by ${this.monthList[this.currentMonth]}, ${this.currentYear}`;
  }
  calculate(): void {
    this.numberOfMonth = (this.currentYear - this.startYear) + (this.currentMonth - this.startMonth);
    if (this.onToggle) {
      this.monthlyAmount = this.numberOfMonth>0?this.calculateForm.value.totalAmount/this.numberOfMonth:0;
    } else {
      this.monthlyAmount = this.calculateForm.value.totalAmount * this.numberOfMonth;
    }
    this.message = this.onToggle?`You are planning ${this.numberOfMonth} monthly deposits to reach your ${this.calculateForm.value.totalAmount}
    goal by ${this.monthList[this.currentMonth]} ${this.currentYear}`: `You are saving ${this.monthlyAmount} monthly to save $${this.calculateForm.value.totalAmount} by ${this.monthList[this.currentMonth]} ${this.currentYear}`;
  }

  nextMonth(): void {
    console.log("next month");
    if (this.currentMonth === 11) {
      this.currentMonth = 0;  
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
    console.log()
  }

  prevMonth(): void {
    console.log("prev month");
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
  }
  
  onToggled(onToggle: boolean){
    this.onToggle = onToggle;
    this.title1 = this.onToggle?'Total amount':'Monthly amount';
    this.title2 = this.onToggle?'Reach goal by':'Save until';
    this.amountType = this.onToggle?'Total':'Monthly';
    if (this.onToggle) {
      this.monthlyAmount = this.numberOfMonth>0?this.calculateForm.value.totalAmount/this.numberOfMonth:0;
      console.log(this.monthlyAmount, "monthly");
    } else {
      this.monthlyAmount = this.calculateForm.value.totalAmount * this.numberOfMonth;
    }
    this.message = this.onToggle?`You are planning ${this.numberOfMonth} monthly deposits to reach your ${this.calculateForm.value.totalAmount}
      goal by ${this.monthList[this.currentMonth]} ${this.currentYear}`: `You are saving ${this.monthlyAmount} monthly to save $${this.calculateForm.value.totalAmount} by ${this.monthList[this.currentMonth]} ${this.currentYear}`;
  }

  isLessDate():boolean {
    return this.startMonth === this.currentMonth && this.startYear === this.currentYear;
  }
}
