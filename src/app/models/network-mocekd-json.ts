import { Node } from './node';
import { Link } from './link';

export const NODES: Node[] = [

{
    "id": "1", 
    "label":"JVP",
    "serialNumber": "111",
    "type": "access-point",
    "iconPath": "",
    "color": ""
},
{
    "id": "2", 
    "label":"Oslo",
    "serialNumber": "222",
    "type": "switch",
    "iconPath": "",
    "color": ""

},
{
    "id": "3", 
    "label":"Har Hotvim",
    "serialNumber": "333",
    "type": "router",
    "iconPath": "",
    "color": ""
},
{
    "id": "4", 
    "label":"Palo-ALto",
    "serialNumber": "444",
    "type": "www",
    "iconPath": "",
    "color": ""

}
]

export const LINKS: Link[] = [
    {
        "source": "1",
        "target": "2",
        "status": ""
    },
    {
        "source": "2",
        "target": "3",
        "status": ""
    },
    {
        "source": "3",
        "target": "4",
        "status": ""
    }
]

export const NODES1: Node[] = [

    {
        "id": "1", 
        "label":"JVP",
        "serialNumber": "111",
        "type": "access-point",
        "iconPath": "",
        "color": ""
    },
    {
        "id": "2", 
        "label":"JVP",
        "serialNumber": "111",
        "type": "access-point",
        "iconPath": "",
        "color": ""
        
    },
    {
        "id": "3", 
        "label":"JVP",
        "serialNumber": "111",
        "type": "access-point",
        "iconPath": "",
        "color": ""
    },
    {
        "id": "4", 
        "label":"JVP",
        "serialNumber": "111",
        "type": "access-point",
        "iconPath": "",
        "color": ""
    },
    
    {
        "id": "5", 
        "label":"Oslo",
        "serialNumber": "222",
        "type": "switch",
        "iconPath": "",
        "color": ""
    
    },
    {
        "id": "6", 
        "label":"Oslo",
        "serialNumber": "222",
        "type": "switch",
        "iconPath": "",
        "color": ""
    
    },
    {
        "id": "7", 
        "label":"Oslo",
        "serialNumber": "222",
        "type": "switch",
        "iconPath": "",
        "color": ""
    
    },
    {
        "id": "8", 
        "label":"Har Hotvim",
        "serialNumber": "333",
        "type": "router",
        "iconPath": "",
        "color": ""
    },
    {
        "id": "9", 
        "label":"Palo-ALto",
        "serialNumber": "444",
        "type": "www",
        "iconPath": "",
        "color": ""
    }
    ]
    
    export const LINKS1: Link[] = [
        {
            "source": "1",
            "target": "5",
            "status": "Working"
        },
        {
            "source": "2",
            "target": "5",
            "status": "Sync"
        },
        {
            "source": "3",
            "target": "5",
            "status": "Async"
        },
        {
            "source": "4",
            "target": "6",
            "status": "Communication Problem"
        },
        {
            "source": "5",
            "target": "6",
            "status": "Working"
        },
        {
            "source": "6",
            "target": "7",
            "status": "Connection Failed"
        },
        {
            "source": "7",
            "target": "8",
            "status": "Working"
        },
        {
            "source": "8",
            "target": "9",
            "status": "Working"
        },
    ]

    export const NODES2: Node[] = [

        {
            "id": "1", 
            "label":"JVP",
            "serialNumber": "111",
            "type": "access-point",
            "iconPath": "",
            "color": ""
        },
        {
            "id": "2", 
            "label":"Lab2.0",
            "serialNumber": "222",
            "type": "access-point",
            "iconPath": "",
            "color": ""
        },
        {
            "id": "3", 
            "label":"Bezeq",
            "serialNumber": "333",
            "type": "access-point",
            "iconPath": "",
            "color": ""
        },
        {
            "id": "4", 
            "label":"Tsion Amir",
            "serialNumber": "444",
            "type": "access-point",
            "iconPath": "",
            "color": ""
        },
        
        {
            "id": "5", 
            "label":"Oslo",
            "serialNumber": "555",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "6", 
            "label":"London",
            "serialNumber": "666",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "7", 
            "label":"Palo Alto",
            "serialNumber": "777",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "8", 
            "label":"Beer Sheva",
            "serialNumber": "888",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "9", 
            "label":"Hulon",
            "serialNumber": "999",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "10", 
            "label":"Pinka",
            "serialNumber": "1000",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "11", 
            "label":"Jerusalem",
            "serialNumber": "1100",
            "type": "switch",
            "iconPath": "",
            "color": ""
        
        },
        {
            "id": "12", 
            "label":"Har Hotvim",
            "serialNumber": "1200",
            "type": "router",
            "iconPath": "",
            "color": ""
        },
        {
            "id": "13", 
            "label":"Tel Aviv",
            "serialNumber": "1300",
            "type": "router",
            "iconPath": "",
            "color": ""
        }        
        ]
        
        export const LINKS2: Link[] = [
            {
                "source": "1",
                "target": "5",
                "status": "Working"
            },
            {
                "source": "2",
                "target": "6",
                "status": "Does not work"

            },
            {
                "source": "3",
                "target": "7",
                "status": "Working"
            },
            {
                "source": "4",
                "target": "8",
                "status": "Working"
            },
            {
                "source": "5",
                "target": "9",
                "status": "Does not work"
            },
            {
                "source": "6",
                "target": "9",
                "status": "Does not work"
            },
            {
                "source": "7",
                "target": "10",
                "status": "Does not work"
            },
            {
                "source": "8",
                "target": "10",
                "status": "Working"
            },
            {
                "source": "10",
                "target": "11",
                "status": "Working"
            },
            {
                "source": "9",
                "target": "12",
                "status": "Working"
            },
            {
                "source": "11",
                "target": "12",
                "status": "Working"
            },
            {
                "source": "12",
                "target": "13",
                "status": "Does not work"
            },
        ]