import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
@Injectable()
export class ServiceCallService {
  constructor(public http:Http) { }
  
 getData(){
   return  this.http.get('assets/response.json');
  }
  }//service end
  

