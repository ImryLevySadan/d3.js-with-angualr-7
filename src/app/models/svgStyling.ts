import { Link } from './link';
import { Node } from './node';
import * as $ from 'jquery';
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
      let rectNode = { width : 120, height : 45, textMargin : 5 };

     let width = this.configurationData.width;
     let height = this.configurationData.height;
    
    //Svg Styling
    this.svg = d3.select("#container").append("svg")
        .attr("viewBox", <any>[0, 0, width, height])
        .append("g");

    //Makes the SVG element Zoomable
    let svgZoom = d3.select("svg")
        .call(d3.zoom()
        .on("zoom", this.zoomed))
        

     //Makes the svg element pannable
      let svgDrag = d3.select("svg")
      .datum({x: 0, y: 0})
      .call(<any>this.dragContainer)

    //Links Styling
          //Force directed graphs does not uses "path" SVG element, but "line".
         //Therefore, depending on the layout, we need to set a different element for drawing the links 
          let linkType = ((this.configurationData.layout == "Tree") ? "path": "line");

    this.link = this.svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "lightsteelblue")
    .attr("stroke-width", "2px") 
    . attr("stroke-width", 1.5)
      .attr("id", "links")
      .selectAll(linkType)
      .data(this.links)
      .join(linkType)
      //Adding Link events
      .on('mouseover', function(d) {
        d3.select(this).attr('style', 'fill: none; stroke: tomato; stroke-width: 2px;')})
        .on('mouseout', function(d) {
          d3.select(this).attr('style', 'fill: none; stroke: lightsteelblue; stroke-width: 2px;')});
     
        //Node Styling

        this.nodes.forEach(d=> {if(!simulation) return d['y'] = d['depth'] * (rectNode.width * 1.5)}); 

         this.node = this.svg.append("g")
        .attr("cursor", "pointer")
        .attr("id", "nodes")
        .selectAll("g")
        .data(this.nodes)
        .join('g')
        .call(this.drag(simulation))

        let rect = this.node.append('rect')
        .attr('rx', 10)
        .attr('ry', 10)
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", "2px") 
        .attr('width', 120)
        .attr('height', 45)
        
        let text = this.node.append("text")
        //The condition needed beacause this class handle to differnt types of data: Hierarchical (for tree layout) and flat (for force layout) 
        .text(d=>  d['data']? d['data']['label']: d['label'])

        let images = this.node.append("image")
        .attr("href", d=> d['data']? d['data']['iconPath'] : d['iconPath'])
        .attr("width", "25px")
        .attr("height", "25px")
       

        this.node.append("title")
       .text(d=> "Serial Number:" +  (d['data']? d['data']['serialNumber']: d['serialNumber']));

    }

    //set Nodes positions
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

    //This function is only caled by the Tree class, which is using "path" SVG element, unlike the Force directed graph class, which is using only in "line" element
    linkPosition = (d) => {
      let rectNode = { width : 120, height : 45, textMargin : 5 };

      var p0 = {
        x : d.source.x + rectNode.height / 2,
        y : (d.source.y + rectNode.width)
      }, p3 = {
        x : d.target.x + rectNode.height / 2,
        y : d.target.y
      }, m = (p0.y + p3.y) / 2, p = [ p0, {
        x : p0.x,
        y : m
      }, {
        x : p3.x,
        y : m
      }, p3 ];
      p = <any>p.map(function(d) {
        return [ d.y, d.x ];
      });
      return 'M' + p[0] + 'C' + p[1] + ' ' + p[2] + ' ' + p[3];
    }

  }