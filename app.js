jQuery(document).ready(function() {
    jQuery('.advantages-block-container').viewportChecker({
        classToAdd: "animated fadeIn",
        offset: 300
    });
    jQuery('.advantages-icons').viewportChecker({
        classToAdd: "animated tada",
        offset: 300
    });
    jQuery('.Why-Choose-Us').viewportChecker({
        classToAdd: "animated zoomIn",
        offset: 300
    });

    jQuery('.achievements').viewportChecker({
        classToAdd: "animated pulse",
        offset: 300
    });
    jQuery('.how_we_works-container').viewportChecker({
        classToAdd: "animated rollIn",
        offset: 300
    });
    jQuery('.gallery').viewportChecker({
        classToAdd: "animated fadeInRight",
        offset: 300
    });
    jQuery('.our-team').viewportChecker({
        classToAdd: "animated fadeInLeft",
        offset: 300
    });
    jQuery('.contacts').viewportChecker({
        classToAdd: "animated bounceIn",
        offset: 300
    });
});
