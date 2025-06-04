html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>bz bk</title>
    <link rel="icon" type="image/x-icon" href="res/favicon.ico">
    
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    
    <meta name="renderer" content="webkit">
    <meta name="force-rendering" content="webkit">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="msapplication-tap-highlight" content="no">

    <meta name="full-screen" content="yes">
    <meta name="x5-fullscreen" content="true">
    <meta name="360-fullscreen" content="true">
    
    <meta name="browsermode" content="application">
    <meta name="x5-page-mode" content="app">

    <style>
        html {
            -ms-touch-action: none;
        }
        body, canvas, div {
            margin: 0;
            padding: 0;
            outline: none;
            user-select: none;
-webkit-tap-highlight-color: transparent;
        }
        body {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #888;
            background-color: #333;
            text-align: center;
            font-family: Helvetica, Verdana, Arial, sans-serif;
            display: flex;
            flex-direction: column;
        }
        #cocos2dgamecontainer {
            position: absolute;
            margin: 0;
            overflow: hidden;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        canvas {
            background-color: transparent;
        }
    </style>
</head>
<body>
    <script src="res/loading.js"></script>
    <script src="cocos2d-js-min.js"></script>
    <script cocos src="main.js"></script>
    <canvas id="gamecanvas" width="480" height="720"></canvas>
</body>
</html>
