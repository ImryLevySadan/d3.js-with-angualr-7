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
  
