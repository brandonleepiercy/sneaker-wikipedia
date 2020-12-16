$(function () {
    $("#searchbar").on("submit", function () {
        //Storing the search term from the search box
        var searchTerm = $("#search").val().trim();
        //Code to launch the search page
    })

    $("#category-select").on("click", function () {
        //Store the id of the category clicked by the user on the splash screen
        var category = $(this).id;
        //Send the user to the search page and display all results in the category selected by the user
    });
})