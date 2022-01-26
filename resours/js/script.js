/* MIXITUP*/
var mixer = mixitup('.process-grid');

//wow 
wow = new WOW(
    {
    

    }
    )
    wow.init();


//hamberger
function openMenu(){
    document.getElementById('navber').style.width="100%";
}
function closeMenu(){
    document.getElementById('navber').style.width="0%";
}

//scroll-smoth
$('.hamberger-menu li a').on('click' , function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});