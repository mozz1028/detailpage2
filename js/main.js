$(function(){
    $('.pop').dblclick(function(){
        $(this).fadeOut();
    })

    var clicknum = $(".itemnum").text();

    $('.out').click(function(){
        clicknum--;
        if(clicknum < 0){
            clicknum = 0;
        }
        $(".itemnum").html(clicknum);
    });
    $('.plus').click(function(){
        clicknum++;
        $(".itemnum").html(clicknum); 
    });
    $('.inputcart').click(function(){
        alert("리바이탈라이징 수프림 유스 크림 " + clicknum + " 개를 장바구니에 넣으시겠습니까?")
    });

    $(window).scroll(function(){
        var dh = $('body').height();
        var st = $(this).scrollTop();
        var bh = $(window).scrollTop();
        console.log(st)

        if(st < 980 || st > 6200){
            $('.fix').fadeOut();

        }else if(980 < st){
            $('.fix').fadeIn();

        }

        if(st < 980){
            $('.move ul').css({'display':'flex','top':'0px','left':'0px'})
            $('.move ul img').css({'width':'300px'})
        }else{
            $('.move ul').css({'display':'inherit','top':'900px','left':'150px'});
            $('.move ul img').css({'width':'550px'})
        }
    })
})