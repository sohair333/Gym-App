import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinning',
  template: '<div class="lds-ripple mt-5"><div></div><div></div></div>',
  styleUrls: ['./loading-spinning.component.css']
})
export class LoadingSpinningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
