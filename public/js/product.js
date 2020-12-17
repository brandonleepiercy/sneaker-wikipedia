$(function () {

    shoeID = localStorage.getItem('lastShoe');

    //If there isn't a shoeID stored, instruct the user to go back and pick another shoe.
    if (!shoeID) {
        console.log("No shoe selected. Go back to browse.");
        
    } else {
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
                $("#date").empty();
                $("#price").empty();
                $("#collab").empty();
                $("#size").empty();
                $("#desc").empty();

                var sizeTypeUpper = (data.sizing_type).toUpperCase();
                var sizeGenderUpper = (data.sizing_gender).toUpperCase();
    
                //Appending the pulled data to the html sections
                $("#name").append(data.name);
                $("#image").src=data.product_image;
                $("#brand").append(data.brand);
                $("#date").append(data.release_date);
                $("#price").append("$"+data.price_min+" - $"+data.price_max);
                $("#collab").append(data.collaborators);
                $("#size").append(sizeTypeUpper+" "+sizeGenderUpper+" "+data.min_size+" - "+data.max_size);
                $("#desc").append(data.description);
            };
        });
    };

    
});