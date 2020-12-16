$(function () {

    //Storing the parameters selected on the "search" page
    var searchTerm = $("#searchbar").val().trim();
    var brand = $("#brand").val().trim();
    var release_date = $("#release-date").val().trim();
    var collaborator = $("#collaborator").val().trim();
    var color = $("#color").val().trim();
    var sizing_type = $("#sizing-type").val().trim();
    var sizing_gender = $("#sizing-gender").val().trim();
    var min_size = $("#min-size").val().trim();
    var max_size = $("#max-size").val().trim();
    var price_min = $("#price-min").val().trim();
    var price_max = $("#price-max").val().trim();
    var style = $("#style").val().trim();


    //API call to retrieve a json package of the data given a set of parameters
    $.get("/api/shoes/name/"+searchTerm+"/brand/"+brand+"/release_date/"+release_date+"/collaborators/"+collaborator+"/color/"+color+"/sizing_type/"+sizing_type+"/sizing_gender/"+sizing_gender+"/min_size/"+min_size+"/max_size/"+max_size+"/price_min/"+price_min+"/price_max/"+price_max+"/style/"+style),
        function (data) {
            //Log how many items were returned
            console.log(data.length+" many items found");
            
            //If no data is found...
            if (!data) {
                console.log("Nothing found, try changing your search parameters.");
            } else {
                //Otherwise if there is data...
                for (i=0; i<data.length; i++) {
                    //Append data pulled to a new card for every data item that was pulled given the selected parameters within the page
                };
            };
        };
})