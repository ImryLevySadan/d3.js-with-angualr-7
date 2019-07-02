import { Component } from '@angular/core';
import * as data from "src/app/simulation-layout/network-topologies-examples/01-simple-layout";

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


export class AppComponent  {
  netWorkType: Topology = {nodes: data.NODES, links: data.LINKS};
  tidy: boolean = false;
  forceDirected: boolean = false;
  forceDirectedTree: boolean = false;
  collapsiable: boolean = false;
  collapsiableTree: boolean = false;
  simulation: boolean = false;
  
   
  netWorkTopologies: string [] = ['Simple Network', 'Few Access Points netwoork', 'Multi Switches Network', "Tidy tree", "Force directed graph", "Force directed tree", "Collapsiable", "Collapsiable Tree"];

  onSelect(event){
   
    switch (event.target.value) {
         case "Simple Network":
            this.simulation = true;
            this.netWorkType.nodes = data.NODES;
            this.netWorkType.links = data.LINKS;
            break;
        case "Few Access Points netwoork":
            this.simulation = true;
            this.netWorkType.nodes = data.NODES1;
            this.netWorkType.links = data.LINKS1;
            break;
        case "Multi Switches Network":
            this.simulation = true;
            this.netWorkType.nodes = data.NODES2;
            this.netWorkType.links = data.LINKS2;
            break;
        case "Tidy tree":
              this.tidy = true;
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.simulation = false;
              break;
        case "Force directed graph":
                this.tidy = false;
                this.forceDirected = true;
                this.forceDirectedTree = false;
                this.collapsiable = false;
                this.collapsiableTree = false;
                this.simulation = false;
                break;
            case "Force directed tree":
                  this.tidy = false;
                  this.forceDirected = false;
                  this.forceDirectedTree = true;
                  this.collapsiable = false;
                  this.collapsiableTree = false;
                  this.simulation = false;
                    break;
          case "Collapsiable":
              this.tidy = false;
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = true;
              this.collapsiableTree = false;
              this.simulation = false;
              break;
          case "Collapsiable Tree":
              this.tidy = false;
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.collapsiableTree = true;
              this.simulation = false;
              break;
          case "Stick force layout":
              this.tidy = false;
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.simulation = false;
              break;
        }
    } 
}