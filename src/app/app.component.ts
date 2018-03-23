import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ServiceCallService } from './service-call.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public rawResponse: any = [];
  public items: any = [];
  public sortOrd = 1;//to make the sort toggle
  public index = 3;//to initial show items
  public prevParam = '';//tomaintain previous sort param
  public parameter = 'accountId';//default sort param
  public hideLoad=false;
  constructor(private service: ServiceCallService) {

  }
  ngOnInit(): void {
    //to get the data from the source/backend
    this.service.getData().subscribe(res => {
      this.rawResponse = JSON.parse(res['_body']);//if need to maintain original response
      this.items =  JSON.parse(res['_body']);//to consume the data in view
    });
  }
/**
to update the sorting array by the selected param
use sorting pipe for the sort
*/
  sorting(parameter) {
    this.parameter = parameter;
    if (this.prevParam && this.prevParam !== parameter)
      this.sortOrd *= 1;
    else {
      this.sortOrd *= -1;
    }
    this.prevParam = parameter;
  }

/**
to load the response using limitTo pipe
*/
  loadMore() {
    let arraylenth = this.rawResponse.length;
    this.index += 3;
    this.hideLoad=false;
    if(this.index >= arraylenth){
      this.index = arraylenth;
      this.hideLoad=true;
    }

  }
}
