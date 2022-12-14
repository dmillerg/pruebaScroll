import { Component, HostListener, OnInit } from '@angular/core';
import { homeAnim, openClose } from 'src/app/animation';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  animations: [openClose, homeAnim]
})
export class ScrollComponent implements OnInit {

  pages: any[] = [
    { id: 1, pais: 'active' },
    { id: 2, pais: 'esperadown' },
    { id: 3, pais: 'esperadown' },
    { id: 4, pais: 'esperadown' },
    { id: 5, pais: 'esperadown' },
    { id: 6, pais: 'esperadown' },
    { id: 7, pais: 'esperadown' },
    { id: 8, pais: 'esperadown' },
    { id: 9, pais: 'esperadown' },
  ];
  active: number = 0;
  currentPosition = window.pageYOffset;

  constructor() { }

  ngOnInit(): void {
  }

  // @HostListener("scroll", ['$event.target'])
  // onContentScrolled(e: HTMLElement) {
  //   let scroll = e.scrollTop;
  //   if (scroll > this.currentPosition) {
  //     console.log("scrollDown");
  //   } else {
  //     console.log("scrollUp");
  //   }
  //   this.currentPosition = scroll;
  // }
  

  scroll(event: any) {
    console.log(event);

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
        }, 0.1);
      }
    } else {
      this.active = this.active == 0 ? this.pages.length - 1 : this.active - 1
      if (this.pages[this.active].pais = 'esperadown') {
        this.pages[this.active].pais = 'esperaup'
        setTimeout(() => {
          this.pages[this.active].pais = 'active'
        }, 0.1);
      }
    }
  }

  down() {
    this.pages[this.active].pais = 'esperadown';
    this.cambiarActive('down');
  }

  cambiarHasta(id: number) {
    let caminocorto = (parseInt((id - this.active) + '') >= Math.round(this.pages.length / 2));
    while (this.active != id) {
      if (caminocorto) this.down(); else this.up();
    }
  }
}
