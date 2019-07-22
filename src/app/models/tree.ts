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
    //The Tree layout functions errase the "status" property from the original links array. 
    //therefor, there is a need to sve each link status before the tree layout calculation, and then resotore it
    let linksStatus = [];
    this.links.forEach(link => linksStatus.push(link.status));
    //Calculate the Tree layout
    let root;
    root = this.dataLoaderService.findRoot(this.nodes, this.links)
    root = d3.hierarchy(root);
    let treemap = d3.tree().size([configurationData.height, configurationData.width/2]);
    let treeData:any;
    treeData = treemap(root);
    this.nodes = <any>treeData.descendants();
    
    //Restore the "status proprty"
    this.links = <any>treeData.links(this.nodes);
    this.links.forEach(link => {
      link.status = linksStatus.pop();
    });

    
  this.svg = new SvgStyling(this, configurationData);
  this.svg.initSvg(this.simulation);


  this.svg.link.attr("d", this.svg.linkPosition());
  
  this.svg.node
  .attr("transform", d => this.svg.nodePosition(d));

   }
  }