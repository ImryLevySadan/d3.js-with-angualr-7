import { Node } from '.';
import { Link } from '.';

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
        "label":"Har Hotvim",
        "serialNumber": "333",
        "type": "router",
        "iconPath": ""
    },
    {
        "id": "9", 
        "label":"Palo-ALto",
        "serialNumber": "444",
        "type": "www",
        "iconPath": ""
    }
    ]
    
    export const LINKS1: Link[] = [
        {
            "source": "1",
            "target": "5",
            "status": ""
        },
        {
            "source": "2",
            "target": "5",
            "status": ""
        },
        {
            "source": "3",
            "target": "5",
            "status": ""
        },
        {
            "source": "4",
            "target": "6",
            "status": ""
        },
        {
            "source": "5",
            "target": "6",
            "status": ""
        },
        {
            "source": "6",
            "target": "7",
            "status": ""
        },
        {
            "source": "7",
            "target": "8",
            "status": ""
        },
        {
            "source": "8",
            "target": "9",
            "status": ""
        },
    ]

    export const NODES2: Node[] = [

        {
            "id": "1", 
            "label":"JVP",
            "serialNumber": "111",
            "type": "access-point",
            "iconPath": ""
        },
        {
            "id": "2", 
            "label":"Lab2.0",
            "serialNumber": "111",
            "type": "access-point",
            "iconPath": ""
        },
        {
            "id": "3", 
            "label":"Bezeq",
            "serialNumber": "111",
            "type": "access-point",
            "iconPath": ""
        },
        {
            "id": "4", 
            "label":"Tsion Amir",
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
            "label":"London",
            "serialNumber": "222",
            "type": "switch",
            "iconPath": ""
        
        },
        {
            "id": "7", 
            "label":"Palo Alto",
            "serialNumber": "222",
            "type": "switch",
            "iconPath": ""
        
        },
        {
            "id": "8", 
            "label":"Beer Sheva",
            "serialNumber": "222",
            "type": "switch",
            "iconPath": ""
        
        },
        {
            "id": "9", 
            "label":"Hulon",
            "serialNumber": "222",
            "type": "switch",
            "iconPath": ""
        
        },
        {
            "id": "10", 
            "label":"Pinka",
            "serialNumber": "222",
            "type": "switch",
            "iconPath": ""
        
        },
        {
            "id": "11", 
            "label":"Jerusalem",
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
            "label":"Tel Aviv",
            "serialNumber": "444",
            "type": "www",
            "iconPath": ""
        }
        ]
        
        export const LINKS2: Link[] = [
            {
                "source": "1",
                "target": "5",
                "status": "SYNC"
            },
            {
                "source": "2",
                "target": "6",
                "status": "ASYN"

            },
            {
                "source": "3",
                "target": "7",
                "status": "SYNC"
            },
            {
                "source": "4",
                "target": "8",
                "status": "SYNC"
            },
            {
                "source": "5",
                "target": "9",
                "status": "ASYN"
            },
            {
                "source": "6",
                "target": "9",
                "status": "ASYN"
            },
            {
                "source": "7",
                "target": "10",
                "status": "ASYN"
            },
            {
                "source": "8",
                "target": "10",
                "status": "SYNC"
            },
            {
                "source": "10",
                "target": "11",
                "status": "ASYN"
            },
            {
                "source": "9",
                "target": "12",
                "status": "SYNC"
            },
            {
                "source": "11",
                "target": "12",
                "status": "SYNC"
            },
            {
                "source": "12",
                "target": "13",
                "status": "ASYN"
            },
        ]