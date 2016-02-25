function updateArticle() {
  var scrollTop = $(window).scrollTop();
  
  articles.each(function() {    // articles - $('.cd-articles').children('article');
    var article = $(this);
    var articleSidebarLink = articleSidebarLinks.eq(article.index()).children('a');   // articleSidebarLinks - $('.cd-read-more').find('li');
    
    if (articleTop > scrollTop) {     // articleTop = $(this).offsett().top
      articleSidebarLink.removeClass('read reading');
    }
    else if (scrollTop >= articleTop && articleTop + articleHeight > scrollTop) {  // articleHeight = $(this).outerHeight()
      var dashoffsetValue = svgCircleLength * (1 - (scrollTop - articleTop) / articleHeight);     // svgCircleLength - 100
      articleSidebarLink.addClass('reading').removeClass('read').find('circle').attr({ 'stroke-dashoffsetValue'});
      changeUrl(articleSidebarLink.attr('href'));
    }
    else {
      articleSidebarLink.removeClass('reading").addClass('read');
    }
  })
}


function updateSidebarPosition() {
  var scrollTop = $(window).scrolltop();
  
  if (scrollTop < articlesWrapperTop) {     // $('.cd-articles').offset().top
    aside.removeClass('fixed').attr('style', ''); // aside = $('.cd-read-more')
  }
  else if (scrollTop >= articlesWrapperTop && scrollTop < articlesWrapperTop + articlesWrapperHeight - windowHeight) {  // articlesWrapperHeight = $('.cd-articles')
    aside.addClass('fixed').attr('style', '');
  }
  else {
    if (aside.hasClass('fixed')) aside.removeClass('fixed').css('top', articlesWrapperHeight + articlePaddingTop - windowHeight + 'px');    // articlePaddingTop = Number($('.cd-articles').children('article').eq(1).css('padding-top').replace('px', ''))
  }
}
