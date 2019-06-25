import { Component } from '@angular/core';
import { Node, Link } from './d3/models';
import {NODES, LINKS} from "src/app/network-topologies-examples/01-simple-layout";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: Node[] = NODES;
  links: Link[] = LINKS;
}