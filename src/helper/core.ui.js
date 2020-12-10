var ui = ui || {};

(function() {
    /* Helper for UI ***************************************************/
    ui.toggleSideBar = function() {
        $('#sidebar, #content').toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }

})();
