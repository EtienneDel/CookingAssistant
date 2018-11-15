import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
