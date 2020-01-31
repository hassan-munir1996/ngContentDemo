import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  active:boolean=true;

  constructor() { }

  ngOnChanges(){
    console.log('HomeComponent ngOnChanges')
  }
  ngOnInit() {
    console.log('HomeComponent ngOnInit')
  }
  
  ngAfterViewInit() {
    console.log('HomeComponent ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('HomeComponent ngOnDestroy')
  }
}
