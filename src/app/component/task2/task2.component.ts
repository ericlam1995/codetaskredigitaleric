import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Task3Service } from 'src/app/service/task3.service';
import { CvslistsortPipe } from 'src/app/pipes/cvslistsort.pipe';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  order: string;
  constructor(private task3serc: Task3Service, private sorting: CvslistsortPipe) {
    this.task3serc.getCSVfile();//Call function from service to get CVS data
   }

  ngOnInit() {
    //console.log(this.file);
    this.order = "id";

  }


}
