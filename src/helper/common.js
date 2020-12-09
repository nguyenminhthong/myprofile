initScript = function() {
    let script = [
        "/assets/lib/core.js",
        "/assets/lib/core.ui.js",
        "/assets/lib/helper.js",
        "/assets/lib/script.js",
    ];

    script.forEach(element => {
        var script=document.createElement('script');
        script.type="text/javascript";
        script.src=element;
        document.getElementsByTagName("head")[0].appendChild(script);
    });
};
