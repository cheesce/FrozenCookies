// Global Variables
var scriptElement = document.getElementById('frozenCookieScript') !== null ?
    document.getElementById('frozenCookieScript') :
    document.getElementById('modscript_frozen_cookies');
var baseUrl = scriptElement !== null ?
    scriptElement.getAttribute('src').replace(/\/frozen_cookies\.js$/, '') :
    'https://rawgit.com/kisslab69/FrozenCookies/master';
var FrozenCookies = {
    'baseUrl': baseUrl,
    'branch': '',
    'version': '1.7.1'
};

// Load external libraries
var script_list = [
    FrozenCookies.baseUrl + '/cc_upgrade_prerequisites.js',
    FrozenCookies.baseUrl + '/fc_button.js',
	FrozenCookies.baseUrl + '/fc_main.js'  
]

FrozenCookies.loadInterval = setInterval(function() {
    if (Game && Game.ready) {
        clearInterval(FrozenCookies.loadInterval);
        FrozenCookies.loadInterval = 0;
        fcInit();
    }
}, 1000);

function loadScript(id) {
    if (id >= script_list.length) {
        FCStart();
    } else {
        var url = script_list[id];
        if (/\.js$/.exec(url)) {
            $.getScript(url, function() {
                loadScript(id + 1);
            });
        } else if (/\.css$/.exec(url)) {
            $('<link>').attr({
                rel: 'stylesheet',
                type: 'text/css',
                href: url
            }).appendTo($('head'));
            loadScript(id + 1);
        } else {
            console.log('Error loading script: ' + url);
            loadScript(id + 1);
        }
    }
}

function fcInit() {
    var jquery = document.createElement('script');
    jquery.setAttribute('type', 'text/javascript');
    jquery.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    jquery.onload = function() {
        loadScript(0);
    };
    document.head.appendChild(jquery);
}
