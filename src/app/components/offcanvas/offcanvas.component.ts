import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.sass'
})
export class OffcanvasComponent implements OnInit {
  isMenuOpen: boolean = false;
  isSubmenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  openSubmenu(): void {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}
