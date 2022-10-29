var currentVisibleCard = null;
var hide = false;

function clickProjectCard(cardparam) {

    var content = document.getElementById(cardparam);

    if(content != currentVisibleCard) {

        if(currentVisibleCard != null) {
            currentVisibleCard.classList.add('is-hidden');
        }

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
    }
    else {
        setTimeout(function () {
            content.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 260);
    }

}

function closeProjectInfo(tagparam, scrollbackparam) {
    
    var scrollBack = document.getElementById(scrollbackparam);
    document.getElementById(scrollBack.id).scrollIntoView({behavior: 'smooth'});

    currentVisibleCard.classList.add('is-hidden');
    currentVisibleCard = null;
}

function onClickImage(element) {
    document.getElementById("imgToShow").src = element.src;
    document.getElementById("modalImageDisplay").style.display = "block";
  }