AIM.extend({
  ea:{
    sss: function() {
      if (AIM.content) AIM.content.remove();
      var content = AIM.content = document.body.appendTag('DIV');
      console.log(AIM.ea.data);
      content.appendTag('H1', 'Package');
      Object.values(AIM.ea.data.package).forEach(function(package){
        content.appendTag('H2', package.Name);
      });
      content.appendTag('H1', 'Diagram');
      var elDiagramDIV = content.appendTag('DIV');
      content.appendTag('H1', 'Eisen');
      elRequirmentsDIV = content.appendTag('DIV');
      Object.values(AIM.ea.data.diagram).forEach(function(diagram){
        elDiagramDIV.appendTag('H2', diagram.Name);
        // var elUL = content.appendTag('UL');
        if (diagram.object) {
          var elDiagram = elDiagramDIV.appendTag('DIV',{style: `width:100%;background-color:#eee;` });
          var height = 0;
          var nodedata = [], linkdata = [];
          var $ = go.GraphObject.make;  // for conciseness in defining templates

          myDiagram = $(go.Diagram, elDiagram, {
            "undoManager.isEnabled": true,  // enable undo & redo
            "animationManager.isEnabled": false,
          });

          // define a simple Node template

          figure = {
            Action: {
              fill: $(go.Brush, "Linear", { start: go.Spot.Left, end: go.Spot.Right, 0.0: "#FCF0D8", 1.0: "#F9DEA7" }),
              figure: "RoundedRectangle",
            },
            StateNode:{
              fill: "#ccc",
              figure: "Circle",
              width: 30,
              height: 30,
            }
          }

          myDiagram.nodeTemplate =
          $(
            go.Node,
            // "Auto",
            new go.Binding("location", "loc"),  // get the Node.location from the data.loc value
            $(
              go.Shape,
              {
                strokeWidth: 1,
                stroke: '#999',
                row: 1,
                // fill: $(go.Brush, "Linear", { start: go.Spot.Left, end: go.Spot.Right, 0.0: "#FCF0D8", 1.0: "#F9DEA7" }),
              },
              // new go.Binding("width", "width"),
              new go.Binding("height", "height"),
              new go.Binding("figure", "figure"),
              new go.Binding("width", "width"),
              new go.Binding("fill", "fill"),
            ),
            $(
              go.TextBlock,
              // "Vertical",
              {
                // margin: 5,
                font: "10px sans-serif",
                // font: "bold 14px sans-serif",
                stroke: '#333',
                // background: "lightgreen",
                // margin: 2,
                // textAlign: "right",
                textAlign: "center",
                // alignment: go.Spot.Center,
                verticalAlignment: go.Spot.Center,
                // isMultiline: true,
                // wrap: go.TextBlock.WrapFit,
                // width: 100,
              },
              new go.Binding("height", "height"),
              new go.Binding("width", "width"),
              new go.Binding("text", "Name"),
              // new go.Binding("fill", "fill"),
            )
          );
          diagram.object.forEach(function(diagramobject) {
            // console.log(diagramobject);
            var object = AIM.ea.data.object[diagramobject.Object_ID];
            var objectdata = Object.assign({
              key: object.Object_ID,
              Name: object.Name,
              loc: new go.Point(diagramobject.RectLeft, -diagramobject.RectTop),
              // top : -diagramobject.RectTop,
              width : diagramobject.RectRight - diagramobject.RectLeft,
              height : diagramobject.RectTop - diagramobject.RectBottom,

              // left : diagramobject.RectLeft,
              // fill: $(go.Brush, "Linear", { start: go.Spot.Left, end: go.Spot.Right, 0.0: "#FCF0D8", 1.0: "#F9DEA7" }),
              // fill: $(go.Brush, "Linear", { start: go.Spot.Left, end: go.Spot.Right, 0.0: "#FCF0D8", 1.0: "#F9DEA7" }),
              // figure: "RoundedRectangle",
              // figure: "Circle",
            },figure[object.Object_Type]);
            // var elObject = elDiagram.appendTag('DIV', {className:'Object ' + object.Object_Type, innerText: object.Name, style:`margin:auto;top:${diagramobject.top}px;left:${diagramobject.left}px;width:${diagramobject.width}px;height:${diagramobject.height}px;`});
            nodedata.push(objectdata);
            height = Math.max(height,-diagramobject.RectTop);
            // console.log(objectdata);
            if (object.connector) {
              object.connector.forEach(function(connector) {
                linkdata.push({
                  from: connector.Start_Object_ID,
                  to: connector.End_Object_ID,
                  // routing: go.Link.Normal,
                  // routing: go.Link.Orthogonal,
                });
              });
            }
            elDiagramDIV.appendTag('A', {name: 'object' + object.Object_ID});
            elDiagramDIV.appendTag('H3', object.Name);
            var elTABLE = elDiagramDIV.appendTag('TABLE');
            ['CreatedDate','ModifiedDate','Status','Author','Stereotype'].forEach(function(attributeName){
              if (object[attributeName]) {
                elTABLE.appendTag('TR', ['TH', attributeName], ['TD', object[attributeName] ]);
              }
            });
            if (object.Note) {
              if (object.Note.includes('{alf}')) {
                elTABLE.appendTag('TR', ['TH', 'ALF'], ['TD', ['PRE', ['CODE', object.Note ]]]);
                elTABLE.appendTag('TR', ['TH', 'ST'], ['TD', ['PRE', ['CODE', AIM.convert.alf2st(object.Note) ]]]);
              }
              else elTABLE.appendTag('TR', ['TH', 'Notitie'], ['TD', object.Note ]);
            }

            if (object.requires) {
              elDiagramDIV.appendTag('H4', 'Eisen');
              var elRequiresUL = elDiagramDIV.appendTag('UL');

              object.requires.forEach(function(requires){
                elRequiresUL.appendTag('LI', ['A', 'Eis' + requires.ReqID + ': ' + requires.Requirement, {href: '#requirement' + requires.ReqID} ]);

                if (!elRequirmentsDIV[requires.Status]) {
                  elRequirmentsDIV.appendTag('H2', requires.Status);
                  elRequirmentsDIV[requires.Status] = elRequirmentsDIV.appendTag('DIV');
                }
                elRequirmentsDIV[requires.Status].appendTag('H3', requires.Requirement)
                var elRequiresTABLE = elRequirmentsDIV[requires.Status].appendTag('TABLE');
                elRequiresTABLE.appendTag('TR', ['TH', ['A', {name: 'requirement' + requires.ReqID}], ['SPAN', 'Eis' + requires.ReqID]], ['TD', requires.Requirement, {colspan:3} ]);
                elRequiresTABLE.appendTag('TR', ['TH', 'Object'], ['TD', {colspan:3}, ['A', object.Name, {href: '#object' + object.Object_ID }] ]);
                elRequiresTABLE.appendTag('TR', ['TH', 'ReqType'], ['TD', requires.ReqType ], ['TH', 'Status'], ['TD', requires.Status ]);
                elRequiresTABLE.appendTag('TR', ['TH', 'Stability'], ['TD', requires.Stability ], ['TH', 'Difficulty'], ['TD', requires.Difficulty ]);
                elRequiresTABLE.appendTag('TR', ['TH', 'Priority'], ['TD', requires.Priority ], ['TH', 'LastUpdate'], ['TD', requires.LastUpdate ]);
                if (requires.Notes) {
                  elRequiresTABLE.appendTag('TR', ['TH', 'Notes'], ['TD', requires.Notes, {colspan:3} ]);
                }
                //
                // ['Requirement','ReqType','Status','Notes','Stability','Difficulty','Priority','LastUpdate'].forEach(function(attributeName){
                //   if (requires[attributeName]) {
                //     elRequires.appendTag('TR', ['TH', attributeName], ['TD', requires[attributeName] ]);
                //   }
                // });
              });
            }


            // console.log(elObject);
            // if (object.connector) {
            //   object.connector.forEach(function(connector){
            //     content.appendTag('LI', connector.Direction, ['A', AIM.ea.data.object[connector.End_Object_ID].Name ] );
            //   });
            // }
          });
          elDiagram.style.height = (height+10)+'px';


          // but use the default Link template, by not setting Diagram.linkTemplate

          // create the model data that will be represented by Nodes and Links
          // myDiagram.model = new go.GraphLinksModel(
          //   [
          //     { key: "Alpha", color: "lightblue" },
          //     { key: "Beta", color: "orange" },
          //     { key: "Gamma", color: "lightgreen" },
          //     { key: "Delta", color: "pink" }
          //   ],
          //   [
          //     { from: "Alpha", to: "Beta" },
          //     { from: "Alpha", to: "Gamma" },
          //     { from: "Beta", to: "Beta" },
          //     { from: "Gamma", to: "Delta" },
          //     { from: "Delta", to: "Alpha" }
          //   ]
          // );

          // var nodedata =   [
          //     { key: "Alpha", color: "lightblue" },
          //     { key: "Beta", color: "orange" },
          //     { key: "Gamma", color: "lightgreen" },
          //     { key: "Delta", color: "pink" }
          //   ],
          //   linkdata =
          //   [
          //     { from: "Alpha", to: "Beta" },
          //     { from: "Alpha", to: "Gamma" },
          //     { from: "Beta", to: "Beta" },
          //     { from: "Gamma", to: "Delta" },
          //     { from: "Delta", to: "Alpha" }
          //   ];

          myDiagram.model = new go.GraphLinksModel(nodedata,linkdata);
        }

      });
    }
  },
  on: {
    init: function() {
      console.log('INIT');
      AIM.http.request('ea.php', (event) => {
        AIM.ea.data = event.target.data;
        Object.values(AIM.ea.data.connector).forEach(function(connector){
          var start_Object = AIM.ea.data.object[connector.Start_Object_ID];
          (start_Object.connector = start_Object.connector || []).push(connector);
        });
        AIM.ea.sss();
        // console.log(event.target.data);

      })
    }
  }
})
