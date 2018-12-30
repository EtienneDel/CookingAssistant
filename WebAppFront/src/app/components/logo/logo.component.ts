import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  constructor(public router: Router) { 
    
  }

  goTo(dest){
    this.router.navigate([dest])
  }

}
