$(document).ready(function() {

  $.get("https://api.jsonbin.io/b/617402ea9548541c29c76269/18", function(posts) {
    let section = $("#postingSection");
    for (post of posts) {
      let article = $('<article>');
      let header = $('<header class="post-info">');
      let userpic = $('<img width="40" height="40">').attr("src","res/images/userpic.png").attr("alt","User")
      let datetime = $('<time>').text(post.createdAt.date + ' ' + post.createdAt.time);
      let p = $('<p>').text(post.content.text)
      let div = $('<div class="like-button">')
      let button = $('<button>')
      let buttonImg = $('<img width="30" height="28">').attr("src","res/images/like.png").attr("alt","Like this post");

      section.append(article)
      article.append(header)
      header.append(userpic)
      header.append(datetime)
      if(post.content.pic) {
        let img = $('<img>').attr("src",post.content.pic);
        article.append(img)
      }
      article.append(p)
      article.append(div)
      div.append(button)
      button.append(buttonImg)
    }
  });

  $("#userpic").click(function() {
    if ($("#namemail").length) {
      $("#namemail").toggle()
    } else {
      let namemail = $('<div id="namemail">')
      let pname = $('<p>').text("John Doe")
      let pemail = $('<p>').text("john.doe@example.com")
      namemail.append(pname)
      namemail.append(pemail)
      $("#pageHeader").append(namemail)
    }
  });
});