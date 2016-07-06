$( document ).foundation();

$( function () {
  //caches a jQuery object containing the header element
  var header = $( ".menu-container" );
  $( window ).scroll( function () {
    var scroll = $( window ).scrollTop();

    if ( scroll >= 1 ) {
      header.animate().addClass( "dark" );
    } else {
      header.removeClass( "dark" );
    }
  } );
} );
