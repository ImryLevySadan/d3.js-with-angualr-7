import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphComponent } from './simulation-layout/visuals/graph/graph.component';
import { NodeVisualComponent } from './simulation-layout/visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './simulation-layout/visuals/shared/link-visual/link-visual.component';
import { DraggableDirective } from './simulation-layout/d3/directives/draggable.directive';
import { ZoomableDirective } from './simulation-layout/d3/directives/zoomable.directive';
import { D3Service } from './simulation-layout/d3/d3.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph/force-directed-graph.component';
import { CollapsibleTreeLayoutComponent } from './tree-layouts/collapsible-tree-layout/collapsible-tree-layout.component';
import { ForceDirctedTreeComponent } from './force-directed-graph/force-dircted-tree/force-dircted-tree.component';
import { VerticalTreeComponent } from './tree-layouts/vertical-tree/vertical-tree.component';
import { TreeBoxesComponent } from './tree-layouts/tree-boxes/tree-boxes.component';


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
    TreeBoxesComponent        
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
