import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuOpen = false;
  constructor(private router: Router) { }

openMenu() {
  this.menuOpen = !this.menuOpen;
}
goHelp() {
  this.router.navigate(['/help']); // or use navigateBack() if you want to go back in history
} 
goHome() {
  this.router.navigate(['']); // or use navigateBack() if you want to go back in history
}
}
