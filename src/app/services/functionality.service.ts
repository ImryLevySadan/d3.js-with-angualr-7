import { Injectable } from '@angular/core';
import * as d3 from 'd3';


@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

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

  public drag = simulation => {
  
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }

  public zoomed  = () => {
    let transform = d3.event.transform;
    let g = d3.select("g")
    return g.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')')
  }

}
