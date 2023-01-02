import { Component, OnInit } from '@angular/core';
const ROWS_HEIGTH: { [id:number]: number} = {1: 400, 3:335, 4:350}
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit {

  cols = 3;
  rowHeight = ROWS_HEIGTH[this.cols];
  category : string | undefined;
  

  constructor() { }

  ngOnInit(): void {
  }

  columsCountChange(colsNum: number ):void{
    this.cols = colsNum;
  }

  onShowCategory(nemCategory: string):void{
    this.category = nemCategory;
  }

}
