(function (){
	var fb = new Firebase("https://scorching-inferno-1104.firebaseio.com");
	
	fb.on("value", function(data) { 
		alert(data.val().name + " : " + data.val().age);
	});

})();