var pxt,__extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();!function(t){var e,r,i,o,n;e=t.editor||(t.editor={}),(r=e.SimState||(e.SimState={}))[r.Stopped=0]="Stopped",r[r.Pending=1]="Pending",r[r.Starting=2]="Starting",r[r.Running=3]="Running",e.isBlocks=function(e){return t.U.endsWith(e.name,".blocks")},(i=e.ErrorListState||(e.ErrorListState={})).HeaderOnly="errorListHeader",i.Expanded="errorListExpanded",(o=e.FilterState||(e.FilterState={}))[o.Hidden=0]="Hidden",o[o.Visible=1]="Visible",o[o.Disabled=2]="Disabled",e.initExtensionsAsync=function(e){return Promise.resolve({})},e.initFieldExtensionsAsync=function(e){return Promise.resolve({})},e.HELP_IMAGE_URI="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNy45NTIgOS4xODQwMkMxNy45NTIgMTAuMjU2IDE3LjgxNiAxMS4wNzIgMTcuNTQ0IDExLjYzMkMxNy4yODggMTIuMTkyIDE2Ljc1MiAxMi43OTIgMTUuOTM2IDEzLjQzMkMxNS4xMiAxNC4wNzIgMTQuNTc2IDE0LjU4NCAxNC4zMDQgMTQuOTY4QzE0LjA0OCAxNS4zMzYgMTMuOTIgMTUuNzM2IDEzLjkyIDE2LjE2OFYxNi45NkgxMS44MDhDMTEuNDI0IDE2LjQ2NCAxMS4yMzIgMTUuODQgMTEuMjMyIDE1LjA4OEMxMS4yMzIgMTQuNjg4IDExLjM4NCAxNC4yODggMTEuNjg4IDEzLjg4OEMxMS45OTIgMTMuNDg4IDEyLjUzNiAxMi45NjggMTMuMzIgMTIuMzI4QzE0LjEwNCAxMS42NzIgMTQuNjI0IDExLjE2OCAxNC44OCAxMC44MTZDMTUuMTM2IDEwLjQ0OCAxNS4yNjQgOS45NjgwMiAxNS4yNjQgOS4zNzYwMkMxNS4yNjQgOC4yMDgwMiAxNC40MTYgNy42MjQwMiAxMi43MiA3LjYyNDAyQzExLjc2IDcuNjI0MDIgMTAuNzUyIDcuNzM2MDIgOS42OTYgNy45NjAwMkw5LjE0NCA4LjA4MDAyTDkgNi4wODgwMkMxMC40ODggNS41NjAwMiAxMS44NCA1LjI5NjAyIDEzLjA1NiA1LjI5NjAyQzE0LjczNiA1LjI5NjAyIDE1Ljk2OCA1LjYwODAyIDE2Ljc1MiA2LjIzMjAyQzE3LjU1MiA2Ljg0MDAyIDE3Ljk1MiA3LjgyNDAyIDE3Ljk1MiA5LjE4NDAyWk0xMS40IDIyVjE4LjY0SDE0LjE4NFYyMkgxMS40WiIgZmlsbD0iIzU5NUU3NCIvPgo8L3N2Zz4K",e.initEditorExtensionsAsync=function(){if(!n&&(n=Promise.resolve(),t.appTarget&&t.appTarget.appTheme&&t.appTarget.appTheme.extendFieldEditors)){var e={};n=n.then(function(){return t.BrowserUtils.loadBlocklyAsync()}).then(function(){return t.BrowserUtils.loadScriptAsync("fieldeditors.js")}).then(function(){return t.editor.initFieldExtensionsAsync(e)}).then(function(e){e.fieldEditors&&e.fieldEditors.forEach(function(e){t.blocks.registerFieldEditor(e.selector,e.editor,e.validator)})})}return n}}(pxt||(pxt={})),function(m){!function(e){var c={};function l(e,t,r,i){e.response&&window.parent.postMessage({type:e.type,id:e.id,resp:t,success:r,error:i},"*")}function n(i){return new Promise(function(e,t){var r=m.Util.clone(i);r.id=ts.pxtc.Util.guidGen(),i.response&&(c[r.id]={resolve:e,reject:t}),window.parent.postMessage(r,"*"),i.response||e(void 0)})}e.bindEditorMessages=function(o){var n=(m.appTarget.appTheme.allowParentController||m.shell.isControllerMode())&&m.BrowserUtils.isIFrame(),s=m.appTarget.appTheme.allowPackageExtensions,a=m.appTarget.appTheme.allowSimulatorTelemetry;(n||s||a)&&window.addEventListener("message",function(e){var g=e.data;if(!g||!/^pxt(host|editor|pkgext|sim)$/.test(g.type))return!1;if("pxtpkgext"===g.type&&s)o().then(function(e){e.handleExtensionRequest(g)});else if("pxtsim"===g.type&&a){var t=g;"event"===t.action&&(t.category||t.message?m.reportError(t.category,t.message,t.data):m.tickEvent(t.tick,t.data))}else if(n){var r=Promise.resolve(),f=void 0;if("pxthost"==g.type){var i=c[g.id];i?r=r.then(function(){return i.resolve(g)}):m.debug("pxthost: unknown request "+g.id)}else"pxteditor"==g.type&&(r=r.then(function(){return o().then(function(t){var e=g;switch(m.debug("pxteditor: "+e.action),e.action.toLowerCase()){case"switchjavascript":return Promise.resolve().then(function(){return t.openJavaScript()});case"switchpython":return Promise.resolve().then(function(){return t.openPython()});case"switchblocks":return Promise.resolve().then(function(){return t.openBlocks()});case"startsimulator":return Promise.resolve().then(function(){return t.startSimulator()});case"restartsimulator":return Promise.resolve().then(function(){return t.restartSimulator()});case"hidesimulator":return Promise.resolve().then(function(){return t.collapseSimulator()});case"showsimulator":return Promise.resolve().then(function(){return t.expandSimulator()});case"closeflyout":return Promise.resolve().then(function(){return t.closeFlyout()});case"redo":return Promise.resolve().then(function(){var e=t.editor;e&&e.hasRedo()&&e.redo()});case"undo":return Promise.resolve().then(function(){var e=t.editor;e&&e.hasUndo()&&e.undo()});case"setscale":var r=g;return Promise.resolve().then(function(){return t.editor.setScale(r.scale)});case"stopsimulator":var i=g;return Promise.resolve().then(function(){return t.stopSimulator(i.unload)});case"newproject":var o=g;return Promise.resolve().then(function(){return t.newProject(o.options)});case"importproject":var n=g;return Promise.resolve().then(function(){return t.importProjectAsync(n.project,{filters:n.filters,searchBar:n.searchBar})});case"importtutorial":var s=g;return Promise.resolve().then(function(){return t.importTutorialAsync(s.markdown)});case"proxytosim":var a=g;return Promise.resolve().then(function(){return t.proxySimulatorMessage(a.content)});case"renderblocks":var c=g;return Promise.resolve().then(function(){return t.renderBlocksAsync(c)}).then(function(e){return e.xml.then(function(e){f=e.xml})});case"renderpython":var l=g;return Promise.resolve().then(function(){return t.renderPythonAsync(l)}).then(function(e){f=e.python});case"toggletrace":var p=g;return Promise.resolve().then(function(){return t.toggleTrace(p.intervalSpeed)});case"settracestate":var d=g;return Promise.resolve().then(function(){return t.setTrace(d.enabled,d.intervalSpeed)});case"setsimulatorfullscreen":var u=g;return Promise.resolve().then(function(){return t.setSimulatorFullScreen(u.enabled)});case"togglehighcontrast":return Promise.resolve().then(function(){return t.toggleHighContrast()});case"togglegreenscreen":return Promise.resolve().then(function(){return t.toggleGreenScreen()});case"print":return Promise.resolve().then(function(){return t.printCode()});case"pair":return t.pairAsync();case"info":return Promise.resolve().then(function(){f={versions:m.appTarget.versions,locale:ts.pxtc.Util.userLanguage(),availableLocales:m.appTarget.appTheme.availableLocales}})}return Promise.resolve()})}));r.done(function(){return l(g,f,!0,void 0)},function(e){return l(g,f,!1,e)})}return!0},!1)},e.enableControllerAnalytics=function(){if(m.appTarget.appTheme.allowParentController&&m.BrowserUtils.isIFrame()){var r=m.tickEvent;m.tickEvent=function(e,t){r&&r(e,t),n({type:"pxthost",action:"event",tick:e,response:!1,data:t})};var i=m.reportException;m.reportException=function(e,t){i&&i(e,t);try{n({type:"pxthost",action:"event",tick:"error",message:e.message,response:!1,data:t})}catch(e){}};var o=m.reportError;m.reportError=function(e,t,r){o&&o(e,t,r),n({type:"pxthost",action:"event",tick:"error",category:e,message:t,data:r})}}},e.postHostMessageAsync=n}(m.editor||(m.editor={}))}(pxt||(pxt={})),function(s){var e;(function(e){function r(e){return"experiments-"+e.id}function i(){var r=s.savedAppTheme(),i={},e=o();e.forEach(function(e){var t=n(e);r[e.id]=!!t,t&&(i[e.id]=t?1:0)}),e.length&&Object.keys(i).length&&(s.tickEvent("experiments.loaded",i),s.reloadAppTargetVariant())}function o(){var t=s.appTarget.appTheme.experiments;return t?[{id:"print",name:lf("Print Code"),description:lf("Print the code from the current project"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4740"},{id:"greenScreen",name:lf("Green screen"),description:lf("Display a webcam video stream or a green background behind the code."),feedbackUrl:"https://github.com/microsoft/pxt/issues/4738"},{id:"allowPackageExtensions",name:lf("Editor Extensions"),description:lf("Allow Extensions to add buttons in the editor."),feedbackUrl:"https://github.com/microsoft/pxt/issues/4741"},{id:"instructions",name:lf("Wiring Instructions"),description:lf("Generate step-by-step assembly instructions for breadboard wiring."),feedbackUrl:"https://github.com/microsoft/pxt/issues/4739"},{id:"debugger",name:lf("Debugger"),description:lf("Step through code and inspect variables in the debugger"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4729"},{id:"bluetoothUartConsole",name:"Bluetooth Console",description:lf("Receives UART message through Web Bluetooth"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4796"},{id:"bluetoothPartialFlashing",name:"Bluetooth Download",description:lf("Download code via Web Bluetooth"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4807"},{id:"simScreenshot",name:lf("Simulator Screenshots"),description:lf("Download screenshots of the simulator"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5232"},{id:"python",name:lf("Static Python"),description:lf("Use Static Python to code your device"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5390"},{id:"simGif",name:lf("Simulator Gifs"),description:lf("Download gifs of the simulator"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5297"},{id:"qrCode",name:lf("Shared QR Code"),description:lf("Generate a QR Code form the shared project url"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5456"},{id:"importExtensionFiles",name:lf("Import Extension Files"),description:lf("Import Extensions from compiled project files")},{id:"debugExtensionCode",name:lf("Debug Extension Code"),description:lf("Use the JavaScript debugger to debug extension code")},{id:"snippetBuilder",name:lf("Snippet Builder"),description:lf("Try out the new snippet dialogs.")},{id:"experimentalHw",name:lf("Experimental Hardware"),description:lf("Enable support for hardware marked 'experimental' in the hardware seletion dialog")},{id:"checkForHwVariantWebUSB",name:lf("Detect Hardware with WebUSB"),description:lf("When compiling, use WebUSB to detect hardware configuration.")},{id:"githubEditor",name:lf("GitHub editor"),description:lf("Review, commit and push to GitHub."),feedbackUrl:"https://github.com/microsoft/pxt/issues/6419"},{id:"githubCompiledJs",name:lf("GitHub Pages JavaScript"),description:lf("Commit compiled javascript when creating a release")},{id:"blocksCollapsing",name:lf("Collapse blocks"),description:lf("Collapse and expand functions or event blocks")},{id:"tutorialBlocksDiff",name:lf("Tutorial Block Diffs"),description:lf("Automatially render blocks diff in tutorials")},{id:"openProjectNewTab",name:lf("Open in New Tab"),description:lf("Open an editor in a new tab.")},{id:"openProjectNewDependentTab",name:lf("Open in New Connected Tab"),description:lf("Open connected editors in different browser tabs.")},{id:"accessibleBlocks",name:lf("Accessible Blocks"),description:lf("Use the WASD keys to move and modify blocks."),feedbackUrl:"https://github.com/microsoft/pxt/issues/6850"},{id:"errorList",name:lf("Error List"),description:lf("Show an error list panel for JavaScript and Python.")},{id:"blocksErrorList",name:lf("Blocks Error List"),description:lf("Show an error list panel for Blocks")}].filter(function(e){return-1<t.indexOf(e.id)}):[]}function n(e){return!!s.storage.getLocal(r(e))}function t(e,t){t!=n(e)&&(t?s.storage.setLocal(r(e),"1"):s.storage.removeLocal(r(e)),i())}e.syncTheme=i,e.all=o,e.clear=function(){o().forEach(function(e){return s.storage.removeLocal(r(e))}),i()},e.someEnabled=function(){return o().some(function(e){return n(e)})},e.isEnabled=n,e.toggle=function(e){t(e,!n(e))},e.state=function(){var t={};return o().forEach(function(e){return t[e.id]=n(e)}),JSON.stringify(t)},e.setState=t})((e=s.editor||(s.editor={})).experiments||(e.experiments={}))}(pxt||(pxt={})),function(e){var t,r;t=e.editor||(e.editor={}),(r=t.PermissionResponses||(t.PermissionResponses={}))[r.Granted=0]="Granted",r[r.Denied=1]="Denied",r[r.NotAvailable=2]="NotAvailable"}(pxt||(pxt={})),function(a){!function(e){var r,i=function(){function e(){this.items={}}return e.prototype.removeItem=function(e){delete this.items[e]},e.prototype.getItem=function(e){return this.items[e]},e.prototype.setItem=function(e,t){this.items[e]=t},e.prototype.clear=function(){this.items={}},e}(),o=function(){function e(e){this.storageId=e}return e.prototype.targetKey=function(e){return this.storageId+"/"+e},e.prototype.removeItem=function(e){window.localStorage.removeItem(this.targetKey(e))},e.prototype.getItem=function(e){return window.localStorage[this.targetKey(e)]},e.prototype.setItem=function(e,t){window.localStorage[this.targetKey(e)]=t},e.prototype.clear=function(){for(var e=this.targetKey(""),t=[],r=0;r<window.localStorage.length;++r){var i=window.localStorage.key(r);0==i.indexOf(e)&&t.push(i)}t.forEach(function(e){return window.localStorage.removeItem(e)})},e}();function n(){if(a.appTarget)return a.appTarget.id;var e=window.pxtConfig;if(e)return e.targetId;var t=window.pxtTargetBundle;return t?t.id:""}function s(){if(!r){var e=n(),t=!1;if(!a.shell.isSandboxMode())try{window.localStorage[e]="1";window.localStorage[e];t=!0}catch(e){}t?(r=new o(e),a.debug("storage: local under "+e)):(r=new i,a.debug("storage: in memory"))}}e.storageId=n,e.setLocal=function(e,t){s(),r.setItem(e,t)},e.getLocal=function(e){return s(),r.getItem(e)},e.removeLocal=function(e){s(),r.removeItem(e)},e.clearLocal=function(){s(),r.clear()}}(a.storage||(a.storage={}))}(pxt||(pxt={})),function(n){!function(e){function s(e){var t=n.appTarget.appTheme.invertedMonaco,r=!(!n.appTarget.appTheme.monacoFieldEditors||!n.appTarget.appTheme.monacoFieldEditors.length),i=n.BrowserUtils.isAndroid(),o=monaco.editor.create(e,{model:null,ariaLabel:n.Util.lf("JavaScript editor"),fontFamily:"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'monospace'",scrollBeyondLastLine:!0,language:"typescript",mouseWheelZoom:!1,wordBasedSuggestions:!0,lineNumbersMinChars:3,formatOnPaste:!0,folding:r,glyphMargin:r||n.appTarget.appTheme.debugger,minimap:{enabled:!1},fixedOverflowWidgets:!0,autoIndent:"full",useTabStops:!0,dragAndDrop:!0,matchBrackets:"always",occurrencesHighlight:!1,quickSuggestionsDelay:200,theme:t?"vs-dark":"vs",renderIndentGuides:!0,accessibilityHelpUrl:"",quickSuggestions:{other:!i,comments:!i,strings:!i},acceptSuggestionOnCommitCharacter:!i,acceptSuggestionOnEnter:i?"off":"on",accessibilitySupport:i?"off":"on"});return o.layout(),o}e.syncModels=function(e,o,n,t){if(!t){var r=monaco.languages.typescript.typescriptDefaults.getExtraLibs(),s={};e.sortedDeps().forEach(function(i){i.getFiles().forEach(function(e){var t=i.id+"/"+e;if(/\.(ts)$/.test(e)&&t!=n){if(!monaco.languages.typescript.typescriptDefaults.getExtraLibs()[t]){var r=i.readFile(e)||"\n";o[t]=monaco.languages.typescript.typescriptDefaults.addExtraLib(r,t)}s[t]="1"}})}),Object.keys(r).filter(function(e){return/\.(ts)$/.test(e)&&!s[e]}).forEach(function(e){o[e].dispose()})}},e.initMonacoAsync=function(n){return new Promise(function(r,e){if("object"!=typeof window.monaco){var i=window.MonacoPaths,t=function(){var e=window.require;e.config({paths:i,ignoreDuplicateModules:["vs/basic-languages/typescript/typescript.contribution","vs/basic-languages/javascript/javascript.contribution"]});var t=window.define;t("vs/basic-languages/typescript/typescript.contribution",["require","exports"],function(){return function(){}}),t("vs/basic-languages/javascript/javascript.contribution",["require","exports"],function(){return function(){}}),t("vs/language/typescript/tsMode",["require","exports"],function(){return{setupTypeScript:function(){},getTypeScriptWorker:function(){},setupJavaScript:function(){},getJavaScriptWorker:function(){}}}),e(["vs/editor/editor.main"],function(){monaco.languages.register({id:"asm",extensions:[".asm"]}),monaco.languages.setMonarchTokensProvider("asm",{tokenPostfix:"",keywords:["movs","mov","adds","add","adcs","adr","subs","sbcs","sub","rsbs","muls","cmp","cmn","ands","eors","orrs","bics","mvns","tst","lsls","lsrs","asrs","rors","ldr","ldrh","ldrb","ldrsh","ldrsb","ldm","str","strh","strb","stm","push","pop","cbz","cbnz","b","bl","bx","blx","sxth","sxtb","uxth","uxtb","rev","rev16","revsh","svc","cpsid","cpsie","setend","bkpt","nop","sev","wfe","wfi","yield","beq","bne","bcs","bhs","bcc","blo","bmi","bpl","bvs","bvc","bhi","bls","bge","blt","bgt","ble","bal","r0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","pc","sp","lr"],typeKeywords:[".startaddr",".hex",".short",".space",".section",".string",".byte"],operators:[],symbols:/[:\*]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/(\.)?[a-z_$\.][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation"}],[/(#|(0[xX]))?[0-9a-fA-F]+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/;.*$/,"comment"]]}}),monaco.languages.register({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"]}),monaco.languages.setLanguageConfiguration("typescript",{wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:monaco.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:monaco.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:monaco.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:monaco.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}}),monaco.languages.setMonarchTokensProvider("typescript",{defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","as","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","package","private","protected","public","readonly","require","global","return","set","static","super","switch","symbol","this","throw","true","try","type","typeof","unique","var","void","while","with","yield","async","await","of"],typeKeywords:["any","boolean","number","object","string","undefined"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([gimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}),r(s(n))})};if(window.require)t();else{var o=document.createElement("script");o.type="text/javascript",o.src=i["vs/loader"],o.addEventListener("load",t),document.body.appendChild(o)}}else r(s(n))})},e.createEditor=s}(n.vs||(n.vs={}))}(pxt||(pxt={})),function(l){!function(e){var n,t,s;(t=n=e.EditorLayoutType||(e.EditorLayoutType={}))[t.IDE=0]="IDE",t[t.Sandbox=1]="Sandbox",t[t.Widget=2]="Widget";var a=!(t[t.Controller=3]="Controller");function r(){if(void 0===s){var e=/sandbox=1|#sandbox|#sandboxproject/i.test(window.location.href)||l.BrowserUtils.isIFrame(),t=/nosandbox=1/i.test(window.location.href),r=/controller=1/i.test(window.location.href)&&l.BrowserUtils.isIFrame(),i=/readonly=1/i.test(window.location.href),o=/editorlayout=(widget|sandbox|ide)/i.exec(window.location.href);if(s=n.IDE,t?s=n.Widget:r?s=n.Controller:e&&(s=n.Sandbox),r&&i&&(a=!0),o)switch(o[1].toLowerCase()){case"widget":s=n.Widget;break;case"sandbox":s=n.Sandbox;break;case"ide":s=n.IDE}l.debug("shell: layout type "+n[s]+", readonly "+c())}}function i(){return r(),s==n.Sandbox}function c(){return i()&&!/[?&]edit=1/i.test(window.location.href)||o()&&a}function o(){return r(),s==n.Controller}e.layoutTypeClass=function(){return r(),l.shell.EditorLayoutType[s].toLowerCase()},e.isSandboxMode=i,e.isReadOnly=c,e.isControllerMode=o,e.isPyLangPref=function(){return"py"==l.storage.getLocal("editorlangpref")},e.getEditorLanguagePref=function(){return l.storage.getLocal("editorlangpref")},e.setEditorLanguagePref=function(e){e.match(/prj$/)&&(e=e.replace(/prj$/,"")),l.storage.setLocal("editorlangpref",e)},e.getToolboxAnimation=function(){return l.storage.getLocal("toolboxanimation")},e.setToolboxAnimation=function(){l.storage.setLocal("toolboxanimation","1")}}(l.shell||(l.shell={}))}(pxt||(pxt={})),function(r){(r.workspace||(r.workspace={})).freshHeader=function(e,t){return{target:r.appTarget.id,targetVersion:r.appTarget.versions.target,name:e,meta:{},editor:r.JAVASCRIPT_PROJECT_NAME,pubId:"",pubCurrent:!1,_rev:null,id:r.U.guidGen(),recentUse:t,modificationTime:t,blobId:null,blobVersion:null,blobCurrent:!1,isDeleted:!1}}}(pxt||(pxt={})),function(e){var t,r;t=e.editor||(e.editor={}),r={},t.registerMonacoFieldEditor=function(e,t){r[e]=t},t.getMonacoFieldEditor=function(e){return r[e]}}(pxt||(pxt={})),function(o){var e,t;e=o.editor||(o.editor={}),t=function(){function e(){}return e.prototype.getId=function(){return"image-editor"},e.prototype.showEditorAsync=function(e,t,r){var i=this;return this.fileType=e,this.editrange=t,this.host=r,this.initAsync().then(function(){var e=i.textToValue(r.getText(t));return e?(i.fv=o.react.getFieldEditorView(i.getFieldEditorId(),e,i.getOptions()),i.fv.onHide(function(){i.onClosed()}),i.fv.show(),new Promise(function(e,t){i.resolver=e,i.rejecter=t})):Promise.resolve(null)})},e.prototype.onClosed=function(){this.resolver&&(this.resolver({range:this.editrange,replacement:this.resultToText(this.fv.getResult())}),this.editrange=void 0,this.resolver=void 0,this.rejecter=void 0)},e.prototype.dispose=function(){this.onClosed()},e.prototype.initAsync=function(){return Promise.resolve()},e.prototype.textToValue=function(e){return null},e.prototype.resultToText=function(e){return e+""},e.prototype.getFieldEditorId=function(){return""},e.prototype.getOptions=function(){return null},e}(),e.MonacoReactFieldEditor=t}(pxt||(pxt={})),function(s){var e,t,r;e=s.editor||(s.editor={}),t="image-editor",r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.textToValue=function(e){this.isPython=-1===e.indexOf("`");var t=/^\s*assets\s*\.\s*image\s*`([^`]*)`\s*$/.exec(e);if(t){var r=s.react.getTilemapProject();this.isAsset=!0;var i=r.lookupAssetByName("image",t[1].trim());if(i)return i;var o=t[1].trim(),n=r.createNewImage();return o&&!r.isNameTaken("image",o)&&s.validateAssetName(o)&&(n.meta.displayName=o),n}return{type:"image",id:"",internalID:0,bitmap:s.sprite.imageLiteralToBitmap(e).data(),meta:{},jresData:""}},t.prototype.resultToText=function(e){return this.isAsset&&e.meta.displayName?"assets.image`"+(e=s.react.getTilemapProject().updateAsset(e)).meta.displayName+"`":s.sprite.bitmapToImageLiteral(s.sprite.Bitmap.fromData(e.bitmap),this.isPython?"python":"typescript")},t.prototype.getFieldEditorId=function(){return"image-editor"},t.prototype.getOptions=function(){return{initWidth:16,initHeight:16,blocksInfo:this.host.blocksInfo(),showTiles:!0}},t}(e.MonacoReactFieldEditor),e.MonacoSpriteEditor=r,e.spriteEditorDefinition={id:t,foldMatches:!0,glyphCssClass:"sprite-editor-glyph sprite-focus-hover",heightInPixels:510,matcher:{searchString:'(?:img|assets\\s*\\.\\s*image)\\s*(?:`|\\(\\s*""")(?:[^"`]|\\n)*\\s*(?:`|"""\\s*\\))',isRegex:!0,matchCase:!0,matchWholeWord:!1},proto:r},e.registerMonacoFieldEditor(t,e.spriteEditorDefinition)}(pxt||(pxt={})),function(u){var e,t,r;e=u.editor||(u.editor={}),t="tilemap-editor",r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.textToValue=function(e){var r=this.readTilemap(e),i=u.react.getTilemapProject(),t=i.getProjectTiles(r.data.tileset.tileWidth,!0);r.data.projectReferences=[];for(var o=function(t){r.data.tileset.tiles.some(function(e){return e.id===t.id})||r.data.tileset.tiles.push(t),i.isAssetUsed(t,null,[r.id])&&r.data.projectReferences.push(t.id)},n=0,s=t.tiles;n<s.length;n++){o(s[n])}return r},t.prototype.readTilemap=function(e){var t=u.react.getTilemapProject();if(/^\s*tiles\s*\./.test(e)&&(this.isTilemapLiteral=!1,e)){try{var r=u.sprite.decodeTilemap(e,"typescript",t);return{type:"tilemap",id:"",internalID:0,meta:{},data:r}}catch(e){}return null}this.isTilemapLiteral=!0;var i,o,n=/^\s*(tilemap(?:8|16|32)?)\s*(?:`([^`]*)`)|(?:\(\s*"""([^"]*)"""\s*\))\s*$/.exec(e),s=(n[2]||n[3]||"").trim();if(this.tilemapLiteral=n[1],s){var a=ts.pxtc.escapeIdentifier(s);i=t.getTilemap(a)}if(!i){var c=16;"tilemap8"===this.tilemapLiteral?c=8:"tilemap32"===this.tilemapLiteral&&(c=32);var l=t.createNewTilemap(o,c,16,16)[0];i=t.getTilemap(l),o=l}return i},t.prototype.resultToText=function(e){var i=u.react.getTilemapProject();i.pushUndo();var o=e.data;if(o.deletedTiles)for(var t=0,r=o.deletedTiles;t<r.length;t++){var n=r[t];i.deleteTile(n)}if(o.editedTiles)for(var s=function(t){var e=o.tileset.tiles.findIndex(function(e){return e.id===t}),r=o.tileset.tiles[e];if(!r||r.id.startsWith("*"))return"continue";o.tileset.tiles[e]=i.updateTile(r)},a=0,c=o.editedTiles;a<c.length;a++){s(c[a])}for(var l=0;l<o.tileset.tiles.length;l++){var p=o.tileset.tiles[l];if(p.id.startsWith("*")){var d=i.createNewTile(p.bitmap);o.tileset.tiles[l]=d}else p.jresData||(o.tileset.tiles[l]=i.resolveTile(p.id))}return u.sprite.trimTilemapTileset(o),this.isTilemapLiteral?(i.updateAsset(e),"typescript"===this.fileType?"tilemap`"+e.id+"`":'tilemap("""'+e.id+'""")'):u.sprite.encodeTilemap(o,"typescript"===this.fileType?"typescript":"python")},t.prototype.getFieldEditorId=function(){return"tilemap-editor"},t.prototype.getOptions=function(){return{initWidth:16,initHeight:16,blocksInfo:this.host.blocksInfo()}},t.prototype.getCreateTilemapRange=function(){for(var e,t=this.editrange.getStartPosition(),r=this.editrange.getEndPosition(),i=1;;){e=new monaco.Range(r.lineNumber,r.column,r.lineNumber+1,0);for(var o=this.host.getText(e),n=0;n<o.length;n++)if("("===o.charAt(n))i++;else if(")"===o.charAt(n)&&0===--i){var s=new monaco.Position(r.lineNumber,r.column+n+2);return monaco.Range.fromPositions(t,s)}if((r=e.getEndPosition()).lineNumber>t.lineNumber+20)return null}},t}(e.MonacoReactFieldEditor),e.MonacoTilemapEditor=r,e.tilemapEditorDefinition={id:t,foldMatches:!0,alwaysBuildOnClose:!0,glyphCssClass:"sprite-focus-hover ms-Icon ms-Icon--Nav2DMapView",heightInPixels:510,weight:5,matcher:{searchString:'(?:tilemap(?:8|16|32)?\\s*(?:`|\\(""")(?:[ a-zA-Z0-9_]|\\n)*\\s*(?:`|"""\\)))|(?:tiles\\s*\\.\\s*createTilemap\\s*\\([^\\)]+\\))',isRegex:!0,matchCase:!0,matchWholeWord:!1},proto:r},e.registerMonacoFieldEditor(t,e.tilemapEditorDefinition)}(pxt||(pxt={}));