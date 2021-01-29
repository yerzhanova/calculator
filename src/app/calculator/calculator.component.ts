import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  onToggle:boolean = true;
  resultAmount: number = 0;
  numberOfMonth: number = 0;
  currentDate: string = '';
  title1:string = '';
  title2:string = '';
  message: string = '';
  amountType: string = '';
  calculateForm = new FormGroup({
    totalAmount: new FormControl('25000', [Validators.required, Validators.min(0)]),
    finishDate: new FormControl('')
  })
  startMonth: number = new Date().getMonth();
  currentMonth: number = this.startMonth;
  startYear: number = new Date().getFullYear();
  currentYear: number = this.startYear;
  monthList: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  ngOnInit(): void {
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
    this.resultAmount = this.calculateForm.value.totalAmount;
    this.amountType = this.onToggle?'Total':'Monthly';
    this.title1 = this.onToggle?'Total amount':'Monthly amount';
    this.title2 = this.onToggle?'Reach goal by':'Save until';
    this.message = `You are planning ${this.numberOfMonth} monthly deposits to reach your ${this.calculateForm.value.totalAmount} goal by ${this.monthList[this.currentMonth]}, ${this.currentYear}`;
  }

  calculate(amount:number, finishDate: string): void {
    this.currentMonth = this.monthList.indexOf(finishDate.split(',')[0]);
    this.currentYear = parseInt(finishDate.slice(-4));

    this.numberOfMonth = (this.currentYear - this.startYear) * 12 + (this.currentMonth - this.startMonth) + 1;
    if (this.onToggle) {
      this.resultAmount = this.numberOfMonth>0?amount/this.numberOfMonth:0;
    } else {
      this.resultAmount = amount * this.numberOfMonth;
    }
    this.message = this.onToggle?`You are planning ${this.numberOfMonth} monthly deposits to reach your ${amount}
    goal by ${this.monthList[this.currentMonth]} ${this.currentYear}`: `You are saving ${this.resultAmount} monthly to save $${amount} by ${this.monthList[this.currentMonth]} ${this.currentYear}`;
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;  
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
  }

  prevMonth(): void {
    if (this.currentMonth >= this.startMonth && this.currentYear >= this.startYear){
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
      this.currentDate = `${this.monthList[this.currentMonth]}, ${this.currentYear}`;
    }
  }
  
  onToggled(onToggle: boolean){
    this.onToggle = onToggle;
    this.title1 = this.onToggle?'Total amount':'Monthly amount';
    this.title2 = this.onToggle?'Reach goal by':'Save until';
    this.amountType = this.onToggle?'Total':'Monthly';
    this.calculate(this.calculateForm.value.totalAmount, this.currentDate);
  }

  isLessDate():boolean {
    return this.startMonth === this.currentMonth && this.startYear === this.currentYear;
  }
}
