import { Component } from '@angular/core';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OffcanvasComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

}
