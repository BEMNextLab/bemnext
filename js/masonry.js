var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: '.item'
});

var $container = $('#container');
// initialize
$container.masonry({
  columnWidth: 200,
  itemSelector: '.item'
});

var msnry = $container.data('masonry');