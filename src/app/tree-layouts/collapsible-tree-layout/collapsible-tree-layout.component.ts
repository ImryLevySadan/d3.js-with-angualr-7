//SOURCE: https://observablehq.com/@d3/collapsible-tree

import { Component, OnInit, Input } from '@angular/core';
import * as d3 from "d3";
import {DataLoaderService} from 'src/app/services/data-loader.service';


@Component({
  selector: 'app-collapsible-tree-layout',
  templateUrl: './collapsible-tree-layout.component.html',
  styleUrls: ['./collapsible-tree-layout.component.css']
})
export class CollapsibleTreeLayoutComponent implements OnInit {
d3: d3.TreeLayout<any>;
@Input('data') data;

constructor(private dataLoaderService:DataLoaderService) {}

  ngOnInit() {
 
    let width = window.innerWidth;
    let dy = width / 6;
    let dx = 10;
    let margin = {top: 10, right: 120, bottom: 10, left: 40}
   
  let root = <any>this.dataLoaderService.findRoot(this.data.nodes, this.data.links)

  root = d3.hierarchy(root[0]);
  root['fixed'] = true;
  root['x0'] = dy / 2;
  root['y0'] = 100;

  root.descendants().forEach((d, i) => {
    d.id = <any>i;
    d['_children'] = d['children'];
    
  });
        
  const svg = d3.select("#container").append("svg")
      .attr("viewBox", <any>[-margin.left, -margin.top, width, dx])
      .style("font", "10px sans-serif")
      .style("user-select", "none")

      const gLink = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5);
    

  const gNode = svg.append("g")
      .attr("cursor", "pointer")
      .attr("pointer-events", "all")
    
  function update(source) {
    const duration = d3.event && d3.event.altKey ? 2500 : 250;
    let TreeLayout = d3.tree().nodeSize([dx, dy]);
    let treeData = TreeLayout(root);
    const nodes = root.descendants().reverse();
    const links = root.links();
    // let nodes = treeData.descendants();
    // let links = treeData.descendants().slice(1);
    
    // Compute the new tree layout.


    let left = root;
    let right = root;
    root.eachBefore(node => {
      if (node['x'] < left['x']) left = node;
      if (node['x'] > right['x']) right = node;
    });

    const height = right['x'] - left['x'] + margin.top + margin.bottom;
    const transition = svg.transition()
        .duration(duration)
        .attr("viewBox", <any>[-margin.left, left['x'] - margin.top, width, height])
        .tween("resize", window.onresize ? null : () => () => svg.dispatch("toggle"));

    // Update the nodes…
   
    const node = gNode.selectAll("g")
      .data(nodes, d =>d['id']);

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append("g")
        .attr("transform", d => `translate(${source.y0},${source.x0})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0)
        .on("click", d => {
          d['children'] = d['children'] ? null : d['_children'];
          update(d);
        });

    nodeEnter.append("circle")
        .attr("r", 2.5)
        .attr("fill", d => ['_children'] ? "#555" : "#999")
        .attr("stroke-width", 10);

    nodeEnter.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d['_children'] ? -6 : 6)
        .attr("text-anchor", d => d['_children'] ? "end" : "start")
        .text(d => d['data']['type'])
      .clone(true).lower()
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .attr("stroke", "white");

    // Transition nodes to their new position.
    const nodeUpdate = node.merge(nodeEnter).transition(transition)
        .attr("transform", d => `translate(${d['y']},${d['x']})`)
        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition(transition).remove()
        .attr("transform", d =>  `translate(${source.y},${source.x})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0);

    // Update the links…
    const link = gLink.selectAll("path")
      .data(links, d =>  d['target']['id']);

      //converting diagonal to linkhorizon
     let diagonal = <any>d3.linkHorizontal().x(d => d['y']).y(d => d['x']);
    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().append("path")
        .attr("d", d => {
          const o = {x: source.x0, y: source.y0};
          return diagonal({source: o, target: o});
        });

    // Transition links to their new position.
    link.merge(linkEnter).transition(transition)
        .attr("d", <any>diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition(transition).remove()
        .attr("d", d => {
          const o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
        });

    // Stash the old positions for transition.
    root.eachBefore(d => {
      d['x0'] = d['x'];
      d['y0'] = d['y'];
    });
  }
    
  update(root);

  }
 
}
