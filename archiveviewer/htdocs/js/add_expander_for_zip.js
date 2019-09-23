// To use expander on zip file in directory view;
// replace <a class='file' href='.../browser/.......zip'>
//      to <a class='dir'  href='.../zip/browser/...zip'>
// if filename in ['browser.html', 'dir_entries.html']:

(function($){
  $(function(){
    const wrapped = window.enableExpandDir;
    window.enableExpandDir = function(parent_tr, rows, qargs, autoexpand) {
        $('td.name > a[href$="zip"], td.name > a[href*="zip?"]', rows[0])
        .addClass('dir');
        $('td.name > a[href$="zip"], td.name > a[href*="zip?"], td.name > a[href*="!/"]', rows[0])
        .each(function() {
            a = $(this);
            a.attr('href', a.attr('href').replace('browser', 'zip/browser'));
        })
        wrapped(parent_tr, rows, qargs, autoexpand);
    }
  })
})(jQuery);
