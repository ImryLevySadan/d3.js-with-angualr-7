import { Link } from './link';
import { Node } from './node';
import { Layouts } from './layouts';
import * as d3 from 'd3';

export class SvgStyling {
d3:d3.Simulation<any, any>;
configurationData: any;
nodes: Node[];
links: Link[];
svg: any;
node: any;
link: any;
drag: any;
dragContainer: any
zoomed: any;


constructor(layout, configurationData) {
this.configurationData = configurationData;
this.nodes = layout.nodes;
this.links = layout.links;
this.drag = layout.drag;
this.dragContainer = layout.dragContainer;
this.zoomed = layout.zoomed;
    
}
    initSvg = (simulation) => {
     
     let width = this.configurationData.width;
     let height = this.configurationData.height;
    
    //Svg Styling
    this.svg = d3.select("#container").append("svg")
        .attr("viewBox", <any>[0, 0, width, height])
        .append("g")
        .call(d3.zoom()
        .on("zoom", this.zoomed))
    

    //Links Styling
    this.link = this.svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("id", "links")
      .selectAll("line")
      .data(this.links)
      .join("line")
      .attr("stroke-width", "2px") 
        
  
        //Node Styling
         this.node = this.svg.append("g")
        .attr("cursor", "pointer")
        .attr("id", "nodes")
        .selectAll("g")
        .data(this.nodes)
        .join('g')
        .call(<any>this.drag(simulation))

        let text = this.node.append("text")
        //The condition needed beacause this class handle to differnt types of data: Hierarchical (for tree layout) and flat (for force layout) 
        .text(d=>  d['data']? d['data']['label']: d['label'])

        let images = this.node.append("image")
        .attr("href", d=> d['data']? d['data']['iconPath'] : d['iconPath'])
        .attr("width", "25px")
        .attr("height", "25px");

        this.node.append("title")
       .text(d=> {return "Serial Number:" +  (d['data']? d['data']['serialNumber']: d['serialNumber'])});

     //Makes the graph Pannable
    let svgDrag = d3.select("svg").datum({x: 0, y: 0}).call(<any>this.dragContainer) 
    }

    //set Nodes and Links positions
    nodePosition = (d) => {
      let path;
      let value = this.configurationData.layout;
      switch (value) {
        case "Tree":
          path = `translate(${d['y']},${d['x']})`;
          return path;
        case "Force Directed Graph":
          path = `translate(${d['x']},${d['y']})`;
          return path;
        default:
          break;
      }
   
    }
    linkPosition = (d) => {

      let p0 = {
        x : d.source.x,
        y : d.source.y
      }
      let p3 = {
        x : d.target.x,
        y : d.target.y 
      } 
      let m = (p0.y + p3.y) / 2
      let p = [p0, 
        {
        x : p0.x,
        y : m
      }, 
      {
        x : p3.x,
        y : m
      }, p3 ];
      p = <any>p.map(function(d) {
        return [ d.y, d.x ];
      });
      return 'M' + p[0] + 'C' + p[1] + ' ' + p[2] + ' ' + p[3];
    }

    }


