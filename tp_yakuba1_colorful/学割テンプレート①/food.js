const api_url = 'https://script.google.com/macros/s/AKfycbx59mwlrQBNtTzd_tmKNf7mdbT9_fVVIfk9IcTUJAwNWM5One8NEHXT4Dx3lxHYzYOi/exec'
console.log(Object.keys(api_url).length);


function subete(){
	
    fetch(api_url)
	.then(function (fetch_data) {
	  return fetch_data.json();
	})
	.then(function (json) {
        var json_obj_length = Object.keys(api_url).length;
    	for (var i = 1;i<json_obj_length;i++) {
	    var element = document.getElementById([i]); 
        element.remove();
	
	}})

	 fetch(api_url)
	 .then(function (fetch_data) {
	   return fetch_data.json();
	 })
	 .then(function (json) {
	   for (var i in json) {
		 // jsonの要素数だけ回す
		 var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
		 var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
		 clone_element.classList.remove('js-based'); //複製した要素からクラス削除
		 clone_element.id = json[i].id
	 
		 clone_element.querySelector('img').setAttribute( 'src', json[i].image ); //src属性に取得した画像を設定
		 clone_element.querySelector('img').setAttribute( 'alt', json[i].name ); //alt属性に取得した商品名を設定
		 clone_element.querySelector('.name').textContent = json[i].name; //テキストに取得した商品名を設定
	 
		 clone_element.querySelector('.text').textContent = json[i].text;
	 
		 var jsonDataday = json[i].day;
	 
		 var dateValue = new Date(jsonDataday);
		 var year = dateValue.getFullYear();
		 var month = dateValue.getMonth() + 1; // 月は0から始まるので+1する
		 var day = dateValue.getDate();
	 
		 clone_element.querySelector('.day').textContent = "期限"+year+"/"+month+"/"+day;
		 
		 base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
	
	
		}
		
		
	});
	
}	

function gurume(){
fetch(api_url)
	.then(function (fetch_data) {
	  return fetch_data.json();
	})
	.then(function (json) {
        var json_obj_length = Object.keys(api_url).length;
		console.log(json_obj_length)
	    for (var i = 1;i<json_obj_length;i++) {
	    var element = document.getElementById([i]); 
        element.remove();
		console.log(i)
	
	}})

	fetch(api_url)
	.then(function (fetch_data) {
	  return fetch_data.json();
	})
	.then(function (json) {	
	    for (var i in json) {
		// jsonの要素数だけ回す
	       if(json[i].number==1){
    		var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
    		var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
	    	clone_element.classList.remove('js-based'); //複製した要素からクラス削除
			clone_element.id = json[i].id
			console.log(clone_element.id)
 	
   		    clone_element.querySelector('img').setAttribute( 'src', json[i].image ); //src属性に取得した画像を設定
	    	clone_element.querySelector('img').setAttribute( 'alt', json[i].name ); //alt属性に取得した商品名を設定
		    clone_element.querySelector('.name').textContent = json[i].name; //テキストに取得した商品名を設定
	
	    	clone_element.querySelector('.text').textContent = json[i].text;
	
       		var jsonDataday = json[i].day;
   	
    		var dateValue = new Date(jsonDataday);
    		var year = dateValue.getFullYear();
    		var month = dateValue.getMonth() + 1; // 月は0から始まるので+1する
    		var day = dateValue.getDate();
    	
	    	clone_element.querySelector('.day').textContent = "期限"+year+"/"+month+"/"+day;  
		
	    	base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
	       }
	       else{
	    	 continue;
	       } 
    	}
	})	
	
}


function fashon(){

	    fetch(api_url)
		.then(function (fetch_data) {
		  return fetch_data.json();
		})
		.then(function (json) {
			document.getElementById(1).remove();
		    document.getElementById(2).remove();
		    document.getElementById(3).remove();
			document.getElementById(4).remove();
		    document.getElementById(5).remove();
		    document.getElementById(6).remove();
			document.getElementById(7).remove();
		    document.getElementById(8).remove();
		    document.getElementById(9).remove();
			document.getElementById(10).remove();
			}
			
		
		)
	
		fetch(api_url)
		.then(function (fetch_data) {
		  return fetch_data.json();
		})
		.then(function (json) {	
			for (var i in json) {
			// jsonの要素数だけ回す
			   if(json[i].number==2){
				var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
				var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
				clone_element.classList.remove('js-based'); //複製した要素からクラス削除
				clone_element.id = json[i].id
				console.log(clone_element.id)
		 
				   clone_element.querySelector('img').setAttribute( 'src', json[i].image ); //src属性に取得した画像を設定
				clone_element.querySelector('img').setAttribute( 'alt', json[i].name ); //alt属性に取得した商品名を設定
				clone_element.querySelector('.name').textContent = json[i].name; //テキストに取得した商品名を設定
		
				clone_element.querySelector('.text').textContent = json[i].text;
		
				   var jsonDataday = json[i].day;
		   
				var dateValue = new Date(jsonDataday);
				var year = dateValue.getFullYear();
				var month = dateValue.getMonth() + 1; // 月は0から始まるので+1する
				var day = dateValue.getDate();
			
				clone_element.querySelector('.day').textContent = "期限"+year+"/"+month+"/"+day;  
			
				base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
			   }
			   else{
				 continue;
			   } 
			}
		})	
		
}


function market(){
fetch(api_url)
.then(function (fetch_data) {
    return fetch_data.json();
})
.then(function (json) {
	var json_obj_length = Object.keys(api_url).length;
    console.log(json_obj_length)
	for (var i = 1;i<json_obj_length;i++) {
    	var element = document.getElementById([i]); 
	    element.remove();
	    console.log(i)
	}
})

fetch(api_url)
.then(function (fetch_data) {
    return fetch_data.json();
})
.then(function (json) {	
	for (var i in json) {
		// jsonの要素数だけ回す
  	    if(json[i].number==3){
		    var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
		    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
			clone_element.classList.remove('js-based'); //複製した要素からクラス削除
			clone_element.id = json[i].id
			console.log(clone_element.id)
	 
			clone_element.querySelector('img').setAttribute( 'src', json[i].image ); //src属性に取得した画像を設定
			clone_element.querySelector('img').setAttribute( 'alt', json[i].name ); //alt属性に取得した商品名を設定
			clone_element.querySelector('.name').textContent = json[i].name; //テキストに取得した商品名を設定
	
			clone_element.querySelector('.text').textContent = json[i].text;
	
		    var jsonDataday = json[i].day;
	   
			var dateValue = new Date(jsonDataday);
			var year = dateValue.getFullYear();
			var month = dateValue.getMonth() + 1; // 月は0から始まるので+1する
			var day = dateValue.getDate();
		
			clone_element.querySelector('.day').textContent = "期限"+year+"/"+month+"/"+day;  
		
			base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
		}
		else{
		    continue;
		} 
	}
})
}


function sonota(){
var api_url = 'https://script.google.com/macros/s/AKfycbx59mwlrQBNtTzd_tmKNf7mdbT9_fVVIfk9IcTUJAwNWM5One8NEHXT4Dx3lxHYzYOi/exec'
fetch(api_url)
	.then(function (fetch_data) {
	  return fetch_data.json();
	})
	.then(function (json) {
        var json_obj_length = Object.keys(api_url).length;
	for (var i = 1;i<json_obj_length;i++) {
	    var element = document.getElementById([i]); 
        element.remove();
	
	}})

	fetch(api_url)
	.then(function (fetch_data) {
	  return fetch_data.json();
	})
	.then(function (json) {	
	    for (var i in json) {
		// jsonの要素数だけ回す
	       if(json[i].number==4){
    		var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
    		var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
	    	clone_element.classList.remove('js-based'); //複製した要素からクラス削除
			clone_element.id = json[i].id
 	
   		    clone_element.querySelector('img').setAttribute( 'src', json[i].image ); //src属性に取得した画像を設定
	    	clone_element.querySelector('img').setAttribute( 'alt', json[i].name ); //alt属性に取得した商品名を設定
		    clone_element.querySelector('.name').textContent = json[i].name; //テキストに取得した商品名を設定
	
	    	clone_element.querySelector('.text').textContent = json[i].text;
	
       		var jsonDataday = json[i].day;
   	
    		var dateValue = new Date(jsonDataday);
    		var year = dateValue.getFullYear();
    		var month = dateValue.getMonth() + 1; // 月は0から始まるので+1する
    		var day = dateValue.getDate();
    	
	    	clone_element.querySelector('.day').textContent = "期限"+year+"/"+month+"/"+day;
		
	    	base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
	       }
	       else{
	    	   continue; 
	       } 
    	}
	})	
	
}	