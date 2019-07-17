import { Link } from 'src/app/models/link';
import { Node } from 'src/app/models//node';
import * as d3 from 'd3';
import { Layouts } from './layouts';
import {SvgStyling} from './svgStyling';


export class ForceDirectedGraph extends Layouts{
 
  public simulation: d3.Simulation<any, any>;
  public nodes: Node[] = [];
  public links: Link[] = [];
  public node: Node;
  public link: Link;
  public svg: SvgStyling;

  constructor(nodes, links, configurationData) {
    super();
    this.nodes = nodes;
    this.links = links;
    this.initGraph(configurationData);    
  }

   initGraph =(configurationData) => { 
    
  this.simulation = d3.forceSimulation(<any>this.nodes)
  .force("link", d3.forceLink(this.links).id(d => d['id']))
  .force("charge", d3.forceManyBody().strength(-750))
  .force("center", d3.forceCenter(configurationData.width / 2, configurationData.height / 2))

  this.svg = new SvgStyling(this, configurationData);
  this.svg.initSvg(this.simulation);
  
  let x = this.simulation.on("tick", () => {
        this.svg.link
            .attr("x1", d => d['source']['x'])
            .attr("y1", d => d['source']['y'])
            .attr("x2", d => d['target']['x'])
            .attr("y2", d => d['target']['y']);
    
        this.svg.node
            .attr("transform", d => this.svg.nodePosition(d));
              });
 }
}