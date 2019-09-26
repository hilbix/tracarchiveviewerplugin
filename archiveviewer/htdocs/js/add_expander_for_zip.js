// To use expander on zip file in directory view;
// replace <a class='file' href='.../browser/.......zip'>
//      to <a class='dir'  href='.../zip/browser/...zip'>
// if filename in ['browser.html', 'dir_entries.html']:

(function($){
  $(function(){
    const transform = function(row) {
      $('td.name > a[href$="zip"], td.name > a[href*="zip?"]', row).addClass('dir');
      $('td.name > a[href$="zip"], td.name > a[href*="zip?"], td.name > a[href*="!/"]', row)
      .each(function() {
          a = $(this);
          a.attr('href', a.attr('href').replace('browser', 'zip/browser'));
      })
    }
    const wrapped = window.enableExpandDir;
    window.enableExpandDir = function(parent_tr, rows, qargs, autoexpand) {
      transform(rows[0]);
      wrapped(parent_tr, rows, qargs, autoexpand);
    }
    transform($('#dirlist'))
  })
})(jQuery);
