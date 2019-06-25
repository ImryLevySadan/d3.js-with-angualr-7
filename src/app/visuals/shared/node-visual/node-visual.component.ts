import { Component, Input } from '@angular/core';
import { Node } from 'src/app/d3/models';

@Component({
  selector: '[nodeVisual]',
  template: `
  <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
  
    <svg:rect
    class="node"
    [attr.fill]="'black'"
    [attr.height]="node.height"
    [attr.width]="node.width">
</svg:rect>
       
  <image [attr.href]="node.iconPath" height="50" width="50" x="60" y="-60"/>

      <svg:text class="node-name" [attr.font-size]="node.fontSize">
        <svg:tspan class="text" dx="95" dy="10">Node id: {{node.id}}</svg:tspan>
      </svg:text>
      <svg:text class="node-name" [attr.font-size]="node.fontSize">
        <svg:tspan class="text" dx="95" dy="30">Node name: {{node.name}}</svg:tspan>        
      </svg:text>
      <svg:text class="node-name" [attr.font-size]="node.fontSize">
          <svg:tspan class="text" dx="95" dy="50">Node serial number: {{node.serialNumber}}</svg:tspan>      
      </svg:text>
      <svg:text class="node-name" [attr.font-size]="node.fontSize">
            <svg:tspan class="text" dx="95" dy="70">Node type: {{node.type}}</svg:tspan>      
      </svg:text>
         
    </svg:g>
       `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;  
 
}