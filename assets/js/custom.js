window._vwo_code || (function () {
            var account_id = 813416,
                version = 2.0,
                settings_tolerance = 2000,
                hide_element = 'body',
                hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
                f = false, w = window, d = document,
                v = d.querySelector('#vwoCode'),
                cK = '_vwo_' + account_id + '_settings',
                cc = {};
            try {
                var c = JSON.parse(localStorage.getItem('_vwo_' + account_id + '_config'));
                cc = c && typeof c === 'object' ? c : {};
            } catch (e) { }
            var stT = cc.stT === 'session' ? w.sessionStorage : w.localStorage;
            var code = {
                use_existing_jquery: function () { return typeof use_existing_jquery !== 'undefined' ? use_existing_jquery : undefined },
                library_tolerance: function () { return typeof library_tolerance !== 'undefined' ? library_tolerance : undefined },
                settings_tolerance: function () { return cc.sT || settings_tolerance },
                hide_element_style: function () { return '{' + (cc.hES || hide_element_style) + '}' },
                hide_element: function () { return typeof cc.hE === 'string' ? cc.hE : hide_element },
                getVersion: function () { return version },
                finish: function () { if (!f) { f = true; var e = d.getElementById('_vis_opt_path_hides'); if (e) e.parentNode.removeChild(e); } },
                finished: function () { return f },
                load: function (e) { var t = this.getSettings(), n = d.createElement('script'), i = this; if (t) { n.textContent = t; d.getElementsByTagName('head')[0].appendChild(n); if (!w.VWO || VWO.caE) { stT.removeItem(cK); i.load(e); } } else { n.fetchPriority = 'high'; n.src = e; n.type = 'text/javascript'; n.onerror = function () { _vwo_code.finish(); }; d.getElementsByTagName('head')[0].appendChild(n); } },
                getSettings: function () { try { var e = stT.getItem(cK); if (!e) { return } e = JSON.parse(e); if (Date.now() > e.e) { stT.removeItem(cK); return } return e.s; } catch (e) { return } },
                init: function () { if (d.URL.indexOf('__vwo_disable__') > -1) return; var e = this.settings_tolerance(); w._vwo_settings_timer = setTimeout(function () { _vwo_code.finish(); stT.removeItem(cK); }, e); var t = d.currentScript, n = d.createElement('style'), i = this.hide_element(), r = t && !t.async && i ? i + this.hide_element_style() : '', c = d.getElementsByTagName('head')[0]; n.setAttribute('id', '_vis_opt_path_hides'); v && n.setAttribute('nonce', v.nonce); n.setAttribute('type', 'text/css'); if (n.styleSheet) n.styleSheet.cssText = r; else n.appendChild(d.createTextNode(r)); c.appendChild(n); this.load('https://dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&vn=' + version); }
            };
            w._vwo_code = code;
            code.init();
        })();
(function (o, c) {
            var n = c.documentElement;
            n.className += " w-mod-js";
            if ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) {
                n.className += " w-mod-touch";
            }
        })(window, document);

(function (c, a) {
            if (!a.__SV) {
                var b = window;
                try {
                    var d, m, j, k = b.location, f = k.hash;
                    d = function (a, b) { return (m = a.match(RegExp(b + "=([^&]*)"))) ? m[1] : null };
                    f && d(f, "state") && (j = JSON.parse(decodeURIComponent(d(f, "state"))), "mpeditor" === j.action && (b.sessionStorage.setItem("_mpcehash", f), history.replaceState(j.desiredHash || "", c.title, k.pathname + k.search)));
                } catch (n) { }
                var l, h;
                window.mixpanel = a;
                a._i = [];
                a.init = function (b, d, g) {
                    function c(b, i) {
                        var a = i.split(".");
                        2 == a.length && (b = b[a[0]], i = a[1]);
                        b[i] = function () { b.push([i].concat(Array.prototype.slice.call(arguments, 0))); }
                    }
                    var e = a;
                    "undefined" !== typeof g ? e = a[g] = [] : g = "mixpanel";
                    e.people = e.people || [];
                    e.toString = function (b) {
                        var a = "mixpanel";
                        "mixpanel" !== g && (a += "." + g);
                        b || (a += " (stub)");
                        return a;
                    };
                    e.people.toString = function () { return e.toString(1) + ".people (stub)" };
                    l = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                    for (h = 0; h < l.length; h++) c(e, l[h]);
                    var f = "set set_once union unset remove delete".split(" ");
                    e.get_group = function () {
                        function a(c) {
                            b[c] = function () {
                                var call2_args = arguments;
                                var call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
                                e.push([d, call2]);
                            }
                        }
                        for (var b = {}, d = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < f.length; c++) a(f[c]);
                        return b;
                    };
                    a._i.push([b, d, g]);
                };
                a.__SV = 1.2;
                b = c.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
                d = c.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(b, d);
            }
        })(document, window.mixpanel || []);
        mixpanel.init("5e474d63d8b59659f6591eadf8f3ad85", {
            loaded: function (mixpanel) {
                setTimeout(function () {
                    if (document.getElementById("mixpanel_did") != null) {
                        document.getElementById("mixpanel_did").value = mixpanel.get_distinct_id();
                    }
                }, 3000);
            }
        });
        var getStringWithParams = window.location.href.split('?')[1].split('#')[0].split('&');
        var paramsArray = [];
        getStringWithParams.forEach(function (elem) {
            let temp = elem.split('=');
            paramsArray[temp[0]] = temp[1];
        });
        var pageviewLabel = 'Pageview-OricleHearing';
        var mixpanelParamObject = {
            'funnel': 'hear',
            'page': 'Lander',
            'slug': window.location.href.split('/')[3].split('?')[0],
            'step': 1,
            'afid': paramsArray['AFID'],
            'affid': paramsArray['affid'],
            'prk': paramsArray['prk'],
            'chk': paramsArray['chk'],
            'expi_id': paramsArray['expi_id'],
            'ad_id': paramsArray['ad_id'],
            'adset_id': paramsArray['adset_id'],
            'campaignname': paramsArray['campaignname'],
            'ad_name': paramsArray['ad_name'],
            'oid': paramsArray['oid'],
            'affid': paramsArray['affid'],
            'adset_name': paramsArray['adset_name']
        };
        mixpanel.track(pageviewLabel, mixpanelParamObject);

document.addEventListener('DOMContentLoaded', function () {
            function getQueryString() { return window.location.search; }
            var links = document.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                var link = links[i];
                var queryString = getQueryString();
                if (link.href.includes('?')) {
                    link.href += '&' + queryString.substring(1);
                } else {
                    link.href += queryString;
                }
            }
        });


        var fluxDefaults = { p: "2GF0QLjNF5Wk", f: "1wPSzetrKoWm" };
!function (f, l, u, x, j, s, a, b) {
            window.flux || (j = typeof fluxOptions !== "undefined" ? fluxOptions : {},
                s = typeof fluxDefaults !== "undefined" ? fluxDefaults : {},
                (a = l.createElement("script")).src = "https://" + u + "/integration/lumetricv2.min.js?v=" + x,
                a.type = "text/javascript", a.async = true, queue = [],
                window.flux = { track: function () { queue.push(arguments); } },
                a.onload = a.onreadystatechange = function () {
                    var rs = this.readyState;
                    if (!rs || "complete" == rs || "loaded" == rs)
                        try {
                            for (window.flux = new Lumetric(u, x, j, s); 0 != queue.length;)
                                window.flux.track.apply(null, queue.pop());
                        } catch (e) { }
                },
                (b = document.getElementsByTagName("script")[0]).parentNode.insertBefore(a, b))
}(window, document, "go.oriclehearing.com", "3.2.0");
        
flux.track("view");

jQuery(document).ready(function () {
                                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                                    var newDate = new Date();
                                    newDate.setDate(newDate.getDate());
                                    jQuery('#Date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
                                }); 

jQuery(document).ready(function () {
                                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                                    var newDate = new Date();
                                    newDate.setDate(newDate.getDate());
                                    jQuery('#update_date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
                                }); 
                                
EF.configure({ tld: "oriclehearing.com" });
        EF.click({
            offer_id: EF.urlParameter('oid'),
            affiliate_id: EF.urlParameter('affid'),
            sub1: EF.urlParameter('sub1'),
            sub2: EF.urlParameter('sub2'),
            sub3: EF.urlParameter('sub3'),
            sub4: EF.urlParameter('sub4'),
            sub5: EF.urlParameter('sub5'),
            uid: EF.urlParameter('uid'),
            source_id: EF.urlParameter('source_id'),
            transaction_id: EF.urlParameter('_ef_transaction_id')
        });

        