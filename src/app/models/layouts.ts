import * as d3 from 'd3';
import {DataLoaderService} from 'src/app/services/data-loader.service';
import { HttpClient } from '@angular/common/http';


export abstract class Layouts {
 private httpClient: HttpClient;

 protected dataLoaderService:DataLoaderService = new DataLoaderService(this.httpClient);
    
  protected click = (d) => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    return d;
  }

  protected dragContainer = d3.drag().on("drag", function(d) {
    d3.select(this).attr("transform", "translate(" + (d['x'] = d3.event.x) + "," + (d['y'] = d3.event.y) + ")");
  });

  protected drag = simulation => {
    
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

  protected zoomed  = () => {
    let transform = d3.event.transform;
    let g = d3.select("g");
    return g.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')')
  }

  protected abstract initGraph = (configurationData) =>{}

}