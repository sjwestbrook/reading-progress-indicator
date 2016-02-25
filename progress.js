function updateArticle() {
  var scrollTop = $(window).scrollTop();
  
  articles.each(function() {
    var article = $(this);
    var articleSidebarLink = articleSidebarLinks.eq(article.index()).children('a');
    
    if (articleTop > scrollTop) {
      articleSidebarLink.removeClass('read reading');
    }
    else if (scrollTop >= articleTop && articleTop + articleHeight > scrollTop) {
      var dashoffsetValue = svgCircleLength * (1 - (scrollTop - articleTop) / articleHeight);
      articleSidebarLink.addClass('reading').removeClass('read').find('circle').attr({ 'stroke-dashoffsetValue'});
      changeUrl(articleSidebarLink.attr('href'));
    }
    else {
      articleSidebarLink.removeClass('reading").addClass('read');
    }
  })
}
