import { Link } from './link';
import { Node } from './node';
import * as d3 from 'd3';
import * as $ from 'jquery';


export class SvgStyling {
d3:d3.Simulation<any, any>;
configurationData: any;
nodes: Node[];
links: Link[];
svg: any;
node: any;
link: any;
linkToolTip: any;
drag: any;
dragContainer: any
zoomed: any;
clickCoordiante: [number, number] = [0, 0];
//This property set the rectangle element size, which also affect other calculation (like links position)
rectSizes = { width : 50, height : 20, textMargin : 5 };


constructor(layout, configurationData) {
this.configurationData = configurationData;
this.nodes = layout.nodes;
this.links = layout.links;
this.drag = layout.drag;
this.dragContainer = layout.dragContainer;
this.zoomed = layout.zoomed;
    
}
    initSvg = (simulation) => {
    let rectSizes = this.rectSizes;

     let width = this.configurationData.width;
     let height = this.configurationData.height;
    
    //Svg element Styling
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
          let linkType = ((this.configurationData.layout == "Tree") ? "path": "line")

  //This variable will allow the Jquery attr() function to call LinkToolTipPosition function
  let linkToolTipPosition = this.LinkToolTipPosition;
    this.link = this.svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "lightsteelblue")
    .attr("stroke-width", "6px") 
     .attr("id", "links")
      .selectAll(linkType)
      .data(this.links)
      .join(linkType)
      //Adding Link events
      .on('mouseover', function(d) {
              let clickCoordiante = d3.mouse(this);
        d['target']['data']? $('#linkLabel' + d['target']['data']['id']).css('visibility', 'visible'): $('#linkLabel' + d['target']['id']).css('visibility', 'visible')
        d['target']['data']? $('#linkLabel' + d['target']['data']['id']).attr('transform', linkToolTipPosition(d, clickCoordiante)) : $('#linkLabel' + d['target']['id']).attr('transform', linkToolTipPosition(d, clickCoordiante))
        d3.select (this).attr('style', d=> (d['status'] == "Working")?  'fill: none; stroke: green;': 'fill: none; stroke: tomato; stroke-width: 2px;')})
        
      .on('mouseout', function(d) {
          d3.select(this).attr('style', 'fill: none; stroke: lightsteelblue;')
          d['target']['data']? $('#linkLabel' + d['target']['data']['id']).css('visibility', 'hidden'): $('#linkLabel' + d['target']['id']).css('visibility', 'hidden')})
          
          .on('click', function(d) {
            console.log(d3.mouse(this))
             this.clickCoordiante =  d3.mouse(this);
            d['target']['data']? $('#linkLabel' + d['target']['data']['id']).css('visibility', 'visible'): $('#linkLabel' + d['target']['id']).css('visibility', 'visible');
          })

          //Create and design links tool tips
      let linkToolTipGruop = this.svg.append("g")
      .attr("id", "linkToolTips");

      this.linkToolTip = linkToolTipGruop.selectAll("g")
      .data(this.links);

       this.linkToolTip.join("text")
            .attr("id",d=> d.target['data']? "linkLabel" + d.target['data'].id: "linkLabel" + d.target.id )
            .attr('style', 'visibility: hidden; font:' + rectSizes['width']/5 +  'px sans-serif; color: black; display: block; padding: 5px;')
            .text(d=> d['status'])

          
        //Node Styling (Rellevant only for tree and does not affect the Force layout)
        this.nodes.forEach(d=> {if(!simulation) return d['y'] = d['depth'] * (this.rectSizes.width * 1.5)}); 

         this.node = this.svg.append("g")
        .attr("cursor", "pointer")
        .attr("id", "nodes")
        .selectAll("g")
        .data(this.nodes)
        .join('g')
        //"Call" is set to different "drag" functions, according to the layout
        .call(this.configurationData.layout== "Force Directed Graph"? this.drag(simulation): this.drag)

        let rect = this.node.append('rect')
        .attr('rx', rectSizes.height - 5)
        .attr('ry', rectSizes.height - 5)
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", "2px") 
        .attr('width', this.rectSizes.width)
        .attr('height', this.rectSizes.height);
        
        
        let images = this.node.append("image")
        .attr("href", d=> d['data']? d['data']['iconPath'] : d['iconPath'])
        .attr("width", rectSizes.width/4)
        .attr("height", rectSizes.height/4)    
        .attr("x", rectSizes.width/15)  
        .attr("y", rectSizes.height/4)  
        
        let text = this.node.append("text")
        //The condition needed beacause this class handle to differnt types of data: Hierarchical (for tree layout) and flat (for force layout) 
        .text(d=> d['data']? d['data']['label']: d['label'])
        .attr("style", ("font: " + rectSizes['width']/10 + "px sans-serif"))
        .attr('x', rectSizes.width/3)
        .attr('y', rectSizes.height/2)

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
          path = `translate(${d['x'] - this.rectSizes.width/3},${d['y'] - this.rectSizes.height/2})`;
          return path;
        default:
          break;
      }
   
    }

    //This function is only caled by the Tree class, which is using "path" SVG element, unlike the Force directed graph class, which is using only in "line" element
    linkPosition = () => {
    return <any>d3.linkHorizontal()
  .x(d=> d['y'] + this.rectSizes.height/4)
  // "+12" set the "y" property, so  the link will end on the middle of the left "x" of the rectangle (and not above it )
  .y(d=> d['x'] + this.rectSizes.height /2);
    }

      LinkToolTipPosition = (d, clickCoordiante) => {
        //Calculate the link tool tip position according to the mouseover event coordinate
        
        //Calculate link tool tip position for node with more than 1 children
        if((d['source']['data'] && (d['source']['data']['children'].length>1)))
        {
        return "translate(" +
                  clickCoordiante[0] + 50 + "," + 
                  (clickCoordiante[1]) + ")"
                }
      //Calculate link tool tip position for node with only 1 children
      if  ((d['source']['data'])){
        return "translate(" +
        (clickCoordiante[0] - this.rectSizes.height) + "," + 
        ((clickCoordiante[1]) + this.rectSizes.height) + ")"
      }
    //Calculate link tool tip position for force layout
    else {
      return "translate(" +
      (clickCoordiante[0] + 30) + "," + 
      ((clickCoordiante[1]) + 30) + ")"
    }
    }  
    
      }