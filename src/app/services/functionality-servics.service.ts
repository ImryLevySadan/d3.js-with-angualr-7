import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityServicsService {

  constructor() { }

  public click = (d) => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    return d;
  }
}
