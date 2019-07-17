import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import {ForceDirectedGraph} from "../models/force-dircted-graph";
import {FunctionalityService} from 'src/app/services/functionality.service';
import { Tree } from '../models/tree';


@Component({
  selector: 'app-network-topology-layouts',
  templateUrl: './network-topology-layouts.component.html',
  styleUrls: ['./network-topology-layouts.component.css']
})
export class NetworkTopologyLayoutsComponent implements OnInit {
  @Input('data') data;
  @Input('configurationData') configurationData;
  d3:d3.Simulation<any, any>;
  simulation: any;
  layout: string;
  forcedGraph: ForceDirectedGraph;
  tree: Tree;

  constructor(private functionalityService: FunctionalityService) {}

  ngOnInit() {
    this.layout = this.configurationData.layout;
    switch (this.layout) {
      
      case "Tree":
        this.tree = new Tree(this.data.nodes, this.data.links, this.configurationData)
        break;
      case "Force Directed Graph":
          this.forcedGraph = new ForceDirectedGraph (this.data.nodes, this.data.links, this.configurationData)
      default:
        break;
    }

  }

}
