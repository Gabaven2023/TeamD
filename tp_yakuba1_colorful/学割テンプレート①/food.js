var api_url = 'https://script.google.com/macros/s/AKfycbx59mwlrQBNtTzd_tmKNf7mdbT9_fVVIfk9IcTUJAwNWM5One8NEHXT4Dx3lxHYzYOi/exec'
	
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
	
		 //clone_element.querySelector('.use').textContent = "使う";
		 //clone_element.querySelector('.use').setAttribute( 'href', json[i].use );
	
		 
		 
		 base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
	
	
		}
		
		
	});
	
	
filterSelection("all")
function filterSelection(){
	let element = document.getElementById("0");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }


/*  var api_url = 'https://script.google.com/macros/s/AKfycbx59mwlrQBNtTzd_tmKNf7mdbT9_fVVIfk9IcTUJAwNWM5One8NEHXT4Dx3lxHYzYOi/exec'
  
 fetch(api_url)
 .then(function (fetch_data) {
   return fetch_data.json();
 })
 .then(function (json) {
   for (var i in json ) {
     // jsonの要素数だけ回す
     
    if(json[i].id==1){
     var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
     var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
     clone_element.classList.remove('js-based'); //複製した要素からクラス削除
 
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

	 //clone_element.querySelector('.use').textContent = "使う";
	 //clone_element.querySelector('.use').setAttribute( 'href', json[i].use );

     
     base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
    }
    else{
      break
    }


    }
	
	
  });

*/

}