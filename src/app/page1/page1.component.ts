import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {
  active: boolean = false;
  first: boolean = true;
  constructor() { }

  ngOnChanges(){
    console.log('Page1Component ngOnChanges')
  }

  ngOnInit() {
    console.log('Page1Component ngOnInit')
  }

  ngAfterViewInit() {
    console.log('Page1Component ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('Page1Component ngOnDestroy')
  }

  loadNewPage() {
    this.active =true
    this.first = false
  }

}
