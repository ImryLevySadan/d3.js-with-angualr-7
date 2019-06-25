export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  label: string;
  serialNumber: string;
  type: string;
  iconPath: string;
  linkCount?: number = 0;

  constructor(id, label, serialNumber, type, iconPath) {
    this.id = id;
    this.label = label;
    this.serialNumber = serialNumber;
    this.type = type;
    this.iconPath = iconPath;
    
  }

  // normal = () => {
  //   return Math.sqrt(this.linkCount / 7);
  // }

  // get fontSize() {
  //   return (2 * this.normal() + 12) + 'px';
  // }

  // // In case of using rect svg element
  // get width() {
  //   return 200;
  // }
  // get height() {
  //   return 100;
  // }
  // get r() {
  //   return 50 * this.normal() + 20;
  // }
  
  // get color() {
  //   // let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
  //   return "rgb(255,255,255)";
  // }

  // get nodeIconPath() {  
  //   let path: string = "";
  //   switch (this.type.toLocaleLowerCase()) {
  //   case "access-point":
  //     path = "/assets/icon-images/access-point-icon.png"
  //     return path;
  //   case "switch":
  //     path = "/assets/icon-images/switch.png"
  //     return path;
  //   case "www":
  //     path = "/assets/icon-images/www.png"
  //     return path;
  //   case "router":
  //     path = "/assets/icon-images/router-icon.png"
  //     return path;
  //   }
  // }
}