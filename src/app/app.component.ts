import { Component, OnInit } from '@angular/core';
import {DataLoaderService}  from '../app/services/data-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  forceDirected: boolean = false;
  forceDirectedTree: boolean = false;
  collapsiable: boolean = false;
  collapsiableTree: boolean = false;
  simulation: boolean = false;
  vertical: boolean = false;
  tidyTree: boolean = false;
  networkLayout: boolean = false;
  treeBox: boolean = false;  
  netWorkTopologies: string [] = ['Force dircted Simulation', "Force directed graph", "Force directed tree", "Collapsiable Tree", "Vertical tree", "Tree box", "Tidy Tree", "Network Topolgy Layouts"];
  networkData: any;
  url: string;
  configurationData = {layout: "Force Directed Graph", linkStyling: "direct", height: window.innerHeight, width: window.innerWidth}
 

  constructor(private dataLoader: DataLoaderService) {}

  ngOnInit () {
   
    }

  onSelect(event){
   let value = event.target.value;
    switch (value) {
        case "Force dircted Simulation":
            this.networkData = null;
            this.networkData = this.dataLoader.getJson();
            this.simulation = true;
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.vertical = false;
            this.tidyTree = false;
            this.treeBox = false;
            this.networkLayout = false;
            break;
        case "Force directed graph":
          this.networkData = null;
          this.networkData = this.dataLoader.getJson();
          this.forceDirected = true;
          this.forceDirectedTree = false;
          this.tidyTree = false;
          this.collapsiable = false;
          this.collapsiableTree = false;
          this.simulation = false;
          this.vertical = false;
          this.treeBox = false;
          this.networkLayout = false;
                break;
            case "Force directed tree":
              this.networkData = null;
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = true;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.simulation = false;
              this.vertical = false;
              this.treeBox = false;
              this.networkLayout = false;

                    break;
          case "Collapsiable Tree":
            this.networkData = null;
            this.networkData = this.dataLoader.getJson();
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.tidyTree = false;
            this.collapsiableTree = true;
            this.simulation = false;
            this.vertical = false;
            this.treeBox = false;
            this.networkLayout = false;
              break;
              case "Tidy Tree":
                this.networkData = null;
                this.networkData = this.dataLoader.getJson();
                this.forceDirected = false;
                this.forceDirectedTree = false;
                this.collapsiable = false;
                this.collapsiableTree = false;
                this.simulation = false;
                this.tidyTree = false;
                this.vertical = false;
                this.treeBox = false;
                this.tidyTree = true;
                this.networkLayout = false;
                  break;
          case "Vertical tree":
            this.networkData = null;
            this.networkData = this.dataLoader.getJson();
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.tidyTree = false;
            this.simulation = false;
            this.vertical = true;
            this.treeBox = false;
            this.networkLayout = false;

              break;
          case "Tree box":
              this.networkData = null;
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.tidyTree = false;
              this.collapsiableTree = false;
              this.simulation = false;
              this.vertical = false;
              this.treeBox = true;
              this.networkLayout = false;

              break;
          case "Network Topolgy Layouts":
              this.networkData = null;
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.tidyTree = false;
              this.collapsiableTree = false;
              this.simulation = false;
              this.vertical = false;
              this.treeBox = false;
              this.networkLayout = true;

              break;
              
        }
    } 
}