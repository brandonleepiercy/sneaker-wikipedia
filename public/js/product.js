$(function () {

    //API call to pull the data for the requested shoe
    $.get("/api/shoes/"+shoeID, function(data) {
        //Console log the object of the requested shoe
        console.log(data);

        if(!data) {
            //if the shoe isn't found, console log an error (this should ideally render an error to the front end as well)
            console.log("Error shoe not found");
        } else {
            //Emptying the placeholders in the html sections
            $("#name").empty();
            $("#brand").empty();
            $("#price-range").empty();
            $("#release-date").empty();
            $("#collaborator").empty();
            $("#size-range").empty();
            $("#desc").empty();
            $("#link").empty();
            $("#image").empty();

            //Appending the pulled data to the html sections
            $("#name").append(data.name);
            $("#brand").append(data.brand);
            $("#price-range").append("$"+data.pricemin+" -  $"+data.pricemax);
            $("#release-date").append(data.release_date);
            $("#collaborator").append(data.collaborator);
            $("#size-range").append(data.sizemin+" - "+data.sizemax);
            $("#desc").append(data.desc);
            $("#link").append(data.link);
            $("#image").append(data.image_link);
        };
    });
});