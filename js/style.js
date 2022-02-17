

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
        let impactSection = document.getElementsByClassName("impact-bg-image");
        let impactMask = document.getElementsByClassName("impact-mask");
        mask[0].style.height= "110vh";
        section[0].style.height ="110vh";
        impactSection[0].style.height = "160vh";
        impactMask[0].style.height = "160vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }

    if(window_height==640 && window_width ==360){
        let impactSection = document.getElementsByClassName("impact-bg-image");
        let impactMask = document.getElementsByClassName("impact-mask");
        impactSection[0].style.height = "120vh";
        impactMask[0].style.height = "120vh";
    }
   
}


navigationButton();
styling();
cardButtons();