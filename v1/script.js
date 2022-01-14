console.log("programe start")

const page = {
	"index":'<div id="quick-bar">'+
		'	<div id="ele"></div>'+
		'	<div style="height:30px;"></div>'+
		'	<div id="add-ele" class="quick-ele">'+
		'		<svg class="cross" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'+
		'	</div>'+
		'</div>'+
		'<div class="chear">'+
		'	<select id="sct">'+
		'	</select>'+
		'	<input id="sc" placeholder="search" type="search"/>'+
		'	<svg id="sci" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px" fill="#FFF"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>'+
		'</div>'+
		'<svg id="open" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF"><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>'+
		'<div id="parm">'+
		'	<div class="close">'+
		'		<span id="pclose">close</span>'+
		'	</div>'+
		'	<div class="in">'+
		'		<div id="conf" class="confn"></div><br/>'+
//		'		<button id="update-but">update</button>'+
		'		<button onclick="mp()">parameter</button>'+
		'	</div>'+
		'	<div class="fhr"></div>'+
		'</div>'+
		'<div id="popup"></div>'+
		'<div align="center" id="inner_task"></div>',
// parm
	"parm":{
		"index":'<a id="back">index</a>'+
			'<div id="pselector"></div>'+
			'<div id="pin"></div>'+
			'<div id="page"></div>',
		"general":{
			"in":'',
			"eval":function(){}
		},
		"display":{
			"in":'<span>quick-bar-on</span><div onclick="parm(2,\'quick-bar-on\');page.parm.display.eval();" id="quick-bar-on" class="input"><div class="inin"></div></div>'+
			'<span>task-on</span><div onclick="parm(2,\'task-on\');page.parm.display.eval();" id="task-on" class="input"><div class="inin"></div></div>',
			"eval":function(){
				let a = ["quick-bar-on","task-on"]
				a.forEach(element => {
					let cn = document.getElementById(element)
					if(config["parm"][element] === true){
						cn.className = "input-chec input"
					}else{
						cn.className = "input"
					}
				})
			}
		},
		"synchronization":{
			"in":'<span>private server</span><div onclick="parm(2,\'syncro\');page.parm.synchronization.eval();" id="syncro" class="input"><div class="inin"></div></div><input id="input1" placeholder="http://example.com/sync.php" type="text"><div class="voidw"></div><button id="input2">save</button>',
			"eval":function(){
				document.getElementById('input1').value = config['syncro']['def']
				document.getElementById('input2').onclick = function(){
					if(config["parm"]["syncro"] === true){
						config['syncro']['def'] = document.getElementById('input1').value;
						jsls();
					}
				}
				let cn = document.getElementById("syncro")
				if(config["parm"]["syncro"] === true){
					cn.className = "input-chec input"
					document.getElementById('input1').disabled = false
				}else{
					cn.className = "input"
					document.getElementById('input1').disabled = true
				}
			}
		},
		"dev":{
			"in":'<span>synchronization server</span><input id="input1" placeholder="http://example.com/sync.php" type="text"><div class="voidw"></div><button id="input2">save</button>'+
			'<br><br><button class="alert" onclick="reac()">reset configuration</button><br><button onclick="storage()">storage</button>',
			"eval":function(){
				document.getElementById('input1').value = config['syncro']['dev']
				document.getElementById('input2').onclick = function(){
					if(config["parm"]["syncro"] === true){
						config['syncro']['dev'] = document.getElementById('input1').value;
						jsls();
					}
				}
				if(config["parm"]["syncro"] === true){
					document.getElementById('input1').disabled = false
				}else{
					document.getElementById('input1').disabled = true
				}
			}
		}
	},
	"advanced":{
		"log":'<pre id="log"></pre><input placeholder="value" id="in1"><input placeholder="comment" id="in2"><input type="button" value="->" id="in3">',
		"storage":'<a onclick="pr()" id="back">index</a><div id="pselector"></div><div id="pin"></div><div id="page"></div>'
	}
}
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

const clog = {
	"log":"",
	"add":function(text,cn,comment){
		let c;
		if(comment){
			c = " : "+comment
		}else{
			comment = ""
			c = ""
		}
		a = new Date()
		this.log += "["+a.getDate()+"/"+a.getMonth()+1+"/"+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()+"]: "+text+c+"\n"
		let logele = document.createElement("div")
		let tele = document.createElement("span")
		tele.innerHTML = text
		logele.appendChild(tele)
		logele.className = "clog "+cn
		logele.onclick = function(){
			let ele;
			if(!document.getElementById("clogpopup")){
				ele = document.createElement("div")
				ele.id = "clogpopup"
				document.body.appendChild(ele)
			}else{
				ele = document.getElementById("clogpopup")
			}
			ele.innerHTML = text+":<br>"+comment
			let xele = document.createElement("div")
			xele.innerHTML = "close"
			xele.onclick = function(){
				ele.style.visibility = "hidden"
				ele.innerHTML = ""
			}
			ele.appendChild(xele)
			ele.style.visibility = "visible"
		}
		if(!document.getElementById("clog")){
			let ele = document.createElement("div")
			ele.id = "clog"
			document.body.appendChild(ele)
		}
		document.getElementById("clog").appendChild(logele)
		window.setTimeout(function(){
			logele.style.opacity = "0"
			window.setTimeout(function(){
				logele.remove()
			},1000)
		},1000)
	},
	"clear":function(){
		this.log = ""
		document.getElementById("clog").innerHTML = ""
	}
}


/*end lib*/

const dconfig = {
	"parm":{
		"quick-bar-on":true,
		"task-on":true,
//		"auto-update":true,
		"syncro":false,
		"advanced-storage":false,
		"dev-mode":false
	},
	"quick-bar-list":{
		1:{
			"title":"flamebousteur web-site",
			"img":"https://flamebousteur.github.io/favicon.ico",
			"url":"https://flamebousteur.github.io/"
		}
	},
	"search":{
		"type":{
			"google":{
				"url":"https://www.google.com/search?q="
			},
			"youtube":{
				"url":"https://www.youtube.com/results?q="
			},
			"github":{
				"url":"https://github.com/search?q="
			}
		},
		"sselect":"google"
	},
	"task":[],
	"syncro":{
		"def":"",
		"dev":""
	}
}

let parm_open = false;

let config;
if(localStorage['configuration']){
	config = JSON.parse(localStorage['configuration'])
}else{
	config = dconfig
}

let ddata = {
	"last_modif":0
}

let data;
if(localStorage['data']){
	data = JSON.parse(localStorage['data'])
}else{
	data = ddata
}


function jsls(){
	if(localStorage['configuration'] != JSON.stringify(config)){
		localStorage['configuration'] = JSON.stringify(config)
		data["last_modif"] = Date.now()
		localStorage['data'] = JSON.stringify(data)
		syncro("in")
	}
}

let inputfocus = true;

function keycode(e){
	let w = e.target["nodeName"]
	if(w == "BODY"){
		if(e.ctrlKey == true){
			switch(e.key){
				case 'Tab':
					if(parm_open){
						parm()
					}else{
						parm(1)
					}
					break;
			}
		}else{
			switch(e.key){
				default:
					if(e.key.length == 1){
						if(inputfocus){
							document.getElementById("sc").focus()
							document.getElementById("sc").value += e.key
						}
					}
					break;
			}
		}
	}
}

function gclick(){
	document.getElementById("add-ele").onclick = function (){addele()}
	document.getElementById("open").onclick = function (){parm(1)}
	document.getElementById("pclose").onclick = function (){parm()}
//	document.getElementById("update-but").onclick = function (){}
	document.getElementById("sci").onclick = function (){search()}
	document.getElementById("sc").onkeyup = function (){sckup(event)}
	document.body.onkeyup = function (){keycode(event)}
}

let charge_bar_on = 1
function charge_bar(t){
	let cb = document.getElementById("charge_bar").style
	if(t == 1){
		charge_bar_on = 1
	}else{
		charge_bar_on = 0
	}
	if(charge_bar_on == 0){
		cb.visibility = "hidden"
	}else{
		cb.visibility = "visible"
	}
	function a(){
		if(charge_bar_on == 1){
			cb.backgroundPositionX = "0px"
			window.setTimeout(function(){
				b();
			},1000)
		}
	}
	function b(){
		if(charge_bar_on == 1){
			cb.backgroundPositionX = "1000px"
			window.setTimeout(function(){
				a()
			},1000)
		}
	}
	b()
}

/* search */
function sckup(e){
	if(e.key == "Enter"){
		search()
	}else if(e.key == "PageDown"){
	}else if(e.key == "PageUp"){
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

function g_search_type(){
	let sct = document.getElementById("sct")
	sct.innerHTML = ''
	for(element in config["search"]["type"]){
		let selected = ""
		if(element == config["search"]["selects"]){
			selected = "selected"
		}
		sct.innerHTML += '<option '+selected+' value="'+config["search"]["type"][element]["url"]+'">'+element+'</option>'
	}
}

/* parameter */
function chec_parm(){
	qbon()
	tskon()
}

function parm_g(){
	let cnf = document.getElementById("conf")
	cnf.innerHTML = ""
	for(element in config["parm"]){
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
	}
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
		if(location.hash == ""){
			quick_bar_g()
			chec_parm()
		}
		jsls()
	}else{
		let p = document.getElementById('parm').style
		if(a == 1){
			parm_open = true
			p.opacity = "1"
			p.visibility = "visible"
		}else{
			parm_open = false
			p.opacity = "0"
			window.setTimeout(function(){
				p.visibility = "hidden"
			},250);
		}
	}
}

function openparm(p){
	document.getElementById("pin").innerHTML = page["parm"][p]["in"]
	page["parm"][p]["eval"]()
	document.getElementById("page").innerHTML = "<span>"+p+"</span>"
}

function mp(){
	let pag = ["general","display","synchronization"]
	document.getElementById("innerpage").innerHTML = page["parm"]["index"]
	let sel = document.getElementById("pselector")
	history.pushState("", "", "#parm")
	document.getElementById("back").onclick = function (){pr()}
	pag.forEach(element =>{
		sel.innerHTML += '<div onclick="openparm(\''+element+'\')"><span>'+element+'</span></div>'
	})
	if(config["parm"]["dev-mode"] == true){
		sel.innerHTML += '<div onclick="openparm(\'dev\')"><span>dev</span></div>'
	}
	openparm('general')
}

/*quick_bar*/
function qbon(){
	if(config["parm"]["quick-bar-on"] == false){
		document.getElementById("quick-bar").style.visibility = "hidden"
		document.getElementById("sc").style.left = "100px"
		document.getElementById("sci").style.left = "calc(45% + 55px)"
		document.getElementById("sct").style.left = "100px"
	}else{
		document.getElementById("quick-bar").style.visibility = "visible"
		document.getElementById("sc").style.left = "150px"
		document.getElementById("sci").style.left = "calc(45% + 110px)"
		document.getElementById("sct").style.left = "150px"
	}
}

function quick_bar_g(){
	jsls()
	let ele = document.getElementById("ele");
	ele.innerHTML = ""
	for(element in config["quick-bar-list"]){
		ele.innerHTML += '<div class="void"></div>'+
'<svg onclick="addele('+element+')" class="qbm" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" width="20px" viewBox="0 0 24 24" fill="#fff"><path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z"/><path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z"/></svg>'+
'<svg onclick="quick_bar_d('+element+')" class="qbd" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="#FFF"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'+
'<a href="'+config["quick-bar-list"][element]["url"]+'"><div class="quick-ele inner-ele"><img src="'+config["quick-bar-list"][element]["img"]+'"/><br><span class="text">'+config["quick-bar-list"][element]["title"]+'</span></div></a>';
	}
}

function addele(a){
	inputfocus = false
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
		c.style.visibility = "hidden"
		inputfocus = true
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

/* task */

function tskon(){
	if(config["parm"]["task-on"] == false){
		document.getElementById("inner_task").style.visibility = "hidden"
	}else{
		document.getElementById("inner_task").style.visibility = "visible"
	}
}

var task = {
	"conf":{
		"v":1
	},
	"delete":function(taskc){
		let result;
		if(config.task[taskc]){
			result = config.task.splice(taskc,1)
		}else{
			result = false
		}
		return result
	},
	"add":function(name){
		let result;
		if(name == null){
			result = false
		}else{
			result = config.task.push({"name":name,"status":0})-1
		}
		return result
	},
	"modify":function(taskc, name){
		let result;
		if(config.task[taskc]){
			if(name != ''){
				config.task[taskc] = {"name":name,"status":config.task[taskc]["status"]}
				result = name
			}else{
				result = false
			}
		}else{
				result = false
		}
		return result
	},
	"status":function(taskc, status){
		let result;
		if(config.task[taskc]){
			if(status != null){
				config.task[taskc]["status"] = status
				result = config.task[taskc]["status"]
			}else{
				result = "a"
			}
		}else{
			result = false
		}
		return result
	}
}

function generatetask(){
	document.getElementById("inner_task").innerHTML = '<div id="task"></div>'+
	'<div id="add" onclick="addtask()" align="center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg></div>'
	let i = 0
	let b = document.getElementById("task")
	for (let element in config.task) {
		let a = config.task[element]
		let s = '<svg onclick="deltask('+i+')" id="del" xmlns="http://www.w3.org/2000/svg"><path d="m13,2l-12,0c-0.55,0 -1,-0.45 -1,-1s0.45,-1 1,-1l12,0c0.55,0 1,0.45 1,1s-0.45,1 -1,1z"></path></svg>'
		let n = 1;
		let c = ""
		if(config.task[element]["status"] == 1){
			n = 0;
			c = "checked"
		}
		b.innerHTML += '<div>'+
'	<div type="button" onclick="task.status('+i+','+n+');generatetask()" class="checkbox '+c+'"></div>'+s+
'	<div onclick="mtask('+i+')" class="in" id="task_'+i+'">'+config.task[element]["name"]+'</div>'+
'</div>';
		i++
	}
	jsls()
	return i
}


function mtask(n){
	generatetask()
	document.getElementById('task_'+n).innerHTML = '<input id="task_modif" value="'+config.task[n]["name"]+'" onKeyUp="if(event.key == \'Enter\'){task.modify('+n+',document.getElementById(\'task_modif\').value);generatetask()}"/>'
	let inp = document.getElementById('task_modif')
	inp.onblur = function(){task.modify(n,document.getElementById('task_modif').value);generatetask()}
	inp.focus()
	l = inp.value.length
	inp.setSelectionRange(0, l)
}

function addtask(){
	let a = task.add("new")
	generatetask()
	mtask(a)
}

function deltask(n){
	task.delete(n)
	generatetask()
}

function syncro(type){
	if(config["parm"]["syncro"] == true){
		let ready = false
		let xhr = new XMLHttpRequest()
		let url;
		if(config["parm"]["dev-mode"] == true){
			if(config["syncro"]["dev"] != ""){
				url = config["syncro"]["dev"]+"?s="+type+"&t="+Date.now()
				ready = true
			}else if(config["syncro"]["def"] != ""){
				url = config["syncro"]["def"]+"?s="+type+"&t="+Date.now()
				ready = true
			}else{
				ready = false
				clog.add("server not set","logwarn")
			}
		}else{
			if(config["syncro"]["def"] != ""){
				url = config["syncro"]["def"]+"?s="+type+"&t="+Date.now()
				ready = true
			}else{
				ready = false
				clog.add("server not set","logwarn")
			}
		}
		if(ready == true){
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function () {
				if(xhr.readyState === 4){
					if(xhr.status == 0){
						clog.add("sommething bad append","logalert")
					}else{
						let lantence = Date.now() - t
						let rep;
						if(xhr.responseText){
							clog.add("xhr reponse","lognormal","rep: "+xhr.responseText)
							try{
								rep = JSON.parse(xhr.responseText)
							} catch {
								rep = false
							}
							if(rep != false){
								if(rep["config"]){
									if(rep["data"]["last_modif"] > data["last_modif"]){
										localStorage['configuration'] = rep["config"]
										config = JSON.parse(rep["config"])
										clog.add("update","lognormal","new configuration: "+rep["config"])
										cpage()
									}
								}
								if(rep["status"].toString().startsWith(2)){
									clog.add("status: "+rep["status"]+", "+rep["more"],"logok")
								}else{
									clog.add("status: "+rep["status"]+", "+rep["more"],"logalert")
								}
							}else{
								clog.add("server error","logalert")
							}
						}else{
							clog.add("response empty","logalert")
						}
					}
				}
			}
			clog.add("synchronization","lognormal","url: "+url)
			let t;
			if(type == "out"){
				t = Date.now()
				xhr.send()
			}else if(type == "in"){
				t = Date.now()
				xhr.send("f="+localStorage['configuration']+"&t="+data["last_modif"])
			}
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

/* storage */
var fs = {
	"file":{},
	"data":{},
	"add":function(name,cont,ourl,mime){
		if(name){
			if(cont){
				localStorage.setItem("./"+name,""+cont)
			}
			this.file[name] = {"original name":name}
			if(ourl){
				this.file[name]["original url"] = ourl
			}
			if(mime){
				this.file[name]["MIME"] = mime
			}else{
				this.file[name]["MIME"] = "text/plain"
			}
			localStorage["index"] = JSON.stringify(this.file)
			return true
		}else{
			return false
		}
	},
	"remove":function(file){
		if(this.file[file]){
			if(localStorage.getItem("./"+file)){
				localStorage.removeItem("./"+file)
			}
			delete this.file[file]
			localStorage["index"] = JSON.stringify(this.file)
			return true
		}else{
			return false
		}
	},
	"modify":function(file,cont,force){
		if(localStorage.getItem("./"+file)){
			if(this.file[file]){
				localStorage.setItem("./"+file,cont)
				return true
			}else{
				return false
			}
		}else{
			if(force != false){
				return this.add(file,cont)
			}else{
				return false
			}
		}
	},
	"rename":function(file,name){
		if(this.file[file]){
			if(this.file[name]){
				return false
			}else{
				this.file[name] = this.file[file]
				this.remove(file)
				if(localStorage.getItem("./"+file)){
					localStorage.setItem("./"+name,localStorage.getItem("./"+file))
					localStorage.remove("./"+file)
				}
				return true
			}
			return false
		}else{
			return false
		}
	},
	"getFile":function(file){
		if(localStorage.getItem("./"+file)){
			return localStorage.getItem("./"+file)
		}
	},
	"setMime":function(file,mime){
		if(localStorage.getItem("./"+file)){
			if(this.file[file]){
				this.file[file]["mime"] = ""+mime
				localStorage["index"] = JSON.stringify(this.file)
				return true
			}else{
				return false
			}
		}else{
			return false
		}
	},
	"update":function(file,url){
		if(this.file[file]){
			let xhr = new XMLHttpRequest()
			if(!url){
				if(this.file[file]["original url"]){
					xhr.open("GET", this.file[file]["original url"], true)
				}else{
					return false
				}
			}else{
				xhr.open("GET", url, true)
			}
			xhr.onreadystatechange = function () {
				if(xhr.readyState === 4 && xhr.status !== 400){
					localStorage.setItem("./"+file,xhr.responseText)
				}
			}
			xhr.send()
		}else{
			return false
		}
	},
	"getUrl":function(file){
		if(this.file[file]){
			if(this.data[file]){
				if(this.data[file]["url"]){
					return this.data[file]["url"]
				}else{
					let url;
					if(localStorage.getItem("./"+file)){
						let b = new Blob([localStorage.getItem("./"+file)],{type : this.file[file]["MIME"]})
						url = window.URL.createObjectURL(b);
					}else if(this.file[file]["original url"]){
						url = this.file[file]["original url"]
					}
					this.data[file] = {"url":url}
					return url
				}
			}else{
				let url;
				if(localStorage.getItem("./"+file)){
					let b = new Blob([localStorage.getItem("./"+file)],{type : this.file[file]["MIME"]})
					url = window.URL.createObjectURL(b);
					this.data[file] = {"url":url}
					return url
				}else if(this.file[file]["original url"]){
					url = this.file[file]["original url"]
					this.data[file] = {"url":url}
					return url
				}else{
					return false
				}
			}
		}else{
			return false
		}
	},
	"vertion":0
}
if(localStorage["index"]){
	fs.file = JSON.parse(localStorage["index"])
}else{
	fs.file = {}
}

function editfile(f){
	document.getElementById('innerfile').innerHTML = '<textarea id="in_file">'+localStorage[f]+'</textarea><button onclick="localStorage[\''+f+'\'] = document.getElementById(\'in_file\').value;storage()">save</button>'
}

function openfile(file,original){
	document.getElementById("innerfile").innerHTML = localStorage[file]
	document.getElementById("file").innerHTML = file
	if(!config.parm["advanced-storage"]){
		let act = "";
		if(fs.data[original]){
			if(fs.data[original]["url"]){
				act += '<button onclick="window.open(\''+fs.data[original]["url"]+'\',\'_blank\')">open url</button>'
			}
		}
		if(original){
			act += '<button onclick="fs.remove(\''+original+'\');storage()">delete</button>'
		}
		act += '<button onclick="editfile(\''+file+'\')">edit</button>'
		act += '<input value="'+original+'" id="inp1">'
		document.getElementById("action").innerHTML = act
		document.getElementById("inp1").onkeyup = function(){
			if(event.key == "Enter"){
				if(document.getElementById('inp1').value){
					fs.rename(original,document.getElementById('inp1').value)
					storage()
				}
			}
		}
	}
}

function storage(){
	document.getElementById("innerpage").innerHTML = page["advanced"]["storage"]
	document.getElementById("pin").style.backgroundColor = "white"
	document.getElementById("pin").innerHTML = '<div id="action"></div><div id="innerfile"></div>'
	document.getElementById("page").innerHTML = '<span id="file">storage</span><div onclick="parm(2,\'advanced-storage\');storage()" id="advanced-storage" class="input"><div class="inin"></div></div>'
	let a = ["advanced-storage"]
	a.forEach(element => {
		let cn = document.getElementById(element)
		if(config["parm"][element] === true){
			cn.className = "input-chec input"
		}else{
			cn.className = "input"
		}
	})
	let allfiles;
	if(config.parm["advanced-storage"]){
		allfiles = Object.keys(localStorage)
	}else{
		allfiles = findex(fs.file)
	}
	allfiles.forEach(function(element){
		let ele = document.createElement("div")
		ele.innerHTML = element
		ele.onclick = function(){
			let a = element
			if(!config.parm["advanced-storage"]){
				a = "./"+element
			}
			openfile(a,element)
		}
		document.getElementById("pselector").appendChild(ele)
	})
	if(!config.parm["advanced-storage"]){
		let ele = document.createElement("div")
		ele.innerHTML = "--add new file--"
		ele.onclick = function(){
			fs.add("unname")
			storage()
		}
		document.getElementById("pselector").appendChild(ele)
	}
}

/* dev function */
function reac(){
	config = dconfig
	jsls()
	pr()
}

function gall(){
	quick_bar_g()
	generatetask()
	parm_g()
	chec_parm()
	g_search_type()
}

function logpage(){
	document.getElementById("innerpage").innerHTML = page["advanced"]["log"]
	document.getElementById("in3").onclick = function(){
		clog.add(document.getElementById("in1").value,"lognormal",document.getElementById("in2").value)
	}
	function a(){
		document.getElementById("log").innerHTML = clog.log
		window.setTimeout(a,1000)
	}
	a()
}

function pr(){
	document.getElementById("innerpage").innerHTML = page["index"]
	location.hash = '#'
	gclick()
	gall()
}

function cpage(){
	let p = location.hash
	if(p == "#parm"){
		mp()
	}else if(p == "#log"){
		logpage()
	}else if(p == "#storage"){
		storage()
	}else{
		pr()
	}
}

window.onload = function(){
	clog.add("starting programme","lognormal","charge page: "+location.hash)
	syncro("out")
	cpage()
}
