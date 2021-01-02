$(document).ready(function () {
    var url = window.location.href;
    let me = $('ul#menu li a');
    $(me).map(function (idx, elem) {
        if (url.includes($(elem).attr("href"))) {
            $(elem).addClass("nav-link-active");
        }
    });
}
);
