"use strict";var options;$.prototype.justifiedGallery&&(options={rowHeight:140,margins:4,lastRow:"justify"},$(".article-gallery").justifiedGallery(options)),$(document).ready(function(){var o,e,i,t;$("#header > #nav > ul > .icon").click(function(){$("#header > #nav > ul").toggleClass("responsive")}),$(".post").length&&(o=$("#menu"),e=$("#menu > #nav"),i=$("#menu-icon, #menu-icon-tablet"),1440<=$(document).width()&&(o.css("visibility","visible"),i.addClass("active")),i.click(function(){return"hidden"===o.css("visibility")?(o.css("visibility","visible"),i.addClass("active")):(o.css("visibility","hidden"),i.removeClass("active")),!1}),o.length&&$(window).on("scroll",function(){var i=o.offset().top;!e.is(":visible")&&i<50?e.show():e.is(":visible")&&100<i&&e.hide(),!$("#menu-icon").is(":visible")&&i<50?($("#menu-icon-tablet").show(),$("#top-icon-tablet").hide()):!$("#menu-icon").is(":visible")&&100<i&&($("#menu-icon-tablet").hide(),$("#top-icon-tablet").show())}),$("#footer-post").length&&(t=0,$(window).on("scroll",function(){var i=$(window).scrollTop();t<i?$("#footer-post").hide():$("#footer-post").show(),t=i,$("#nav-footer").hide(),$("#toc-footer").hide(),$("#share-footer").hide(),i<50?$("#actions-footer > #top").hide():100<i&&$("#actions-footer > #top").show()})))});