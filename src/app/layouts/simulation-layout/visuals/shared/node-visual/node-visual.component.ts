import { Component, Input } from '@angular/core';
import { Node } from 'src/app/layouts/simulation-layout/d3/models';

@Component({
  selector: '[nodeVisual]',
  template: `
  <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
  <image [attr.href]="node.iconPath" height="50" width="50" />
   <svg:text>{{node.type}}</svg:text>
    </svg:g>
       `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
 
  }
  
   // <svg:g>
    //   <svg:text class="node-name" [attr.font-size]="node.fontSize">
    //     <svg:tspan class="text" dx="195" dy="-30">Node id: {{node.id}}</svg:tspan>
    //   </svg:text>
    //   <svg:text class="node-name" [attr.font-size]="node.fontSize">
    //     <svg:tspan class="text" dx="195" dy="-60">Node name: {{node.name}}</svg:tspan>        
    //   </svg:text>
    //   <svg:text class="node-name" [attr.font-size]="node.fontSize">
    //       <svg:tspan class="text" dx="195" dy="-90">Node serial number: {{node.serialNumber}}</svg:tspan>      
    //   </svg:text>
    //   <svg:text class="node-name" [attr.font-size]="node.fontSize">
    //         <svg:tspan class="text" dx="195" dy="-120">Node type: {{node.type}}</svg:tspan>      
    //   </svg:text>
    // <svg:g>
