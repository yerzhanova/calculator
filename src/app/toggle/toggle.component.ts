import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input()
  onToggle: boolean = true;

  @Output('toggled')
  toggleEmitter = new EventEmitter<boolean>();
  title: string = this.onToggle?"Calculate by total amount": "Calculate by monthly saving";
  constructor() { }
 
  ngOnInit(): void {
   
  }
  toggle(): void {
    this.onToggle = !this.onToggle;
    this.toggleEmitter.emit(this.onToggle);
    console.log(this.onToggle);
    this.title = this.onToggle?"Calculate by total amount": "Calculate by monthly saving";
  }
}
