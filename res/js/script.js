$(document).ready(function () {
  $.get(
    "https://api.jsonbin.io/b/617402ea9548541c29c76269/22",
    function (posts) {
      let section = $("#postingSection");
      for (post of posts) {
        let article = $("<article>");
        let header = $("<header>");
        header.addClass("post-info");

        let divUser = $("<div>");
        divUser.addClass("header-user");
        let userpic = $("<img>").attr({
          height: "40",
          width: "40",
          src: "res/images/userpic.png",
          alt: "User",
        });
        let author = $("<p>");
        author.text(post.author.firstname + " " + post.author.lastname);
        author.addClass("author");
        let datetime = $("<time>");
        datetime = $("<time>").text(
          post.createdAt.date + " " + post.createdAt.time
        );

        let postingText = $("<p>");
        postingText.text(post.content.text);

        let divButton = $("<div>");
        divButton.addClass("like-button");
        let button = $("<button>");
        let buttonImg = $("<img>").attr({
          height: "28",
          width: "30",
          src: "res/images/like.png",
          alt: "Like this post",
        });

        section.append(article);
        article.append(header);
        header.append(divUser);
        divUser.append(userpic);
        divUser.append(author);
        header.append(datetime);
        if (post.content.pic) {
          let img = $("<img>").attr("src", post.content.pic);
          article.append(img);
        }
        article.append(postingText);
        article.append(divButton);
        divButton.append(button);
        button.append(buttonImg);
      }
    }
  );

  $("#userpic").click(function () {
    if ($("#namemail").length) {
      $("#namemail").toggle();
    } else {
      let namemail = $('<div id="namemail">');
      let pname = $("<p>").text("John Doe");
      let pemail = $("<p>").text("john.doe@example.com");
      namemail.append(pname);
      namemail.append(pemail);
      $("#pageHeader").append(namemail);
    }
  });
});
