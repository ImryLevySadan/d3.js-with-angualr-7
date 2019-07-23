import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphComponent } from './layouts/simulation-layout/visuals/graph/graph.component';
import { NodeVisualComponent } from './layouts/simulation-layout/visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './layouts/simulation-layout/visuals/shared/link-visual/link-visual.component';
import { DraggableDirective } from './layouts/simulation-layout/d3/directives/draggable.directive';
import { ZoomableDirective } from './layouts/simulation-layout/d3/directives/zoomable.directive';
import { D3Service } from './layouts/simulation-layout/d3/d3.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForceDirectedGraphComponent } from './layouts/force-directed-graph/force-directed-graph/force-directed-graph.component';
import { CollapsibleTreeLayoutComponent } from './layouts/tree-layouts/collapsible-tree-layout/collapsible-tree-layout.component';
import { ForceDirctedTreeComponent } from './layouts/force-directed-graph/force-dircted-tree/force-dircted-tree.component';
import { VerticalTreeComponent } from './layouts/tree-layouts/vertical-tree/vertical-tree.component';
import { TreeBoxesComponent } from './layouts/tree-layouts/tree-boxes/tree-boxes.component';
import { NetworkTopologyLayoutsComponent } from "./network-topology/network-topology-layouts/NetworkTopologyLayoutsComponent";
import {TidyTreeComponent} from './layouts/tree-layouts/tidy-tree/tidy-tree.component';
import { TreeComponent } from './network-topology/display/tree/tree.component';
import { ForceComponent } from './network-topology/display/force/force.component';


@NgModule({
  
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    ForceDirectedGraphComponent,
    CollapsibleTreeLayoutComponent,
    ForceDirctedTreeComponent,
    VerticalTreeComponent,
    TidyTreeComponent,
    TreeBoxesComponent,
    NetworkTopologyLayoutsComponent,
    TreeComponent,
    ForceComponent        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule 
    
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
