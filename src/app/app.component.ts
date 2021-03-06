import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChild('dtable',{static:false}) dataTable:any;
  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable();
  }
  ngOnInit(): void {
    
  }
  title = 'DataTable';
}
