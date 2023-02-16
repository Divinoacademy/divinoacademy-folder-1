$(document).ready(function() {

    /*----Search Result Program-------*/
    $(".search-icon").click(function() {
        $(".search-container").toggleClass("scale-in-ver-top")
        .fadeToggle("fast");
    });
    $(".close-search").click(function () {
        $(".search-container").toggleClass("scale-in-ver-top")
        .fadeToggle();
    });
    $(".clear-input").click(function () {
        $(".search-container input").val(" ");
    })
    /*----- End of Search Result-------*/

    /*------Drop-down Section------*/
    const display_1 = document.querySelector("header .drop-down-container");
    const display_2 = document.querySelector("footer .drop-down-container");
    const more_icon_1 = document.querySelector("header .more-icon");
    const more_icon_2 = document.querySelector("footer .more-icon");


    more_icon_1.addEventListener("click", () => {
        display_value(display_1, "block");
    })

    more_icon_2.addEventListener("click", () => {
        display_value(display_2, "block");
    })

    window.addEventListener("click", () => {
        display_value(display_1, "none");
        display_value(display_2, "none");
    }, true)


    const display_value = (elementTag, value) => {

        elementTag.style.display = value;
        
    }


    /*------Theme Switch Section-----*/
    const theme_switcher = document.querySelector(".theme-switch");
    const desktop_theme_switcher = document.querySelector(".desktop-theme-switch-icon");
    var theme_checkboxes = document.querySelectorAll('.theme-checkbox');
        const test_result = document.querySelector(".test-result");
    var theme_status;

    window.onload = function() {
        // webSettings.setDomStorageEnabled(true);
        var theme = localStorage.getItem('data-theme') || getCookie("theme");
        
            function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}

        if (theme == 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            theme_status = "light";
        } else if (theme == '') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
            document.cookie = "theme=dark; max-age=10000000; path=/"
            theme_status = "light"
        } else if (theme == 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            theme_status = "dark";
          checkboxFunction(true);
        }
    }

    desktop_theme_switcher.addEventListener('click', (e) => {
        console.log('theme clicked')
        toggle();
    });
    
    theme_switcher.addEventListener('click', (e) => {
        console.log('theme clicked')
        toggle();
        test_result.innerText = localStorage.getItem("data-theme") || "Couldn't retrieve theme value";
    });

   async function toggle () {
        if (theme_status == "light") {
            document.documentElement.classList.add('transition');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');
            document.cookie = "theme=dark; max-age=10000000; path=/"
            theme_status = "dark";
         await checkboxFunction(true)
        } else if (theme_status == "dark") {
            document.documentElement.classList.add('transition');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
            document.cookie = "theme=light; max-age=10000000; path=/"
            theme_status = "light";
           await checkboxFunction(false)
        }
    };
    
    const checkboxFunction = (value) => {
        for (let i = 0; i < theme_checkboxes.length; i++) {
            theme_checkboxes[i].checked = value;
        }
    }

})