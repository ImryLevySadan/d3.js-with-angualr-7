import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {DataLoaderService}  from 'src/app/services/data-loader.service';
import {ForceDirectedGraph} from "../models/force-dircted-graph";
import { Tree } from '../models/tree';


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
  graph: any;
  button1: string = "Tree";
  button2: string = "Force Directed Graph";

  constructor(private dataLoaderService: DataLoaderService) {}

  ngOnInit() {
    let value = this.configurationData.layout;
    switch (value) {
      case "Tree":
          this.tree = new Tree(this.data.nodes, this.data.links, this.configurationData)
        break;
      case "Force Directed Graph":
          this.forcedGraph = new ForceDirectedGraph (this.data.nodes, this.data.links, this.configurationData)
          break;
      default:
        break;
     }
  }

}
