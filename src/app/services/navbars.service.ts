import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarsService {
  visible:boolean;
  constructor() { }
show(){this.visible=true;}
hide(){this.visible=false;}
}
