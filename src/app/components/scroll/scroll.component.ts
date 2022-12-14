import { Component, HostListener, OnInit } from '@angular/core';
import { openClose } from 'src/app/animation';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  animations: [openClose]
})
export class ScrollComponent implements OnInit {

  pages: any[] = [
    { id: 1, pais: 'active' },
    { id: 2, pais: 'esperadown' },
    { id: 3, pais: 'esperadown' },
    { id: 4, pais: 'esperadown' },
  ];
  active: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll($event: Event) {

    console.log("scroll: ", $event);
  }

  checkear(item: any) {
    // console.log(this.pages.indexOf(item) == this.active);

    return this.pages.indexOf(item) == this.active;
  }

  cambiar() {
    this.pages[this.active].pais = 'esperadown';
    if (this.active == 2) {
      this.cambiarTodos();
      this.active = 0
    } else this.active++;

    // this.cambiarTodos()
    this.pages[this.active].pais = 'active';
  }

  cambiarTodos() {
    this.pages.forEach((e, i) => {
      // if(i!=2)
      e.pais = 'esperaup'
    })
  }

  up() {
    this.pages[this.active].pais = 'esperaup';
    this.cambiarActive('up');
  }

  cambiarActive(accion: string) {
    if (accion == 'up') {
      this.active = this.active == this.pages.length - 1 ? 0 : this.active + 1
      if (this.pages[this.active].pais = 'esperaup') {
        this.pages[this.active].pais = 'esperadown'
        setTimeout(() => {
          this.pages[this.active].pais = 'active'
        }, 50);
      }
    } else {
      this.active = this.active == 0 ? this.pages.length - 1 : this.active - 1
      if (this.pages[this.active].pais = 'esperadown') {
        this.pages[this.active].pais = 'esperaup'
        setTimeout(() => {
          this.pages[this.active].pais = 'active'
        }, 50);
      }
    }
  }

  down() {
    this.pages[this.active].pais = 'esperadown';
    this.cambiarActive('down');
  }
}
