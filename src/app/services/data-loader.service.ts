import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as graphData from "src/app/layouts/simulation-layout/d3/models/network-mocekd-json";
import * as arrayToTree from 'array-to-tree';



@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  public constructor(private httpCLient: HttpClient) { }

  public getServerJsonData(url: string): Observable<any> {
    if (url) {
    let observable = this.httpCLient.get(url)
    .pipe(catchError(this.handleError<any>('getJsonData', [])));
    return observable;
    }
  }
  
  public getJson()  {
    const data = {nodes: graphData.NODES2, links: graphData.LINKS2};
    data.nodes.forEach(node => {
      let value = node.type;
      let blue = '#337ab7';
      let green = '#5cb85c';
      let yellow = '#f0ad4e';
      let blueText = '#4ab1eb';
      let purple = '#9467bd';
      switch (value) {
        case "access-point": 
        node.iconPath = "/assets/icon-images/access-point.png";
        node.color = green;
        break;
        case "router": 
        node.iconPath = "/assets/icon-images/router.png";
        node.color = blue;
        break;
        case "switch": 
        node.iconPath = "/assets/icon-images/switch.png";
        node.color = yellow
        break;
        case "www": 
        node.iconPath = "/assets/icon-images/www.png";
        node.color = purple;
        break;
        default:
          break;
      }
      
    });
    return data;
  }

  public getConfigurationData(url: string): Observable<any> {
    if (url) {
    let observable = this.httpCLient.get(url)
    .pipe(catchError(this.handleError<any>('getConfigurationData', [])));
    return observable;
    }
  }

  public createTree(root, nodes, links) {

    for (let i=0; i < nodes.length; i++) {
      for (let j=0; j < links.length; j++){
        if (nodes[i].id == links[j].source) {
          for (let z=0; z < nodes.length; z++){
            if (nodes[z].id == links[j].target)
            nodes[i].parent_id = nodes[z].id;
          }
    }
  }
}

return (arrayToTree(nodes));
  }  

  public findRoot (nodes, links) {
    let rootNode;
    var isRoot = true;
    for (let i=0; i < nodes.length; i++){
      isRoot = true;
    for (let j=0; j < links.length; j++){
        if (nodes[i].id == links[j].source){
        isRoot = false;
        break;
    }
  }
    if (isRoot) {
      rootNode = nodes[i];
      return (this.createTree(rootNode, nodes, links));
             }
        } 
    }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any) => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return error;

      // // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
 
      // // Let the app keep running by returning an empty result.
      // return of(result as T);
    };
  }
}
