import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as graphData from "../models/network-mocekd-json";
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

    //The next two function are responsible to converting the data from a nodes-links double flat arrays into hierachical stucture
    //I used them because this project handle both data types. 
   //"findroot" gets the nodes and links data and find the root node. 
   //Then, it calls "createTree" which transform this node into a tree object 
  findRoot (nodes, links) {
    let rootNode;
    var isRoot = true;
    for (let i=0; i < nodes.length; i++){
      isRoot = true;
    for (let j=0; j < links.length; j++){
        if (links[j].source.id? nodes[i].id == links[j].source.id: nodes[i].id == links[j].source){
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
   createTree(root, nodes, links) {

    for (let i=0; i < nodes.length; i++) {
      for (let j=0; j < links.length; j++){
        if (links[j].source.id? nodes[i].id == links[j].source.id: nodes[i].id == links[j].source){
          nodes[i].parent_id = links[j].target.id? links[j].target.id: links[j].target
        }
    }
}
let rootNode = (arrayToTree(nodes))
return rootNode[0];
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
