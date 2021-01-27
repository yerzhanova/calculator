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
});
