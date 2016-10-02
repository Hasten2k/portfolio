var innerHeight = $( window ).innerHeight();
var topBarHeight = $( '.top-bar' ).outerHeight();

function resizeWrappers() {
  $( '.wrapper' ).css( 'height', innerHeight );
  $( '.iphone' ).css( 'height', ( innerHeight - topBarHeight ) );
}

$( document ).ready(
  resizeWrappers
);
$( window ).resize(
  resizeWrappers
);
