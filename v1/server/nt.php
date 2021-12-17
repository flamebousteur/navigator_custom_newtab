<?php
header("Access-Control-Allow-Origin: *");
// header("Content-type: text/json; charset=UTF-8");

$result = array(
	"status" => 200,
	"more" => "OK",
	"time" => floor(microtime(true) * 1000)
);

if(isset($_GET['t'])){
	$t = intval($_GET['t']);
	$result["latence"] = $result["time"] - $t;
}else{
	$t = 0;
}

function ifile($f,$in){
	if(file_exists($f)){
		if($in != false){
			$ff = fopen($f,'w');
			fwrite($ff,$in);
			fclose($ff);
			return true;
		}else{
			return file_get_contents($f);
		}
	}else{
		$tp = fopen($f,'w');
		$result = '';
		if($tp != true){
			$result = false;
		}else{
			$result = ifile($f,$in);
		}
		fclose($tp);
		return $result;
	}
}

// print_r($_SERVER);

if(isset($_GET['s'])){
	if($_GET['s'] == 'out'){
		$result["config"] = ifile("./data.json",false);
		$f = ifile("./file.json",false);
		if($f != false){
			$f = json_decode($f,true);
			if(isset($f["last_modif"])){
				$result["status"] = 201;
				$result["more"] = "OK";
				$result["data"] = array(
					"last_modif" => $f["last_modif"]
				);
			}
		}else{
			$result["status"] = 500;
			$result["more"] = "Internal Server Error";
		}
	}else if($_GET['s'] == 'in'){
		if(isset($_POST['f'])){
			if(isset($_POST['t'])){
				$p = json_decode(ifile("./file.json",false),true);
				if($p["last_modif"] < $_POST['t']){
					if(ifile("./data.json",$_POST['f']) != false){
						$p["last_modif"] = $t;
						ifile("./file.json",json_encode($p));
						$result["status"] = 201;
						$result["more"] = "Created";
					}else{
						$result["status"] = 500;
						$result["more"] = "Internal Server Error";
					}
				}
			}
		}else{
			$result["status"] = 400;
			$result["more"] = "Bad Request";
		}
	}else if($_GET['s'] == 'start'){
		ifile("./data.json","{}");
		ifile("./file.json",'{"last_modif":0}');
		$result["status"] = 201;
		$result["more"] = "server files reset";
	}else if($_GET['s'] == 'in_out'){
		in();
		out();
	}
}
echo json_encode($result);
?>
