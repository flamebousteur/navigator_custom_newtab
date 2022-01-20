console.log("programe start")

const page = {
	"index":{
		"inner":'<div id="quick-bar">'+
			'	<div id="ele"></div>'+
			'	<div id="add-ele" onclick="addele()" class="quick-ele">'+
			'		<svg class="cross" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'+
			'	</div>'+
			'</div>'+
			'<div id="popup"></div>'+
			'<div align="center" id="inner_task"></div>',
		"eval":function(){
			location.hash = '#'
			activpage = "pr"
			generatetask()
			quick_bar_g()
		}
	},
	"parm":{
		"inner":'<h2>parameters</h2>'+
			'<input type="text" id="inp1">'+
			'<input id="inp2" type="button" value="save">',
		"eval":function(){
			location.hash = '#parm'
			activpage = "mp"
			document.getElementById('inp1').value = config.syncro.def
			document.getElementById("inp2").onclick = function(){
				if(document.getElementById('inp1').value){
					config.syncro.def = document.getElementById('inp1').value
					jsls()
				}
			}
		}
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
		"syncro":true,
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
		"def":"https://www.fjmessgeraete.ch/59d71404-d59e-11eb-b8bc-0242ac130003/Lucas/nt.php",
		"dev":""
	}
}

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

/*quick_bar*/

function quick_bar_g(){
	jsls()
	let ele = document.getElementById("ele");
	ele.innerHTML = ""
	for(element in config["quick-bar-list"]){
		let iele = document.createElement('div')
		iele.innerHTML += '<svg onclick="addele('+element+')" class="qbm" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" width="20px" viewBox="0 0 24 24" fill="#fff"><path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z"/><path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z"/></svg>'+
'<svg onclick="quick_bar_d('+element+')" class="qbd" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="#FFF"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'+
'<a href="'+config["quick-bar-list"][element]["url"]+'"><div class="quick-ele inner-ele"><img src="'+config["quick-bar-list"][element]["img"]+'"/><br><span class="text">'+config["quick-bar-list"][element]["title"]+'</span></div></a>';
	ele.appendChild(iele)
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
		let s = '<div onclick="deltask('+i+')" id="del"><div></div></div>'
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
/*end task*/

function syncro(type){
	if(config["parm"]["syncro"] == true){
		let ready = false
		let xhr = new XMLHttpRequest()
		let url;
		if(config["syncro"]["def"] != ""){
			url = config["syncro"]["def"]+"?s="+type+"&t="+Date.now()
			ready = true
		}else{
			ready = false
			clog.add("server not set","logwarn")
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

/*other*/
var activpage;
function gpage(p){
	document.getElementById("innerpage").innerHTML = page[p]["inner"]
	page[p]["eval"]()
}

function cpage(){
	switch(location.hash){
		case 'parm':
			gpage('parm')
			break;
		default:
			gpage('index')
			break;
	}
}

var xDown = null;
var yDown = null;
document.addEventListener('touchstart', function(e){
	if(e.target.id == "innerpage" || e.target.nodeName == "HTML"){
		function getTouches(e) {
			return e.touches || e.originalEvent.touches;
		}
		const firstTouch = getTouches(e)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	}
}, false);

var animation = true
document.addEventListener('touchmove', function(e){
	let x = xDown
	let y = yDown
	var xUp = e.touches[0].clientX;
	var yUp = e.touches[0].clientY;
	var xDiff = x - xUp;
	var yDiff = y - yUp;
	if(xDown || yDown){
		if( Math.abs( xDiff ) > Math.abs( yDiff )){
			if(xDiff > 0){
				/* left swipe */
				if(activpage != "mp"){
					if(animation){
						let b = document.getElementById("innerpage")
						b.id = ""
						let a = document.createElement("div")
						a.id = "innerpage"
						a.style.opacity = "0"
						a.style.left = "400px"
						a.className = "innerpage"
						document.body.appendChild(a)
						b.style.left = "-400px"
						b.style.opacity = "0"
						gpage("parm")
						animation = false
						setTimeout(function(){
							a.style.left = "0px"
							a.style.opacity = "1"
							setTimeout(function(){
								animation = true
								document.body.removeChild(b)
							},500)
						},10)
					}
				}
			}else{
				/* right swipe */
				if(activpage != "pr"){
					if(animation){
						let b = document.getElementById("innerpage")
						b.id = ""
						let a = document.createElement("div")
						a.id = "innerpage"
						a.style.opacity = "0"
						a.style.left = "-400px"
						a.className = "innerpage"
						document.body.appendChild(a)
						b.style.left = "400px"
						b.style.opacity = "0"
						gpage("index")
						animation = false
						setTimeout(function(){
							a.style.left = "0px"
							a.style.opacity = "1"
							setTimeout(function(){
								animation = true
								document.body.removeChild(b)
							},500)
						},10)
					}
				}
			}
		}else{
			if(yDiff > 0){
				/* up swipe */ 
			}else{
				/* down swipe */
			}
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
}, false);

window.onload = function(){
	clog.add("starting programme","lognormal","charge page: "+location.hash)
	cpage()
	syncro("out")
}