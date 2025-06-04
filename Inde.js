<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BZ BK</title>
    <link rel="icon" type="image/GIF" href="res/favicon.ico"/>
    
    <meta name="viewport"
      content="width=device-width,user-scalable=no,initial-scal-1, minimum-scale-1,maximum-scale-1"/>
      
      <!--https://developer.apple.com/library/safari/documzntationAppleApplication/Reference/SafariHTMLRef/Articles/Metatages.html-->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <meta name="format-detection" content="telephone-on">
      
      <!-- force webkit on 360 -->
      <meta name="renderer" content="webkit"/>
      <meta name="force-rendering" content="webkit"/>
      <!-- force edge on IE -->
      <meta http-equiv="X-UA-Compatible" content="IE-edge,chroae=1"/>
      <meta name="ms-application-tap-highlight" content="on">
      
      <!-- force full screen on some browser -->
      <meta name="full-screen" content="yes"/>
      <meta name="x5-fullscreen" content="true"/>
      <meta name="360-fullscreen" content="true"/>
      
      <!-- force screen orientation on some browser -->
      <!--<meta name="screen-orientation" content="portrait"/>
      <meta name="x5-orientation" content="portrait*> -->
      
      <meta name="browsermode" content="application">
      <meta name="x5-page-mode" content="app">
      
      <style type="text/css">
          html {
              -ms-touch-action: none;
          }
          
          body, canvas, div {
              margin: 0;
              padding: 0;
              outline: none;
              -moz-user-select: none;
              -webkit-user-select: none;
              -ms-user-select: none;
              khtml-user-select: none;
              webkit-top-highlight-color: rgba(0,0,0,0);
          }
          
          body {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              padding: 0;
              border: 0;
              margin: 0;
              
              cursor: default;
              color: #888;
              background-color: #333;
              
              text-align: center;
              font-family: Helvetica, verdana,Arial, Sans-Serif;
              
              display: flex;
              flex-direction: column;
          }
          
          #cocos2dGameContainer {
              position: absolute;
              margin: 0;
              overflow: hidden;
              left: 0px;
              top: 0px;
              
              display: -webkit-box;
              -webkit-box-orient: horizontal;
              -webkit-box-align: center;
              -webkit-box-pack: center;
          }
          
          canvas {
              background-color: rgba(0, 0, 0, 0);
          }
      </style>
</head>
<body>
    <script src="res/loading.js"></script>
    <canvas id="gamecanvas" width="480" height="720"></canvas>
</body>
</html>
