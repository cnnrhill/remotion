(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4468],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={title:"CLI options",id:"cli"},l={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI options",description:"The default command in package.json that powers npm run build is:",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/cli.md",version:"current",frontMatter:{title:"CLI options",id:"cli"},sidebar:"someSidebar",previous:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"},next:{title:"Configuration file",permalink:"/docs/config"}},c=[{value:"Flags",id:"flags",children:[]},{value:"Example command",id:"example-command",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default command in package.json that powers ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx remotion render <entry-file> <composition-id> <output-location>\n")),(0,r.kt)("h2",{id:"flags"},"Flags"),(0,r.kt)("p",null,"Besides choosing a video and output location with the command line arguments, the following flags are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--props"),": React Props to pass to the root component of your video. Must be a serialized JSON string (",(0,r.kt)("inlineCode",{parentName:"li"},'--props=\'{"hello": "world"}\''),") or a path to a JSON file (",(0,r.kt)("inlineCode",{parentName:"li"},"./path/to/props.json"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--concurrency"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setconcurrency"},"How many CPU threads to use.")," Minimum 1. The maximum is the amount of threads you have."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--pixel-format"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setpixelformat"},"Set a custom pixel format. See here for available values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--image-format"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setimageformat"},(0,r.kt)("inlineCode",{parentName:"a"},"jpeg")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"png")," - JPEG is faster, but supports transparency.")," The default image format is ",(0,r.kt)("inlineCode",{parentName:"li"},"jpeg")," since v1.1. Flag available since v1.4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config"),": Specify a location for the Remotion config file. Available in v1.2 and later."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--quality"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setquality"},"Value between 0 and 100 for JPEG rendering quality"),". Doesn't work when PNG frames are rendered. Available since v1.4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--overwrite"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setoverwriteoutput"},"Write to output even if file already exists.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--sequence"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setimagesequence"},"Pass this flag if you want an image sequence as the output instead of a video.")," Available since v1.4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--codec"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setcodec"},(0,r.kt)("inlineCode",{parentName:"a"},"h264")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"h265")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"png")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"vp8")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"vp9")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"mp3")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"aac")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"wav")),". If you don't supply ",(0,r.kt)("inlineCode",{parentName:"li"},"--codec"),", it will use the H.264 encoder. Available since v1.4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--crf"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setcrf"},"To set Constant Rate Factor (CRF) of the output"),". Minimum 0. Use this rate control mode if you want to keep the best quality and care less about the file size. Available since v1.4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--browser-executable"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setbrowserexecutable"},"Path to a Chrome executable"),". If not specified and Remotion cannot find one, it will download one during rendering. Available since v1.5."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--frames"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setframerange"},"Render a still frame or a subset of a video"),". Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"--frames=0-9")," (To select the first 10 frames) or ",(0,r.kt)("inlineCode",{parentName:"li"},"--frames=50")," (To render a still of the 51st frame). Available since v2.0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--bundle-cache"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setcachingenabled"},"Enable or disable Webpack caching"),". This flag is enabled by default, use ",(0,r.kt)("inlineCode",{parentName:"li"},"--bundle-cache=false")," to disable caching. Available since v2.0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--log"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/config#setlevel"},"Set the log level"),". Increase or decrease the amount of output. Acceptable values: ",(0,r.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"warning"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"info")," (",(0,r.kt)("em",{parentName:"li"},"default"),"), ",(0,r.kt)("inlineCode",{parentName:"li"},"verbose"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't feel like passing command line flags every time, consider creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"remotion.config.ts")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/config"},"config file"),"."))),(0,r.kt)("h2",{id:"example-command"},"Example command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx remotion render --codec=vp8 src/index.tsx HelloWorld video.mp4\n")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/render"},"Render your video")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/config"},"Configuration file"))))}s.isMDXComponent=!0}}]);