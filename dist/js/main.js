!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(6)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\n.container {\r\n    margin: auto;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    font-size: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-family: 'Helvetica', sans-serif;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n    color: #655A56;\r\n}\r\n\r\n.inputs-wrapper {\r\n    -webkit-box-shadow: 5px 5px 15px 5px #000000;\r\n    box-shadow: 5px 5px 15px 5px #000000;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n\r\n/* INPUTS - TOP SECTION */\r\n#inputs {\r\n    padding: 10px 0 0 0px;\r\n    font-size: 1vw;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n    width: 100%;\r\n    min-height: inherit;\r\n    color: #655A56;\r\n    text-align: center;\r\n    background-image: linear-gradient(to left bottom, #11998e, #38ef7d);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nh4.inputs-title {\r\n    padding-top: 10px;\r\n}\r\n\r\n#inputs td {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n#inputs.col-6 {\r\n    text-align: center;\r\n}\r\n\r\ntd input[type='number'] {\r\n    width: 70%;\r\n}\r\n\r\ndiv.table-headers {\r\n    padding-top: 5%;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\ndiv.col-1 {\r\n    border: 1px solid #655A56;\r\n    text-align: center;\r\n    font-size: 1.2vw;\r\n    padding: 0;\r\n}\r\n\r\n#data {\r\n    font-size: 1vw;\r\n    position: static;\r\n    /*    padding: 24% 0;*/\r\n    width: 100%;\r\n    color: #655A56;\r\n    text-align: center;\r\n    background-image: linear-gradient(to left top, #11998e, #38ef7d);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\ninput[type='number'] {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 1.2vw;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.input-headers {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ndiv.text-label {\r\n    vertical-align: middle;\r\n\r\n}\r\n\r\n.add-week-btn {\r\n    margin: 10px 0px 10px;\r\n    color: #655A56;\r\n    font-weight: 500;\r\n    padding: 15px 30px;\r\n    border-radius: 5px;\r\n    background-color: greenyellow;\r\n    border: 0px;\r\n    box-shadow: 1px 1px 10px black;\r\n}\r\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,d=[],u=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function v(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,n);n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),v(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var a=c++;n=l||(l=h(t)),r=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),v(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&p(f(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var m,k=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function w(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);n(1);const r={inputs:document.querySelector("#inputs-table"),startDate:document.querySelector(".date-initial-input"),startWeight:document.querySelector(".weight-initial-input"),weightGoal:document.querySelector(".goal-initial-input"),weeklyLoss:document.querySelector(".loss-initial-input"),currentDate:document.querySelector(".date-current-input"),weeksNeeded:document.querySelector(".weeks-needed"),kcalNeeded:document.querySelector(".daily-kcal-needed"),currentTDEE:document.querySelector(".current-TDEE"),totalKcalDay:document.querySelector(".total-kcal-day"),avgWeight:document.querySelector(".avg-weight"),totalLoss:document.querySelector(".total-loss"),weeksTable:document.querySelector(".weeks-table"),addWeekBtn:document.querySelector(".add-week-btn"),kgCells:document.querySelectorAll(".kg"),kcalCells:document.querySelectorAll(".kcal")};class i{constructor(e){this.startDate=e.startDate,this.startWeight=e.startWeight,this.weightGoal=e.weightGoal,this.weeklyLoss=e.weeklyLoss,this.TDEE=33*e.startWeight,this.avgWeight=e.startWeight}weeksNeeded(){if(this.weeklyLoss){const e=this.avgWeight-this.weightGoal;return this.weeksNeeded=e/this.weeklyLoss,this.weeksNeeded}}caloriesDeficitNeeded(){const e=7700*(this.avgWeight-this.weightGoal);return this.dailyKcalDeficit=e/this.weeksNeeded/7,this.dailyKcalDeficit}totalLoss(){return this.totalLoss=this.startWeight-this.avgWeight,this.totalLoss}totalCaloriesNeeded(){return this.totalTDEE=this.TDEE-this.dailyKcalDeficit,this.totalTDEE}}class o{constructor(e,t){this.weekNo=t,this.cells=e}getAvgKg(){let e=0;this.cells.kg.forEach(t=>e+=t),console.log(this.cells.kg);let t=e/this.cells.kg.length;return this.avgKg=t,this.avgKg}getAvgKcal(){let e=0;this.cells.kcal.forEach(t=>e+=t);let t=e/this.cells.kcal.length;return this.avgKcal=t,this.avgKcal}calcChange(e){return this.weeklyLoss=this.avgKg-e,this.weeklyLoss}}const a=(e,t)=>{let n,r,i,o,a,s;return r=(n=new Date(e)).getDate(),i=n.getMonth(),o=n.getYear()+1900,(s=new Date(o,i,r+(a=7*t-7))).toDateString().slice(4)},s={weekNo:0};window.addEventListener("load",()=>{console.log("on load listener");const e=(()=>{const e=new Date,t=e.getDate(),n=e.getMonth()+1;return`${e.getFullYear()}-${n<10?"0"+n:n}-${t<10?"0"+t:t}`})();r.currentDate.value=e,0===s.weekNo&&(r.startDate.value=e)}),r.inputs.addEventListener("change",e=>{l()});const l=()=>{const e={startDate:r.startDate.value,startWeight:r.startWeight.value,weightGoal:r.weightGoal.value,weeklyLoss:r.weeklyLoss.value};s.inputs=new i(e),(e=>{if(e){const t=Math.ceil(e);r.weeksNeeded.value=t}})(s.inputs.weeksNeeded()),(e=>{if(e){const t=Math.ceil(e);r.kcalNeeded.value=t}})(s.inputs.caloriesDeficitNeeded()),(e=>{r.currentTDEE.value=e})(s.inputs.TDEE),(e=>{r.avgWeight.value=e})(s.inputs.avgWeight),(e=>{r.totalLoss.value=e})(s.inputs.totalLoss()),(e=>{e&&(r.totalKcalDay.value=e)})(s.inputs.totalCaloriesNeeded())};r.addWeekBtn.addEventListener("click",e=>{(e=>{e>0&&document.querySelectorAll(`.week-${e} input`).forEach(e=>e.disabled=!0)})(s.weekNo);try{s.inputs.startDate&&s.inputs.startWeight&&(s.weekNo+=1,(e=>{const t=`<div data-id='${e}' class="row input-headers week-${e}">\n                <div class='col-1'>\n                    <div class='text-label'>Week ${e}</div>\n                    <div class='text-label weekNumber'>${a(r.startDate.value,e)}</div>\n                </div>\n                <div class='col-1'>\n                    <div class='text-label'>kg</div>\n                    <div class='text-label'>kcal</div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1 avg'>\n                    <div class='text-label avg-kg'>AVG Kg</div>\n                    <div class='text-label avg-kcal'>AVG kcal</div>\n                </div>\n                <div class='col-1 delta'>Kg ∆</div>\n                <div class='col-1 text-label tdee'> TDEE</div>\n            </div>`;r.weeksTable.insertAdjacentHTML("beforeend",t)})(s.weekNo),r.startDate.setAttribute("disabled",!0),r.startWeight.setAttribute("disabled",!0))}catch(e){alert(e)}}),r.weeksTable.addEventListener("change",e=>{let t=e.target.parentNode.parentNode.parentNode.dataset.id;c(t),e.target.matches(".kg")||e.target.matches(".kcal")});const c=e=>{const t="week_"+e;console.log("week = "+e);const n=(e=>{let t={kg:[],kcal:[]};const n=document.querySelectorAll(`.week-${e} .kg`),r=document.querySelectorAll(`.week-${e} .kcal`);return n.forEach(e=>{e.value&&t.kg.push(parseFloat(e.value))}),r.forEach(e=>{e.value&&t.kcal.push(parseFloat(e.value))}),t})(e);s[t]=new o(n,e),((e,t,n)=>{document.querySelector(`.week-${e} .avg-kg`).innerHTML=t.toFixed(2),document.querySelector(`.week-${e} .avg-kcal`).innerHTML=Math.floor(n)})(e,s[t].getAvgKg(),s[t].getAvgKcal());const r="week_"+(e-1),i=s[r]?s[r].avgKg:s.inputs.startWeight;((e,t)=>{document.querySelector(`.week-${e} .delta`).innerHTML=t.toFixed(2)})(e,s[t].calcChange(i))}}]);