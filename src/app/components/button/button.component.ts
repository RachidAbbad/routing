import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public id:number;
  @Input() public statut:boolean;
 @Output() clicked=new EventEmitter<boolean>();
 
  constructor() { }

  ngOnInit(): void {
  }

  public onClick():void{
this.clicked.emit(this.statut);
  }
}
