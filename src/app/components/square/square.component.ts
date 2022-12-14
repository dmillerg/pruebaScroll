import { Component, Input, OnInit } from '@angular/core';
import { openClose } from 'src/app/animation';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  animations: [openClose]
})
export class SquareComponent implements OnInit {

  @Input() pais: string = 'japon'
  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
}
