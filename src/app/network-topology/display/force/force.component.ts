import { Component, OnInit, Input } from '@angular/core';
import { ForceDirectedGraph } from 'src/app/network-topology/visuals/force-dircted-graph';


@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.css']
})
export class ForceComponent implements OnInit {
  @Input('data') data;
  @Input('configurationData') configurationData;
  
  force: ForceDirectedGraph;
  constructor() { }

  ngOnInit() {  
    this.configurationData.layout = "Force";
    this.force = new ForceDirectedGraph (this.data.nodes, this.data.links, this.configurationData);
  }

}
