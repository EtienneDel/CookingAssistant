import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landingContent',
  templateUrl: './landingContent.component.html',
  styleUrls: ['./landingContent.component.css']
})
export class LandingContentComponent {

  constructor(public router: Router) { 

  }
}
