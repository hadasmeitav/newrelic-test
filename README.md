# newrelic-test

We used : https://discuss.newrelic.com/t/relic-solution-webpack-workaround-via-externals-and-instrumentloadedmodule/79459 exactly as it written, and created a new project.

1. Created package.json with all the dependencies
2. Created index.js file as specified in the link above
3. Created app.js file as specified in the link above
4. Created webpack.config.js as specified in the link above

Afterwards, i run `tsc -p tsconfig.build.json && yarn run webpack`.
The file `dist/release.js` was created. (we're building the release in dist folder, this is the same as `bundle.js` in the sample)

Then, we run `node ./dist/release.js` and receive this error : 

```
newrelic-sample git:(master) ✗ node ./dist/release.js                            /Users/hadas/Workspaces/newrelic-sample/dist/release.js:159
 */e.exports=function(e,a){if(!e)throw new TypeError("req argument is required");if(!a)throw new TypeError("trust argument is required");var i=p(e,a);return i[i.length-1]},e.exports.all=p,e.exports.compile=l;var n=i(115),t=i(116),o=/^[0-9]+$/,s=t.isValid,r=t.parse,c={linklocal:["169.254.0.0/16","fe80::/10"],loopback:["127.0.0.1/8","::1/128"],uniquelocal:["10.0.0.0/8","172.16.0.0/12","192.168.0.0/16","fc00::/7"]};function p(e,a){var i=n(e);if(!a)return i;"function"!=typeof a&&(a=l(a));for(var t=0;t<i.length-1;t++)a(i[t],t)||(i.length=t+1);return i}function l(e){if(!e)throw new TypeError("argument is required");var a;if("string"==typeof e)a=[e];else{if(!Array.isArray(e))throw new TypeError("unsupported trust argument");a=e.slice()}for(var i=0;i<a.length;i++)e=a[i],Object.prototype.hasOwnProperty.call(c,e)&&(e=c[e],a.splice.apply(a,[i,1].concat(e)),i+=e.length-1);return function(e){var a=e.length;return 0===a?d:1===a?(n=e[0],t=n[0],o=t.kind(),c="ipv4"

ReferenceError: newrelic is not defined
    at Object.<anonymous> (/Users/hadas/Workspaces/newrelic-sample/dist/release.js:159:2095)
    at i (/Users/hadas/Workspaces/newrelic-sample/dist/release.js:1:172)
    at /Users/hadas/Workspaces/newrelic-sample/dist/release.js:1:964
    at Object.<anonymous> (/Users/hadas/Workspaces/newrelic-sample/dist/release.js:1:974)
    at Module._compile (internal/modules/cjs/loader.js:736:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:747:10)
    at Module.load (internal/modules/cjs/loader.js:628:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:568:12)
    at Function.Module._load (internal/modules/cjs/loader.js:560:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:801:12)
```
