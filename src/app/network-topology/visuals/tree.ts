import { Link } from '../models/link';
import { Node } from '../models/node';
import * as d3 from 'd3';
import {Layouts} from "../layouts-layer/layouts";
import { SvgStyling } from '../layouts-layer/svgStyling';
import * as arrayToTree from 'array-to-tree';


export class Tree extends Layouts {
  public nodes: Node[] = [];
  public links: Link[] = [];
  public svg: SvgStyling;

  TreeLayout: d3.TreeLayout<any>;
  treeData: any;
  root: any;

  constructor(nodes, links, configurationData) {
    super();
    this.nodes = nodes;
    this.links = links;
    this.initGraph(configurationData);    
  }

  initGraph = (configurationData) => {
    //This part is equivalentnoun to the creat simulation process in the Force directed graph class.
    //Here, using "findRoot()" and "createTree()" methodes, the tree class calculate the tree layout. 

    //The Tree layout functions errase the "status" property from the original links array. 
    //therefor, there is a need to sve each link status before the tree layout calculation, and then resotore it
    let linksStatus = [];
    this.links.forEach(link => linksStatus.push(link.status));
    //Calculate the Tree layout
    let root;
    root = this.findRoot(this.nodes, this.links)
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
  this.svg.initSvg(null);


  this.svg.link.attr("d", this.svg.linkPosition());
  
  this.svg.node
  .attr("transform", d => this.svg.nodePosition(d));

   }

   //As written above, The next two function are responsible to converting the data from a nodes-links double flat array into hierachical stucture
   //"findroot" gets the nodes and links data and find the root node. 
   //Then, it calls "createTree" which transform this node into a tree object 
   
   findRoot (nodes, links) {
    let rootNode;
    var isRoot = true;
    for (let i=0; i < nodes.length; i++){
      isRoot = true;
    for (let j=0; j < links.length; j++){
        if (links[j].source.id? nodes[i].id == links[j].source.id: nodes[i].id == links[j].source){
        isRoot = false;
        break;
    }
  }
    if (isRoot) {
      rootNode = nodes[i];
      return (this.createTree(rootNode, nodes, links));
             }
        } 
    }
   createTree(root, nodes, links) {

    for (let i=0; i < nodes.length; i++) {
      for (let j=0; j < links.length; j++){
        if (links[j].source.id? nodes[i].id == links[j].source.id: nodes[i].id == links[j].source){
          nodes[i].parent_id = links[j].target.id? links[j].target.id: links[j].target
        }
    }
}
let rootNode = (arrayToTree(nodes))
return rootNode[0];
  }  

}
