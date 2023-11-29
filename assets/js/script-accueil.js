// MOT BANNER //
document.addEventListener("DOMContentLoaded", function() {
    var dynamicWord = document.getElementById("dynamic-word");
    var words = ["voie", "réussite", "avenir"];
    var index = 0;

    function changeWord() {
        dynamicWord.classList.add("slide-out");
        setTimeout(function() {
            dynamicWord.innerHTML = words[index];
            dynamicWord.classList.remove("slide-out");
            dynamicWord.classList.add("slide-in");

            index++;
            if (index === words.length) {
                index = 0;
            }
        }, 800);
    }
setInterval(changeWord, 4000);
});
// MOT PRESTATION //
document.addEventListener("DOMContentLoaded", function() {
    var dynamicPrestation = document.getElementById("dynamic-prestation");
    var words = ["Maintenance", "Référencement", "Conception Web"];
    var index = 0;

    function changeWord() {
        dynamicPrestation.classList.add("slide-prestation-out");
        setTimeout(function() {
            dynamicPrestation.innerHTML = words[index];
            dynamicPrestation.classList.remove("slide-prestation-out");
            dynamicPrestation.classList.add("slide-prestation-in");

            index++;
            if (index === words.length) {
                index = 0;
            }
        }, 800);
    }
setInterval(changeWord, 4000);
});
// PHOTO PROPOS //
document.addEventListener("DOMContentLoaded", function() {
    var imgPropos = document.querySelector('.img-propos');
    var imgFondPropos = document.querySelector('.img-fond-propos');
    var sectionPropos = document.getElementById('propos');
    var scrollEventEnabled = true;

    function isElementInView(element) {
        var imgFondRect = imgFondPropos.getBoundingClientRect();

        return (
            imgFondRect.top <= window.innerHeight &&
            imgFondRect.bottom >= 0
        );
    }

    function adjustImagePosition() {
        if (scrollEventEnabled && isElementInView(sectionPropos)) {
            if (window.innerWidth < 1400) {
                imgPropos.style.transform = 'translateY(-28%)';
            } else if (window.innerWidth < 1200) {
                imgPropos.style.transform = 'translateY(-90%)';
            } else if (window.innerWidth < 992) {
                imgPropos.style.transform = 'translateX(-20%)';
            } else if (window.innerWidth < 767) { 
                imgPropos.style.transform = 'translateX(-20%)';
            } else {
                imgPropos.style.transform = 'translateY(-10%)';
            }
            imgPropos.style.opacity = '1';
            scrollEventEnabled = false;
        }
    }

    window.addEventListener('scroll', adjustImagePosition);
    window.addEventListener('resize', adjustImagePosition);
    adjustImagePosition();
});




