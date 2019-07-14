import { Component, OnInit } from '@angular/core';
import * as data from "src/app/simulation-layout/d3/models/network-mocekd-json";
import {DataLoaderService}  from '../app/services/data-loader.service';

export interface Topologies {
  nodes: any;
  links: any;
  viewValue: string;
}
export interface Topology {
  nodes: any;
  links: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  netWorkType: Topology = {nodes: data.NODES, links: data.LINKS};
  forceDirected: boolean = false;
  forceDirectedTree: boolean = false;
  collapsiable: boolean = false;
  collapsiableTree: boolean = false;
  simulation: boolean = false;
  vertical: boolean = false;
  treeBox: boolean = false;  
  netWorkTopologies: string [] = ['Force dircted Simulation', "Force directed graph", "Force directed tree", "Collapsiable Tree", "Vertical tree", "Tree box"];
  networkData: any;
  configurationData: any;
  url: string;
 

  constructor(private dataLoader: DataLoaderService) {}

  ngOnInit () {
    if (this.url)
      {this.networkData  = this.dataLoader.getServerJsonData(this.url);
      this.configurationData = this.dataLoader.getConfigurationData(this.url);
      this.onSelect(this.configurationData);
      }
    }

  onSelect(event){
   let value = event.target.value;
    switch (value) {
        case "Force dircted Simulation":
            this.simulation = true;
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.vertical = false;
            this.treeBox = false;
            this.netWorkType = this.dataLoader.getJson();
            break;
        case "Force directed graph":
          this.networkData = this.dataLoader.getJson();
          this.forceDirected = true;
          this.forceDirectedTree = false;
          this.collapsiable = false;
          this.collapsiableTree = false;
          this.simulation = false;
          this.vertical = false;
          this.treeBox = false;
                break;
            case "Force directed tree":
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = true;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.simulation = false;
              this.vertical = false;
              this.treeBox = false;
                    break;
          case "Collapsiable Tree":
            this.networkData = this.dataLoader.getJson();
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = true;
            this.simulation = false;
            this.vertical = false;
            this.treeBox = false;
              break;
          case "Vertical tree":
            this.networkData = this.dataLoader.getJson();
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.simulation = false;
            this.vertical = true;
            this.treeBox = false;
              break;
          case "Tree box":
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.simulation = false;
              this.vertical = false;
              this.treeBox = true;
              break;
              
        }
    } 
}