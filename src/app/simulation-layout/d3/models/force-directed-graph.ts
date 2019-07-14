import { EventEmitter } from '@angular/core';
import { Link } from './link';
import { Node } from './node';
import * as d3 from 'd3';

// To create a force directed graph you will need:
// Nodes
// A simulation
// Forces to act on the simulation
//links
//node attributes


export class ForceDirectedGraph {
  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation: d3.Simulation<any, any>;
  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor(nodes, links, options: { width, height }) {
    this.nodes = nodes;
    this.links = links;
    this.initSimulation(options);    
  }

  initNodes() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }
    this.simulation.nodes(this.nodes);
  }

  initLinks() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }
    this.simulation.force('links',
      d3.forceLink(this.links)
        .id((d) =>  d['id'])
        .distance(60))    
  }
    

  initSimulation(options) {
    if (!options || !options.width || !options.height) {
      throw new Error('missing options when initializing simulation');
    }

    /** Creating the simulation */
    if (!this.simulation) {
      const ticker = this.ticker;

      this.simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-750))
      .force('centers', d3.forceCenter(options.width / 2 , options.height / 2 ));
      
        
      // Connecting the d3 ticker to an angular event emitter
      this.simulation.on('tick', function () {
        ticker.emit(this);
      });

      this.initNodes();
      this.initLinks();
    }

    /** Restarting the simulation internal timer */
    this.simulation.restart();
  }
}