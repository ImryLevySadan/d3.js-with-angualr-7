import { Component, OnInit, Input } from '@angular/core';
import { Tree } from 'src/app/network-topology/visuals/tree';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input('data') data;
  @Input('configurationData') configurationData;
  tree: Tree;

  constructor() { }

  ngOnInit() {
    this.configurationData.layout = "Tree";
    this.tree = new Tree(this.data.nodes, this.data.links, this.configurationData);

  }

}
