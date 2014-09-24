/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'container',
                type: 'rect',
                rect: ['-3px', '58px','1030px','697px','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'footer',
                type: 'rect',
                rect: ['0', '736','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'footer',
                symbolName: 'footer'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ],
            "${_container}": [
                ["style", "top", '58px'],
                ["style", "height", '697px'],
                ["style", "opacity", '0.8999999761581421'],
                ["style", "left", '-3px'],
                ["style", "width", '1030px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"footer": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '5px', '1024px', '27px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(71,71,71,1.00)']
                },
                {
                    rect: ['18px', '0px', '510px', '28px', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 12, 'rgba(244,244,244,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '<br>Calle 29 Sur No 29B - 50. PBX. +57(1) 202 3087   FAX +57(1) 727 1036    Bogotá Colombia<br><br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '5px'],
                ["style", "height", '27px'],
                ["color", "background-color", 'rgba(71,71,71,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "font-size", '12px'],
                ["color", "color", 'rgba(244,244,244,1.00)'],
                ["style", "height", '28px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '18px'],
                ["style", "width", '510px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-26067516");
