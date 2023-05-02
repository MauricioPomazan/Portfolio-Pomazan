$(document).ready(function() {
    $('#secciones').click(function(e) {
      e.preventDefault();
      const href = $(this).attr('href');
      const section = $(href);
      const fixedHeaderHeight = $('header').outerHeight(); // Obtener altura del encabezado fijo
      const targetScroll = section.offset().top - fixedHeaderHeight; // Restar la altura del encabezado fijo
      $('html, body').animate({
        scrollTop: targetScroll
      }, 'slow');
    });
  });