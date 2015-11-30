//Programming Languages Chart
$(function () {
    $('#cchart').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#E6E3E3',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 25,
                depth: 70
            }
        },
        
        title: {
            text: 'Programming languages most used in the world, December 2014.'
        },
        subtitle: {
            text: 'Source: www.tiobe.com, "Tiobe Index for December 2014".'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: ['C', 'Java', 'Objective-C', 'C++', 'C#', 'PHP', 'Javascript', 'Phyton', 'Visual Basic .NET', 'Perl']
        },
        yAxis: {
            title: {
                text: 'Ratings (%)'
            }
        },
        series: [{
            name: 'Programming language Rating (%) ',
            data: [17.5, 14.9, 9.13, 6.10, 4.33, 2.77, 2.43, 2.29, 2.35, 1.87]
        }]
    });
});
//End of Programming Languages Chart - Source template on Highcharts

//Programing languages rankings since 2002
$(function () {
    $('#cchart2002').highcharts({
        chart: {
            type: 'spline',
            backgroundColor: '#E6E3E3'
        },
        title: {
            text: 'Rankings of the four most used programming languages since 2002'
        },
        subtitle: {
            text: 'Source: www.tiobe.com, TIOBE Index for December 2014'
        },
        xAxis: {
            title: {
                text: 'Programming Languages'
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                year: '%Y'
            }
        },
        yAxis: {
            title: {
                text: 'Rankings (%)'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        series: [{
            name: 'C',
            //Note that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2002, 0), 18.82 ],
                [Date.UTC(2003, 0), 18.25 ],
                [Date.UTC(2004, 0), 18.19 ],
                [Date.UTC(2005, 0), 19.82 ],
                [Date.UTC(2006, 0), 19.00 ],
                [Date.UTC(2007, 0), 15.80 ],
                [Date.UTC(2008, 0), 13.91 ],
                [Date.UTC(2009, 0), 15.93 ],
                [Date.UTC(2010, 0), 16.21 ],
                [Date.UTC(2011, 0), 15.82 ],
                [Date.UTC(2012, 0), 17.00 ],
                [Date.UTC(2013, 0), 17.86 ],
                [Date.UTC(2014, 0), 17.94 ]
            ]
        }, {
            name: 'Java',
            data: [
                [Date.UTC(2002, 0), 24.06 ],
                [Date.UTC(2003, 0), 24.80 ],
                [Date.UTC(2004, 0), 22.56 ],
                [Date.UTC(2005, 0), 18.34 ],
                [Date.UTC(2006, 0), 22.25 ],
                [Date.UTC(2007, 0), 19.16 ],
                [Date.UTC(2008, 0), 20.85 ],
                [Date.UTC(2009, 0), 19.02 ],
                [Date.UTC(2010, 0), 17.48 ],
                [Date.UTC(2011, 0), 17.77 ],
                [Date.UTC(2012, 0), 17.47 ],
                [Date.UTC(2013, 0), 17.42 ],
                [Date.UTC(2014, 0), 16.52 ]
            ]
        }, {
            name: 'C++',
            data: [
                [Date.UTC(2002, 0), 15.18 ],
                [Date.UTC(2003, 0), 14.63 ],
                [Date.UTC(2004, 0), 15.71 ],
                [Date.UTC(2005, 0), 11.34 ],
                [Date.UTC(2006, 0), 11.47 ],
                [Date.UTC(2007, 0), 10.42 ],
                [Date.UTC(2008, 0), 8.73 ],
                [Date.UTC(2009, 0), 10.11 ],
                [Date.UTC(2010, 0), 9.71 ],
                [Date.UTC(2011, 0), 8.78 ],
                [Date.UTC(2012, 0), 8.05 ],
                [Date.UTC(2013, 0), 9.14 ],
                [Date.UTC(2014, 0), 7.56 ]
            ]
        }, {
            name: 'Objective-C',
            data: [
                [Date.UTC(2002, 0), 0 ],
                [Date.UTC(2003, 0), 0 ],
                [Date.UTC(2004, 0), 0 ],
                [Date.UTC(2005, 0), 0 ],
                [Date.UTC(2006, 0), 0 ],
                [Date.UTC(2007, 0), 0 ],
                [Date.UTC(2008, 0), 0 ],
                [Date.UTC(2009, 0), 0.14 ],
                [Date.UTC(2010, 0), 1.37 ],
                [Date.UTC(2011, 0), 3.01 ],
                [Date.UTC(2012, 0), 6.92 ],
                [Date.UTC(2013, 0), 10.28],
                [Date.UTC(2014, 0), 11.09]
            ]
        }]
    });
});
//End of Programing languages rankings since 2002 - Source template on Highcharts



//Map implementation
function mapLife(){
var map = L.map('map').setView([41.6207365, -72.9292086], 7);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy OpenStreetMap contributors',
    maxZoom: 18,
    }).addTo(map);

var iconBH = L.icon({
    iconUrl: "computers_icon.png"
});

var iconHU = L.icon({
    iconUrl: "university_icon.png"
});

var iconBV = L.icon({
    iconUrl: "home-2_icon.png"
});

var pontos = [
    L.marker([40.938288, -73.830130], {icon: iconBV}).bindPopup("<b>Dennis Ritchie</b><br>hometown (Bronxville)"),
    L.marker([42.377158, -71.116628], {icon: iconHU}).bindPopup("<b>Dennis Ritchie</b><br>studied here<br>(Havard University)"),
    L.marker([40.684287, -74.402091], {icon: iconBH}).bindPopup("<b>Dennis Ritchie</b><br>worked here<br>(at Bell Labs, in<br>Berkeley Heights, NJ)")
];

for(i in pontos) {
    pontos[i].addTo(map);
}

var circle = L.circle([40.938288, -73.830130], 700, {
    color: '#0000FF',
    fillColor: 'white',
    fillOpacity: 0.5
})
.addTo(map)
.bindPopup("<b>Dennis Ritchie</b><br>homeland (Bronxville)")

var grupo = new L.featureGroup(pontos);
map.fitBounds(grupo.getBounds());
}
//End of map implementation - Source Leaflet and OpenStreetMap

//Unix family tree implementation
function unixTree(){
    var treeData = [
      {
        "name": "Unix",
        "parent": "null",
        "children": [
          {
            "name": "BSD",
            "parent": "Unix",
            "children": [
              {
                "name": "NeXTSTEP/OPENSTEP",
                "parent": "BSD",
                "children": [
                  {
                    "name": "Darwin",
                    "parent": "NeXTSTEP/OPENSTEP"
                  },
                  {
                    "name": "Mac OS X",
                    "parent": "NeXTSTEP/OPENSTEP"
                  }
                ]
              },
              {
                "name": "FreeBSD",
                "parent": "BSD"
              },
              {
                "name": "NetBSD",
                "parent": "BSD"
              },
              {
                "name": "OpenBSD",
                "parent": "BSD"
              },
              {
                "name": "Sun OS",
                "parent": "Unix"
              }
            ]
          },
          {
            "name": "Solaris",
            "parent": "Unix"
          },
          {
            "name": "UnixWare",
            "parent": "Unix"
          },
          {
            "name": "Xenix",
            "parent": "Unix"
          },
          {
            "name": "HP-UX",
            "parent": "Unix"
          },
          {
            "name": "AIX",
            "parent": "Unix"
          },
          {
            "name": "IRIX",
            "parent": "Unix"
          },
          {
            "name": "Minix",
            "children": [
              {
                "name": "Linux (GNU/Linux)",
                "parent": "Minix"
              }
            ]
          }
        ]
      }
    ];

    // ************** Generate the tree diagram	 *****************
    var margin = {top: 20, right: 120, bottom: 20, left: 160},
        width = 960 - margin.right - margin.left,
        height = 550 - margin.top - margin.bottom;

    var i = 0;

    var tree = d3.layout.tree()
        .size([height, width]);

    var diagonal = d3.svg.diagonal()
        .projection(function(d) { return [d.y, d.x]; });

    var svg = d3.select(document.getElementById("treeData")).append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];

    update(root);

    function update(source) {

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 180; });

      // Declare the nodes…
      var node = svg.selectAll("g.node")
          .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter the nodes.
      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { 
              return "translate(" + d.y + "," + d.x + ")"; });

      nodeEnter.append("circle")
          .attr("r", 10)
          .style("fill", "#fff");

      nodeEnter.append("text")
          .attr("x", function(d) { 
              return d.children || d._children ? -13 : 13; })
          .attr("dy", ".35em")
          .attr("text-anchor", function(d) { 
              return d.children || d._children ? "end" : "start"; })
          .text(function(d) { return d.name; })
          .style("fill-opacity", 1);

      // Declare the links…
      var link = svg.selectAll("path.link")
          .data(links, function(d) { return d.target.id; });

      // Enter the links.
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", diagonal);

    }
}
//End of Unix family tree - Source GitHub, d3noob

//Easter Egg implementation
function moveObj() {
    var w = (window.innerWidth - 200), h = (window.innerHeight - 200);
    newWidth = Math.floor(Math.random() * w);
    newHeight = Math.floor(Math.random() * h);
    var obj = document.getElementById("button");
    obj.style.position = "absolute";
    obj.style.left = newWidth + "px";
    obj.style.top = newHeight + "px";
}

function party() {
    var img, left, top, counter, interval, x = 1;

    var audio = new Audio('turndownforwhat.mp3');
    audio.play();

    img = document.createElement('img');

    img.src = "res_dennis.png";

    left = 0;
    top  = 160;
    img.style.position = "absolute";
    img.style.left = left + "px";
    img.style.top = top + "px";
    img.style.width = "px";
    img.style.height = "px";

    img.style.zIndex = 100;

    document.body.appendChild(img);

    counter = 25;
    interval = 200;
    window.setTimeout(wanderAround, interval);
    window.setTimeout(changeC, interval);
    alert("Congratulations!\nYou found the easter egg of our website!\nIn memory of Dennis Ritchie: 1941-2011.\nMusic: Turn Down for What (DJ Snake, Lil Jon).\nImage source: Flickr, Javi.\n\nLuis Davide Leira, Diogo Ferreira, 2014");
    
    button.style.display = "none";

    function wanderAround() {

        --counter;
        if (counter < 0) {
            document.body.removeChild(img);
        }
        else {
            left += 50;
            if (left >= window.innerWidth) left = 0;
            img.style.left = left + "px";

           
            window.setTimeout(wanderAround, interval);
        }
    }

    function changeC() {
        if ((x % 2) == 1) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "pink";
            document.getElementById("resrow").style.Color = "black";
            document.getElementById("mainrow").style.backgroundColor = "black";
        }
        else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.getElementById("resrow").style.Color = "white";
            document.getElementById("mainrow").style.backgroundColor = "white";
        }
        x++;
        if (x == 275) {
            document.body.style.backgroundColor = "#E6E3E3";
            document.body.style.color = "black";
            document.getElementById("resrow").style.Color = "#E6E3E3";
            document.getElementById("mainrow").style.backgroundColor = "#E6E3E3";
            return;
        }
        setTimeout(changeC, 10);
    }
}
//End of Easter Egg implementation



//Life Timeline
function lifetimeline(){
    
    var container = document.getElementById('lifetimeline');

    var data = new vis.DataSet([
        {id: 1, content: 'Dennis Ritchie is born, on Bronxville, New York, U.S.', start: '1941-09-09'},
        {id: 2, content: 'Dennis Ritchie dies, at New Jersey, U.S., with 70 years old', start: '2011-10-12'},
        {id: 3, content: 'Starts working at the Bell Labs Computing Sciences Research Center', start: '1967'},
        {id: 4, content: 'Graduated from Harvard University', start: '1966'},
        {id: 5, content: 'Turing Award', start: '1983'},
        {id: 6, content: 'IEEE award', start: '1990'},
        {id: 7, content: 'Fellow of the Computer History Museum', start: '1997'},
        {id: 8, content: 'National Medal of Technology', start: '1999'},
        {id: 9, content: 'Award by the Industrial Research Institute', start: '2005'},
        {id: 10, content: 'Japan Prize for Information and Communications', start: '2011'},
        {id: 11, content: 'Book published: UNIX Programmer\'s Manual (http://en.wikipedia.org/wiki/Man_page)', start: '1971-11-3'},
        {id: 12, content: 'Book published: The C Programming Language', start: '1978'},
        {id: 13, content: 'Release of the C programming language', start: '1972'},
        {id: 14, content: 'Release of Unix', start: '1971'}
    ]);

    var options = {
        "max": '2030',
        "min": '1920',
        "showCurrentTime": false
    }

    var timeline = new vis.Timeline(container, data, options);
}
//End of Life Timeline - Source template on visjs

//Programming Languages Tree Chart

function treeChart(){
  // create an array with nodes
  var nodes = [
    {id: 1, label: 'Assembly'},
    {id: 2, label: 'Speedcoding'},
    {id: 3, label: 'Fortran'},
    {id: 4, label: 'C'},
    {id: 5, label: 'IPL'},
    {id: 6, label: 'Basic'},
    {id: 7, label: 'B'},
    {id: 8, label: 'PHP'},
    {id: 9, label: 'Objective-c'},
    {id: 10, label: 'Java'},
    {id: 11, label: 'Phyton'},
    {id: 12, label: 'Perl'},
    {id: 13, label: 'LISP'},
    {id: 14, label: 'Visual Basic'},
    {id: 15, label: 'VBScript'},
    {id: 16, label: 'Logo'},
    {id: 17, label: 'JavaScript'},
    {id: 18, label: 'CofeeScript'},
    {id: 19, label: 'Dart'},
    {id: 20, label: 'C++'},
    {id: 21, label: 'Visual C++'},
    {id: 22, label: 'C#'},
    {id: 23, label: 'Ruby'},
    {id: 24, label: 'Jython'},
    {id: 25, label: 'Processing'},
    {id: 26, label: 'Visual C#'},
  ];

  // create an array with edges
  var edges = [
    {from: 1, to: 2, style: 'arrow'},
    {from: 1, to: 3, style: 'arrow'},
    {from: 1, to: 4, style: 'arrow'},
    {from: 1, to: 5, style: 'arrow'},
    {from: 2, to: 3, style: 'arrow'},
    {from: 3, to: 4, style: 'arrow'},
    {from: 3, to: 7, style: 'arrow'},
    {from: 3, to: 6, style: 'arrow'},
    {from: 4, to: 9, style: 'arrow'},
    {from: 4, to: 20, style: 'arrow'},
    {from: 4, to: 10, style: 'arrow'},
    {from: 4, to: 11, style: 'arrow'},
    {from: 4, to: 8, style: 'arrow'},
    {from: 4, to: 12, style: 'arrow'},
    {from: 5, to: 13, style: 'arrow'},
    {from: 6, to: 14, style: 'arrow'},
    {from: 6, to: 16, style: 'arrow'},
    {from: 7, to: 4, style: 'arrow'},
    {from: 8, to: 12, style: 'arrow'},
    {from: 10, to: 25, style: 'arrow'},
    {from: 10, to: 14, style: 'arrow'},
    {from: 10, to: 24, style: 'arrow'},
    {from: 10, to: 11, style: 'arrow'},
    {from: 11, to: 24, style: 'arrow'},
    {from: 12, to: 11, style: 'arrow'},
    {from: 12, to: 23, style: 'arrow'},
    {from: 13, to: 16, style: 'arrow'},
    {from: 13, to: 8, style: 'arrow'},
    {from: 13, to: 12, style: 'arrow'},
    {from: 13, to: 11, style: 'arrow'},
    {from: 13, to: 17, style: 'arrow'},
    {from: 14, to: 15, style: 'arrow'},
    {from: 17, to: 18, style: 'arrow'},
    {from: 17, to: 19, style: 'arrow'},
    {from: 18, to: 19, style: 'arrow'},
    {from: 20, to: 21, style: 'arrow'},
    {from: 20, to: 10, style: 'arrow'},
    {from: 20, to: 22, style: 'arrow'},
    {from: 22, to: 26, style: 'arrow'},
    {from: 23, to: 11, style: 'arrow'},
  ];

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
      nodes: {
          title: 'Programming Languages and its derivatives'
      }
  };
  var network = new vis.Network(container, data, options);
}
//End of Programming Languages Tree Chart - Source Template on visjs