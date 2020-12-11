var ui = ui || {};

(function() {
    /* Helper for UI ***************************************************/
    ui.toggleSideBar = function() {
        $('#sidebar, #content').toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }

    ui.calcHeight = function() {
        let h = window.innerHeight;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `.wrapper { min-height: ${h}px; }`;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
})();
