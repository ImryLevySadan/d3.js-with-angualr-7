import { Injectable } from '@angular/core';
import {DataLoaderService} from 'src/app/services/data-loader.service'
import * as d3 from 'd3';
import {FunctionalityService} from 'src/app/services/functionality.service'

@Injectable({
  providedIn: 'root'
})
export class SvgService {
d3:d3.Simulation<any, any>;

  constructor(private functionalityService: FunctionalityService) { }

  public initSvg (data, simulation) {
    let links = data.links;
    let nodes = data.nodes;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const svg = d3.select("#container").append("svg")
        .attr("viewBox", <any>[0, 0, width, height])
        .append("g");

      svg.call(d3.zoom()
        .on("zoom", this.functionalityService.zoomed))
        

    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("id", "links")
      .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(2.1));
  
    let node = svg.append("g")
      .attr("cursor", "pointer")
        .attr("id", "nodes")
        .selectAll("g")
        .data(nodes)
        .join('g');

        // let rect = node.append('rect')
        // .attr("width", 120)
        // .attr("height", 45)
        // .attr("fill", "white")
        // .attr("stroke", "#000")
        // .attr("stroke-width", "2px")
        // .attr("x", 0)
        // .attr("y", 0)

        let text = node.append("text")
        .text(d=> d['label'])

        let images = node.append("image")
        .attr("href", d=> d['iconPath'])
        .attr("width", "25px")
        .attr("height", "25px");

        node.append("title")
       .text(d=>  "Serial Number:" +  d['serialNumber']);

       node.call(<any>this.functionalityService.drag(simulation));

      

    const layout = {svg: svg, node: node, link: link, width: width, height: height}
    return (layout);
}

public initTreeSvg() {

}
}
