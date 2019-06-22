// CODE TO RENDER IMAGES ON WEBSITE REGARDLESS OF HOW MANY THERE ARE

// var imagesArray = ["../assets/images/echoLake.jpg", "../images/mtEvansLoop.jpg", "../images/rmnp_whiteout.jpg", "../images/rmnp_east1.jpg", "../images/rmnp_east2.jpg", "../images/RMNP_West - Spring2019.jpg", "../images/SquawMountain - Spring2019.jpg", "../images/SquawMountain-Spring2019-2.jpg", "../images/SquawMountain-Spring2019.jpg","test"];

var imagesArray = ["https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "https://images.unsplash.com/photo-1559670207-cc47882ad446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80", "https://images.unsplash.com/photo-1559638733-7a15dd7bd8e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "https://images.unsplash.com/photo-1559662780-33af019fd570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "https://images.unsplash.com/photo-1559145430-ffb33b1de41e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "https://images.unsplash.com/photo-1559655916-268f45e5a7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "https://images.unsplash.com/photo-1559710831-a50fc66ae57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", "https://images.unsplash.com/photo-1559642171-b95f70b3f9ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80", "https://images.unsplash.com/photo-1559659964-d80b891e9b6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80", "https://images.unsplash.com/photo-1559638849-71cafc038a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80", "https://images.unsplash.com/flagged/photo-1559762731-d0dd66ab7e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "https://images.unsplash.com/photo-1559893936-56c2d8ac1932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80", "https://images.unsplash.com/photo-1559895356-232874bc68cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80", "https://images.unsplash.com/photo-1559895355-81cba825f79f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3100&q=80"];

console.log(imagesArray);


function displayImages(arr, colNum) {
    var dynamicIndex = 0;
    var arrLength = arr.length;

    for (var i = 0; i < colNum; i++) {
        var columns = $("<div>");
        columns.addClass(`col-md-${Math.floor(12/colNum)} myproperties`);
        columns.attr("id", "mycolumn" + i);

        $("#dynamicImages").append(columns);

        if (arrLength % colNum > 1) {
            arrLength++;
        }
        console.log("Outer for loop after if");

        for (var j = 0; j < arrLength / colNum; j++) {
            var imagesDiv = $("<div>");
            imagesDiv.addClass("mycustomimg");
            imagesDiv.attr("data-value", j);

            var myImageTag = $("<img>");
            myImageTag.addClass("img-thumbnail myfade");
            myImageTag.attr("src", "#");
            myImageTag.attr("alt", "an image");

            $(imagesDiv).append("<a href='#' class='imagelink'><img class='img-thumbnail myfade' src='" + arr[dynamicIndex] + "'/></a>");
            
            if (arr[dynamicIndex] === undefined) {
                return false;
            }
            dynamicIndex++;
            $("#mycolumn" + i).append(imagesDiv);
            console.log("nested loop");

            console.log("Dynamic Index: " + dynamicIndex);
        }
    }
}

displayImages(imagesArray, 4);

// DYNAMIC SCROLLING

$("#about-btn").click(function (event) {
    event.preventDefault();

    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

    window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#jabout').scrollIntoView({
        behavior: 'smooth'
    });
})

$("#home-btn").click(function (event) {
    event.preventDefault();

    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

    window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#fotos').scrollIntoView({
        behavior: 'smooth'
    });
})

$("#projects-btn").click(function (event) {
    event.preventDefault();

    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

    window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
})

$(".img").click(function () {
    alert("click");
});