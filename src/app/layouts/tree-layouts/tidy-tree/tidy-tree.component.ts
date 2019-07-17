import { Component, OnInit, Input } from '@angular/core';
import * as d3 from "d3";
import {DataLoaderService} from 'src/app/services/data-loader.service';

@Component({
  selector: 'app-tidy-tree',
  templateUrl: './tidy-tree.component.html',
  styleUrls: ['./tidy-tree.component.css']
})
export class TidyTreeComponent implements OnInit {
  @Input('data') data;
  d3: d3.TreeLayout<any>
  tree;
  root:any;
  width:number = 932;
   i = 0;
  duration = 750;
    rectW = 60;
    rectH = 30;

    constructor(private dataLoaderService: DataLoaderService) {}
  
  ngOnInit() {
    let root = <any>this.dataLoaderService.findRoot(this.data.nodes, this.data.links)
    root = this.initTree(root);
    let x0 = Infinity;
    let x1 = -x0;
      root.each(d => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });


  const svg = d3.select("#container").append("svg")
      .attr("viewBox", <any>[0, 0, this.width, x1 - x0 + root['dx'] * 2]);
  
  const g = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("transform", `translate(${root['dy'] / 3},${root['dx'] - x0})`);
    
  const link = g.append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
  .selectAll("path")
    .data(root.links())
    .join("path")
      .attr("d", <any>d3.linkHorizontal()
      .x(d=> d['y'])
      .y(d=>d['x']));

         
  const node = g.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
    .selectAll("g")
    .data(root.descendants())
    .join("g")
      .attr("transform", d => `translate(${d['y']},${d['x']})`);

  node.append("circle")
      .attr("fill", d => d['children'] ? "#555" : "#999")
      .attr("r", 2.5);

  node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d['children'] ? -6 : 6)
      .attr("text-anchor", d => d['children'] ? "end" : "start")
      .text(d => d['data']['label'])
      .clone(true).lower()
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .attr("stroke", "white");
  
}
initTree(data){
  const root = d3.hierarchy(data);
  root['dx'] = 10
  root['dy'] = this.width /(root.height+1);
  return d3.tree().nodeSize([root['dx'], root['dy']])(root);

}
}

