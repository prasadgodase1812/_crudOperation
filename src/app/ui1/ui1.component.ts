import { Component, OnInit } from '@angular/core';
import {map,filter, BehaviorSubject, of, interval, timer, Subscriber, Observable} from 'rxjs'

@Component({
  selector: 'app-ui1',
  templateUrl: './ui1.component.html',
  styleUrls: ['./ui1.component.scss']
})
export class Ui1Component implements OnInit {   

  user=[
    {id:'1' ,name:'Aniket', isActivate:true},
    {id:'2' ,name:'Akshay', isActivate:true},
    {id:'3' ,name:'Prasad', isActivate:true},
    {id:'4' ,name:'Rahul', isActivate:true},
    {id:'5' ,name:'Sunil', isActivate:true},
  ];
  

  ngOnInit(): void {

}

private data:any[]=[1,2,3];

_getData():Observable<any[]>{
return of(this.data);

}


}
