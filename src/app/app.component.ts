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
  collapsiable: boolean = false;
  simulation: boolean = false;
   
  netWorkTopologies: string [] = ['Simple Network', 'few Access Points netwoork', 'Multi Switches Network', "Tidy tree", "Force directed graph", "Collapsiable"];
  
  onSelect(event){
    console.log(event.target.value)
    ;
    switch (event.target.value) {
      case "Simple Network":
        this.simulation = true;
        this.netWorkType.nodes = data.NODES;
        this.netWorkType.links = data.LINKS;
        break;
      case "few Access Points netwoork":
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
              this.collapsiable = false;
              this.simulation = false;
              break;
            case "Force directed graph":
                this.tidy = false;
                this.forceDirected = true;
                this.collapsiable = false;
                this.simulation = false
                break;
          case "Collapsiable":
              this.tidy = false;
              this.forceDirected = false;
              this.collapsiable = true;
              this.simulation = false
              break;
        }
      console.log(this.netWorkType);
    } 
}