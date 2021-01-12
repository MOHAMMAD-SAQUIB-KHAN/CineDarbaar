import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl= "https://checkfast.herokuapp.com/";
  // baseUrl= "127.0.0.1:8000/docs";
  // https://cors-anywhere.herokuapp.com/
  
  //  code:any;
   httpOptions = {};
   

  constructor(private HttpClient:HttpClient) { }


 // Api Structuring Functionality

postApi(endPoint, data, isHeader): Observable<any>  {
  if (isHeader == 1) {
  var httpOptions;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem('token'))
    }),
    observe: 'response'
  }
}else if (isHeader == 2) {
  var httpOptions;
  httpOptions = {
    headers: new HttpHeaders({
      "Authorization":"Bearer "+JSON.parse(localStorage.getItem('token'))
    }),
    observe: 'response'
  }
}else if (isHeader == 3) {
  var httpOptions;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'image/png'
      
    }),
    observe: 'response'
  }
}

else {
var httpOptions;
httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
  observe: 'response'
}
}
    return this.HttpClient.post((this.baseUrl + endPoint), data, httpOptions)
  
}

getApi(url, isHeader) {
  if (isHeader == 0) {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.HttpClient.get((this.baseUrl + url), httpOptions)
  }

  else if (isHeader == 1) {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.HttpClient.get((this.baseUrl + url), httpOptions)
  }

}


}

