console.log("programe start")

const page_index = '<div id="quick-bar">'+
'		<div id="ele"></div>'+
'		<div style="height:30px;"></div>'+
'		<div id="add-ele" class="quick-ele">'+
'			<svg class="cross" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'+
'		</div>'+
'	</div>'+
'	<div class="chear">'+
'		<select id="sct">'+
'			<option value="https://www.google.com/search?q=">google</option>'+
'			<option value="https://www.youtube.com/results?q=">youtube</option>'+
'			<option value="https://github.com/search?q=">github</option>'+
'		</select>'+
'		<input id="sc" placeholder="search on google" type="search"/>'+
'		<svg id="sci" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px" fill="#FFF"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>'+
'	</div>'+
'	<svg id="open" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF"><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>'+
'	<div id="parm">'+
'		<div class="close">'+
'			<span id="pclose">close</span>'+
'		</div>'+
'		<div class="in">'+
'			<div id="conf" class="confn"></div><br/>'+
'			<button id="update-but">update</button>'+
'		</div>'+
'		<div class="fhr"></div>'+
'		<div id="more"></div>'+
'	</div>'+
'	<div id="popup"></div>';

const page_parm ='<a id="back">index</a>'+
'<div id="pselector">'+
'	<div>'+
'		<img src="https://google.com/favicon.ico">'+
'		<span>général</span>'+
'	</div>'+
'</div>'

/*lib*/
function findex(list) {
	let result = [];
	for (let[key,value] of Object.entries(list)) {
		result.push(key);
	}
	return result;
}

var flamebousteur_lib_msgs = [["",0.001]]
var flamebousteur_lib_msg_on = true
function msg(txt,time){
	if(!document.getElementById("flamebousteur_lib_msg")){
		document.body.innerHTML = '<div id="flamebousteur_lib_msg">msg</div>'+document.body.innerHTML
	}
	if(typeof time != 'undefined'){
		time = time * 1000
	}else{
		time = 1000
	}
	flamebousteur_lib_msgs.push([txt,time])
	function msgb(){
		flamebousteur_lib_msg_on = false
		let msg = document.getElementById("flamebousteur_lib_msg")
		msg.style.opacity = "1";
		msg.innerHTML = flamebousteur_lib_msgs[0][0]
		window.setTimeout(msgp, flamebousteur_lib_msgs[0][1]);
		function msgp(){
			msg.style.opacity = "0";
			window.setTimeout(function() {
				flamebousteur_lib_msg_on = true;
				if(flamebousteur_lib_msgs[0]){
					msgb(flamebousteur_lib_msgs)
				}
			},1000)
			msg.innerHTML = ''
		}
		flamebousteur_lib_msgs.shift()
	}
	if(flamebousteur_lib_msg_on){
		msgb()
	}
}
/*end lib*/

const dconfig = {
	"parm":{
		"quick-bar-on":true,
		"auto-update":true,
		"dev-mode":false
	},
	"quick-bar-list":{
		1:{
			"title":"flamebousteur web-site",
			"img":"https://flamebousteur.github.io/favicon.ico",
			"url":"https://flamebousteur.github.io/"
		},
		2:{
			"title":"google",
			"img":"https://www.google.com/favicon.ico",
			"url":"https://google.com"
		}
	},
	"more":{
		// "more parameter":{
			// "name":"more parameter",
			// "fun":"mp()"
		// }
	}
}

let config;

if(localStorage['configuration']){
	config = JSON.parse(localStorage['configuration'])
}else{
	config = dconfig
}

function jsls(){
	localStorage['configuration'] = JSON.stringify(config)
}

function gclick(){
	document.getElementById("add-ele").onclick = function (){addele()}
	document.getElementById("open").onclick = function (){parm(1)}
	document.getElementById("pclose").onclick = function (){parm()}
	document.getElementById("update-but").onclick = function (){}
	document.getElementById("sci").onclick = function (){search()}
	document.getElementById("sc").onkeyup = function (){sckup(event)}
}

/* search */
function sckup(e){
	if(e.key == "Enter"){
		search()
	}else{
		/*
		a = document.getElementById("sc").value
		xhr too the google api "https://www.google.com/complete/search?q="+input+"&client=gws-wiz&xssi=t&pq="+input
		*/
	}
}

function search(a){
	let t = document.getElementById("sct").value
	if(!a){
		a = document.getElementById("sc").value
	}
	if(a != ""){
		a = a.replace(new RegExp("&", 'g'), "%26")
		a = a.replace(new RegExp("/", 'g'), "%2F")
		a = a.replace(new RegExp(" ", 'g'), "+")
		document.location.href = t+a
	}
}

/* parameter */
function chec_parm(){
	qbon()
	dvon()
}

function parm_g(){
	let cnf = document.getElementById("conf")
	let a = true
	cnf.innerHTML = ""
	findex(config["parm"]).forEach(element => {
		cnf.innerHTML += '<span>'+element+'</span>'+
'<div onclick="parm(2,\''+element+'\')" id="'+element+'">'+
'	<div class="inin"></div>'+
'</div>'
		let cn = document.getElementById(element)
		if(config["parm"][element] == true){
			cn.className = "input-chec input"
		}else{
			cn.className = "input"
		}
	})
}

function parm(a,b){
	if(a == 2){
		let cn = document.getElementById(b)
		if(cn.className == "input"){
			cn.className = "input-chec input"
			config["parm"][b] = true
		}else{
			cn.className = "input"
			config["parm"][b] = false
		}
		quick_bar_g()
		chec_parm()
	}else{
		let p = document.getElementById('parm').style
		if(a == 1){
			p.opacity = "1"
			p.visibility = "visible"
		}else{
			p.opacity = "0"
			window.setTimeout(function(){
				p.visibility = "hidden"
			},250);
		}
	}
}

function moreparm_g(){
	document.getElementById("more").innerHTML = ""
	findex(config["more"]).forEach(element => {
		document.getElementById("more").innerHTML += '<a onclick="'+config["more"][element]["fun"]+'">'+config["more"][element]["name"]+'</a>'
	})
	return true
}

function mp(){
	document.getElementById("innerpage").innerHTML = page_parm
	history.pushState("", "", "#parm")
	document.getElementById("back").onclick = function (){pr()}
}

/*quick_bar*/
function qbon(){
	if(config["parm"]["quick-bar-on"] == false){
		document.getElementById("quick-bar").style.visibility = "hidden"
		document.getElementById("sc").style.left = "0px"
		document.getElementById("sci").style.left = "calc(45% - 35px)"
		document.getElementById("sct").style.left = "0px"
	}else{
		document.getElementById("quick-bar").style.visibility = "visible"
		document.getElementById("sc").style.left = "50px"
		document.getElementById("sci").style.left = "calc(45% + 15px)"
		document.getElementById("sct").style.left = "50px"
	}
}

function quick_bar_g(){
	localStorage['configuration'] = JSON.stringify(config)
	let ele = document.getElementById("ele");
	ele.innerHTML = ""
	findex(config["quick-bar-list"]).forEach(element => {
		ele.innerHTML += '<div class="void"></div>'+
'<svg onclick="addele('+element+')" class="qbm" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" width="20px" viewBox="0 0 24 24" fill="#fff"><path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z"/><path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z"/></svg>'+
'<svg onclick="quick_bar_d('+element+')" class="qbd" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="#FFF"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'+
'<a href="'+config["quick-bar-list"][element]["url"]+'"><div class="quick-ele inner-ele"><img src="'+config["quick-bar-list"][element]["img"]+'"/><br><span class="text">'+config["quick-bar-list"][element]["title"]+'</span></div></a>';
	})
}

function addele(a){
	let b = findex(config["quick-bar-list"]).length + 1;
	if(a){
		b = a;
	}

	let c = document.getElementById("popup")

	c.innerHTML = '<div id="close">close</div>'+
'<input placeholder="title" id="title"/><br/>'+
'<input placeholder="image" id="image"/><br/>'+
'<select id="protocol">'+
'    <option value="">custom</option>'+
'    <option value="file:///">file:///</option>'+
'    <option value="http://">http://</option>'+
'    <option value="https://">https://</option>'+
'</select>'+
'<input placeholder="url" id="url"/><br/>'+
'<button id="ok">ok</button>';

	if(a){
		document.getElementById("title").value = config["quick-bar-list"][b]["title"]
		document.getElementById("image").value = config["quick-bar-list"][b]["img"]
		document.getElementById("url").value = config["quick-bar-list"][b]["url"]
	}

	c.style.opacity = "1"
	c.style.visibility = "visible"
	function close(){
		c.innerHTML = ''
		c.style.opacity = "0"
		c.style.visibility = "hidden"
	}
	document.getElementById("ok").onclick = function(){
		config["quick-bar-list"][b] = {
			"title":document.getElementById("title").value,
			"img":document.getElementById("image").value,
			"url":document.getElementById("protocol").value+document.getElementById("url").value
		};
		quick_bar_g()
		close()
	}
	document.getElementById("close").onclick = function(){
		close()
	}
}

function quick_bar_d(id){
	delete config["quick-bar-list"][id]
	quick_bar_g()
}

/* dev function */
function dvon(){
	if(config["parm"]["dev-mode"]){
		config["more"]["resets configuration"] = {"name":"resets configuration","fun":"reac()"}
	}else{
		delete config["more"]["resets configuration"]
	}
	moreparm_g()
	jsls()
}

function reac(){
	config = dconfig
	jsls()
	gall()
}
function gall(){
	quick_bar_g()
	parm_g()
	chec_parm()
}

function pr(){
	document.getElementById("innerpage").innerHTML = page_index
	gclick()
	gall()
}

window.onload = function(){
	if(location.hash == "#parm"){
		mp()
	}else{
		pr()
	}
}
