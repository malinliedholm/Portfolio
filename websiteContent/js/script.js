var currentVisibleCard = null;
var hide = false;

function clickProjectCard(cardparam) {

    var content = document.getElementById(cardparam);

    if(content.classList.contains('is-hidden')) {
        hide = false
        currentVisibleCard = content;
    }
    else {
        hide = true;
    }

    if (hide) {
        content.classList.add('is-hidden');
      }
    else {
        content.classList.remove('is-hidden');
        
        /*document.getElementById(content.id).scrollIntoView({behavior: 'smooth'});*/
        setTimeout(function () {
            content.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
       }, 260);
    }

    /*
    if(currentVisibleCard != null) {
        currentVisibleCard.style.display = 'none';
    }

    currentVisibleCard = document.getElementById(tagparam);
    currentVisibleCard.style.display = 'block';
    
    document.getElementById(currentVisibleCard.id).scrollIntoView({behavior: 'smooth'});
    */

}

function closeProjectInfo(tagparam, scrollbackparam) {
    
    var scrollBack = document.getElementById(scrollbackparam);
    //document.getElementById(scrollBack.id).scrollIntoView({behavior: 'smooth'});

    //currentVisibleCard.style.height = '0px';
    // currentVisibleCard.style.display = 'none';
    //currentVisibleCard = null;
}