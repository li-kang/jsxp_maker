'use strict';

// 统计案例、相关资料的项数。
// post.content 在使用 JSON 数据绑定的页面获取不到。所以用硬编码解决了。

var cheerio;

hexo.extend.helper.register('tagCounter', function (post, options) {
  options = options || {};

  // 案例的项数
  if (post.items)
    return post.items.length;

  // 相关资料的项数
  var count = 0;
  if (post.books)
    count += post.books.length;
  if (post.materials)
    count += post.materials.length;

  if (count)
    return count;
  
  // 统计h2的项数
  if (!cheerio) cheerio = require('cheerio');

  var $ = cheerio.load(post.content);
  var headings = $('h2');

  return headings.length;
});
