(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Ig:()=>Q,kS:()=>R,xu:()=>B,Pb:()=>_,EA:()=>z});const t="https://webdev-hw-api.herokuapp.com",n=t+"/api/v1/prod/instapro",a="posts",i="user-posts",r="auth",o="add-post",u="loading";function s({element:e}){return e.innerHTML=`\n  <div class="page-header">\n      <h1 class="logo">instapro</h1>\n      <button class="header-button add-or-login-button">\n      ${z?'<div title="Добавить пост" class="add-post-sign"></div>':"Войти"}\n      </button>\n      ${z?`<button title="${z.name}" class="header-button logout-button">Выйти</button>`:""}  \n      </button>\n  </div>\n  \n`,e.querySelector(".add-or-login-button").addEventListener("click",(()=>{Q(z?o:r)})),e.querySelector(".logo").addEventListener("click",(()=>{Q(a)})),e.querySelector(".logout-button")?.addEventListener("click",R),e}function l({element:e,onImageUrlChange:n}){let a="";const i=()=>{e.innerHTML=`\n  <div class="upload=image">\n      ${a?`\n          <div class="file-upload-image-conrainer">\n            <img class="file-upload-image" src="${a}">\n            <button class="file-upload-remove-button button">Заменить фото</button>\n          </div>\n          `:'\n            <label class="file-upload-label secondary-button">\n                <input\n                  type="file"\n                  class="file-upload-input"\n                  style="display:none"\n                />\n                Выберите фото\n            </label>\n          \n      '}\n  </div>\n`;const r=e.querySelector(".file-upload-input");r?.addEventListener("change",(()=>{const e=r.files[0];if(e){const r=document.querySelector(".file-upload-label");r.setAttribute("disabled",!0),r.textContent="Загружаю файл...",function({file:e}){const n=new FormData;return n.append("file",e),fetch(t+"/api/upload/image",{method:"POST",body:n}).then((e=>e.json()))}({file:e}).then((({fileUrl:e})=>{a=e,n(a),i()}))}})),e.querySelector(".file-upload-remove-button")?.addEventListener("click",(()=>{a="",n(a),i()}))};i()}var d={};function c(){return d}function m(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e){m(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function f(e,t){m(2,arguments);var n=h(e),a=h(t),i=n.getTime()-a.getTime();return i<0?-1:i>0?1:i}function v(e,t){m(2,arguments);var n,a=h(e),i=h(t),r=f(a,i),o=Math.abs(function(e,t){m(2,arguments);var n=h(e),a=h(t);return 12*(n.getFullYear()-a.getFullYear())+(n.getMonth()-a.getMonth())}(a,i));if(o<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-r*o);var u=f(a,i)===-r;(function(e){m(1,arguments);var t=h(e);return function(e){m(1,arguments);var t=h(e);return t.setHours(23,59,59,999),t}(t).getTime()===function(e){m(1,arguments);var t=h(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}(t).getTime()})(h(e))&&1===o&&1===f(e,i)&&(u=!1),n=r*(o-Number(u))}return 0===n?0:n}var p={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},b="trunc";var w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var M={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function P(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,u=r[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(s):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(s);return o=e.valueCallback?e.valueCallback(l):l,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(u.length)}}}function T(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var i=a[0],r=t.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(i.length)}}}const W={code:"en-US",formatDistance:function(e,t,n){var a,i=w[e];return a="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:M,formatRelative:function(e,t,n,a){return k[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:T({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function G(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function E(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var N=1440,D=2520,x=43200,C=86400;function I(e,t,n){var a,i;m(2,arguments);var r=c(),o=null!==(a=null!==(i=null==n?void 0:n.locale)&&void 0!==i?i:r.locale)&&void 0!==a?a:W;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=f(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var s,l,d=G(G({},n),{addSuffix:Boolean(null==n?void 0:n.addSuffix),comparison:u});u>0?(s=h(t),l=h(e)):(s=h(e),l=h(t));var g,w=function(e,t,n){m(2,arguments);var a,i=function(e,t){return m(2,arguments),h(e).getTime()-h(t).getTime()}(e,t)/1e3;return((a=null==n?void 0:n.roundingMethod)?p[a]:p[b])(i)}(l,s),y=(E(l)-E(s))/1e3,M=Math.round((w-y)/60);if(M<2)return null!=n&&n.includeSeconds?w<5?o.formatDistance("lessThanXSeconds",5,d):w<10?o.formatDistance("lessThanXSeconds",10,d):w<20?o.formatDistance("lessThanXSeconds",20,d):w<40?o.formatDistance("halfAMinute",0,d):w<60?o.formatDistance("lessThanXMinutes",1,d):o.formatDistance("xMinutes",1,d):0===M?o.formatDistance("lessThanXMinutes",1,d):o.formatDistance("xMinutes",M,d);if(M<45)return o.formatDistance("xMinutes",M,d);if(M<90)return o.formatDistance("aboutXHours",1,d);if(M<N){var k=Math.round(M/60);return o.formatDistance("aboutXHours",k,d)}if(M<D)return o.formatDistance("xDays",1,d);if(M<x){var S=Math.round(M/N);return o.formatDistance("xDays",S,d)}if(M<C)return g=Math.round(M/x),o.formatDistance("aboutXMonths",g,d);if((g=v(l,s))<12){var P=Math.round(M/x);return o.formatDistance("xMonths",P,d)}var T=g%12,I=Math.floor(g/12);return T<3?o.formatDistance("aboutXYears",I,d):T<9?o.formatDistance("overXYears",I,d):o.formatDistance("almostXYears",I+1,d)}function j(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,a=t%100;return 1===n&&11!==a?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(a<10||a>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function $(e){return function(t,n){return null!=n&&n.addSuffix?n.comparison&&n.comparison>0?e.future?j(e.future,t):"через "+j(e.regular,t):e.past?j(e.past,t):j(e.regular,t)+" назад":j(e.regular,t)}}var q={lessThanXSeconds:$({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:$({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,t){return null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:$({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:$({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:$({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:$({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:$({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:$({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:$({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:$({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:$({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:$({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:$({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:$({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:$({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};var O={date:y({formats:{full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:y({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:y({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};function U(e,t){var n,a,i,r,o,u,s,l;m(1,arguments);var d=c(),g=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(n=null!==(a=null!==(i=null!==(r=null==t?void 0:t.weekStartsOn)&&void 0!==r?r:null==t||null===(o=t.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==i?i:d.weekStartsOn)&&void 0!==a?a:null===(s=d.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=h(e),v=f.getUTCDay(),p=(v<g?7:0)+v-g;return f.setUTCDate(f.getUTCDate()-p),f.setUTCHours(0,0,0,0),f}function A(e,t,n){m(2,arguments);var a=U(e,n),i=U(t,n);return a.getTime()===i.getTime()}var X=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function L(e){var t=X[e];return 2===e?"'во "+t+" в' p":"'в "+t+" в' p"}var H={lastWeek:function(e,t,n){var a=e.getUTCDay();return A(e,t,n)?L(a):function(e){var t=X[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}(a)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return A(e,t,n)?L(a):function(e){var t=X[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}(a)},other:"P"};const F={code:"ru",formatDistance:function(e,t,n){return q[e](t,n)},formatLong:O,formatRelative:function(e,t,n,a){var i=H[e];return"function"==typeof i?i(t,n,a):i},localize:{ordinalNumber:function(e,t){var n=Number(e),a=null==t?void 0:t.unit;return n+("date"===a?"-е":"week"===a||"minute"===a||"second"===a?"-я":"-й")},era:S({values:{narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:S({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},defaultWidth:"wide",formattingValues:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},defaultFormattingWidth:"wide"}),day:S({values:{narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:T({matchPattern:/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:P({matchPatterns:{narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:P({matchPatterns:{narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};function Y({appEl:e,singleUserView:t}){const n=B.map((e=>`\n          <li class="post">\n          ${t?"":`\n          <div class="post-header" data-user-id="${e.user.id}">\n                <img src="${e.user.imageUrl}" class="post-header__user-image">\n                <p class="post-header__user-name">${e.user.name}</p>\n            </div>\n          `}\n            \n            <div class="post-image-container">\n              <img class="post-image" src="${e.imageUrl}">\n            </div>\n            <div class="post-likes">\n              <button data-post-id="${e.id}" class="like-button">\n                ${e.isLiked?'<img src="./assets/images/like-active.svg">':'<img src="./assets/images/like-not-active.svg">'}\n              </button>\n              <p class="post-likes-text">\n                Нравится: ${e.likes.length<2?`<strong>${0===e.likes.length?"0":e.likes.map((({name:e})=>e)).join(", ")}</strong>`:`<strong>${e.likes[Math.floor(Math.random()*e.likes.length)].name}</strong> и <strong>еще ${(e.likes.length-1).toString()}</strong>`}\n              </p>\n            </div>\n            <p class="post-text">\n              <span class="user-name">${e.user.name}</span>\n              ${e.description}\n            </p>\n            <p class="post-date">\n              ${function(e,t){return m(1,arguments),I(e,Date.now(),t)}(new Date(e.createdAt),{locale:F,addSuffix:"назад"})} \n            </p>\n          </li>`)).join(""),a=`\n              <div class="page-container">\n                <div class="header-container"></div>\n\n                ${t&&B[0]?` <div class="posts-user-header">\n                    <img src="${B[0].user.imageUrl}" class="posts-user-header__user-image">\n                    <p class="posts-user-header__user-name">${B[0].user.name}</p>\n                </div>`:""}\n\n                ${0===B.length?"Постов нет":""}\n\n                <ul class="posts">\n                \x3c!-- Список рендерится из JS --\x3e\n                ${n}\n                \n                </ul>\n                <br />\n               \n              </div>`;e.innerHTML=a,s({element:document.querySelector(".header-container")});for(let e of document.querySelectorAll(".post-header"))e.addEventListener("click",(()=>{Q(i,{userId:e.dataset.userId})}));for(let e of document.querySelectorAll(".like-button"))e.addEventListener("click",(()=>{z?_({postId:e.dataset.postId}):alert("Лайкать посты могут только автризованные пользователи")}))}let z=function(e){try{return JSON.parse(window.localStorage.getItem("user"))}catch(e){return null}}(),J=null,B=[];const V=()=>z?`Bearer ${z.token}`:void 0,_=({postId:e})=>{const t=B.findIndex((t=>t.id===e));B[t].isLiked?function({id:e,token:t}){return fetch(n+"/"+e+"/dislike",{method:"POST",headers:{Authorization:t}}).then((e=>{if(500===e.status)throw new Error("Ошибка сервера");if(401===e.status)throw new Error("Нет авторизации");return e})).then((e=>e.json()))}({token:V(),id:e}).then((e=>{B[t].likes=e.post.likes,B[t].isLiked=!1,K()})):function({id:e,token:t}){return fetch(n+"/"+e+"/like",{method:"POST",headers:{Authorization:t}}).then((e=>{if(500===e.status)throw new Error("Ошибка сервера");if(401===e.status)throw new Error("Нет авторизации");return e})).then((e=>e.json()))}({token:V(),id:e}).then((e=>{B[t].likes=e.post.likes,B[t].isLiked=!0,K()}))},R=()=>{z=null,window.localStorage.removeItem("user"),Q(a)},Q=(e,t)=>{if([a,r,o,i,u].includes(e))return e===o?(J=z?o:r,K()):e===a?(J=u,K(),function({token:e}){return fetch(n,{method:"GET",headers:{Authorization:e}}).then((e=>{if(401===e.status)throw new Error("Нет авторизации");return e.json()})).then((e=>e.posts))}({token:V()}).then((e=>{J=a,B=e,K()})).catch((e=>{console.error(e)}))):e===i?(J=u,K(),function({token:e,userId:t}){return fetch(n+"/user-posts/"+t,{method:"GET",headers:{Authorization:e}}).then((e=>{if(401===e.status)throw new Error("Нет авторизации");return e.json()})).then((e=>e.posts))}({token:V(),userId:t.userId}).then((e=>{J=i,B=e,K()}))):(J=e,void K());throw new Error("страницы не существует")},K=()=>{const e=document.getElementById("app");return J===u?function({appEl:e,user:t,goToPage:n}){e.innerHTML='\n              <div class="page-container">\n                <div class="header-container"></div>\n                <div class="loading-page">\n                  <div class="loader"><div></div><div></div><div></div></div>\n                </div>\n              </div>',s({user:t,element:document.querySelector(".header-container"),goToPage:n})}({appEl:e,user:z,goToPage:Q}):J===r?function({appEl:e,setUser:n,user:a,goToPage:i}){let r=!0,o="";const u=()=>{const d=`\n      <div class="page-container">\n          <div class="header-container"></div>\n          <div class="form">\n              <h3 class="form-title">\n                ${r?"Вход в&nbsp;Instapro":"Регистрация в&nbsp;Instapro"}\n                </h3>\n              <div class="form-inputs">\n    \n                  ${r?"":'\n                      <div class="upload-image-container"></div>\n                      <input type="text" id="name-input" class="input" placeholder="Имя" />\n                      '}\n                  \n                  <input type="text" id="login-input" class="input" placeholder="Логин" />\n                  <input type="password" id="password-input" class="input" placeholder="Пароль" />\n                  \n                  <div class="form-error"></div>\n                  \n                  <button class="button" id="login-button">${r?"Войти":"Зарегистрироваться"}</button>\n              </div>\n            \n              <div class="form-footer">\n                <p class="form-footer-title">\n                  ${r?"Нет аккаунта?":"Уже есть аккаунт?"}\n                  <button class="link-button" id="toggle-button">\n                    ${r?"Зарегистрироваться.":"Войти."}\n                  </button>\n                </p> \n               \n              </div>\n          </div>\n      </div>    \n`;e.innerHTML=d;const c=t=>{e.querySelector(".form-error").textContent=t};s({element:document.querySelector(".header-container"),user:a,goToPage:i}),e.querySelector(".upload-image-container")&&l({element:e.querySelector(".upload-image-container"),onImageUrlChange(e){o=e}}),document.getElementById("login-button").addEventListener("click",(()=>{if(c(""),r){const e=document.getElementById("login-input").value,a=document.getElementById("password-input").value;if(!e)return void alert("Введите логин");if(!a)return void alert("Введите пароль");(function({login:e,password:n}){return fetch(t+"/api/user/login",{method:"POST",body:JSON.stringify({login:e,password:n})}).then((e=>{if(400===e.status)throw new Error("Неверный логин или пароль");return e.json()}))})({login:e,password:a}).then((e=>{n(e.user)})).catch((e=>{console.warn(e),c(e.message)}))}else{const e=document.getElementById("login-input").value,a=document.getElementById("name-input").value,i=document.getElementById("password-input").value;if(!a)return void alert("Введите имя");if(!e)return void alert("Введите логин");if(!i)return void alert("Введите пароль");(function({login:e,password:n,name:a,imageUrl:i}){return fetch(t+"/api/user",{method:"POST",body:JSON.stringify({login:e,password:n,name:a,imageUrl:i})}).then((e=>{if(400===e.status)throw new Error("Такой пользователь уже существует");return e.json()}))})({login:e,password:i,name:a,imageUrl:o}).then((e=>{n(e.user)})).catch((e=>{console.warn(e),c(e.message)}))}})),document.getElementById("toggle-button").addEventListener("click",(()=>{r=!r,u()}))};u()}({appEl:e,setUser:e=>{z=e,function(e){window.localStorage.setItem("user",JSON.stringify(e))}(z),Q(a)},user:z,goToPage:Q}):J===o?function({appEl:e,onAddPostClick:t}){let n="";e.innerHTML='\n    <div class="page-container">\n      <div class="header-container"></div>\n      <div class="form">\n        <h3 class="form-title">Добавить пост</h3>\n        <div class="form-inputs">\n          <div class="upload-image-container"></div>\n          <label>\n            Опишите фотографию:\n            <textarea class="input textarea" rows="4"></textarea>\n            </label>\n            <button class="button"  id="add-button">Добавить</button>\n        </div>\n      </div>\n    </div>\n  ',s({element:e.querySelector(".header-container")}),l({element:e.querySelector(".upload-image-container"),onImageUrlChange(e){n=e}}),document.getElementById("add-button").addEventListener("click",(async()=>{const e=document.querySelector("textarea");n?e.value?t({description:e.value,imageUrl:n}):alert("Не заполнено описание фото"):alert("Не указано фото")}))}({appEl:e,user:z,goToPage:Q,onAddPostClick({description:e,imageUrl:t}){Q(u),function({token:e,description:t,imageUrl:a}){return fetch(n,{method:"POST",body:JSON.stringify({description:t,imageUrl:a}),headers:{Authorization:e}}).then((e=>{if(500===e.status)throw new Error("Ошибка сервера");if(400===e.status)throw new Error("Неверный запрос")}))}({token:V(),description:e,imageUrl:t}).then((()=>{Q(a)})).catch((e=>{console.error(e),Q(o),alert(e.message)}))}}):J===a?Y({appEl:e,user:z,goToPage:Q,posts:B,singleUserView:!1,toggleLike:_}):J===i?Y({appEl:e,user:z,goToPage:Q,posts:B,singleUserView:!0,toggleLike:_}):void 0};Q(a)})();