import { Component, OnInit } from '@angular/core';
import {DataLoaderService}  from '../app/services/data-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  forceDirected: boolean = false;
  forceDirectedTree: boolean = false;
  collapsiable: boolean = false;
  collapsiableTree: boolean = false;
  vertical: boolean = false;
  tidyTree: boolean = false;
  treeBox: boolean = false;  
  layoutChosen: boolean = false;
  netWorkTopologies: string [] = ['Choose layout', "Force directed graph", "Force directed tree", "Collapsiable Tree", "Vertical tree", "Tree box", "Tidy Tree"];
  networkData: any;
  url: string;
  configurationData = {layout: "Force", linkStyling: "direct", height: window.innerHeight, width: window.innerWidth}

 
  constructor(private dataLoader: DataLoaderService) {}

    onSelect(event){
   let value = event.target.value;
    switch (value) {
       case "Force directed graph":
          this.networkData = null;
          this.networkData = this.dataLoader.getJson();
          this.forceDirected = true;
          this.forceDirectedTree = false;
          this.tidyTree = false;
          this.collapsiable = false;
          this.collapsiableTree = false;
          this.vertical = false;
          this.treeBox = false;
          this.layoutChosen = false;
                break;
            case "Force directed tree":
              this.networkData = null;
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = true;
              this.collapsiable = false;
              this.collapsiableTree = false;
              this.vertical = false;
              this.treeBox = false;
              this.layoutChosen = false;
                    break;
          case "Collapsiable Tree":
            this.networkData = null;
            this.networkData = this.dataLoader.getJson();
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.tidyTree = false;
            this.collapsiableTree = true;
            this.vertical = false;
            this.treeBox = false;
            this.layoutChosen = false;
              break;
              case "Tidy Tree":
                this.networkData = null;
                this.networkData = this.dataLoader.getJson();
                this.forceDirected = false;
                this.forceDirectedTree = false;
                this.collapsiable = false;
                this.collapsiableTree = false;
                this.tidyTree = false;
                this.vertical = false;
                this.treeBox = false;
                this.tidyTree = true;
                this.layoutChosen = false;
                  break;
          case "Vertical tree":
            this.networkData = null;
            this.networkData = this.dataLoader.getJson();
            this.forceDirected = false;
            this.forceDirectedTree = false;
            this.collapsiable = false;
            this.collapsiableTree = false;
            this.tidyTree = false;
            this.vertical = true;
            this.treeBox = false;
            this.layoutChosen = false;
              break;
          case "Tree box":
              this.networkData = null;
              this.networkData = this.dataLoader.getJson();
              this.forceDirected = false;
              this.forceDirectedTree = false;
              this.collapsiable = false;
              this.tidyTree = false;
              this.collapsiableTree = false;
              this.vertical = false;
              this.treeBox = true;
              this.layoutChosen = false;
              break;

        }
    } 
}