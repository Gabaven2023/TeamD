
// debounce関数
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// menu
$(window).on("load resize", debounce(function() {

			//小さな端末用
			if(window.innerWidth < 900) {	// ※ここがブレイクポイント指定箇所です
				$('body').addClass('s').removeClass('p');
				$('#menubar').addClass('d-n').removeClass('d-b');
				$('#menubar_hdr').removeClass('d-n ham').addClass('d-b');
				
			//大きな端末用
			} else {
				$('body').addClass('p').removeClass('s');
				$('#menubar').addClass('d-b').removeClass('d-n');
				$('#menubar_hdr').removeClass('d-b').addClass('d-n');
			}

}, 5));


//ハンバーガーメニューをクリックした際の処理
$(function() {
	$('#menubar_hdr').click(function() {
		$(this).toggleClass('ham');

			if($(this).hasClass('ham')) {
				$('#menubar').addClass('d-b').removeClass('d-n');
			} else {
				$('#menubar').addClass('d-n').removeClass('d-b');
			}

	});
});


// 同一ページへのリンクの場合に開閉メニューを閉じる処理
$(function() {
	$('#menubar a[href^="#"]').click(function() {
		$('#menubar').removeClass('d-b');
		$('#menubar_hdr').removeClass('ham');
	});
});


//ドロップダウンの親liタグ
$(function() {
    $('#menubar a[href=""]').click(function() {
		return false;
    });
});


//ドロップダウンメニューの処理
$(function() {

	$('#menubar li:has(ul)').addClass('ddmenu_parent');
	$('.ddmenu_parent > a').addClass('ddmenu');

		//タッチデバイス用
		$('.ddmenu').on('touchstart', function() {
			$(this).next('ul').stop().slideToggle();
			$('.ddmenu').not(this).next('ul').slideUp();
			return false;
		});

		//PC用
		$('.ddmenu_parent').hover(function() {
			$(this).children('ul').stop().slideDown();
		}, function() {
			$(this).children('ul').stop().slideUp();
		});

});


//ドロップダウンをページ内リンクで使った場合に、ドロップダウンを閉じる。
$(function() {
	$('.ddmenu_parent ul a').click(function() {
		$('.ddmenu_parent ul').slideUp();
	});
});


// スムーススクロール（※通常）
$(window).on("load resize", debounce(function() {
	var hash = location.hash;
	if(hash) {
		$('body,html').scrollTop(0);
		setTimeout(function() {
			var target = $(hash);
			var scroll = target.offset().top;
			$('body,html').animate({scrollTop:scroll},500);
		}, 5);
	}
	$('a[href^="#"]').click(function() {
		var href = $(this).attr('href');
		var target = href == '#' ? 0 : $(href).offset().top;
		$('body,html').animate({scrollTop:target},500);
		return false;
	});
}, 5));


//pagetop
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});

//popup1
$("button1").on("click", function() {
	$(".popup1")
	  .addClass("show1")
	  .fadeIn();
	// return false;
  });
  $("#close1").on("click", function() {
	$(".popup1").fadeOut();
	// return false;
  });

//popup2
$("button2").on("click", function() {
	$(".popup2")
	  .addClass("show2")
	  .fadeIn();
	// return false;
  });
  
  $("#close2").on("click", function() {
	$(".popup2").fadeOut();
	// return false;
  });
//popup3
$("button3").on("click", function() {
	$(".popup3")
	  .addClass("show3")
	  .fadeIn();
	// return false;
  });
  
  $("#close3").on("click", function() {
	$(".popup3").fadeOut();
	// return false;
  });
//popup4
$("button4").on("click", function() {
	$(".popup4")
	  .addClass("show4")
	  .fadeIn();
	// return false;
  });
  
  $("#close4").on("click", function() {
	$(".popup4").fadeOut();
	// return false;
  });
//popup5
$("button5").on("click", function() {
	$(".popup5")
	  .addClass("show5")
	  .fadeIn();
	// return false;
  });
  
  $("#close5").on("click", function() {
	$(".popup5").fadeOut();
	// return false;
  });
//popup6
$("button6").on("click", function() {
	$(".popup6")
	  .addClass("show6")
	  .fadeIn();
	// return false;
  });
  
  $("#close6").on("click", function() {
	$(".popup6").fadeOut();
	// return false;
  });
//popup7
$("button7").on("click", function() {
	$(".popup7")
	  .addClass("show7")
	  .fadeIn();
	// return false;
  });
  
  $("#close7").on("click", function() {
	$(".popup7").fadeOut();
	// return false;
  });
//popup8
$("button8").on("click", function() {
	$(".popup8")
	  .addClass("show8")
	  .fadeIn();
	// return false;
  });
  
  $("#close8").on("click", function() {
	$(".popup8").fadeOut();
	// return false;
  });
//popup9
$("button9").on("click", function() {
	$(".popup9")
	  .addClass("show9")
	  .fadeIn();
	// return false;
  });
  
  $("#close9").on("click", function() {
	$(".popup9").fadeOut();
	// return false;
  });



// 汎用開閉処理
$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});


// トップページの「チャット対応中（#message）」のフェードイン・アウト
$(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $('#message').fadeOut();
            } else {
                $('#message').fadeIn();
            }
        });
});

//お知らせ.html

//popup11
$("button11").on("click", function() {
	$(".popup11")
	  .addClass("show11")
	  .fadeIn();
	// return false;
  });
  
  $("#close11").on("click", function() {
	$(".popup11").fadeOut();
	// return false;
  });
