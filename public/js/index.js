$(document).ready(function() {
    $(document).on("keypress", function (e) {
        if(e.which == 13) {
        //Storing the search term from the search box
            var searchTerm = $("#search-input").val().trim();
            //Code to launch the search page
            localStorage.setItem("searched-shoe", searchTerm)
            if (searchTerm!=="") {
                window.location.href="/search"
            };
        };
    })

    $(".shoe-style-btn").on("click", function() {
        
        //Store the id of the category clicked by the user on the splash screen
        var category = $(this).attr("id");
        //Send the user to the search page and display all results in the category selected by the user
        
        // set category in local storage
        localStorage.setItem("style", category);
        
    });
})