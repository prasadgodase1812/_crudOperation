import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder, FormControl} from '@angular/forms'
import {map,filter, BehaviorSubject, of, interval, timer, Subscriber, Observable} from 'rxjs'
import { CrudserviceService } from '../services/crudservice.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ui1',
  templateUrl: './ui1.component.html',
  styleUrls: ['./ui1.component.scss']
})
export class Ui1Component{   

  bootform!:FormGroup;

  constructor(private fb:FormBuilder, private http:CrudserviceService){

    this.bootform=fb.group({
      name:['',Validators.required],
      roll:['',Validators.required],
      city:['',Validators.required]
    })
      this._getBootUser();

  }

  Boost:any;

_getBootUser(){
  return this.http.bootuser().subscribe(res =>{
    this.Boost=res;
  })
}

_postBootUser(){
  return this.http.bootpost(this.bootform.value).subscribe(res =>{
    this._getBootUser();
  })
}


_deleteBoostuser(id:any){
  return this.http.bootdelete(id).subscribe(res =>{
    this._getBootUser();
  })
}

activUser:any;

_editBootUser(item:any){
this.activUser=item;
this.bootform.patchValue(item);
}

_updateBootUser(){
  return this.http.updateBoot(this.activUser?.id,this.bootform.value).subscribe(rees =>{
    this._getBootUser();
    location.reload();
  })
}



}
