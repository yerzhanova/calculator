import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input()
  onToggle: boolean = false;

  @Output('toggled')
  toggleEmitter = new EventEmitter<boolean>();
  constructor() { }
 
  ngOnInit(): void {
    console.log('toggle', this.onToggle);
  }
  toggle(): void {
    this.onToggle = !this.onToggle;
    this.toggleEmitter.emit(this.onToggle);
    console.log(this.onToggle, "onToggle comp");
  }
}
