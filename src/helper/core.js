var core = core || {};

(function() {
    /* UTILS ***************************************************/

    core.utils = core.utils || {};

    core.utils.getCookieValue = function(key) {
        var equalities = document.cookie.split('; ');
        for (var i = 0; i < equalities.length; i++) {
            if (!equalities[i]) {
                continue;
            }

            var splitted = equalities[i].split('=');
            if (splitted.length != 2) {
                continue;
            }

            if (decodeURIComponent(splitted[0]) === key) {
                return decodeURIComponent(splitted[1] || '');
            }
        }

        return null;
    }

    core.utils.setCookieValue = function (key, value, expireDate, path, domain) {
        var cookieValue = encodeURIComponent(key) + '=';

        if (value) {
            cookieValue = cookieValue + encodeURIComponent(value);
        }

        if (expireDate) {
            cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
        }

        if (path) {
            cookieValue = cookieValue + "; path=" + path;
        }

        if (domain) {
            cookieValue = cookieValue + "; domain=" + domain;
        }

        document.cookie = cookieValue;
    }

    /* AUTHORIZATION **********************************************/
    core.auth = core.auth || {};
    core.auth.getToken = function(tokenKey) {
        return core.utils.getCookieValue(tokenKey);
    }

    core.auth.setToken = function(tokenKey, authToken, expireDate, appPath, domain) {
        return core.utils.setCookieValue(tokenKey, authToken, expireDate, appPath, domain);
    }

})();
