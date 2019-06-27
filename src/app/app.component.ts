import { Component } from '@angular/core';
import * as data from "src/app/network-topologies-examples/01-simple-layout";

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
   
  netWorkTopologies: string [] = ['Simple Network', 'few Access Points netwoork', 'Multi Switches Network'];
  
  onSelect(event){
    console.log(event.target.value)
    ;
    switch (event.target.value) {
      case "Simple Network":
        this.netWorkType.nodes = data.NODES;
        this.netWorkType.links = data.LINKS;
        break;
      case "few Access Points netwoork":
        this.netWorkType.nodes = data.NODES1;
        this.netWorkType.links = data.LINKS1;
        break;
        case "Multi Switches Network":
            this.netWorkType.nodes = data.NODES2;
            this.netWorkType.links = data.LINKS2;
            break;
        
        }
      console.log(this.netWorkType);
    } 
}