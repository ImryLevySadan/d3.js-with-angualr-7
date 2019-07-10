//SOURCE: http://bl.ocks.org/GerHobbelt/3669455
import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { forceLink } from 'd3';

@Component({
  selector: 'app-collapsible-force',
  templateUrl: './collapsible-force.component.html',
  styleUrls: ['./collapsible-force.component.css']
})
export class CollapsibleForceComponent implements OnInit {

@Input('data') data;

d3: d3.Simulation<any, any>;
width: number;
height: number;


ngOnInit(): void {
  this.data;
   
    
    this.width = window.innerWidth;
    this.height = window.innerHeight;   

   let svg = d3.select("#container").append("svg")
   .attr("width", this.width)
   .attr("height", this.height)
    
  let root = d3.hierarchy(this.data);
  let links = root.links();
  let nodes = root.descendants();

  root['fixed'] = true;
  root['px'] = root['py'] = 0;
  if (!root['x']){
    root['px'] = root['x'] = this.width /2;
    root['py'] = root['y'] = this.circleRadius(root) + 2;
   }

   const simulation = d3.forceSimulation(<any>nodes)
   .force("chrage", d3.forceManyBody().strength(d=> d['_children'] ? -d['size'] / 100 : d['children'] ? -100 : -30))
   .force("link", forceLink().id(d=> d['id']).distance(d=> d.target['_children'] ? 50 : 30))
   .force("x", d3.forceX())
   .force("y", d3.forceY())
   
   let link = svg.selectAll('line')
   .data(links);
      
   link.enter().append("line")
      .attr("style", " fill: none; stroke: #9ecae1; stroke-width: 1.5px;")
      .attr("x1", function(d) { return d['source']['x']; })
      .attr("y1", function(d) { return d['source']['y']; })
      .attr("x2", function(d) { return d['target']['x']; })
      .attr("y2", function(d) { return d['target']['y']; });

      link.exit().remove();

      let node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("style", "cursor: pointer; stroke: #000; stroke-width: .5px;")
      .attr("fill", d=> this.color(d))
      .attr("r", d =>  this.circleRadius(d))
      // .on("click", d => this.click(d, simulation, svg))
      .call(d3.drag());
      
      
      // let circleRadius = this.circleRadius;
      // this.node.transition()
      // .attr("cy", function(d) { return d.y; })
      // .attr("r", function(d) { return circleRadius(d); });


      // this.node.enter().append("circle")
      // .selectAll("circle")
      // .attr("style", "cursor: pointer; stroke: #000; stroke-width: .5px;")
      // .attr("fill", d=> this.color(d))
      // .attr("cx", function(d) { 
      //   console.log(d);
      //   return d.x; })
      // .attr("cy", function(d) { return d.y; })
      // .attr("r", d => {
      //   console.log(this.circleRadius(d)); 
      //   return this.circleRadius(d) })
      // .on("click", d => this.click(d, simulation, svg))
      // .call(d3.drag());

      node.exit().remove();

      simulation.on("tick", <any>this.tick(nodes, node, link))
  

}

// click = (d, simulation, svg) =>  {
//   if (d['children']) {
//     d['_children'] = d['children'];
//     d['children'] = null;
//   } else {
//     d['children'] = d['_children'];
//     d['_children'] = null;
//   }
//   update(simulation, svg);
// }
color = d => {
  return d['_children'] ? "#3182bd" : d['children'] ? "#c6dbef" : "#fd8d3c";
}

circleRadius = d => {
  return d.children ? 4.5 : Math.sqrt(d['size']) / 10;

}

tick = (nodes,node, link) => {
  // Apply the constraints:
  //
      let circleRadius = this.circleRadius;
      let width = this.width;
      let height = this.height;
      nodes.forEach(function(d) {
    if (!d.fixed) {
        var r =  circleRadius(d) + 4, dx, dy, ly = 30;

      // #1: constraint all nodes to the visible screen:
      //d.x = Math.min(width - r, Math.max(r, d.x));
      //d.y = Math.min(height - r, Math.max(r, d.y));

      // #1.0: hierarchy: same level nodes have to remain with a 1 LY band vertically:
      if (d.children || d._children) {
        var py = 0;
        if (d.parent) {
          py = d.parent.y;
        }
        d.py = d.y = py + d.depth * ly + r;
      }

      // #1a: constraint all nodes to the visible screen: links
      dx = Math.min(0, width - r - d.x) + Math.max(0, r - d.x);
      dy = Math.min(0, height - r - d.y) + Math.max(0, r - d.y);
      d.x += 2 * Math.max(-ly, Math.min(ly, dx));
      d.y += 2 * Math.max(-ly, Math.min(ly, dy));
      // #1b: constraint all nodes to the visible screen: charges ('repulse')
      dx = Math.min(0, width - r - d.px) + Math.max(0, r - d.px);
      dy = Math.min(0, height - r - d.py) + Math.max(0, r - d.py);
      d.px += 2 * Math.max(-ly, Math.min(ly, dx));
      d.py += 2 * Math.max(-ly, Math.min(ly, dy));

      // #2: hierarchy means childs must be BELOW parents in Y direction:
      if (d.parent) {
        d.y = Math.max(d.y, d.parent.y + ly);
        d.py = Math.max(d.py, d.parent.py + ly);
      }
    }
  });

  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { 
    console.log(d); 
    return d.x; })
      .attr("cy", function(d) { return d.y; });
}
}
