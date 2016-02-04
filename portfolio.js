function loadPrev(){
    $('.carousel').carousel('prev');
}
function loadNext(){
    $('.carousel').carousel('next');
}

$('.portfolio-item').click(function() {
        $(this).find('.image').css('opacity', function(i,o){
        return parseFloat(o).toFixed(1) === '0.5' ? 1 : 0.5;
    });
        $(this).find('.text').slideToggle("fast");
});

