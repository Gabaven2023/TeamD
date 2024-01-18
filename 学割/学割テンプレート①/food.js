function OnLinkClik() {
var api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=D2YcTc7gKSv6aDkkG3W4y40HhDlWFrVWmo80TfUA9LrCoIHRQ-G3TcNGK-33PQToCRdTqp-Xi1ncbiMbJIS37F8Apr_EEakhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKGrYTmFnYqCsI6g6S5ZH3ioza4E2X8_N99-q7q3QkG7Frc3W9ldQohRM96rG2XET-NmloAlyaKOxDG9w4Pg3nyjiKe7BFLCdg&lib=MzeJKs2U2Bkt5TS6JDqbx4fZBGI2UAf_X'; //生成したAPIのURLを指定

 fetch(api_url)
 .then(function (fetch_data) {
   return fetch_data.json();
 })
 .then(function (json) {
   for (var i in json) {
     // jsonの要素数だけ回す
    
     if(id==1){
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
            ;
        }

    }
	
	
  });
function removeLi() {
  var first = document.getElementsByClassName('product-item js-based');
  first.remove();
}
}
