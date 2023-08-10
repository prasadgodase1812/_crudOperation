import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http:HttpClient) { }

  
getuser(){
  return this.http.get("http://localhost:3000/details");
}

postuser(data:any){
  return this.http.post("http://localhost:3000/details",data);
}

deleteuser(id:any){
return this.http.delete(`http://localhost:3000/details/${id}`)
}

updatuser(id:any,body:any){
  return this.http.put(`http://localhost:3000/details/${id}`,body)
}

bootuser(){
return this.http.get("http://localhost:3000/baseboot");
}

bootpost(id:any){
return this.http.post("http://localhost:3000/baseboot",id);
}

bootdelete(id:any){
return this.http.delete(`http://localhost:3000/baseboot/${id}`)
}

updateBoot(id:any,body:any){
return this.http.put(`http://localhost:3000/baseboot/${id}`,body)
  
}

}
