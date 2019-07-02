import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
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
import { LineChartComponent } from './tree-layouts/line-chart/line-chart.component';
import { TidyTreeComponent } from './tree-layouts/tidy-tree/tidy-tree.component';
import { ForceDirectedGraphComponent } from './tree-layouts/force-directed-graph/force-directed-graph.component';
import { CollapsibleTreeLayoutComponent } from './tree-layouts/collapsible-tree-layout/collapsible-tree-layout.component';
import { ForceDirctedTreeComponent } from './tree-layouts/force-dircted-tree/force-dircted-tree.component';
import { CollapsibleForceComponent } from './tree-layouts/collapsible-force/collapsible-force.component';


@NgModule({
  
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    LineChartComponent,
    TidyTreeComponent,
    ForceDirectedGraphComponent,
    CollapsibleTreeLayoutComponent,
    ForceDirctedTreeComponent,
    CollapsibleForceComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule 
    
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
