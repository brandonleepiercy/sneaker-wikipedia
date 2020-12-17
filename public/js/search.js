$(document).ready(function() {

    $("#filter-form").on("submit", function(event) {

        // size selections
        event.preventDefault();
        let usSizes = $('input[name=us-size]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(usSizes);
        let euSizes = $('input[name=eu-size]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(euSizes);
        let ukSizes = $('input[name=uk-size]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(ukSizes);

        // brand selections
        event.preventDefault();
        let selectedBrands = $('input[name=brands]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(selectedBrands);

        // style selections
        event.preventDefault();
        let selectedStyles = $('input[name=styles]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(selectedStyles);

        // color selections
        event.preventDefault();
        let selectedColors = $('input[name=us-size]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(selectedColors);

        // release year selections
        event.preventDefault();
        let selectedYears = $('input[name=us-size]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(selectedYears);

        // collaborator selections
        event.preventDefault();
        let selectedCollaborators = $('input[name=us-size]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(selectedCollaborators);
    })
});
    














//Storing the parameters selected on the "search" page
// var searchTerm = $("#searchbar").val().trim();
// var brand = $("#brands").val().trim();
// var release_date = $("#release-date").val().trim();
// var collaborator = $("#collaborator").val().trim();
// var color = $("#color").val().trim();
// var sizing_type = $("#sizing-type").val().trim();

// if (sizing_type === "UK") {
//     let selectedSize = $
// }
// if (sizing)

// var sizing_gender = $("#sizing-gender").val().trim();
// var min_size = $("#min-size").val().trim();
// var max_size = $("#max-size").val().trim();
// var price_min = $("#price-min").val().trim();
// var price_max = $("#price-max").val().trim();
// var style = $("#style").val().trim();


//API call to retrieve a json package of the data given a set of parameters
// $.get("/api/shoes/name/"+searchTerm+"/brand/"+brand+"/release_date/"+release_date+"/collaborators/"+collaborator+"/color/"+color+"/sizing_type/"+sizing_type+"/sizing_gender/"+sizing_gender+"/min_size/"+min_size+"/max_size/"+max_size+"/price_min/"+price_min+"/price_max/"+price_max+"/style/"+style),
//     function (data) {
//         //Log how many items were returned
//         console.log(data.length+" many items found");
        
//         //If no data is found...
//         if (!data) {
//             console.log("No Results Found - try changing your search parameters.");
//         } else {
//             //Otherwise if there is data...
//             for (i=0; i<data.length; i++) {
//                 //Append data pulled to a new card for every data item that was pulled given the selected parameters within the page
//             };
//         };
//     };

