import { Component, OnInit } from '@angular/core';
import * as data from "src/app/simulation-layout/network-topologies-examples/01-simple-layout";
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
  netWorkTopologies: string [] = ['Simple Network', 'Few Access Points netwoork', 'Multi Switches Network', "Force directed graph", "Force directed tree", "Collapsiable Tree", "Vertical tree", "Tree box"];
  networkData: any;
  configurationData: any;
  url: string;
 

  constructor(private dataLoader: DataLoaderService) {}

  ngOnInit () {
    console.log(this.networkData)
    if (this.url)
      {this.networkData  = this.dataLoader.getServerJsonData(this.url);
      this.configurationData = this.dataLoader.getConfigurationData(this.url);
      this.onSelect(this.configurationData);
      }
    }

  onSelect(event){
   let value = event.target.value;
    switch (value) {
         case "Simple Network":
          this.simulation = true;
          this.forceDirected = false;
          this.forceDirectedTree = false;
          this.collapsiable = false;
          this.collapsiableTree = false;
          this.vertical = false;
          this.treeBox = false;
          this.netWorkType.nodes = data.NODES;
          this.netWorkType.links = data.LINKS;
            break;
        case "Few Access Points netwoork":
            this.simulation = true;
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.vertical = false;
            this.treeBox = false;
            this.netWorkType.nodes = data.NODES1;
            this.netWorkType.links = data.LINKS1;
            break;
        case "Multi Switches Network":
            this.simulation = true;
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.vertical = false;
            this.treeBox = false;
            this.netWorkType.nodes = data.NODES2;
            this.netWorkType.links = data.LINKS2;
            break;
        case "Force directed graph":
          this.networkData = this.dataLoader.getJson(value);
          this.forceDirected = true;
          this.forceDirectedTree = false;
          this.collapsiable = false;
          this.collapsiableTree = false;
          this.simulation = false;
          this.vertical = false;
          this.treeBox = false;
                break;
            case "Force directed tree":
              this.networkData = this.dataLoader.getJson(value);
              this.forceDirected = false;
              this.forceDirectedTree = true;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.simulation = false;
              this.vertical = false;
              this.treeBox = false;
                    break;
          // case "Collapsiable":
          //   this.forceDirected = false;
          //   this.forceDirectedTree = false;
          //   this.collapsiable = true;
          //   this.collapsiableTree = false;
          //   this.simulation = false;
          //   this.vertical = false;
          //   this.treeBox = false;
          //     break;
          case "Collapsiable Tree":
            this.networkData = this.dataLoader.getJson(value);
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = true;
            this.simulation = false;
            this.vertical = false;
            this.treeBox = false;
              break;
          case "Vertical tree":
            this.networkData = this.dataLoader.getJson(value);
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.simulation = false;
            this.vertical = true;
            this.treeBox = false;
              break;
          case "Tree box":
              this.networkData = this.dataLoader.getJson(value);
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