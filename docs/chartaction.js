var graphmap = {
    "julesverne": julesverne,
    "oghamcisp": oghamcisp,
    "oghamciic": oghamciic,
    "alligator": alligator,
    "cuneiform_3d": cuneiform_3d,
    "samianresearch": samianresearch
}

var chart;
window.onload = function() {
    var btn = document.getElementById("run"),
        cd = document.getElementById("code");

    (btn.onclick = function() {
        var code = cd.value;

        if (chart) {
            chart.clean();
        }

        chart = flowchart.parse(code);
        chart.drawSVG('canvas', {
            // 'x': 30,
            // 'y': 50,
            'line-width': 3,
            'maxWidth': 3, //ensures the flowcharts fits within a certian width
            'line-length': 50,
            'text-margin': 10,
            'font-size': 14,
            'font': 'normal',
            'font-family': 'Oswald',
            'font-weight': 'normal',
            'font-color': 'black',
            'line-color': 'black',
            'element-color': 'black',
            'fill': 'white',
            'yes-text': 'yes',
            'no-text': 'no',
            'arrow-end': 'block',
            'scale': 1,
            'symbols': {
                'start': {
                    'font-color': 'red',
                    'element-color': 'green',
                    'fill': 'yellow'
                },
                'end': {
                    'class': 'end-element'
                }
            },
            'flowstate': {
                'data': {
                    'fill': '#d6fefe',
                    'font-size': 12,
                    'font-color': 'black'
                },
                'datand': {
                    'fill': '#cccccc',
                    'font-size': 12,
                    'font-color': 'black'
                },
                'tool': {
                    'fill': '#ffffd1',
                    'font-size': 12,
                    'font-color': 'black',
                    'font-weight': 'bold'
                },
                'toolwd': {
                    'fill': '#d5a6bd',
                    'font-size': 12,
                    'font-color': 'black',
                    'font-weight': 'bold'
                },
            }
        });

        $('[id^=sub1]').click(function() {
            alert('info here');
        });
    })();

};

function downloadSVG() {
    console.log("download svg")
    var svg = document.getElementsByTagName("svg");
    var code = svg[0].outerHTML;
    console.log(code)
    saveTextAsFile(code, ".svg", "mydiagram")

}

function saveTextAsFile(tosave, fileext, filename) {
    var a = document.createElement('a');
    a.style = "display: none";
    var blob = new Blob([tosave], {
        type: 'text/plain'
    });
    var url = window.URL.createObjectURL(blob);
    var filename = filename + fileext;
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 1000);
}


$('#pipeselect').change(function() {
    $('#code').val(graphmap[$('#pipeselect').val()])
    console.log($('#pipeselect').val())
    console.log(graphmap[$('#pipeselect').val()])
    if (chart) {
        chart.clean();
    }
    chart = flowchart.parse(graphmap[$('#pipeselect').val()]);
    chart.drawSVG('canvas', {
        // 'x': 30,
        // 'y': 50,
        'line-width': 3,
        'maxWidth': 3, //ensures the flowcharts fits within a certian width
        'line-length': 50,
        'text-margin': 10,
        'font-size': 14,
        'font': 'normal',
        'font-family': 'Oswald',
        'font-weight': 'normal',
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        'scale': 1,
        'symbols': {
            'start': {
                'font-color': 'red',
                'element-color': 'green',
                'fill': 'yellow'
            },
            'end': {
                'class': 'end-element'
            }
        },
        'flowstate': {
            'data': {
                'fill': '#d6fefe',
                'font-size': 12,
                'font-color': 'black'
            },
            'tool': {
                'fill': '#ffffd1',
                'font-size': 12,
                'font-color': 'black',
                'font-weight': 'bold'
            },
            'toolwd': {
                'fill': '#d5a6bd',
                'font-size': 12,
                'font-color': 'black',
                'font-weight': 'bold'
            },
        }
    });
});