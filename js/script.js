$(document).ready(function() {
    
    // Toggle the visibility of the paragraph when a button is clicked 
    $("button").click(function(){           
		$(this).prev().slideToggle('slow');
    });
    
    //sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});
	
	// Open the paragraph once the image is clicked
	$("img").click(function() {
		$(this).next().children("p:hidden").slideDown();
    });
    
    $(".card").click(function() {
		$(this).toggleClass("highlight");	 
    });
    
    // All cards that are not currently selected will be hidden when `select_btn` is clicked
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();	 
	});

	// Select all cards
	$("#all_btn").click(function(){
		$(".card").show();	 
    });
    

    $("#stream1_btn").on("click", function() {

        $(".stream2").removeClass("card-highlight");
        $(".stream3").removeClass("card-highlight");
        $(".stream1").addClass("card-highlight");

    });

    $("#stream2_btn").on("click", function() {

        $(".stream1").removeClass("card-highlight");
        $(".stream3").removeClass("card-highlight");
        $(".stream2").addClass("card-highlight");

    });

    $("#stream3_btn").on("click", function() {

        $(".stream1").removeClass("card-highlight");
        $(".stream2").removeClass("card-highlight");
        $(".stream3").addClass("card-highlight");

    });

});


// A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    
    // First remove the highlight from all of the cards
    
    // Then apply the highlight to just this stream's cards