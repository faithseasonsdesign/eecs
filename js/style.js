

function navigationButton(){
    $('.navigation-button').click(function(){
        $(".navigation-list-outer-wrapper").slideToggle(400);
    });
}

function hideMenu(){
    $(".about-link").click(function(){
        $(".navigation-list-outer-wrapper").hide();
    })
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let mask = document.getElementsByClassName("landing-section-mask");
        let section = document.getElementsByClassName("landing-section-bg-image");
        mask[0].style.height= "110vh";
        section[0].style.height ="110vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}


navigationButton();
styling();
cardButtons();