import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html'
})
export class page2Component implements OnInit {
  active: boolean = false;
  first: boolean = true;
  constructor() { }

  ngOnChanges(){
    console.log('page2Component ngOnChanges')
  }

  ngOnInit() {
    console.log('page2Component ngOnInit')
  }

  ngAfterViewInit() {
    console.log('page2Component ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('page2Component ngOnDestroy')
  }

  loadNewPage() {
    this.active =true
    this.first=false
  }

}
