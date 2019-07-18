//SOURCE: https://codepen.io/rjvim/pen/rYGzja?editors=0010
import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import {DataLoaderService} from 'src/app/services/data-loader.service';
import {FunctionalityService} from 'src/app/services/functionality.service';

@Component({
  selector: 'app-vertical-tree',
  templateUrl: './vertical-tree.component.html',
  styleUrls: ['./vertical-tree.component.css']
})
export class VerticalTreeComponent implements OnInit {
  @Input('data') data;
d3: d3.TreeLayout<any>;
duration:number = 750;
i: number = 0;

constructor(private dataLoaderService:DataLoaderService, private functionalityService: FunctionalityService) {
  
}
  ngOnInit() {

      let draw = (source) => {
      let margin = {top: 20, right: 20, bottom: 30, left: 20};
      let width = 960 - margin.left - margin.right + 400;
      let height = 500 - margin.top - margin.bottom;
      
      let treemap = d3.tree().size([width, height]);
      let treeData = treemap(root);
      let nodes = treeData.descendants();
      let links = treeData.descendants().slice(1);
  
      nodes.forEach(d => d.y = d.depth * 100);
      
      let node = g.selectAll('g.node')
      .data(nodes, d => d['id'] || (d['id'] = ++this.i));
  
      let nodeEnter = node
      .enter()
    .append('g')
    .attr('class', 'node')
    .attr("style", "cursor: pointer")
    .attr("transform", d=> "translate(" + source.x0 + "," + source.y0 + ")")
    .on('click',d=> draw(this.functionalityService.click(d)));
  
  
    nodeEnter.append('circle')
    .attr('class', 'node')
    .attr("stroke", "steelblue")
    .attr("stroke-width", "1.5px")
    .attr("fill", d =>  d['_children'] ? "bluelightsteelblue" : "#fff")
    .attr('r', 1e-6)
  
    nodeEnter.append('text')
    .attr("dy", ".35em")
    .attr("style", "font: 10px sans-serif")
    .attr("x", d =>
        d.children || d['_children']? -13 : 13)
    .attr("text-anchor", d => d.children || d['_children']? "end" : "start")
    .text(d =>  d.data['type'] + ' in:' + d.data['label']);
      
  
    let nodeUpdate = nodeEnter.merge(<any>node);
    
    nodeUpdate.transition()
    .duration(this.duration)
    .attr("transform", d => "translate(" + d.x + "," + d.y + ")");
  
    nodeUpdate.select('circle')
    .attr('r', 10)
    .attr("fill", d =>  d['_children'] ? "lightsteelblue" : d['data']['color'])
    .attr('cursor', 'pointer');
  
    let nodeExit = node.exit().transition()
    .duration(this.duration)
    .attr("transform",d => "translate(" + source.x + "," + source.y + ")")
    .remove();
  
  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
  .attr('r', 1e-6)
  
  // On exit reduce the opacity of text labels
  nodeExit.select('text')
  .style('fill-opacity', 1e-6);
  
  // Let's draw links
  let link = g.selectAll('path.link')
  .data(links, d=> d['id']);
  
  // Work on enter links, draw straight lines
  
  let linkEnter = link.enter().insert('path', "g")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-width", "1.5px")
  .attr('d', () =>{
    let o = {x: source.x0, y: source.y0};
    return diagonal(o, o)
  });
  
  // UPDATE
  let linkUpdate = linkEnter.merge(<any>link);
  
  
    // Transition back to the parent element position, now draw a link from node to it's parent
    linkUpdate.transition()
        .duration(this.duration)
        .attr('d', d =>diagonal(d, d.parent));
  
    // Remove any exiting links
    let linkExit = link.exit().transition()
        .duration(this.duration)
        .attr('d', d => {
          let o = {x: source.x, y: source.y}
          return diagonal(o, o)
        })
        .remove();
  
          // Store the old positions for transition.
    nodes.forEach(function(d){
      d['x0'] = d.x;
      d['y0'] = d.y;
    });
  
    }   
  
      let diagonal = (s, d) => {
    
       let path = `M ${s.x} ${s.y}
               L ${d.x} ${d.y}`;     
     return path
       }
  
  let margin = {top: 20, right: 20, bottom: 30, left: 20};
  let width = 960 - margin.left - margin.right + 400;
  let height = 500 - margin.top - margin.bottom;


  let svg = d3.select("#container")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)

let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let root;
    root = this.dataLoaderService.findRoot(this.data.nodes, this.data.links)
    root = d3.hierarchy(root);
    root.x0 = 0;
    root.y0 = width / 3;
    
   draw(root);
  }
  
}
