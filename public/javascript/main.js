/* global require, console */

/* G. Hemingway Copyright @2014
 * Primary RequireJS entry point
 */

"use strict";


/*************************************************************************/

require.config({
    paths: {
        jquery:             'libs/jquery.min',
        jqueryui:           'libs/jquery-ui.min',
        jstree:             'libs/jstree.min',
        underscore:         'libs/underscore-min',
        THREE:              'libs/three.min',
        TrackballControls:  'libs/TrackballControls',
        dat:                'libs/dat.gui.min',
        VIS:                'libs/visualize',
        Velvety:            'shaders/VelvetyShader'
    },
    shim: {
        jquery: {
            exports: "$"
        },
        jqueryui: {
            deps: ['jquery']
        },
        jstree: {
            deps: ["jquery","jqueryui"]
        },
        underscore: {
            exports: "_"
        },
        THREE: {
            exports: "THREE"
        },
        TrackballControls: {
            deps: ["THREE"]
        },
        dat: {
            exports: "dat"
        },
        VIS: {
            exports: "VIS",
            deps: ["jquery","jqueryui"]
        },
        viewer: {
            deps: [
                'libs/threejs/EffectComposer',
                'libs/threejs/CopyShader',
                'libs/threejs/FXAAShader',
                'libs/threejs/SSAOShader',
                'libs/threejs/RenderPass',
                'libs/threejs/ShaderPass',
                'libs/threejs/MaskPass'
            ]
        },
        'libs/threejs/EffectComposer': {
            deps: ['THREE']
        },
        'libs/threejs/CopyShader': {
            deps: ['THREE']
        },
        'libs/threejs/FXAAShader': {
            deps: ['THREE']
        },
        'libs/threejs/SSAOShader': {
            deps: ['THREE']
        },
        'libs/threejs/RenderPass': {
            deps: ['THREE']
        },
        'libs/threejs/ShaderPass': {
            deps: ['THREE', 'libs/threejs/RenderPass']
        },
        'libs/threejs/MaskPass': {
            deps: ['THREE']
        }
    }
});

/*
  Primary application entry point
 */
requirejs(["cad", "jquery", "THREE", "VIS"], function(CADjs, $, THREE, VIS) {
    $(VIS).on("ready", function(){
        var cad = window.cadjs = new CADjs({
            viewContainerId: "steptools-view",
            compassContainerId: "steptools-compass",
            downloadsContainerId: "steptools-downloads",
            treeContainerSelector: ".steptools-tree",

            isCompact: VIS.getParameter( "compact" ) === "true",
            theme: VIS.getParameter( "theme" )
        });

        cad.setupPage();

        // What resource do we want to load
        cad.load( VIS.getResourceUrl() );
    });

    VIS.init();
});
