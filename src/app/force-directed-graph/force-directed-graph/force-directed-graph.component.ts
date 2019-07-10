import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-force-directed-graph',
  templateUrl: './force-directed-graph.component.html',
  styleUrls: ['./force-directed-graph.component.css']
})
export class ForceDirectedGraphComponent implements OnInit {
  d3:d3.Simulation<any, any>;

  @Input('data') data;
      
constructor() {}
   
  ngOnInit() {
    //NOTICE: The data structure is not hierarchy
  
    const links = this.data.links;
    const nodes = this.data.nodes;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const simulation = d3.forceSimulation(<any>nodes)
        .force("link", d3.forceLink(links).id(d => d['id']))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));
  
    const svg = d3.select("#container").append("svg")
        .attr("viewBox", <any>[0, 0, width, height]);
  
    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(d['value']));
  
    let node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("r", 5)
        .attr("fill", <any>this.initColor())
        .call(<any>this.drag(simulation));

      
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

  initColor(){
    const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => scale(d.group);
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
