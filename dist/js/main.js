!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(6)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\n.container {\r\n    margin: auto;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    font-size: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-family: 'Helvetica', sans-serif;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n    color: #655A56;\r\n}\r\n\r\n.inputs-wrapper {\r\n    -webkit-box-shadow: 5px 5px 15px 5px #000000;\r\n    box-shadow: 5px 5px 15px 5px #000000;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n\r\n/* INPUTS - TOP SECTION */\r\n#inputs {\r\n    padding: 10px 0 0 0px;\r\n    font-size: 1vw;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n    width: 100%;\r\n    min-height: inherit;\r\n    color: #655A56;\r\n    text-align: center;\r\n    background-image: linear-gradient(to left bottom, #11998e, #38ef7d);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nh4.inputs-title {\r\n    padding-top: 10px;\r\n}\r\n\r\n#inputs td {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n#inputs.col-6 {\r\n    text-align: center;\r\n}\r\n\r\ntd input[type='number'] {\r\n    width: 70%;\r\n}\r\n\r\ndiv.table-headers {\r\n    padding-top: 5%;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\ndiv.col-1 {\r\n    border: 1px solid #655A56;\r\n    text-align: center;\r\n    font-size: 1.2vw;\r\n    padding: 0;\r\n}\r\n\r\n#data {\r\n    font-size: 1vw;\r\n    position: static;\r\n    /*    padding: 24% 0;*/\r\n    width: 100%;\r\n    color: #655A56;\r\n    text-align: center;\r\n    background-image: linear-gradient(to left top, #11998e, #38ef7d);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\ninput[type='number'] {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 1.2vw;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.input-headers {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ndiv.text-label {\r\n    vertical-align: middle;\r\n}\r\n\r\ndiv.weekNumber {\r\n    font-size: .9vw;\r\n}\r\n\r\n.add-week-btn {\r\n    margin: 10px 0px 10px;\r\n    color: #655A56;\r\n    font-weight: 500;\r\n    padding: 15px 30px;\r\n    border-radius: 5px;\r\n    background-color: greenyellow;\r\n    border: 0px;\r\n    box-shadow: 1px 1px 10px black;\r\n}\r\n\r\nbutton#reset {\r\n    color: white;\r\n    background-color: red;\r\n    border: none;\r\n}\r\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,i,a={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),o=null,c=0,d=[],u=n(5);function v(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],t))}else{var l=[];for(s=0;s<r.parts.length;s++)l.push(b(r.parts[s],t));a[r.id]={id:r.id,refs:1,parts:l}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function g(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(e.insertAt.before,n);n.insertBefore(t,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return k(t,e.attrs),g(e,t),t}function k(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var s=c++;n=o||(o=h(t)),r=m.bind(null,n,s,!1),i=m.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",k(t,e.attrs),g(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(s),l&&URL.revokeObjectURL(l)}.bind(null,n,t),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return v(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(l=a[s.id]).refs--,r.push(l)}e&&v(p(e,t),t);for(i=0;i<r.length;i++){var l;if(0===(l=r[i]).refs){for(var o=0;o<l.parts.length;o++)l.parts[o]();delete a[l.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function m(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);n(1);const r={inputs:document.querySelector("#inputs-table"),startDate:document.querySelector(".date-initial-input"),startWeight:document.querySelector(".weight-initial-input"),weightGoal:document.querySelector(".goal-initial-input"),weeklyLoss:document.querySelector(".loss-initial-input"),resetbtn:document.querySelector("#reset"),currentDate:document.querySelector(".date-current-input"),weeksNeeded:document.querySelector(".weeks-needed"),kcalNeeded:document.querySelector(".daily-kcal-needed"),currentTDEE:document.querySelector(".current-TDEE"),totalKcalDay:document.querySelector(".total-kcal-day"),avgWeight:document.querySelector(".avg-weight"),totalLoss:document.querySelector(".total-loss"),weeksTable:document.querySelector(".weeks-table"),addWeekBtn:document.querySelector(".add-week-btn"),weekDays:document.querySelectorAll(".week-day"),kgCells:document.querySelectorAll(".kg"),kcalCells:document.querySelectorAll(".kcal")};class i{constructor(e){this.startDate=e.startDate,this.startWeight=e.startWeight,this.weightGoal=e.weightGoal,this.weeklyLoss=e.weeklyLoss,this.avgWeight=e.startWeight}getWeeksNeeded(){if(this.weeklyLoss){const e=this.avgWeight-this.weightGoal;return this.weeksNeeded=e/this.weeklyLoss,this.weeksNeeded}}caloriesDeficitNeeded(){const e=7700*(this.avgWeight-this.weightGoal);return this.dailyKcalDeficit=e/this.weeksNeeded/7,this.dailyKcalDeficit}totalLoss(){return this.totalLoss=this.startWeight-this.avgWeight,this.totalLoss}totalCaloriesNeeded(){return this.totalTDEE=this.tdee-this.dailyKcalDeficit,Math.floor(this.totalTDEE)}setStartTdee(){return this.tdee=33*this.startWeight,this.tdee}}class a{constructor(e,t){this.weekNo=parseInt(t),this.cells=e}getAvgKg(){let e=0;this.cells.kg.forEach(t=>e+=t);let t=e/this.cells.kg.length;return this.avgKg=t,this.avgKg}getAvgKcal(){let e=0;this.cells.kcal.forEach(t=>e+=t);let t=e/this.cells.kcal.length;return this.avgKcal=t,this.avgKcal}calcChange(e){return this.weeklyLoss=this.avgKg-e,this.weeklyLoss}calcTdee(){const e=7700*Math.abs(this.weeklyLoss)/7;return this.tdee=e+this.avgKcal,this.tdee}getStartDate(e,t){let n,r,i,a,s,l;return r=(n=new Date(e)).getDate(),i=n.getMonth(),a=n.getYear()+1900,l=new Date(a,i,r+(s=7*t-7)),this.startDate=l.toDateString().slice(4),this.startDate}}const s=e=>{if(e){const t=Math.ceil(e);r.weeksNeeded.value=t}},l=e=>{if(e){const t=Math.ceil(e);r.kcalNeeded.value=t}},o=e=>{const t=parseFloat(e).toFixed(2);r.avgWeight.value=t},c=e=>{r.currentTDEE.value=Math.floor(e)},d=e=>{e=e.toFixed(2),r.totalLoss.value=e},u=e=>{e&&(r.totalKcalDay.value=Math.floor(e))},v=e=>{let t=new Date(e).getDay();const n=r.weekDays,i=["Sun.","Mon.","Tues.","Wed.","Thurs.","Fri.","Sat.","Sun.","Mon.","Tues.","Wed.","Thurs.","Fri.","Sat."];n.forEach((e=t)=>{e.innerHTML=i[t],t++})},p=e=>{s(e.weeksNeeded),l(e.dailyKcalDeficit),c(e.tdee),o(e.avgWeight),d(e.totalLoss),u(e.totalTDEE),(e=>{r.startDate.value=e})(e.startDate),(e=>{r.startWeight.value=e})(e.startWeight),(e=>{r.weightGoal.value=e})(e.weightGoal),(e=>{r.weeklyLoss.value=e})(e.weeklyLoss)},g=(e,t)=>{let n,r,i,a,s,l;return r=(n=new Date(e)).getDate(),i=n.getMonth(),a=n.getYear()+1900,(l=new Date(a,i,r+(s=7*t-7))).toDateString().slice(4)},f=e=>{if(e>0){document.querySelectorAll(`.week-${e} input`).forEach(e=>e.disabled=!0)}},h=e=>{const t=`<div data-id='${e.weekNo}' class="row input-headers week-${e.weekNo}">\n                <div class='col-1'>\n                    <div class='text-label'>Week ${e.weekNo}</div>\n                    <div class='text-label weekNumber'>${e.startDate}</div>\n                </div>\n                <div class='col-1'>\n                    <div class='text-label'>kg</div>\n                    <div class='text-label'>kcal</div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[0]?e.cells.kg[0]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[0]?e.cells.kcal[0]:""}'></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[1]?e.cells.kg[1]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[1]?e.cells.kcal[1]:""}'></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[2]?e.cells.kg[2]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[2]?e.cells.kcal[2]:""}'></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[3]?e.cells.kg[3]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[3]?e.cells.kcal[3]:""}'></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[4]?e.cells.kg[4]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[4]?e.cells.kcal[4]:""}'></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[5]?e.cells.kg[5]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[5]?e.cells.kcal[5]:""}'></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number" value='${e.cells.kg[6]?e.cells.kg[6]:""}'> </div>\n                    <div><input class='kcal' type="number" value='${e.cells.kcal[6]?e.cells.kcal[6]:""}'></div>\n                </div>\n                <div class='col-1 avg'>\n                    <div class='text-label avg-kg'>${e.avgKg.toFixed(2)}</div>\n                    <div class='text-label avg-kcal'>${Math.floor(e.avgKcal)}</div>\n                </div>\n                <div class='col-1 delta'>${e.weeklyLoss.toFixed(2)}</div>\n                <div class='col-1 text-label tdee'> ${Math.floor(e.tdee)}</div>\n            </div>`;r.weeksTable.insertAdjacentHTML("beforeend",t)};let k={};window.addEventListener("load",()=>{k.weekNo=0,function(){const e=JSON.parse(localStorage.getItem("state"));if(e){k=e;const t=Object.keys(k).map(e=>k[e]);t.forEach(e=>{e.weekNo&&(h(e),e.weekNo<k.weekNo&&f(e.weekNo))}),p(k.inputs),v(k.inputs.startDate),r.startDate.setAttribute("disabled",!0),r.startWeight.setAttribute("disabled",!0),console.log("LocalStorageLoaded")}else console.log("LocalStorageAbsent")}();const e=(()=>{const e=new Date,t=e.getDate(),n=e.getMonth()+1;return`${e.getFullYear()}-${n<10?"0"+n:n}-${t<10?"0"+t:t}`})();r.currentDate.value=e,0===k.weekNo&&(r.startDate.value=e)}),r.resetbtn.addEventListener("click",e=>{confirm('Pressing "OK" will result in clearing ALL data in the window')&&(localStorage.clear(),location.reload())}),r.inputs.addEventListener("change",e=>{b(),0!==k.weekNo&&e.target.matches(".loss-initial-input")&&y(k.weekNo)});const b=()=>{if(0===k.weekNo){const e={startDate:r.startDate.value,startWeight:r.startWeight.value,weightGoal:r.weightGoal.value,weeklyLoss:r.weeklyLoss.value};k.inputs=new i(e)}s(k.inputs.getWeeksNeeded()),l(k.inputs.caloriesDeficitNeeded()),c(k.inputs.setStartTdee()),o(k.inputs.avgWeight),d(k.inputs.totalLoss()),u(k.inputs.totalCaloriesNeeded())};r.addWeekBtn.addEventListener("click",e=>{f(k.weekNo),v(r.startDate.value);try{k.inputs.startDate&&k.inputs.startWeight&&(k.weekNo+=1,(e=>{const t=`<div data-id='${e}' class="row input-headers week-${e}">\n                <div class='col-1'>\n                    <div class='text-label'>Week ${e}</div>\n                    <div class='text-label weekNumber'>${g(r.startDate.value,e)}</div>\n                </div>\n                <div class='col-1'>\n                    <div class='text-label'>kg</div>\n                    <div class='text-label'>kcal</div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1'>\n                    <div><input class='kg' type="number"></div>\n                    <div><input class='kcal' type="number"></div>\n                </div>\n                <div class='col-1 avg'>\n                    <div class='text-label avg-kg'>AVG Kg</div>\n                    <div class='text-label avg-kcal'>AVG kcal</div>\n                </div>\n                <div class='col-1 delta'>Kg ∆</div>\n                <div class='col-1 text-label tdee'> TDEE</div>\n            </div>`;r.weeksTable.insertAdjacentHTML("beforeend",t)})(k.weekNo),r.startDate.setAttribute("disabled",!0),r.startWeight.setAttribute("disabled",!0),o(k.inputs.avgWeight),c(Math.floor(k.inputs.tdee)),d(k.inputs.totalLoss))}catch(e){alert("Make sure to enter Starting Weight and the Current Date!")}}),r.weeksTable.addEventListener("change",e=>{let t=e.target.parentNode.parentNode.parentNode.dataset.id;y(t)}),window.addEventListener("keypress",e=>{13===e.which&&0!==k.weekNo&&y(k.weekNo)});const y=e=>{const t="week_"+e,n="week_"+(e-1),i=(e=>{let t={kg:[],kcal:[]};const n=document.querySelectorAll(`.week-${e} .kg`),r=document.querySelectorAll(`.week-${e} .kcal`);return n.forEach(e=>{e.value&&t.kg.push(parseFloat(e.value))}),r.forEach(e=>{e.value&&t.kcal.push(parseFloat(e.value))}),t})(e);k[t]=new a(i,e),k[t].getStartDate(k.inputs.startDate,e);const l=k[t].getAvgKg();((e,t,n)=>{t&&(document.querySelector(`.week-${e} .avg-kg`).innerHTML=t.toFixed(2)),n&&(document.querySelector(`.week-${e} .avg-kcal`).innerHTML=Math.floor(n))})(e,l,k[t].getAvgKcal()),k.inputs.avgWeight=l,o(l);const c=k[n]?k[n].avgKg:k.inputs.startWeight,d=k[t].calcChange(c);k.inputs.totalLoss=parseFloat(k.inputs.startWeight)-k.inputs.avgWeight,r.totalLoss.value=k.inputs.totalLoss.toFixed(2),((e,t)=>{document.querySelector(`.week-${e} .delta`).innerHTML=t.toFixed(2)})(e,d);const v=1===k.weekNo?33*k.inputs.startWeight:k[n].tdee,p=k[t].calcTdee(),g=(v+p)/2;((e,t)=>{document.querySelector(`.week-${e} .tdee`).innerHTML="...",t&&(document.querySelector(`.week-${e} .tdee`).innerHTML=Math.floor(t),r.currentTDEE.value=Math.floor(t))})(e,p),k.inputs.tdee=g;const f=(k.inputs.avgWeight-k.inputs.weightGoal)/k.inputs.weeklyLoss;k.inputs.weeksNeeded=f;const h=k.inputs.tdee-k.inputs.dailyKcalDeficit;k.inputs.totalTDEE=h,u(h),s(f),localStorage.setItem("state",JSON.stringify(k))}}]);