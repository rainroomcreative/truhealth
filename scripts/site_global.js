// ANCHOR Functions
function initNav() {
    setTimeout(() => $('.header-wrap').addClass('nav-init-animations'), 1000);
    $('.nav-hamburger').click(() => $('.header-wrap').toggleClass('nav-open'));
    $('.nav-wrapper a').click(() => $('.header-wrap').removeClass('nav-open'));
}

function initFAQs() {
    $('.question p:first-of-type').click(function() {
        $(this).parent().toggleClass('question-open');
    });
}

// ANCHOR Bootstrapping
function initAll() {
    initNav();
    initFAQs();
}

function attemptInit() {
    if(document.readyState === 'complete') {
        initAll();
    }
}

// ANCHOR script start
document.onreadystatechange = attemptInit;
attemptInit();