import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForceDirectedGraphComponent } from './layouts/force-directed-graph/force-directed-graph/force-directed-graph.component';
import { CollapsibleTreeLayoutComponent } from './layouts/tree-layouts/collapsible-tree-layout/collapsible-tree-layout.component';
import { ForceDirctedTreeComponent } from './layouts/force-directed-graph/force-dircted-tree/force-dircted-tree.component';
import { VerticalTreeComponent } from './layouts/tree-layouts/vertical-tree/vertical-tree.component';
import { TreeBoxesComponent } from './layouts/tree-layouts/tree-boxes/tree-boxes.component';
import {TidyTreeComponent} from './layouts/tree-layouts/tidy-tree/tidy-tree.component';

@NgModule({
  
  declarations: [
    AppComponent,
    ForceDirectedGraphComponent,
    CollapsibleTreeLayoutComponent,
    ForceDirctedTreeComponent,
    VerticalTreeComponent,
    TidyTreeComponent,
    TreeBoxesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
