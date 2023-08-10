import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrudserviceService } from '../services/crudservice.service';
import { Observable, of, first } from 'rxjs';


@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss']
})
export class Ui2Component implements OnInit {

  newform: FormGroup;
  activeItem: any;

  constructor(private fb: FormBuilder, private http: CrudserviceService) {

    this.newform = fb.group({
      name: ['', Validators.required],
      cname: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
      mobile: ['', Validators.required]


    })
    this._getData();
  }

  ngOnInit() {
  }


  getControlByName(controlName: string): FormControl {
    return this.newform.get(controlName) as FormControl;
  }

  base: any;

  _getData() {
    this.http.getuser().subscribe(res => {
      this.base = res;
    })
  }

  _postData() {
    this.http.postuser(this.newform.value).subscribe(res => {
      this._getData();
      location.reload();
    })
  }

  _deleteUser(id: any) {
    this.http.deleteuser(id).subscribe(res => {
      this._getData();
    })
  }


  _editData(items: any) {
    this.activeItem = items;
    this.newform.patchValue(items);
  }

  _updateUser() {
    this.http.updatuser(this.activeItem?.id, this.newform.value).subscribe(res => {
      this._getData();
      location.reload();
    })
  }

}
