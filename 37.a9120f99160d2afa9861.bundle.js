(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1588:function(e,a,t){var n=t(244),i=t(1589);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},s=(n(i,r),i.locals?i.locals:{});e.exports=s},1589:function(e,a,t){(a=t(245)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-table {\n  margin: 0px !important;\n  background: transparent;\n  background-color: white;\n}\n\n.superset-legacy-chart-table thead th.sorting:after,\ntable.table thead th.sorting_asc:after,\ntable.table thead th.sorting_desc:after {\n  top: 0px;\n}\n\n.like-pre {\n  white-space: pre-wrap;\n}\n',""]),e.exports=a},2272:function(e,a,t){"use strict";t.r(a);var n=t(1065),i=t(85),r=t.n(i),s=t(0),l=t.n(s),o=t(1259),c=t.n(o),d=t(170),h=t.n(d),p=t(227),b=t(97),g=t(547);t(1261),t(1588);window.$&&c()(window,window.$);const f=window.$||c.a.$,u={data:l.a.arrayOf(l.a.object),height:l.a.number,alignPositiveNegative:l.a.bool,colorPositiveNegative:l.a.bool,columns:l.a.arrayOf(l.a.shape({key:l.a.string,label:l.a.string,format:l.a.string})),filters:l.a.object,includeSearch:l.a.bool,metrics:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.object])),onAddFilter:l.a.func,onRemoveFilter:l.a.func,orderDesc:l.a.bool,pageLength:l.a.oneOfType([l.a.number,l.a.string]),percentMetrics:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.object])),tableFilter:l.a.bool,tableTimestampFormat:l.a.string,timeseriesLimitMetric:l.a.oneOfType([l.a.string,l.a.object])},m=Object(p.c)(b.a.INTEGER),y=Object(p.c)(b.a.PERCENT_3_POINT),v=()=>{};function w(e,a){const{data:t,height:n,alignPositiveNegative:i=!1,colorPositiveNegative:s=!1,columns:l,filters:o={},includeSearch:c=!1,metrics:d,onAddFilter:b=v,onRemoveFilter:u=v,orderDesc:w,pageLength:T,percentMetrics:M,tableFilter:O,tableTimestampFormat:N,timeseriesLimitMetric:A}=a,S=f(e);S.addClass("superset-legacy-chart-table");const x=(d||[]).map(e=>e.label||e).concat((M||[]).map(e=>"%"+e)).filter(e=>"number"==typeof t[0][e]);function L(e){const a=[];return t.forEach(t=>{a.push(t[e])}),a}const _={},k={};x.forEach(e=>{i?_[e]=r.a.max(L(e).map(Math.abs)):(_[e]=r.a.max(L(e)),k[e]=r.a.min(L(e)))});const F=Object(g.c)(N),I=r.a.select(e);I.html("");const j=I.append("table").classed("dataframe dataframe table table-striped table-condensed table-hover dataTable no-footer",!0).attr("width","100%");j.append("thead").append("tr").selectAll("th").data(l.map(e=>e.label)).enter().append("th").text(e=>e),j.append("tbody").selectAll("tr").data(t).enter().append("tr").selectAll("td").data(e=>l.map(a=>{let{key:t,format:n}=a;const i=e[t];let r;const s=x.includes(t);return"__timestamp"===t&&(r=F(i)),"string"==typeof i&&(r='<span class="like-pre">'+h.a.sanitize(i)+"</span>"),s&&(r=Object(p.c)(n)(i)),"%"===t[0]&&(r=y(i)),{col:t,val:i,html:r,isMetric:s}})).enter().append("td").style("background-image",e=>{if(e.isMetric){const a=s&&e.val<0?150:0;if(i){const t=Math.abs(Math.round(e.val/_[e.col]*100));return"linear-gradient(to right, rgba("+a+",0,0,0.2), rgba("+a+",0,0,0.2) "+t+"%, rgba(0,0,0,0.01) "+t+"%, rgba(0,0,0,0.001) 100%)"}const t=Math.abs(Math.max(_[e.col],0)),n=Math.abs(Math.min(k[e.col],0)),r=t+n,l=Math.round(Math.min(n+e.val,n)/r*100),o=Math.round(Math.abs(e.val)/r*100);return"linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) "+l+"%, rgba("+a+",0,0,0.2) "+l+"%, rgba("+a+",0,0,0.2) "+(l+o)+"%, rgba(0,0,0,0.01) "+(l+o)+"%, rgba(0,0,0,0.001) 100%)"}return null}).classed("text-right",e=>e.isMetric).attr("title",e=>"string"==typeof e.val?e.val:Number.isNaN(e.val)?null:m(e.val)).attr("data-sort",e=>e.isMetric?e.val:null).classed("filtered",e=>o&&o[e.col]&&o[e.col].includes(e.val)).on("click",(function(e){if(!e.isMetric&&O){r.a.select(this).classed("filtered")?(u(e.col,[e.val]),r.a.select(this).classed("filtered",!1)):(r.a.select(this).classed("filtered",!0),b(e.col,[e.val]))}})).style("cursor",e=>e.isMetric?"":"pointer").html(e=>e.html?e.html:e.val);const E=T&&T>0,R=S.find(".dataTable").DataTable({paging:E,pageLength:T,aaSorting:[],searching:c,bInfo:!1,scrollY:n+"px",scrollCollapse:!0,scrollX:!0});let C;!function(e,a){const t=e.find(".dataTables_scrollHead").height(),n=e.find(".dataTables_filter").height()||0,i=e.find(".dataTables_length").height()||0,r=e.find(".dataTables_paginate").height()||0,s=i>n?i:n;e.find(".dataTables_scrollBody").css("max-height",a-t-s-r)}(S.find(".dataTables_wrapper"),n);const P=Array.isArray(A)?A[0]:A;if(P?C=P.label||P:x.length>0&&(C=x[0]),C){const e=l.map(e=>e.key).indexOf(C);R.column(e).order(w?"desc":"asc"),x.includes(C)||R.column(e).visible(!1)}R.draw()}w.displayName="TableVis",w.propTypes=u;var T=w;a.default=Object(n.a)(T)}}]);