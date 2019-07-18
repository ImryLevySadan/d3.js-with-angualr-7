import { Link } from 'src/app/models/link';
import { Node } from 'src/app/models//node';
import * as d3 from 'd3';
import {Layouts} from "./layouts";
import { SvgStyling } from './svgStyling';

export class Tree extends Layouts {
 
  public simulation: d3.Simulation<any, any>;
  public nodes: Node[] = [];
  public links: Link[] = [];
  TreeLayout: d3.TreeLayout<any>;
  treeData: any;

  public svg: SvgStyling;
  root: any;


  constructor(nodes, links, configurationData) {
    super();
    this.nodes = nodes;
    this.links = links;
    this.initGraph(configurationData);    
  }

  initGraph = (configurationData) => {
    let root;
    root = this.dataLoaderService.findRoot(this.nodes, this.links)
    root = d3.hierarchy(root);
      
    let treemap = d3.tree().size([configurationData.height, configurationData.width/2]);
    let treeData:any;
    treeData = treemap(root);
    this.nodes = <any>treeData.descendants();
    this.links = <any>treeData.links(this.nodes);

    
  this.svg = new SvgStyling(this, configurationData);
  this.svg.initSvg(this.simulation);

  this.svg.link.attr("d", d=> this.svg.linkPosition(d));

  this.svg.node
  .attr("transform", d => this.svg.nodePosition(d));

   }
  }