(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var n=a("5NKs");t.__esModule=!0,t.default=void 0;var r,l=n(a("v06X")),i=n(a("XEEL")),s=n(a("uDP2")),c=n(a("j8BX")),d=n(a("q1tI")),o=n(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,l=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:l}),d.default.createElement("source",{media:r,srcSet:a,sizes:l}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function z(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+i+s+a+n+t+l+r+c+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,l=d.default.createElement(L,(0,c.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,n(a),l):l},L=d.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,l=e.style,i=e.onLoad,o=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,c.default)({sizes:a,srcSet:n,src:r},m,{onLoad:i,onError:o,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));L.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,l=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,o=e.placeholderStyle,f=void 0===o?{}:o,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,z=e.loading,I=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,c.default)({opacity:O?1:0,transition:C?"opacity "+b+"ms":"none"},s),x="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},W=(0,c.default)({opacity:this.state.imgLoaded?0:1},C&&V,{},s,{},f),T={title:t,alt:this.state.isVisible?"":a,style:W,className:m,itemProp:y};if(g){var D=g,B=D[0];return d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),x&&d.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&V)}),B.base64&&d.default.createElement(A,{src:B.base64,spreadProps:T,imageVariants:D,generateSources:w}),B.tracedSVG&&d.default.createElement(A,{src:B.tracedSVG,spreadProps:T,imageVariants:D,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(D),d.default.createElement(L,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:z,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:a,title:t,loading:z},B,{imageVariants:D}))}}))}if(p){var q=p,k=q[0],P=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},l);return"inherit"===l.display&&delete P.display,d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},x&&d.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:x,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},C&&V)}),k.base64&&d.default.createElement(A,{src:k.base64,spreadProps:T,imageVariants:q,generateSources:w}),k.tracedSVG&&d.default.createElement(A,{src:k.tracedSVG,spreadProps:T,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(q),d.default.createElement(L,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:z,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:a,title:t,loading:z},k,{imageVariants:q}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),R=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string});O.propTypes={resolutions:C,sizes:R,fixed:o.default.oneOfType([C,o.default.arrayOf(C)]),fluid:o.default.oneOfType([R,o.default.arrayOf(R)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var x=O;t.default=x},Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=(a("Wbzz"),a("Bl7J")),i=(a("ezAz"),a("9eSz"),a("vrFN"));t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to our lovely Community."),r.a.createElement("p",null,"Find out where to dance, right here!")),r.a.createElement("div",{className:"tc",style:{width:"100%"}},r.a.createElement("h1",null,"Dance Schedule")),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sun"),r.a.createElement("th",{className:"danceTable"},r.a.createElement("div",{style:{display:"flex",textAlign:"center",fontSize:"80%",alignItems:"center"}},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")),r.a.createElement("div",{className:"dtc",style:{display:"flex",textAlign:"center",fontSize:"80%",alignItems:"center"}},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")))),r.a.createElement("tr",null,r.a.createElement("th",null,"Tue"),r.a.createElement("th",{className:"danceTable"},r.a.createElement("div",null,r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")))),r.a.createElement("tr",null,r.a.createElement("th",null,"Fri"),r.a.createElement("th",{className:"danceTable"},r.a.createElement("div",{className:"dtc",style:{display:"flex",textAlign:"center",fontSize:"80%",alignItems:"center"}},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")),r.a.createElement("div",{style:{display:"flex",textAlign:"center",fontSize:"80%",alignItems:"center"}},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")))),r.a.createElement("tr",null,r.a.createElement("th",null,"Other Regular ",r.a.createElement("br",null)," Dances"),r.a.createElement("th",{className:"danceTable"},r.a.createElement("div",{className:"dtc"},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")),r.a.createElement("div",{style:{display:"flex",textAlign:"center",fontSize:"80%",alignItems:"center"}},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation ")),r.a.createElement("div",{className:"dtc",style:{display:"flex",textAlign:"center",fontSize:"80%",alignItems:"center"}},r.a.createElement("div",null,"Dance Name",r.a.createElement("br",null),"(how often if not weekly)",r.a.createElement("br",null),"When"),r.a.createElement("div",null," Brief Description "),r.a.createElement("div",null," Cost/",r.a.createElement("br",null),"suggested donation "))))))}},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),l=a("vhPU"),i=/"/g,s=function(e,t,a,n){var r=String(l(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-2776e5d9b14c1cb8a15a.js.map