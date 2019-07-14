var nodes = [

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
    ];


    var links = [
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



let findRoot = (nodes, links) => {
    var isRoot = true;
for (let i=0; i < nodes.length; i++){
    for (let j=0; j < links.length; j++){
        if (links[j].target == nodes[i].id)
        isRoot = false;
        break;
    }
    if (isRoot) {
        root = nodes[i];
        return root;
    }
    return root;

}   
}

let createTree = (root, nodes, links) => {
    
    var tempObject = root;
    var childrens = []
    tempObject.children = []

    console.log(root);
    for (let j=0; j < links.length; j++){
        if (links[j].source == root.id){
            for (let i=0; i < nodes.length; i++)
            if (links[j].target == nodes[i].id)
            tempObject.children.push(nodes[i])
        } 
    }
    
    for (let z = 0; z < tempObject.children.length; z++) {
        tempObject.children = createTree(tempObject.children[z], nodes, links)
    }
    return tempObject;
        
}
 
data = {
      
    "nodeName" : "NODE NAME 1",
    "name" : "NODE NAME 1",
    "type" : "type3",
    "code" : "N1",
    "label" : "Node name 1",
    "version" : "v1.0",
    "link" : {
        "name" : "Link NODE NAME 1",
        "nodeName" : "NODE NAME 1",
        "direction" : "ASYN"
      },
    "children" : [{
        "nodeName" : "NODE NAME 2.1",
        "name" : "NODE NAME 2.1",
        "type" : "type1",
        "code" : "N2.1",
        "label" : "Node name 2.1",
        "version" : "v1.0",
        "link" : {
            "name" : "Link node 1 to 2.1",
            "nodeName" : "NODE NAME 2.1",
            "direction" : "SYNC"
          },
        "children" : [{
            "nodeName" : "NODE NAME 3.1",
            "name" : "NODE NAME 3.1",
            "type" : "type2",
            "code" : "N3.1",
            "label" : "Node name 3.1",
            "version" : "v1.0",
            "link" : {
                "name" : "Link node 2.1 to 3.1",
                "nodeName" : "NODE NAME 3.1",
                "direction" : "SYNC"
              },
            "children" : []
          }, {
            "nodeName" : "NODE NAME 3.2",
            "name" : "NODE NAME 3.2",
            "type" : "type2",
            "code" : "N3.2",
            "label" : "Node name 3.2",
            "version" : "v1.0",
            "link" : {
                "name" : "Link node 2.1 to 3.2",
                "nodeName" : "NODE NAME 3.1",
                "direction" : "SYNC"
              },
            "children" : []
          }
        ]
      }, {
        "nodeName" : "NODE NAME 2.2",
        "name" : "NODE NAME 2.2",
        "type" : "type1",
        "code" : "N2.2",
        "label" : "Node name 2.2",
        "version" : "v1.0",
        "link" : {
            "name" : "Link node 1 to 2.2",
            "nodeName" : "NODE NAME 2.2",
            "direction" : "ASYN"
          },
        "children" : []
      }, {
        "nodeName" : "NODE NAME 2.3",
        "name" : "NODE NAME 2.3",
        "type" : "type1",
        "code" : "N2.3",
        "label" : "Node name 2.3",
        "version" : "v1.0",
        "link" : {
            "name" : "Link node 1 to 2.3",
            "nodeName" : "NODE NAME 2.3",
            "direction" : "ASYN"
          },
        "children" : [{
            "nodeName" : "NODE NAME 3.3",
            "name" : "NODE NAME 3.3",
            "type" : "type1",
            "code" : "N3.3",
            "label" : "Node name 3.3",
            "version" : "v1.0",
            "link" : {
                "name" : "Link node 2.3 to 3.3",
                "nodeName" : "NODE NAME 3.3",
                "direction" : "ASYN"
              },
            "children" : [{
                "nodeName" : "NODE NAME 4.1",
                "name" : "NODE NAME 4.1",
                "type" : "type4",
                "code" : "N4.1",
                "label" : "Node name 4.1",
                "version" : "v1.0",
                "link" : {
                    "name" : "Link node 3.3 to 4.1",
                    "nodeName" : "NODE NAME 4.1",
                    "direction" : "SYNC"
                  },
                "children" : []
              }
            ]
          }, {
            "nodeName" : "NODE NAME 3.4",
            "name" : "NODE NAME 3.4",
            "type" : "type1",
            "code" : "N3.4",
            "label" : "Node name 3.4",
            "version" : "v1.0",
            "link" : {
                "name" : "Link node 2.3 to 3.4",
                "nodeName" : "NODE NAME 3.4",
                "direction" : "ASYN"
              },
            "children" : [{
                "nodeName" : "NODE NAME 4.2",
                "name" : "NODE NAME 4.2",
                "type" : "type4",
                "code" : "N4.2",
                "label" : "Node name 4.2",
                "version" : "v1.0",
                "link" : {
                    "name" : "Link node 3.4 to 4.2",
                    "nodeName" : "NODE NAME 4.1",
                    "direction" : "ASYN"
                  },
                "children" : []
              }
            ]
          }
        ]
      }
    ]
  }