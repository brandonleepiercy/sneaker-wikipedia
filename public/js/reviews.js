$(document).ready(function() {

  // const reviewsContainer = $(".reviews-container");

  // // on click events for delete and update button
  // $(document).on("click", ".delete-btn", deleteReview);
  // $(document).on("click", ".update-btn", updateReview);

  // const reviews;
  // var url = new URL(window.location.href);
  // var id = url.pathname.split("/")[2];
  // // // looks for a query param in the url for shoe_id
  // // let url = window.location.search;
  // // let ShoeId;
  // // if (url.indexOf("?shoe_id=") !== -1) {
  // //     ShoeId = url.split("=")[1];
  // //     getReviews(ShoeId);
  // // }
  // // else {
  // //     return;
  // // }

  // // gets all reviews from the databse and updates page
  // function getReviews(shoe) {
  //     ShoeId = shoe || "";
  //     if (id) {
  //       ShoeId = "/?shoe_id=" + ShoeId;
  //     }
  //     $.get("/api/reviews" + ShoeId, function(data) {
  //       console.log("Reviews", data);
  //       reviews = data;
  //       if (!reviews || !reviews.length) {
  //         displayNone(shoe);
  //       }
  //       else {
  //         displayReviews();
  //       }
  //     });
  // }

  // // api call to delete reviews
  // function deleteReview(id) {
  //     $.ajax({
  //     method: "DELETE",
  //     url: "/api/reviews/" + id
  //     })
  //     .then(function() {
  //         getReviews(postCategorySelect.val());
  //     });
  // }

  // //  displays all constructed reviews HTML inside product page
  // function displayReviews() {
  //     reviewsContainer.empty();
  //     var reviewsToAdd = [];
  //     for (var i = 0; i < reviews.length; i++) {
  //     reviewsToAdd.push(createNewComment(reviews[i]));
  //     }
  //     reviewsContainer.append(reviewsToAdd);
  // }

  // // // posts new review to html
  // // function createNewComment(review) {
  // //     var deleteBtn = $("<button>");
  // //     deleteBtn.text("DELETE");
  // //     deleteBtn.addClass("delete-btn btn-danger");
  // //     var updateBtn = $("<button>");
  // //     updateBtn.text("UPDATE");
  // //     updateBtn.addClass("update-btn btn-info");
  // // }

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

  // // displays message if no reviews
  // function displayNone(id) {
  //     reviewsContainer.empty();
  //     var messageH2 = $("<h2>");
  //     messageH2.css({ "text-align": "center", "margin-top": "50px" });
  //     messageH2.html("No reviews yet - be the first!");
  //     reviewsContainer.append(messageH2);
  // }

  const commentInput = $("#comment-input");
  const nameInput = $("#comment-name-input");
  const verifiedInput = $("#verified-buyer");

  $("#comment-form").on("submit", function(event) {
    event.preventDefault();
    
    let checkState = verifiedInput.is(":checked") ? "true" : "false";
    
    let ratingInput = $("input[name=rating]:checked").map(function(_, el) {
      return parseInt($(el).val());
    });

    let commentData = {
      reviewer_name: nameInput.val(),
      verified_buyer: checkState,
      rating: ratingInput[0],
      comment: commentInput.val()
    };
    console.log(commentData);

  });

  // function upsertComment(commentData) {
  // $.post("/api/reviews", commentData)
  //   .then(renderComments);
  // }

  // function renderComments() {
  //   $.get("/api/reviews")
  // }
})