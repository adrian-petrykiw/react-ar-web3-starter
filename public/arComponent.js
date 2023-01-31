// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import {namedWayspotComponent} from './named-wayspot'
AFRAME.registerComponent('named-wayspot', namedWayspotComponent)

import {playVpsAnimationComponent} from './vps-animation'
AFRAME.registerComponent('play-vps-animation', playVpsAnimationComponent)

import {shadowShaderComponent} from './shadow-shader'
AFRAME.registerComponent('shadow-shader', shadowShaderComponent)

import {desktopDevelopmentComponent} from './desktop-development'
AFRAME.registerComponent('desktop-development', desktopDevelopmentComponent)

// Check Location Permissions at beginning of session
const errorCallback = (error) => {
  if (error.code === error.PERMISSION_DENIED) {
    alert('LOCATION PERMISSIONS DENIED. PLEASE ALLOW AND TRY AGAIN.')
  }
}
navigator.geolocation.getCurrentPosition((pos) => {}, errorCallback)