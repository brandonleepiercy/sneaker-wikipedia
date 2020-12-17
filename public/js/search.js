$(document).ready(function() {
    $("#filter-form").on("submit", function(event) {

        event.preventDefault();

        // gender selections
        let selectedGenders = $('input[name=gender]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        console.log(selectedGenders);

        // size selections
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
        let selectedBrands = $('input[name=brands]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        console.log(selectedBrands);

        // style selections
        let selectedStyles = $('input[name=styles]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        console.log(selectedStyles);

        // color selections
        let selectedColors = $('input[name=color]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        console.log(selectedColors);

        // release year selections
        let selectedYears = $('input[name=release-year]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        console.log(selectedYears);

        // max-price selections
        let maxPrice = $('input[name=max-price]:checked').map(function(_, el) {
            return parseInt($(el).val());
        }).get();
        console.log(maxPrice);

        // collaborator selections
        let selectedCollaborators = $('input[name=collaborators]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        console.log(selectedCollaborators);


        let shoeFilters = {
            gender: selectedGenders,
            us_size: usSizes,
            eu_size: euSizes,
            uk_size: ukSizes,
            brands: selectedBrands,
            styles: selectedStyles,
            colors: selectedColors,
            years: selectedYears,
            prices: maxPrice,
            collabs: selectedCollaborators
        }
        $.ajax({
            method: "POST",
            url: "/api/shoes",
            data: shoeFilters
        }).then(function(res) {
            console.log(res);

            for (elem of res) {
                let newShoeCol = $("<div>");
                newShoeCol.addClass("col-sm-4");

                let shoeCard = $("<div>");
                shoeCard.addClass("card shoe");
                
                let shoeImg = $("<img>");
                shoeImg.attr("src", "elem.img_url");
                shoeImg.addClass("card-img-top");
                shoeImg.attr("alt", "a cute shoe");
                
                let shoeCardBody = $("<div>");
                shoeCardBody.addClass("card-body");
                
                let shoeCardName = $("<p>");
                shoeCardName.addClass("card-text");
                shoeCardName.text(elem.name);
                shoeCard.css({
                    width: "15rem"
                });

                shoeCardBody.append(shoeCardName);
                shoeCard.append(shoeImg, shoeCardBody);
                newShoeCol.append(shoeCard)
                $("#new-cards-div").append(newShoeCol);
            }


        })

    })
});

// function getShoeInfo(id) {
//     $.ajax({
//         method: 'GET',
//         url: "/api/shoes/:id"
//     }).then(function(res) {
//         console.log(res);
        
//         // let lastShoeInfo = {
//         //     name: res.name,
//         //     brand: res.brand,
//         //     releaseDate: res.release_date,
//         //     collaborators: res.collaborators,
//         //     color: res.color,
//         //     sizeType: res.sizing_type,
//         //     minSize: res.min_size,
//         //     maxSize: res.max_size,
//         //     priceMin: res.price_min,
//         //     priceMax: res.price_max,
//         //     description: res.description,
//         //     style: res.style,
//         //     productLink: res.product_link
//         // }
//         localStorage.setItem("lastShoe", res.id);


//     })
// }

    














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

