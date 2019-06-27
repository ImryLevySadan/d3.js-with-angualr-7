import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './visuals/graph/graph.component';
import { NodeVisualComponent } from './visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './visuals/shared/link-visual/link-visual.component';
import { DraggableDirective } from './d3/directives/draggable.directive';
import { ZoomableDirective } from './d3/directives/zoomable.directive';
import { D3Service } from './d3/d3.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    
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
