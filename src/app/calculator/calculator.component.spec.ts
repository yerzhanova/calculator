import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from '../toggle/toggle.component';
import { DebugElement } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';
describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent, ToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // debugElement = fixture.debugElement.query(By.css('.finishDate'));
    // htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Saving calculator');
  });

  it('should be increment month', () => {
    const initialMonthValue = component.currentMonth;
    const initialYearValue = component.currentYear;
    const startDate = new Date(initialYearValue, initialMonthValue);
    component.nextMonth();
    const newMonthValue = component.currentMonth;
    const newYearValue = component.currentYear;
    expect(newMonthValue).toBeGreaterThanOrEqual(initialMonthValue);
    expect(newYearValue).toBeGreaterThanOrEqual(initialYearValue);
  })

  it('should be decrement month', () => {
    const initialMonthValue = component.currentMonth;
    const initialYearValue = component.currentYear;
    const startDate = new Date(initialYearValue, initialMonthValue);
    component.nextMonth();
    const newMonthValue = component.currentMonth;
    const newYearValue = component.currentYear;
    expect(initialMonthValue).toBeLessThanOrEqual(newMonthValue);
    expect(newYearValue).toBeLessThanOrEqual(initialYearValue);
  })


  it('should not be the last period', () => {
    const initialMonthValue = component.currentMonth;
    const initialYearValue = component.currentYear;
    let buttonElement = fixture.debugElement.query(By.css('.leftButton'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.currentMonth).toBeGreaterThanOrEqual(initialMonthValue);
    expect(component.currentYear).toBeGreaterThanOrEqual(initialYearValue);
  })

  it('should be right calculate', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const date:string = 'February, 2023';
    const inputValue:number = 25000;
    component.calculate(inputValue, date);
    fixture.detectChanges();
    // expect(component.onToggle).toBe(true);
    // expect(component.currentMonth).toEqual(1);
    // expect(component.currentYear).toEqual(2023);
    // expect(component.numberOfMonth).toEqual(26);
    // expect(component.resultAmount).toBeGreaterThan(961.53);
    // expect(component.resultAmount).toBeLessThan(961.54);
  })
});
