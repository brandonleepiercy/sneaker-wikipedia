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
                $("#price").empty();
                $("#date").empty();
                $("#collab").empty();
                $("#size").empty();
                $("#desc").empty();
                $("#link").empty();
                $("#image").empty();
    
                //Appending the pulled data to the html sections
                $("#name").append(data.name);
                $("#brand").append(data.brand);
                $("#price").append("$"+data.pricemin+" -  $"+data.pricemax);
                $("#date").append(data.release_date);
                $("#collab").append(data.collaborator);
                $("#size").append(data.sizemin+" - "+data.sizemax);
                $("#desc").append(data.desc);
                $("#link").append(data.link);
                $("#image").append(data.image_link);
            };
        });
    };

    
});