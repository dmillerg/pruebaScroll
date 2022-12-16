import { Component, Input, OnInit } from '@angular/core';
import { homeAnim, openClose } from 'src/app/animation';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  animations: [homeAnim]
})
export class SquareComponent implements OnInit {

  @Input() pais: string = 'japon'
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.data.pais = 'esperadown';
  }
}
