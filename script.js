function findex(list) {
	let result = [];
	for (let[key,value] of Object.entries(list)) {
		result.push(key);
	}
	return result;
}

function lc(){
	localStorage.clear()
}

let config;

if(localStorage['configuration']){
	config = JSON.parse(localStorage['configuration'])
}else{
	config = {
		"vertion":{
			"new_tab.html":"A.0",
			"script.js":"A.0"
		},
		"parm":{
			"quick-bar-on":true,
			"auto-update":true
		},
		"quick-bar-list":{
			1:{
				"title":"flamebousteur web-site",
				"img":"https://flamebousteur.github.io/favicon.ico",
				"url":"https://flamebousteur.github.io/"
			},
			2:{
				"title":"google",
				"img":"https://google.com/favicon.ico",
				"url":"https://google.com"
			}
		}
	}
}

/* search */

function sckup(e){
	if(e.key === "Enter"){
		search()
	}
}

function search(a){
	if(!a){
		a = document.getElementById("sc").value
	}
	if(a != ""){
		a = a.replace(new RegExp("&", 'g'), "%26")
		a = a.replace(new RegExp(" ", 'g'), "+")
		document.location.href = "https://www.google.com/search?q="+a
	}
}

/* parameter */

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
		qbon()
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

/*quick_bar*/

function qbon(){
	if(config["parm"]["quick-bar-on"] == false){
		document.getElementById("quick-bar").style.visibility = "hidden"
		document.getElementById("sc").style.left = "0px"
		document.getElementById("sci").style.left = "calc(45% - 35px)"
	}else{
		document.getElementById("quick-bar").style.visibility = "visible"
		document.getElementById("sc").style.left = "50px"
		document.getElementById("sci").style.left = "calc(45% + 15px)"
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

function reac(){
	config = {
		"parm":{
			"quick-bar":true,
			"auto-update":true
		},
		"quick-bar-list":{
			1:{
				"title":"flamebousteur web-site",
				"img":"https://flamebousteur.github.io/favicon.ico",
				"url":"https://flamebousteur.github.io/"
			},
			2:{
				"title":"google",
				"img":"https://google.com/favicon.ico",
				"url":"https://google.com"
			}
		}
	};
	quick_bar_g()
}

window.onload = function(){
	quick_bar_g()
}
