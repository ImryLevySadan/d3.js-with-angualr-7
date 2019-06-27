import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { D3Service} from 'src/app/d3/d3.service';
import {ForceDirectedGraph} from 'src/app/d3/models'
import {Node} from 'src/app/d3/models';


@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
  <g [zoomableOf]="svg">
    <g [linkVisual]="link" *ngFor="let link of links"></g>
    <g [nodeVisual]="node" *ngFor="let node of nodes"
        [draggableNode]="node" [draggableInGraph]="graph"></g>
  </g>
</svg>
   
  `,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;
  NODES : Node[];
  
  private _options: { width, height } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.nodes)
        this.NODES = this.nodes;
    let type;
    
    for (let i = 0; i < this.NODES.length; i++) {
      if (this.NODES[i].type)
          type = this.NODES[i].type;

      switch (type) {
        case "access-point": 
        this.NODES[i].iconPath = "/assets/icon-images/access-point.png";
        break;
        case "router": 
        this.NODES[i].iconPath = "/assets/icon-images/router.png";
        break;
        case "switch": 
        this.NODES[i].iconPath = "/assets/icon-images/switch.png";
        break;
        case "www": 
        this.NODES[i].iconPath = "/assets/icon-images/www.png";
        break;
      }
    }
    /** Receiving an initialized simulated graph from our custom d3 service */
      this.graph = this.d3Service.getForceDirectedGraph(this.NODES, this.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
      
    });
  }


  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
    
  }


  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  ngOnChanges() {
    if (this.nodes)
        this.NODES = this.nodes;
    let type;
    
    for (let i = 0; i < this.NODES.length; i++) {
      if (this.NODES[i].type)
          type = this.NODES[i].type;

      switch (type) {
        case "access-point": 
        this.NODES[i].iconPath = "/assets/icon-images/access-point.png";
        break;
        case "router": 
        this.NODES[i].iconPath = "/assets/icon-images/router.png";
        break;
        case "switch": 
        this.NODES[i].iconPath = "/assets/icon-images/switch.png";
        break;
        case "www": 
        this.NODES[i].iconPath = "/assets/icon-images/www.png";
        break;
      }
    };
    this.graph = this.d3Service.getForceDirectedGraph(this.NODES, this.links, this.options);

    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
  })
}

}