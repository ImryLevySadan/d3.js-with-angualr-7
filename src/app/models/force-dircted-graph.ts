import { Link } from 'src/app/models/link';
import { Node } from 'src/app/models//node';
import * as d3 from 'd3';
import { Layouts } from './layouts';

export class ForceDirectedGraph extends Layouts{
 
  public simulation: d3.Simulation<any, any>;
  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor(nodes, links, configurationData) {
    super();
    this.nodes = nodes;
    this.links = links;
    this.initSvg(configurationData);    
  }

   initSvg =(configurationData) => { 
    
  this.simulation = d3.forceSimulation(<any>this.nodes)
  .force("link", d3.forceLink(this.links).id(d => d['id']))
  .force("charge", d3.forceManyBody().strength(-750))
  .force("center", d3.forceCenter(configurationData.width / 2, configurationData.height / 2))

  const svg = d3.select("#container")
  .append("svg")
  .attr("viewBox", <any>[0, 0, configurationData.width, configurationData.height])
  .append("g")
  .call(d3.zoom()
  .on("zoom", this.zoomed));

let svgDrag = d3.select("svg").datum({x: 0, y: 0}).call(<any>this.dragcontainer)
 
const link = svg.append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .attr("id", "links")
.selectAll("line")
.data(this.links)
.join("line")
.attr("stroke-width", d => Math.sqrt(2.1));

let node = svg.append("g")
.attr("cursor", "pointer")
  .attr("id", "nodes")
  .selectAll("g")
  .data(this.nodes)
  .join('g')
  .call(<any>this.drag(this.simulation));

  let text = node.append("text")
        .text(d=> d['label'])

        let images = node.append("image")
        .attr("href", d=> d['iconPath'])
        .attr("width", "25px")
        .attr("height", "25px");

        node.append("title")
       .text(d=>  "Serial Number:" +  d['serialNumber']);

      //  node.call(<any>this.drag(this.simulation));

      this.simulation.on("tick", () => {
        link
            .attr("x1", d => d['source']['x'])
            .attr("y1", d => d['source']['y'])
            .attr("x2", d => d['target']['x'])
            .attr("y2", d => d['target']['y']);
    
        node
            .attr("transform", function(d) {
              return "translate(" + d['x'] + "," + d['y'] + ")";
        })
      });
 }
}