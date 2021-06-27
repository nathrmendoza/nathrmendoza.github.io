//ADD WORKS HERE
new Vue ({
    el : "#cat-works",
    data : {
        works : [
            //insert work datas here
            {name :"Old Portfolio", thumbSrc : "old-port-cover.PNG", tags : ["per", "html", "css", "js","jq"], 
            desc : "Quick showcase of my old portfolio, that I'm still proud of.", sitelink:"#",codelink:"https://github.com/nathrmendoza/Old-portfolio"},

            {name :"USA Shopper", thumbSrc : "usashopper.png", tags : ["emp", "html", "css", "js","jq"], 
            desc : "Simple site, was not required to add any complex animations or scripts", sitelink:"https://usashopper.ph/",codelink:"#"},

            {name :"ISOC Holdings", thumbSrc : "isocholdings.png", tags : ["emp", "html", "css", "js","jq"], 
            desc : "One of the first sites where I've applied animations on my code (open mobile nav lol).", sitelink:"https://isocholdings.com/",codelink:"#"},

            {name :"Concrete Masters Inc.", thumbSrc : "concrete-masters.png", tags : ["emp", "html", "css", "js","jq"], 
            desc : "A project that I've been given freedom to add my own animations and flare.", sitelink:"https://concretemastersinc.com/",codelink:"#"},

            {name :"Sapporo Products", thumbSrc : "sapporo.png", tags : ["emp", "html", "css", "js","jq"], 
            desc : "One of the projects I've handled with complex designs.", sitelink:"https://sapporoproducts.com/",codelink:"#"},

            {name :"Dynamic Brands International", thumbSrc : "dynamic.png", tags : ["emp", "html", "css", "js","jq"], 
            desc : "Very elegant and minimialistic design, was relatively simple to implement on code.", sitelink:"https://dynamicbrandsinternational.com/",codelink:"#"},

            {name : "Cuadro PH", thumbSrc: "cuadro.png", tags: ["emp", "html", "css", "js", "jq"],
            desc : "Very technical website, Most challenging part in development would be the frame service page.", sitelink:"https://cuadroph.com", codelink: "#"},

            {name :"OneToTree", thumbSrc: "onetotree.png", tags: ['emp', 'html', 'css','js','jq'],
            desc : "Project that I've worked on the frontend for. Fairly simple conversion.", sitelink: "https://onetotree.org", codelink: "#"},

            {name :"Economist", thumbSrc: "economist-banner.jpg", tags: ['emp', 'html', 'css', 'js', 'jq', 'php'], sitelink: "#", codelink: "#",
            desc : "Worked with a multitude of economist projects. I was responsible for making the frontend of these sites and some of the wordpress/cms/backend as well. Some of the most notable ones are Microsoft, Google India, Huawei Innovation."}
            
        ]
    }
});

//FUNCTIONS
$(document).ready(function(){
    //text animations
    $('.fadein').textillate({
        loop: false,
        autostart: true,
        in: {
            effect: 'fadeIn',
            delayScale : 2,
            delay : 40
        }
    });
    $('.message p').textillate({
        loop: false,
        autostart: false,
        in: {
            effect: 'fadeIn',
            delayScale : 1,
            delay : 50
        }
    });

    //godown 
    $("#arrow-go-down").click(function(){
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 500);
    });

    var bottomscroll = window.pageYOffset + $(window).height();
    var runtext = false;
    $(window).scroll(function(){
        bottomscroll = window.pageYOffset + $(window).height();
        if (bottomscroll >=  $('footer').offset().top && !runtext) {
            runtext=true;
            $("footer .inner-container").addClass('active');
            $('.message p').textillate('start');
        }
    });

    $("#cat-summary").fadeInScroll({'opacity' : '0'});
    $("#cat-background").fadeInScroll({'opacity' : '0'});
    $("#cat-works").fadeInScroll({'opacity' : '0'});
    $(".work-col").fadeInScroll({'opacity' : '0', 'transform' : 'translateY(30px)'});
    $("footer .inner-container").fadeInScroll({'opacity' : '0', 'transform' : 'translateY(30px)'});

    var workcol = $('.work-col');
    var delayinc = 0;
    for (var i = 0; i < workcol.length; i++) {
        $(workcol[i]).css('transition-delay', delayinc + 's');
        if ($(window).width() > 999) {
            if ( (i+1) % 3 === 0) {
                delayinc=0;
            }else {
                delayinc += 0.35;
            }
        }else if ($(window).width() <= 999 && $(window).width() > 600) {
            if ( (i+1) % 2 === 0) {
                delayinc=0;
            }else {
                delayinc += 0.35;
            }
        }
        else {
            delayinc = 0;
        }
    }
});