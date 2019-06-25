import { Node } from '../d3/models';
import { Link } from '../d3/models';

export const NODES: Node[] = [

{
    "id": "1", 
    "label":"JVP",
    "serialNumber": "111",
    "type": "access-point",
    "iconPath": ""
},
{
    "id": "2", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "3", 
    "label":"Har Hotvim",
    "serialNumber": "333",
    "type": "router",
    "iconPath": ""
},
{
    "id": "4", 
    "label":"Palo-ALto",
    "serialNumber": "444",
    "type": "www",
    "iconPath": ""

}
]

export const LINKS: Link[] = [
    {
        "source": "1",
        "target": "2",
        "status": "OK"
    },
    {
        "source": "2",
        "target": "3",
        "status": "OK"
    },
    {
        "source": "3",
        "target": "4",
        "status": "OK"
    }
]