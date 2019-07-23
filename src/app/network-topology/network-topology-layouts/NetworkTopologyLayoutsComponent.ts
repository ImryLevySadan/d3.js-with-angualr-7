import { Component, Input} from '@angular/core';
import { ForceDirectedGraph } from "../visuals/force-dircted-graph";
import { Tree } from '../visuals/tree';

@Component({
  selector: 'app-network-topology-layouts',
  templateUrl: './network-topology-layouts.component.html',
  styleUrls: ['./network-topology-layouts.component.css']
})

export class NetworkTopologyLayoutsComponent {
  @Input('data') data;
  @Input('configurationData') configurationData;

  forcedGraph: ForceDirectedGraph;
  tree: Tree;
  isTree: boolean = false;
  isForce: boolean = false;
  button1: string = "Tree";
  button2: string = "Force Directed Graph";

  constructor() { }
  
  changeLayout(value) {
    switch (value) {
      case "Tree":
        this.isForce = false;
        this.isTree = true;
        break;
    case "Force": 
        this.isTree = false;
        this.isForce = true;
      default:
        break;
    }
    
  }

}
