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
  color: string;

  constructor(id, label, serialNumber, type, iconPath, color) {
    this.id = id;
    this.label = label;
    this.serialNumber = serialNumber;
    this.color = color;
    this.type = type;
    this.iconPath = iconPath;
    
  }
  
}