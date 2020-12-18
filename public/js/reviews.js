$(document).ready(function() {

  const reviewsContainer = $(".reviews-container");

  // // on click events for delete and update button
  // $(document).on("click", ".delete-btn", deleteReview);
  // $(document).on("click", ".update-btn", updateReview);

  const url = new URL(window.location.href);
  const id = url.pathname.split("/")[2];

  getComments();

  // gets all reviews from the databse and updates page
  function getComments() {
      $.get("/api/reviews/" + id, function(data) {
        console.log("Reviews", data);
        
        if (!data || !data.length) {
          displayNone();
        }
        else {
          displayReviews(data);
        }
      });
  }


  //  displays all constructed reviews HTML inside product page
  function displayReviews(reviewsArray) {
    for (elem of reviewsArray) {
      
      let newComment = $("<div>");
      newComment.addClass("mt-4");

      let commentName = $("<h4>");
      commentName.text(elem.reviewer_name);

      let commentRating_Verified = $("<h5>");
      commentRating_Verified.text(`Rating: ${elem.rating}/5 || Verified Owner: ${elem.verified_buyer}`);
      commentRating_Verified.css({
        "margin-top": "8px",
        "font-size": "13pt"
      });
      
      let commentBody = $("<p>");
      commentBody.text(elem.comment);
      commentBody.css({
        "border-style": "solid",
        "border-width": "thin",
        "border-color": "black",
        "font-size": "large",
        margin: "8px",
        padding: "4px"
      });

      commentRating_Verified.append(commentBody);
      commentName.append(commentRating_Verified);
      newComment.append(commentName);
      reviewsContainer.append(newComment);

    }
  }

  // displays message if no reviews
  function displayNone() {
      reviewsContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No reviews yet - be the first!");
      reviewsContainer.append(messageH2);
  }

  const commentInput = $("#comment-input");
  const nameInput = $("#comment-name-input");
  const verifiedInput = $("#verified-buyer");

  $("#comment-form").on("submit", function(event) {
    event.preventDefault();
    reviewsContainer.empty();
    
    let checkState = verifiedInput.is(":checked") ? "true" : "false";
    
    let ratingInput = $("input[name=rating]:checked").map(function(_, el) {
      return parseInt($(el).val());
    });

    let commentData = {
      reviewer_name: nameInput.val(),
      verified_buyer: checkState,
      rating: ratingInput[0],
      comment: commentInput.val(),
      ShoeId: id
    };
    // console.log(commentData);
    upsertComment(commentData)

  });

  function upsertComment(data) {
    $.post("/api/reviews", data)
    .then(getComments)
  }
})

// // redirects user to the update page
// function updateReview() {
//     var currentReview = $(this)
//       .parent()
//       .parent()
//       .parent()
//       .parent()
//       .data("review");
//     window.location.href = "/update?review_id=" + currentReview.id;
// }

// // api call to delete reviews
// function deleteReview(id) {
//     $.ajax({
//     method: "DELETE",
//     url: "/api/reviews/" + id
//     })
//     .then(function() {
//         getComments(postCategorySelect.val());
//     });
// }

// // deletes selected review
// function deleteReview() {
//     var currentReview = $(this)
//       .parent()
//       .parent()
//       .parent()
//       .parent()
//       .data("review");
//     deletePost(currentReview.id);
// }