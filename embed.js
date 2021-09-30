(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/DiscordBotMaker/",
    "verprefix": "",
    "workerjs": "/DiscordBotMaker/worker.js",
    "monacoworkerjs": "/DiscordBotMaker/monacoworker.js",
    "gifworkerjs": "/DiscordBotMaker/gifjs/gif.worker.js",
    "serviceworkerjs": "/DiscordBotMaker/serviceworker.js",
    "pxtVersion": "6.4.30",
    "pxtRelId": "",
    "pxtCdnUrl": "/DiscordBotMaker/",
    "commitCdnUrl": "/DiscordBotMaker/",
    "blobCdnUrl": "/DiscordBotMaker/",
    "cdnUrl": "/DiscordBotMaker/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "sample",
    "simUrl": "/DiscordBotMaker/simulator.html",
    "simserviceworkerUrl": "/DiscordBotMaker/simulatorserviceworker.js",
    "simworkerconfigUrl": "/DiscordBotMaker/workerConfig.js",
    "partsUrl": "/DiscordBotMaker/siminstructions.html",
    "runUrl": "/DiscordBotMaker/run.html",
    "docsUrl": "/DiscordBotMaker/docs.html",
    "multiUrl": "/DiscordBotMaker/multi.html",
    "asseteditorUrl": "/DiscordBotMaker/asseteditor.html",
    "isStatic": true
};

    var scripts = [
        "/DiscordBotMaker/highlight.js/highlight.pack.js",
        "/DiscordBotMaker/bluebird.min.js",
        "/DiscordBotMaker/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/DiscordBotMaker/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/DiscordBotMaker/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/DiscordBotMaker/target.js");
    scripts.push("/DiscordBotMaker/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
