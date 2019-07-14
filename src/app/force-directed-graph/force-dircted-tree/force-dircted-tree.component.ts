// origin: https://observablehq.com/@d3/force-directed-tree

import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import {DataLoaderService} from 'src/app/services/data-loader.service'

@Component({
  selector: 'app-force-dircted-tree',
  templateUrl: './force-dircted-tree.component.html',
  styleUrls: ['./force-dircted-tree.component.css']
})
export class ForceDirctedTreeComponent implements OnInit {
d3: d3.Simulation<any,any>;
@Input('data') data;
root: any;

constructor(private dataLoaderService: DataLoaderService) {}
  ngOnInit() {
  //NOTICE: The data structure is hierarchy
  this.root = this.dataLoaderService.findRoot(this.data.nodes, this.data.links)
  this.root = this.dataLoaderService.createTree(this.root, this.data.nodes, this.data.links)
  this.root = d3.hierarchy(this.root);
  const links = this.data.links;
  const nodes = this.data.nodes;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const simulation = d3.forceSimulation(<any>nodes)
      .force("link", d3.forceLink(<any>links).id(d => {
        console.log(d); 
        return d['id']}).distance(0).strength(1))
      .force("charge", d3.forceManyBody().strength(-50))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

  const svg = d3.select("#container").append("svg")
      .attr("viewBox", <any>[-width / 2, -height / 2, width, height]);

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("fill", d => d['children'] ? null : "#000")
      .attr("stroke", d => d['children'] ? null : "#fff")
      .attr("r", 3.5)
      .call(<any>this.drag(simulation));

  node.append("title")
      .text(d => d['label']);

  simulation.on("tick", () => {
    link
        .attr("x1", d => d['source']['x'])
        .attr("y1", d => d['source']['y'])
        .attr("x2", d => d['target']['x'])
        .attr("y2", d => d['target']['y']);

    node
        .attr("cx", d => d['x'])
        .attr("cy", d => d['y']);
  });

  }

  drag = simulation => {
  
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

}
