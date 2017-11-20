$(function(){
  $(".main_left .item a").animatedModal();
  $('.main_left .item dt').text(function(i,orig){
      return  `[项目${i+1}] ${orig}`
  });

  // 设置所有的logo
  $(".main_left span").each(function(i){
      var str;
      i++;
      if(i < 10){
          str="item_0"+i;
      }else{
          str="item_"+i;
      }
      $(this).css({"background-image":"url(images/"+str+".jpg)"})
  })

  // 设置所有的动效链接
  $(".main_left a").each(function(i){
      $(this).attr({"data-url":"case/"+(i+1)+".html"});
  }).click(function(){
      $('iframe').attr('src',$(this).attr("data-url"));
  })

})
