$(document).ready(function() {

    const reviewsContainer = $(".reviews-container");

    // on click events for delete and update button
    $(document).on("click", ".delete-btn", deleteReview);
    $(document).on("click", ".update-btn", updateReview);

    const reviews;
    
    // looks for a query param in the url for shoe_id
    let url = window.location.search;
    let ShoeId;
    if (url.indexOf("?shoe_id=") !== -1) {
        ShoeId = url.split("=")[1];
        getReviews(ShoeId);
    }
    else {
        return;
    }

    // gets all reviews from the databse and updates page
    function getReviews(shoe) {
        ShoeId = shoe || "";
        if (ShoeId) {
          ShoeId = "/?shoe_id=" + ShoeId;
        }
        $.get("/api/reviews" + ShoeId, function(data) {
          console.log("Reviews", data);
          reviews = data;
          if (!reviews || !reviews.length) {
            displayNone(shoe);
          }
          else {
            displayReviews();
          }
        });
    }

    // api call to delete reviews
    function deleteReview(id) {
        $.ajax({
        method: "DELETE",
        url: "/api/reviews/" + id
        })
        .then(function() {
            getReviews(postCategorySelect.val());
        });
    }

    //  displays all constructed reviews HTML inside product page
    function displayReviews() {
        reviewsContainer.empty();
        var reviewsToAdd = [];
        for (var i = 0; i < reviews.length; i++) {
        reviewsToAdd.push(createNewReview(reviews[i]));
        }
        reviewsContainer.append(reviewsToAdd);
    }

    // posts new review to html
    function createNewReview(review) {
        var deleteBtn = $("<button>");
        deleteBtn.text("DELETE");
        deleteBtn.addClass("delete-btn btn-danger");
        var updateBtn = $("<button>");
        updateBtn.text("UPDATE");
        updateBtn.addClass("update-btn btn-info");
    }

    // deletes selected review
    function deleteReview() {
        var currentReview = $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .data("review");
        deletePost(currentReview.id);
    }

    // redirects user to the update page
    function updateReview() {
        var currentReview = $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .data("review");
        window.location.href = "/update?review_id=" + currentReview.id;
    }

    // displays message if no reviews
    function displayNone(id) {
        reviewsContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No reviews yet - be the first!");
        reviewsContainer.append(messageH2);
    }

})