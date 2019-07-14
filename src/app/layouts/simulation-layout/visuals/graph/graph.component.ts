import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { D3Service} from 'src/app/layouts/simulation-layout/d3/d3.service';
import { Link } from 'src/app/models/link';
import { Node } from 'src/app/models//node';
import { ForceDirectedGraph } from 'src/app/layouts/simulation-layout/d3/models/force-directed-graph';

@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "/graph.component.html",
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
   
    /** Receiving an initialized simulated graph from our custom d3 service */
      this.graph = this.d3Service.getForceDirectedSimulation(this.NODES, this.links, this.options);
      
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
    this.graph = this.d3Service.getForceDirectedSimulation(this.NODES, this.links, this.options);

    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
  })
}

}