var ease = 200;

$( document ).ready(function() {
    $('#section_1').show();
    $('#section_1').find('p').hide();

    $(document).on('click', '#section_1', function (e) {
      $( e.target ).closest('.main_section').find('.collapsible').toggle(ease);
    });

    $(document).on('click', 'h3', function (e) {
      $( e.target ).closest('.main_section').find('p').hide(0);
      $( e.target ).closest('.collapsible').find('p').toggle(ease);
      $( e.target ).closest('.top').find('p').toggle(ease);
    });


});




// parent(). siblings()

// transform 180
