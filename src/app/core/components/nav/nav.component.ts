import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuOpen = false;

openMenu() {
  this.menuOpen = !this.menuOpen;
}


}
