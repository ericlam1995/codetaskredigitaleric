import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Headers, Response, RequestMethod, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class Task3Service {

  result1:any = null;
  jsonresult = [];
  constructor(private http: Http) { }


  getCSVfile(){ //Using http get method to get CSV file
    this.http.get('./assets/test_data.csv').subscribe(
      data =>{
        this.result1 = data.text(); //Convert to text
        let line = this.result1.split("\n"); //Split all \n line
        let header = line[0].split(","); //Get column header of CSV
        console.log(header);
        for(let i = 1; i < line.length - 1; i++){ //Using for loop to get data: id, first name,
          //last name, email, gender, ip address and balance
          let jsonobject = {}; //declare empty object
          let eachline = line[i].split(","); //get data which split comma in to array
          jsonobject = {
            id: eachline[0],
            first_name: eachline[1],
            last_name: eachline[2],
            email: eachline[3],
            gender: eachline[4],
            ip_address: eachline[5],
            balance: eachline[6]
          }
          // console.log(eachline);
          // for(let j = 0; j  < header.length; j++){
          //   jsonobject[header[j]] = eachline[j]; //Using for loop to put data into object
          // }
          this.jsonresult.push(jsonobject); //push to array
        }
        console.log(this.jsonresult);
      }
    );
  }
}
