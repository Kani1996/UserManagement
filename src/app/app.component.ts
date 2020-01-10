import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'person';
  constructor(  private router: Router){
  }
  public profileClick(event : any){
    this.router.navigate(['/create-profile']);
  }
  public homeClick(event : any){
    this.router.navigate(['/home']);
  }
}
