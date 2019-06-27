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
    "label":"JVP",
    "serialNumber": "111",
    "type": "access-point",
    "iconPath": ""
},
{
    "id": "3", 
    "label":"JVP",
    "serialNumber": "111",
    "type": "access-point",
    "iconPath": ""
},
{
    "id": "4", 
    "label":"JVP",
    "serialNumber": "111",
    "type": "access-point",
    "iconPath": ""
},

{
    "id": "5", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "6", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "7", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "8", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "9", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "10", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "11", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": ""

},
{
    "id": "12", 
    "label":"Har Hotvim",
    "serialNumber": "333",
    "type": "router",
    "iconPath": ""
},
{
    "id": "13", 
    "label":"Palo-ALto",
    "serialNumber": "444",
    "type": "www",
    "iconPath": ""
}
]

export const LINKS: Link[] = [
    {
        "source": "1",
        "target": "5"
    },
    {
        "source": "2",
        "target": "6"
    },
    {
        "source": "3",
        "target": "7"
    },
    {
        "source": "4",
        "target": "8"
    },
    {
        "source": "5",
        "target": "9"
    },
    {
        "source": "6",
        "target": "9"
    },
    {
        "source": "7",
        "target": "10"
    },
    {
        "source": "8",
        "target": "10"
    },
    {
        "source": "10",
        "target": "11"
    },
    {
        "source": "9",
        "target": "12"
    },
    {
        "source": "11",
        "target": "12"
    },
    {
        "source": "12",
        "target": "13"
    },
]