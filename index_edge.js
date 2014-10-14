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
                rect: ['-7px', '57px','1030px','697px','auto', 'auto'],
                opacity: 0.9,
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'rec_azul',
                display: 'none',
                type: 'rect',
                rect: ['829', '236','auto','auto','auto', 'auto']
            },
            {
                id: 'rect_verde',
                display: 'none',
                type: 'rect',
                rect: ['500px', '229px','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_nosotros',
                display: 'none',
                type: 'rect',
                rect: ['763', '85','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'btn_contacto',
                display: 'none',
                type: 'rect',
                rect: ['725', '216','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'rec_amarillo',
                display: 'none',
                type: 'rect',
                rect: ['952', '277','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_productos',
                display: 'none',
                type: 'rect',
                rect: ['821', '197','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'con_slide',
                type: 'rect',
                rect: ['24px', '113px','500px','300px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['-2px', '21px','259px','65px','auto', 'auto'],
                fill: ["rgba(50,50,50,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'botones_up',
                type: 'rect',
                rect: ['257', '32','auto','auto','auto', 'auto']
            },
            {
                id: '_01_logo',
                type: 'image',
                rect: ['-7px', '11px','264px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"01_logo.png",'0px','0px']
            },
            {
                id: 'botonCables',
                type: 'rect',
                rect: ['448px', '39','auto','auto','auto', 'auto']
            },
            {
                id: 'botonCorazas',
                type: 'rect',
                rect: ['580', '39','auto','auto','auto', 'auto']
            },
            {
                id: 'botonExtensiones',
                type: 'rect',
                rect: ['710px', '39px','auto','auto','auto', 'auto']
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['887px', '42px','auto','auto','auto', 'auto'],
                text: "Servicio al Cliente",
                font: ['Tahoma, Geneva, sans-serif', 15, "rgba(174,174,174,1.00)", "normal", "none", ""]
            },
            {
                id: 'botonAlambres',
                type: 'rect',
                rect: ['302px', '39','auto','auto','auto', 'auto']
            },
            {
                id: 'footer',
                type: 'rect',
                rect: ['0', '736px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'btn_productos',
                symbolName: 'btn_productos',
                autoPlay: {

                }
            },
            {
                id: 'btn_nosotros',
                symbolName: 'btn_nosotros',
                autoPlay: {

                }
            },
            {
                id: 'botonCables',
                symbolName: 'botonCables',
                autoPlay: {

                }
            },
            {
                id: 'rec_azul',
                symbolName: 'rec_azul',
                autoPlay: {

                }
            },
            {
                id: 'botones_up',
                symbolName: 'botones_up',
                autoPlay: {

                }
            },
            {
                id: 'botonExtensiones',
                symbolName: 'botonExtensiones',
                autoPlay: {

                }
            },
            {
                id: 'btn_contacto',
                symbolName: 'btn_contacto',
                autoPlay: {

                }
            },
            {
                id: 'footer',
                symbolName: 'footer',
                autoPlay: {

                }
            },
            {
                id: 'botonCorazas',
                symbolName: 'botonCorazas',
                autoPlay: {

                }
            },
            {
                id: 'rect_verde',
                symbolName: 'rect_verde',
                autoPlay: {

                }
            },
            {
                id: 'botonAlambres',
                symbolName: 'botonAlambres',
                autoPlay: {

                }
            },
            {
                id: 'rec_amarillo',
                symbolName: 'rec_amarillo',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "top", '42px'],
                ["color", "color", 'rgba(174,174,174,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '887px'],
                ["style", "font-size", '15px']
            ],
            "${_btn_contacto}": [
                ["style", "top", '237px'],
                ["transform", "scaleY", '0.55556'],
                ["transform", "scaleX", '0.55556'],
                ["style", "left", '712px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_rect_verde}": [
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.8'],
                ["style", "left", '752px'],
                ["style", "top", '264px']
            ],
            "${_btn_nosotros}": [
                ["style", "top", '137px'],
                ["transform", "scaleY", '0.41139'],
                ["transform", "scaleX", '0.41139'],
                ["style", "left", '756px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${__01_logo}": [
                ["style", "height", '83px'],
                ["style", "top", '11px'],
                ["style", "left", '-7px'],
                ["style", "width", '264px']
            ],
            "${_btn_productos}": [
                ["style", "top", '223px'],
                ["transform", "scaleY", '0.44385'],
                ["transform", "scaleX", '0.44385'],
                ["style", "left", '850px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_rec_azul}": [
                ["style", "top", '371px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none']
            ],
            "${_rec_amarillo}": [
                ["style", "top", '267px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '972px']
            ],
            "${_con_slide}": [
                ["style", "top", '93px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '20px'],
                ["style", "opacity", '1'],
                ["style", "left", '-721px'],
                ["style", "width", '20px']
            ],
            "${_botonExtensiones}": [
                ["style", "left", '710px'],
                ["style", "top", '39px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ],
            "${_container}": [
                ["style", "top", '57px'],
                ["style", "height", '697px'],
                ["style", "opacity", '0.8999999761581421'],
                ["style", "left", '-7px'],
                ["style", "width", '1030px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '21px'],
                ["color", "background-color", 'rgba(50,50,50,1.00)'],
                ["style", "width", '259px']
            ],
            "${_botonCables}": [
                ["style", "left", '448px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3375,
            autoPlay: true,
            timeline: [
                { id: "eid62", tween: [ "style", "${_rec_azul}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_rec_azul}", "display", 'block', { fromValue: 'none'}], position: 863, duration: 0 },
                { id: "eid77", tween: [ "style", "${_btn_nosotros}", "top", '85px', { fromValue: '137px'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid87", tween: [ "style", "${_btn_contacto}", "top", '216px', { fromValue: '237px'}], position: 2136, duration: 431, easing: "easeOutBounce" },
                { id: "eid71", tween: [ "transform", "${_btn_nosotros}", "scaleX", '1', { fromValue: '0.41139'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid2", tween: [ "style", "${_rec_amarillo}", "top", '267px', { fromValue: '267px'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_rec_amarillo}", "top", '267px', { fromValue: '402px'}], position: 1314, duration: 250, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_con_slide}", "left", '23px', { fromValue: '-721px'}], position: 2250, duration: 598, easing: "easeOutQuad" },
                { id: "eid1", tween: [ "style", "${_rec_amarillo}", "left", '972px', { fromValue: '972px'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "transform", "${_btn_productos}", "scaleX", '1', { fromValue: '0.44385'}], position: 1464, duration: 444, easing: "easeOutBounce" },
                { id: "eid57", tween: [ "style", "${_rec_azul}", "top", '236px', { fromValue: '371px'}], position: 863, duration: 250, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "transform", "${_btn_contacto}", "scaleY", '1', { fromValue: '0.55556'}], position: 2136, duration: 431, easing: "easeOutBounce" },
                { id: "eid65", tween: [ "transform", "${_rec_amarillo}", "scaleY", '1', { fromValue: '0.05'}], position: 1314, duration: 250, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_rect_verde}", "display", 'block', { fromValue: 'none'}], position: 1835, duration: 0 },
                { id: "eid98", tween: [ "style", "${_btn_productos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid99", tween: [ "style", "${_btn_productos}", "display", 'block', { fromValue: 'none'}], position: 1464, duration: 0, easing: "easeOutBounce" },
                { id: "eid12", tween: [ "style", "${_rect_verde}", "left", '752px', { fromValue: '752px'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_btn_nosotros}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid79", tween: [ "style", "${_btn_nosotros}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid75", tween: [ "style", "${_btn_nosotros}", "left", '763px', { fromValue: '756px'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid5", tween: [ "transform", "${_rect_verde}", "scaleY", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "transform", "${_rect_verde}", "scaleY", '1', { fromValue: '0.05'}], position: 1835, duration: 250, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_rec_amarillo}", "display", 'block', { fromValue: 'none'}], position: 1314, duration: 0 },
                { id: "eid106", tween: [ "style", "${_con_slide}", "opacity", '1', { fromValue: '1'}], position: 2848, duration: 0, easing: "easeOutQuad" },
                { id: "eid93", tween: [ "transform", "${_btn_productos}", "scaleY", '1', { fromValue: '0.44385'}], position: 1464, duration: 444, easing: "easeOutBounce" },
                { id: "eid11", tween: [ "style", "${_rect_verde}", "top", '264px', { fromValue: '264px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_rect_verde}", "top", '234px', { fromValue: '399px'}], position: 1835, duration: 250, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_btn_contacto}", "left", '725px', { fromValue: '712px'}], position: 2136, duration: 431, easing: "easeOutBounce" },
                { id: "eid97", tween: [ "style", "${_btn_productos}", "top", '197px', { fromValue: '223px'}], position: 1464, duration: 444, easing: "easeOutBounce" },
                { id: "eid104", tween: [ "color", "${_con_slide}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2848, duration: 0, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_btn_contacto}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid89", tween: [ "style", "${_btn_contacto}", "display", 'block', { fromValue: 'none'}], position: 2136, duration: 0, easing: "easeOutBounce" },
                { id: "eid73", tween: [ "transform", "${_btn_nosotros}", "scaleY", '1', { fromValue: '0.41139'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid108", tween: [ "style", "${_con_slide}", "width", '20px', { fromValue: '20px'}], position: 2848, duration: 0, easing: "easeOutQuad" },
                { id: "eid103", tween: [ "style", "${_con_slide}", "top", '105px', { fromValue: '93px'}], position: 2250, duration: 598, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${_con_slide}", "height", '20px', { fromValue: '20px'}], position: 2848, duration: 0, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "transform", "${_rec_azul}", "scaleY", '1', { fromValue: '0.05'}], position: 863, duration: 250, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "style", "${_btn_productos}", "left", '821px', { fromValue: '850px'}], position: 1464, duration: 444, easing: "easeOutBounce" },
                { id: "eid81", tween: [ "transform", "${_btn_contacto}", "scaleX", '1', { fromValue: '0.55556'}], position: 2136, duration: 431, easing: "easeOutBounce" }            ]
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '5px', '1024px', '27px', 'auto', 'auto'],
                    fill: ['rgba(71,71,71,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 12, 'rgba(244,244,244,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: '<br>Calle 29 Sur No 29B - 50. PBX. +57(1) 202 3087   FAX +57(1) 727 1036    Bogotá Colombia<br><br>',
                    align: 'left',
                    rect: ['18px', '-4px', '510px', '28px', 'auto', 'auto']
                },
                {
                    id: 'animMapa',
                    type: 'rect',
                    rect: ['534', '-36px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'icono_map',
                    rect: ['565px', '6px', '24px', '24px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/icono_map.png', '0px', '0px']
                },
                {
                    id: 'logo_faceCopy',
                    type: 'rect',
                    rect: ['824', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo_twitter2Copy',
                    type: 'rect',
                    rect: ['853', '2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo_youtube2Copy',
                    type: 'rect',
                    rect: ['882', '2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo_in2Copy',
                    type: 'rect',
                    rect: ['908', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo_google2Copy',
                    type: 'rect',
                    rect: ['933', '1', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'animMapa',
                symbolName: 'animMapa',
                autoPlay: {

               }
            },
            {
                id: 'logo_youtube2Copy',
                symbolName: 'logo_youtube',
                autoPlay: {

               }
            },
            {
                id: 'logo_in2Copy',
                symbolName: 'logo_in',
                autoPlay: {

               }
            },
            {
                id: 'logo_google2Copy',
                symbolName: 'logo_google',
                autoPlay: {

               }
            },
            {
                id: 'logo_twitter2Copy',
                symbolName: 'logo_twitter',
                autoPlay: {

               }
            },
            {
                id: 'logo_faceCopy',
                symbolName: 'logo_face',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_logo_in2Copy}": [
                ["style", "top", '6px']
            ],
            "${_animMapa}": [
                ["style", "top", '-36px']
            ],
            "${_logo_faceCopy}": [
                ["style", "top", '6px']
            ],
            "${_Text2}": [
                ["style", "top", '-4px'],
                ["style", "font-size", '12px'],
                ["color", "color", 'rgba(244,244,244,1.00)'],
                ["style", "height", '28px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '18px'],
                ["style", "width", '510px']
            ],
            "${_logo_youtube2Copy}": [
                ["style", "top", '7px']
            ],
            "${_icono_map}": [
                ["style", "top", '6px'],
                ["style", "height", '24px'],
                ["style", "left", '565px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '1024px']
            ],
            "${_Rectangle}": [
                ["style", "top", '5px'],
                ["style", "height", '27px'],
                ["color", "background-color", 'rgba(71,71,71,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_logo_twitter2Copy}": [
                ["style", "top", '7px']
            ],
            "${_logo_google2Copy}": [
                ["style", "top", '6px']
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
"btn_nosotros": {
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
                    id: '_01_nosotros',
                    type: 'image',
                    rect: ['0px', '0px', '157px', '158px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/01_nosotros.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__01_nosotros}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '158px'],
                ["style", "width", '157px']
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
"btn_productos": {
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
                    id: '_01_productos',
                    type: 'image',
                    rect: ['0px', '0px', '186px', '187px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/01_productos.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__01_productos}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '187px'],
                ["style", "width", '186px']
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
"btn_contacto": {
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
                    id: '_01_contacto',
                    type: 'image',
                    rect: ['0px', '0px', '117px', '117px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/01_contacto.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__01_contacto}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '117px'],
                ["style", "width", '117px']
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
"rec_amarillo": {
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
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '3px', '200px', 'auto', 'auto'],
                    fill: ['rgba(252,184,19,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "height", '200px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '3px']
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
"rec_azul": {
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
                    type: 'rect',
                    id: 'rectangulo_azul',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '3px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rectangulo_azul}": [
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '3px']
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
"rect_verde": {
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
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '3px', '200px', 'auto', 'auto'],
                    fill: ['rgba(144,188,56,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '3px']
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
"logo_google": {
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
                    type: 'image',
                    id: 'logo_google',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/logo_google%2B.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo_google}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
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
"logo_in": {
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
                    type: 'image',
                    id: 'logo_in',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/logo_in.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ],
            "${_logo_in}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
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
"logo_youtube": {
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
                    type: 'image',
                    id: 'logo_youtube',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/logo_youtube.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo_youtube}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
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
"logo_twitter": {
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
                    type: 'image',
                    id: 'logo_twitter',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/logo_twitter.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo_twitter}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
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
"logo_face": {
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
                    type: 'image',
                    id: 'logo_face2',
                    rect: ['1.6%', '-1.2%', '20px', '20px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/logo_face.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo_face2}": [
                ["style", "top", '0%'],
                ["style", "left", '0.05%'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
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
"animMapa": {
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
                    type: 'rect',
                    id: 'Rectangle7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '86px', '27px', 'auto', 'auto'],
                    fill: ['rgba(252,184,19,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'Ver Mapa',
                    align: 'left',
                    rect: ['12px', '5px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["style", "top", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(252,184,19,1.00)']
            ],
            "${_Text4}": [
                ["style", "top", '45px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '27px'],
                ["style", "width", '86px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid119", tween: [ "style", "${_Rectangle7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid129", tween: [ "style", "${_Rectangle7}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${_Rectangle7}", "top", '0px', { fromValue: '40px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "style", "${_Rectangle7}", "top", '40px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid127", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutQuad" },
                { id: "eid117", tween: [ "style", "${_Text4}", "top", '5px', { fromValue: '45px'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "style", "${_Text4}", "top", '45px', { fromValue: '5px'}], position: 500, duration: 500, easing: "easeOutQuad" }            ]
        }
    }
},
"botonAlambres": {
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
                    rect: ['23px', '214px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'uno_btn5'
                },
                {
                    rect: ['-38px', '247px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'uno_btn4'
                },
                {
                    rect: ['29px', '192px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'uno_btn3'
                },
                {
                    rect: ['-28px', '221px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'uno_btn2'
                },
                {
                    rect: ['-44', '34px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'uno_btn1'
                },
                {
                    id: 'btnuno',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0px', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'uno_btn4',
                symbolName: 'uno_btn4',
                autoPlay: {

               }
            },
            {
                id: 'btnuno',
                symbolName: 'btnuno',
                autoPlay: {

               }
            },
            {
                id: 'uno_btn3',
                symbolName: 'uno_btn3',
                autoPlay: {

               }
            },
            {
                id: 'uno_btn1',
                symbolName: 'uno_btn1',
                autoPlay: {

               }
            },
            {
                id: 'uno_btn2',
                symbolName: 'uno_btn2',
                autoPlay: {

               }
            },
            {
                id: 'uno_btn5',
                symbolName: 'uno_btn5',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_uno_btn1}": [
                ["style", "top", '14px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_btnuno}": [
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_uno_btn5}": [
                ["style", "top", '158px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px'],
                ["style", "cursor", 'pointer']
            ],
            "${_uno_btn3}": [
                ["style", "top", '86px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '80px']
            ],
            "${_uno_btn4}": [
                ["style", "top", '122px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px'],
                ["style", "cursor", 'pointer']
            ],
            "${_uno_btn2}": [
                ["style", "top", '50px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-44px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2667,
            autoPlay: true,
            labels: {
                "slideClose": 0,
                "slideOpen": 500,
                "slideStay": 1500,
                "slideGone": 2000
            },
            timeline: [
                { id: "eid152", tween: [ "style", "${_uno_btn2}", "top", '70px', { fromValue: '50px'}], position: 602, duration: 250, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_uno_btn2}", "top", '70px', { fromValue: '70px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid185", tween: [ "style", "${_uno_btn2}", "top", '70px', { fromValue: '70px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid209", tween: [ "style", "${_uno_btn2}", "top", '50px', { fromValue: '70px'}], position: 2302, duration: 250, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_uno_btn2}", "opacity", '1', { fromValue: '0'}], position: 602, duration: 250, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "style", "${_uno_btn2}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_uno_btn2}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_uno_btn2}", "opacity", '0', { fromValue: '1'}], position: 2302, duration: 250, easing: "easeOutQuad" },
                { id: "eid218", tween: [ "style", "${_uno_btn2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid223", tween: [ "style", "${_uno_btn2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_uno_btn5}", "opacity", '1', { fromValue: '0'}], position: 852, duration: 250, easing: "easeOutQuad" },
                { id: "eid182", tween: [ "style", "${_uno_btn5}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_uno_btn5}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid216", tween: [ "style", "${_uno_btn5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250, easing: "easeOutQuad" },
                { id: "eid221", tween: [ "style", "${_uno_btn5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "style", "${_uno_btn5}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_uno_btn1}", "top", '34px', { fromValue: '14px'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid173", tween: [ "style", "${_uno_btn1}", "top", '34px', { fromValue: '34px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid183", tween: [ "style", "${_uno_btn1}", "top", '34px', { fromValue: '34px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid210", tween: [ "style", "${_uno_btn1}", "top", '14px', { fromValue: '34px'}], position: 2417, duration: 250, easing: "easeOutQuad" },
                { id: "eid135", tween: [ "style", "${_uno_btn2}", "left", '-44px', { fromValue: '-44px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_uno_btn3}", "left", '-44px', { fromValue: '-44px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_uno_btn4}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "style", "${_uno_btn4}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid190", tween: [ "style", "${_uno_btn4}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid213", tween: [ "style", "${_uno_btn4}", "opacity", '0', { fromValue: '1'}], position: 2095, duration: 250, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_uno_btn3}", "top", '106px', { fromValue: '86px'}], position: 690, duration: 250, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "style", "${_uno_btn3}", "top", '106px', { fromValue: '106px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "style", "${_uno_btn3}", "top", '106px', { fromValue: '106px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_uno_btn3}", "top", '86px', { fromValue: '106px'}], position: 2207, duration: 250, easing: "easeOutQuad" },
                { id: "eid220", tween: [ "style", "${_uno_btn4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid225", tween: [ "style", "${_uno_btn4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_uno_btn5}", "top", '178px', { fromValue: '158px'}], position: 852, duration: 250, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_uno_btn5}", "top", '178px', { fromValue: '178px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid191", tween: [ "style", "${_uno_btn5}", "top", '178px', { fromValue: '178px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_uno_btn5}", "top", '158px', { fromValue: '178px'}], position: 2000, duration: 250, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "style", "${_uno_btn1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "style", "${_uno_btn1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid141", tween: [ "style", "${_uno_btn5}", "left", '-44px', { fromValue: '-44px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "style", "${_uno_btn4}", "top", '142px', { fromValue: '122px'}], position: 750, duration: 250, easing: "easeOutQuad" },
                { id: "eid179", tween: [ "style", "${_uno_btn4}", "top", '142px', { fromValue: '142px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid189", tween: [ "style", "${_uno_btn4}", "top", '142px', { fromValue: '142px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid208", tween: [ "style", "${_uno_btn4}", "top", '122px', { fromValue: '142px'}], position: 2095, duration: 250, easing: "easeOutQuad" },
                { id: "eid139", tween: [ "style", "${_uno_btn4}", "left", '-44px', { fromValue: '-44px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid219", tween: [ "style", "${_uno_btn3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_uno_btn3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_uno_btn1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid174", tween: [ "style", "${_uno_btn1}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "style", "${_uno_btn1}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_uno_btn1}", "opacity", '0', { fromValue: '1'}], position: 2417, duration: 250, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_uno_btn3}", "opacity", '1', { fromValue: '0'}], position: 690, duration: 250, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "style", "${_uno_btn3}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "style", "${_uno_btn3}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid212", tween: [ "style", "${_uno_btn3}", "opacity", '0', { fromValue: '1'}], position: 2207, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"botones_up": {
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
                    type: 'rect',
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '768px', '40px', 'auto', 'auto'],
                    fill: ['rgba(75,75,75,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1px', '0px', '767px', '18px', 'auto', 'auto'],
                    fill: ['rgba(40,40,40,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5Copy}": [
                ["color", "background-color", 'rgba(75,75,75,1.00)'],
                ["style", "height", '40px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '768px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '760px']
            ],
            "${_Rectangle8}": [
                ["style", "width", '767px']
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
"uno_btn1": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.8)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'neoprene',
                    align: 'left',
                    rect: ['42px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(255,255,255,0.80)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '42px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"uno_btn2": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.80)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'desnudo',
                    align: 'left',
                    rect: ['45px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle12',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text5}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '45px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(255,255,255,0.80)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Rectangle12}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"uno_btn3": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.80)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'forrado',
                    align: 'left',
                    rect: ['50px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['1px', '1px', '144px', '34px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle13',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle13}": [
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(255,255,255,0.80)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '50px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"uno_btn4": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.80)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'telefónico EKUA',
                    align: 'left',
                    rect: ['21px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle14',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle14}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(255,255,255,0.80)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '21px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"uno_btn5": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.80)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'timbre',
                    align: 'left',
                    rect: ['52px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '1px', '144px', '34px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle15',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '52px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(255,255,255,0.80)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Rectangle15}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"btnuno": {
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
                    font: ['Tahoma, Geneva, sans-serif', 20, 'rgba(242,242,242,1.00)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'alambres',
                    type: 'text',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['-40px', '1px', '138px', '31px', 'auto', 'auto'],
                    id: 'Rectangle10',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle10}": [
                ["style", "cursor", 'pointer'],
                ["style", "height", '31px'],
                ["style", "opacity", '0'],
                ["style", "left", '-40px'],
                ["style", "width", '138px']
            ],
            "${_Text}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(242,242,242,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '80px']
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
"botonCables": {
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
                    display: 'none',
                    type: 'rect',
                    id: 'dos_btn6',
                    rect: ['-45px', '213px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'dos_btn5',
                    rect: ['-45px', '177px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'dos_btn4',
                    rect: ['-45px', '141px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-45px', '105px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'dos_btn3'
                },
                {
                    rect: ['-45px', '69px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'dos_btn2'
                },
                {
                    rect: ['-45px', '33px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'dos_btn1'
                },
                {
                    id: 'btndos',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'dos_btn5',
                symbolName: 'dos_btn5',
                autoPlay: {

               }
            },
            {
                id: 'dos_btn3',
                symbolName: 'dos_btn3',
                autoPlay: {

               }
            },
            {
                id: 'dos_btn6',
                symbolName: 'dos_btn6',
                autoPlay: {

               }
            },
            {
                id: 'dos_btn2',
                symbolName: 'dos_btn2',
                autoPlay: {

               }
            },
            {
                id: 'btndos',
                symbolName: 'btndos',
                autoPlay: {

               }
            },
            {
                id: 'dos_btn1',
                symbolName: 'dos_btn1',
                autoPlay: {

               }
            },
            {
                id: 'dos_btn4',
                symbolName: 'dos_btn4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_dos_btn5}": [
                ["style", "top", '147px'],
                ["style", "opacity", '0'],
                ["style", "left", '-45px'],
                ["style", "display", 'none']
            ],
            "${_btndos}": [
                ["style", "cursor", 'pointer']
            ],
            "${_dos_btn2}": [
                ["style", "top", '39px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-45px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '55px']
            ],
            "${_dos_btn1}": [
                ["style", "top", '3px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-45px'],
                ["style", "cursor", 'pointer']
            ],
            "${_dos_btn3}": [
                ["style", "top", '75px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-45px'],
                ["style", "cursor", 'pointer']
            ],
            "${_dos_btn4}": [
                ["style", "top", '111px'],
                ["style", "opacity", '0'],
                ["style", "left", '-45px'],
                ["style", "display", 'none']
            ],
            "${_dos_btn6}": [
                ["style", "top", '183px'],
                ["style", "opacity", '0'],
                ["style", "left", '-45px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3375,
            autoPlay: true,
            labels: {
                "slideClose": 0,
                "slideOpen": 500,
                "slideStay": 1750,
                "slideGone": 2500
            },
            timeline: [
                { id: "eid255", tween: [ "style", "${_dos_btn4}", "opacity", '1', { fromValue: '0'}], position: 844, duration: 250, easing: "easeOutQuad" },
                { id: "eid263", tween: [ "style", "${_dos_btn4}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid275", tween: [ "style", "${_dos_btn4}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid291", tween: [ "style", "${_dos_btn4}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_dos_btn2}", "top", '69px', { fromValue: '39px'}], position: 630, duration: 250, easing: "easeOutQuad" },
                { id: "eid258", tween: [ "style", "${_dos_btn2}", "top", '69px', { fromValue: '69px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid270", tween: [ "style", "${_dos_btn2}", "top", '69px', { fromValue: '69px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid281", tween: [ "style", "${_dos_btn2}", "top", '39px', { fromValue: '69px'}], position: 3000, duration: 250, easing: "easeOutQuad" },
                { id: "eid297", tween: [ "style", "${_dos_btn1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid303", tween: [ "style", "${_dos_btn1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid296", tween: [ "style", "${_dos_btn2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid302", tween: [ "style", "${_dos_btn2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid247", tween: [ "style", "${_dos_btn2}", "opacity", '1', { fromValue: '0'}], position: 630, duration: 250, easing: "easeOutQuad" },
                { id: "eid259", tween: [ "style", "${_dos_btn2}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid271", tween: [ "style", "${_dos_btn2}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid287", tween: [ "style", "${_dos_btn2}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 250, easing: "easeOutQuad" },
                { id: "eid294", tween: [ "style", "${_dos_btn4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid300", tween: [ "style", "${_dos_btn4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_dos_btn6}", "opacity", '1', { fromValue: '0'}], position: 1094, duration: 250, easing: "easeOutQuad" },
                { id: "eid267", tween: [ "style", "${_dos_btn6}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid279", tween: [ "style", "${_dos_btn6}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid286", tween: [ "style", "${_dos_btn6}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 250, easing: "easeOutQuad" },
                { id: "eid253", tween: [ "style", "${_dos_btn5}", "opacity", '1', { fromValue: '0'}], position: 943, duration: 250, easing: "easeOutQuad" },
                { id: "eid265", tween: [ "style", "${_dos_btn5}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid277", tween: [ "style", "${_dos_btn5}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid290", tween: [ "style", "${_dos_btn5}", "opacity", '0', { fromValue: '1'}], position: 2625, duration: 250, easing: "easeOutQuad" },
                { id: "eid293", tween: [ "style", "${_dos_btn5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid299", tween: [ "style", "${_dos_btn5}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid295", tween: [ "style", "${_dos_btn3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid301", tween: [ "style", "${_dos_btn3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid292", tween: [ "style", "${_dos_btn6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid298", tween: [ "style", "${_dos_btn6}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid241", tween: [ "style", "${_dos_btn5}", "top", '177px', { fromValue: '147px'}], position: 943, duration: 250, easing: "easeOutQuad" },
                { id: "eid264", tween: [ "style", "${_dos_btn5}", "top", '177px', { fromValue: '177px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid276", tween: [ "style", "${_dos_btn5}", "top", '177px', { fromValue: '177px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid284", tween: [ "style", "${_dos_btn5}", "top", '147px', { fromValue: '177px'}], position: 2625, duration: 250, easing: "easeOutQuad" },
                { id: "eid239", tween: [ "style", "${_dos_btn3}", "top", '105px', { fromValue: '75px'}], position: 750, duration: 250, easing: "easeOutQuad" },
                { id: "eid260", tween: [ "style", "${_dos_btn3}", "top", '105px', { fromValue: '105px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid272", tween: [ "style", "${_dos_btn3}", "top", '105px', { fromValue: '105px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid283", tween: [ "style", "${_dos_btn3}", "top", '75px', { fromValue: '105px'}], position: 2875, duration: 250, easing: "easeOutQuad" },
                { id: "eid243", tween: [ "style", "${_dos_btn4}", "top", '141px', { fromValue: '111px'}], position: 844, duration: 250, easing: "easeOutQuad" },
                { id: "eid262", tween: [ "style", "${_dos_btn4}", "top", '141px', { fromValue: '141px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid274", tween: [ "style", "${_dos_btn4}", "top", '141px', { fromValue: '141px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid285", tween: [ "style", "${_dos_btn4}", "top", '111px', { fromValue: '141px'}], position: 2750, duration: 250, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "style", "${_dos_btn3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeOutQuad" },
                { id: "eid261", tween: [ "style", "${_dos_btn3}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid273", tween: [ "style", "${_dos_btn3}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid289", tween: [ "style", "${_dos_btn3}", "opacity", '0', { fromValue: '1'}], position: 2875, duration: 250, easing: "easeOutQuad" },
                { id: "eid249", tween: [ "style", "${_dos_btn1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid257", tween: [ "style", "${_dos_btn1}", "opacity", '1', { fromValue: '1'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid269", tween: [ "style", "${_dos_btn1}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid288", tween: [ "style", "${_dos_btn1}", "opacity", '0', { fromValue: '1'}], position: 3125, duration: 250, easing: "easeOutQuad" },
                { id: "eid233", tween: [ "style", "${_dos_btn6}", "top", '213px', { fromValue: '183px'}], position: 1094, duration: 250, easing: "easeOutQuad" },
                { id: "eid266", tween: [ "style", "${_dos_btn6}", "top", '213px', { fromValue: '213px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid278", tween: [ "style", "${_dos_btn6}", "top", '213px', { fromValue: '213px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid280", tween: [ "style", "${_dos_btn6}", "top", '183px', { fromValue: '213px'}], position: 2500, duration: 250, easing: "easeOutQuad" },
                { id: "eid237", tween: [ "style", "${_dos_btn1}", "top", '33px', { fromValue: '3px'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid256", tween: [ "style", "${_dos_btn1}", "top", '33px', { fromValue: '33px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid268", tween: [ "style", "${_dos_btn1}", "top", '33px', { fromValue: '33px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid282", tween: [ "style", "${_dos_btn1}", "top", '3px', { fromValue: '33px'}], position: 3125, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"dos_btn1": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'cable antena plano',
                    align: 'left',
                    rect: ['11px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '11px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"dos_btn2": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'cristal SPT',
                    align: 'left',
                    rect: ['40px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '40px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"dos_btn3": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'duplex SPT',
                    align: 'left',
                    rect: ['38px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '38px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"dos_btn4": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'encauchetado SJT',
                    align: 'left',
                    rect: ['15px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '15px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"dos_btn5": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'monopolar',
                    align: 'left',
                    rect: ['40px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '40px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"dos_btn6": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(0,122,195,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'polarizado STP',
                    align: 'left',
                    rect: ['26px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(0,122,195,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '26px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"btndos": {
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
                    font: ['Tahoma, Geneva, sans-serif', 20, 'rgba(242,242,242,1.00)', 'normal', 'none', ''],
                    id: 'TextCopy',
                    text: 'cables<br>',
                    type: 'text',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'Rectangle16',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    rect: ['-45px', '0px', '142px', '32px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle16}": [
                ["style", "opacity", '0']
            ],
            "${_TextCopy}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(242,242,242,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '55px']
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
"botonCorazas": {
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
                    rect: ['-30px', '83px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'tres_btn1_1'
                },
                {
                    rect: ['-30px', '32px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    cursor: ['pointer'],
                    id: 'tres_btn1'
                },
                {
                    id: 'btntres',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['11', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'tres_btn1',
                symbolName: 'tres_btn1',
                autoPlay: {

               }
            },
            {
                id: 'btntres',
                symbolName: 'btntres',
                autoPlay: {

               }
            },
            {
                id: 'tres_btn1_1',
                symbolName: 'tres_btn2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_tres_btn1_1}": [
                ["style", "top", '63px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-30px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btntres}": [
                ["style", "cursor", 'pointer']
            ],
            "${_tres_btn1}": [
                ["style", "top", '12px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-30px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2092,
            autoPlay: true,
            labels: {
                "slideClose": 0,
                "slideOpen": 500,
                "slideStay": 1250,
                "slideGone": 1750
            },
            timeline: [
                { id: "eid311", tween: [ "style", "${_tres_btn1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid315", tween: [ "style", "${_tres_btn1}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0, easing: "easeOutQuad" },
                { id: "eid319", tween: [ "style", "${_tres_btn1}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid325", tween: [ "style", "${_tres_btn1}", "opacity", '0', { fromValue: '1'}], position: 1842, duration: 250, easing: "easeOutQuad" },
                { id: "eid309", tween: [ "style", "${_tres_btn1_1}", "top", '83px', { fromValue: '63px'}], position: 608, duration: 250, easing: "easeOutQuad" },
                { id: "eid316", tween: [ "style", "${_tres_btn1_1}", "top", '83px', { fromValue: '83px'}], position: 1250, duration: 0, easing: "easeOutQuad" },
                { id: "eid320", tween: [ "style", "${_tres_btn1_1}", "top", '83px', { fromValue: '83px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid322", tween: [ "style", "${_tres_btn1_1}", "top", '53px', { fromValue: '83px'}], position: 1750, duration: 250, easing: "easeOutQuad" },
                { id: "eid313", tween: [ "style", "${_tres_btn1_1}", "opacity", '1', { fromValue: '0'}], position: 608, duration: 250, easing: "easeOutQuad" },
                { id: "eid317", tween: [ "style", "${_tres_btn1_1}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0, easing: "easeOutQuad" },
                { id: "eid321", tween: [ "style", "${_tres_btn1_1}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid324", tween: [ "style", "${_tres_btn1_1}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutQuad" },
                { id: "eid327", tween: [ "style", "${_tres_btn1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid329", tween: [ "style", "${_tres_btn1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid326", tween: [ "style", "${_tres_btn1_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid328", tween: [ "style", "${_tres_btn1_1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid307", tween: [ "style", "${_tres_btn1}", "top", '32px', { fromValue: '12px'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid314", tween: [ "style", "${_tres_btn1}", "top", '32px', { fromValue: '32px'}], position: 1250, duration: 0, easing: "easeOutQuad" },
                { id: "eid318", tween: [ "style", "${_tres_btn1}", "top", '32px', { fromValue: '32px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid323", tween: [ "style", "${_tres_btn1}", "top", '2px', { fromValue: '32px'}], position: 1842, duration: 250, easing: "easeOutQuad" }            ]
        }
    }
},
"botonExtensiones": {
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
                    rect: ['-13px', '177px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'cuatro_btn5',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['-13px', '141px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'cuatro_btn4',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['-13px', '105px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'cuatro_btn3',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['-13px', '69px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'cuatro_btn2',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['-13px', '33px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'cuatro_btn1',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    id: 'btncuatro',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btncuatro',
                symbolName: 'btncuatro',
                autoPlay: {

               }
            },
            {
                id: 'cuatro_btn2',
                symbolName: 'cuatro_btn2',
                autoPlay: {

               }
            },
            {
                id: 'cuatro_btn3',
                symbolName: 'cuatro_btn3',
                autoPlay: {

               }
            },
            {
                id: 'cuatro_btn5',
                symbolName: 'cuatro_btn5',
                autoPlay: {

               }
            },
            {
                id: 'cuatro_btn1',
                symbolName: 'cuatro_btn1',
                autoPlay: {

               }
            },
            {
                id: 'cuatro_btn4',
                symbolName: 'cuatro_btn4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cuatro_btn4}": [
                ["style", "top", '111px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-13px'],
                ["style", "cursor", 'pointer']
            ],
            "${_cuatro_btn3}": [
                ["style", "top", '75px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-13px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '106px']
            ],
            "${_cuatro_btn1}": [
                ["style", "top", '3px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-13px'],
                ["style", "cursor", 'pointer']
            ],
            "${_cuatro_btn5}": [
                ["style", "top", '147px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-13px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btncuatro}": [
                ["style", "cursor", 'pointer']
            ],
            "${_cuatro_btn2}": [
                ["style", "top", '39px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-13px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2408,
            autoPlay: true,
            labels: {
                "slideClose": 0,
                "slideOpen": 500,
                "slideStay": 1342,
                "slideGone": 1750
            },
            timeline: [
                { id: "eid339", tween: [ "style", "${_cuatro_btn4}", "top", '141px', { fromValue: '111px'}], position: 875, duration: 250, easing: "easeOutQuad" },
                { id: "eid356", tween: [ "style", "${_cuatro_btn4}", "top", '141px', { fromValue: '141px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid364", tween: [ "style", "${_cuatro_btn4}", "top", '111px', { fromValue: '141px'}], position: 1856, duration: 250, easing: "easeOutQuad" },
                { id: "eid341", tween: [ "style", "${_cuatro_btn3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeOutQuad" },
                { id: "eid355", tween: [ "style", "${_cuatro_btn3}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid365", tween: [ "style", "${_cuatro_btn3}", "opacity", '0', { fromValue: '1'}], position: 1949, duration: 250, easing: "easeOutQuad" },
                { id: "eid373", tween: [ "style", "${_cuatro_btn4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid378", tween: [ "style", "${_cuatro_btn4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid347", tween: [ "style", "${_cuatro_btn1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid351", tween: [ "style", "${_cuatro_btn1}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid368", tween: [ "style", "${_cuatro_btn1}", "opacity", '0', { fromValue: '1'}], position: 2158, duration: 250, easing: "easeOutQuad" },
                { id: "eid370", tween: [ "style", "${_cuatro_btn1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid375", tween: [ "style", "${_cuatro_btn1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid331", tween: [ "style", "${_cuatro_btn3}", "top", '105px', { fromValue: '75px'}], position: 750, duration: 250, easing: "easeOutQuad" },
                { id: "eid354", tween: [ "style", "${_cuatro_btn3}", "top", '105px', { fromValue: '105px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid360", tween: [ "style", "${_cuatro_btn3}", "top", '75px', { fromValue: '105px'}], position: 1949, duration: 250, easing: "easeOutQuad" },
                { id: "eid374", tween: [ "style", "${_cuatro_btn5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid379", tween: [ "style", "${_cuatro_btn5}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid335", tween: [ "style", "${_cuatro_btn2}", "top", '69px', { fromValue: '39px'}], position: 625, duration: 250, easing: "easeOutQuad" },
                { id: "eid352", tween: [ "style", "${_cuatro_btn2}", "top", '69px', { fromValue: '69px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid362", tween: [ "style", "${_cuatro_btn2}", "top", '39px', { fromValue: '69px'}], position: 2057, duration: 250, easing: "easeOutQuad" },
                { id: "eid349", tween: [ "style", "${_cuatro_btn4}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 250, easing: "easeOutQuad" },
                { id: "eid357", tween: [ "style", "${_cuatro_btn4}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid369", tween: [ "style", "${_cuatro_btn4}", "opacity", '0', { fromValue: '1'}], position: 1856, duration: 250, easing: "easeOutQuad" },
                { id: "eid337", tween: [ "style", "${_cuatro_btn1}", "top", '33px', { fromValue: '3px'}], position: 500, duration: 250, easing: "easeOutQuad" },
                { id: "eid350", tween: [ "style", "${_cuatro_btn1}", "top", '33px', { fromValue: '33px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid363", tween: [ "style", "${_cuatro_btn1}", "top", '3px', { fromValue: '33px'}], position: 2158, duration: 250, easing: "easeOutQuad" },
                { id: "eid333", tween: [ "style", "${_cuatro_btn5}", "top", '177px', { fromValue: '147px'}], position: 1000, duration: 250, easing: "easeOutQuad" },
                { id: "eid358", tween: [ "style", "${_cuatro_btn5}", "top", '177px', { fromValue: '177px'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid361", tween: [ "style", "${_cuatro_btn5}", "top", '147px', { fromValue: '177px'}], position: 1750, duration: 250, easing: "easeOutQuad" },
                { id: "eid345", tween: [ "style", "${_cuatro_btn2}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 250, easing: "easeOutQuad" },
                { id: "eid353", tween: [ "style", "${_cuatro_btn2}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid367", tween: [ "style", "${_cuatro_btn2}", "opacity", '0', { fromValue: '1'}], position: 2057, duration: 250, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_cuatro_btn5}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeOutQuad" },
                { id: "eid359", tween: [ "style", "${_cuatro_btn5}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeOutQuad" },
                { id: "eid366", tween: [ "style", "${_cuatro_btn5}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutQuad" },
                { id: "eid371", tween: [ "style", "${_cuatro_btn2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid376", tween: [ "style", "${_cuatro_btn2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid372", tween: [ "style", "${_cuatro_btn3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid377", tween: [ "style", "${_cuatro_btn3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"tres_btn1": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '49px', 'auto', 'auto'],
                    fill: ['rgba(188,188,188,0.64)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'accesorios coraza<br> Liquid Tight',
                    align: 'left',
                    rect: ['11px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '49px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "height", '49px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(188,188,188,0.64)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '49px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '11px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"tres_btn2": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '47px', 'auto', 'auto'],
                    fill: ['rgba(188,188,188,0.64)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'coraza Americana<br> Liquid tight',
                    align: 'left',
                    rect: ['11px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '47px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "height", '47px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(188,188,188,0.64)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '11px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"cuatro_btn1": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(144,188,56,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'duplex spt 2x16',
                    align: 'left',
                    rect: ['22px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(144,188,56,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '22px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"cuatro_btn2": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(144,188,56,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'grabadora',
                    align: 'left',
                    rect: ['41px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(144,188,56,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '41px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"cuatro_btn3": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(144,188,56,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'plancha',
                    align: 'left',
                    rect: ['49px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(144,188,56,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '49px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"cuatro_btn4": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(144,188,56,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'polo sjt 3x16',
                    align: 'left',
                    rect: ['32px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(144,188,56,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '34px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '9px'],
                ["style", "left", '32px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"cuatro_btn5": {
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
                    type: 'rect',
                    id: 'Rectangle9',
                    stroke: [1, 'rgba(0,122,195,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '34px', 'auto', 'auto'],
                    fill: ['rgba(144,188,56,1.00)']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 15, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'Set',
                    align: 'left',
                    rect: ['64px', '9px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['1px', '0px', '144px', '34px', 'auto', 'auto'],
                    id: 'Rectangle11',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle11}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(144,188,56,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(0,122,195,1.00)'],
                ["style", "height", '34px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text5}": [
                ["style", "top", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '64px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '146px']
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
"btntres": {
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
                    font: ['Tahoma, Geneva, sans-serif', 20, 'rgba(242,242,242,1.00)', 'normal', 'none', ''],
                    id: 'TextCopy2',
                    text: 'corazas',
                    type: 'text',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-39px', '1px', '144px', '30px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle17',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle17}": [
                ["style", "opacity", '0']
            ],
            "${_TextCopy2}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(242,242,242,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '65px']
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
"btncuatro": {
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
                    font: ['Tahoma, Geneva, sans-serif', 20, 'rgba(242,242,242,1.00)', 'normal', 'none', ''],
                    id: 'TextCopy3',
                    text: 'extensiones',
                    type: 'text',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-11px', '0px', '142px', '31px', 'auto', 'auto'],
                    opacity: 0,
                    id: 'Rectangle18',
                    stroke: [1, 'rgb(0, 122, 195)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.8)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(242,242,242,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '106px']
            ],
            "${_Rectangle18}": [
                ["style", "opacity", '0']
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
