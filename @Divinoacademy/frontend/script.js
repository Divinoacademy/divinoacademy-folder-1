$(document).ready(function() {

    /*-----Search Seaction------*/
    $(".search-icon").click(function() {
        $(".search-container").fadeToggle(150)
        .toggleClass("appear");
    });
    $(".close-search").click(function () {
        $(".search-container").fadeToggle("slow")
    })

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
    const test_result = document.querySelector(".test-result");
    var theme_checkbox = document.querySelector('#theme-checkbox')
    var theme_status;

    window.onload = function() {
       // webSettings.setDomStorageEnabled(true);
        var theme = localStorage.getItem('data-theme');
        if (theme == 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            theme_status = "light";
        } else if (theme == '') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
            theme_status = "light"
        } else if (theme == 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            theme_status = "dark";
            theme_checkbox.checked = true;
        }
    }

    theme_switcher.addEventListener('click', (e) => {
        console.log('theme clicked')
        toggle();
        test_result.innerText = localStorage.getItem("data-theme") || "Couldn't retrieve theme value";
    });

    function toggle () {
        if (theme_status == "light") {
            document.documentElement.classList.add('transition');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');
            theme_status = "dark";
            theme_checkbox.checked = true;
        } else if (theme_status == "dark") {
            document.documentElement.classList.add('transition');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
            theme_status = "light";
            theme_checkbox.checked = false
        }
    };


});