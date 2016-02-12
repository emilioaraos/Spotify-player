$(document).on("ready",function(){
	
	$(".js-show-songs").on("click", function(event){
		event.preventDefault();
		// if ($(".btn-play").hasClass("playing")){
		// 	$(".btn-play").removeClass("playing");
		// }
		
		// resetPlayer();
		showtracks();
	});

	$(".btn-play").on("click", function(){
		if ($('.btn-play').hasClass('playing')){
			$('.btn-play').removeClass('playing');
			$('.js-preview-song').trigger('pause');
		}
		else{
			$('.btn-play').addClass('playing');
			$('.js-preview-song').trigger('play');
		}
	})

	// function resetPlayer(){
	// 	// Change the player back to its default
	// }



	function showtracks(){
		var userInput=($(".js-user-input").val());
		$.ajax({
			url:"https://api.spotify.com/v1/search?type=track&q="+userInput,
			success: function(response){ 
				console.log(response);
				displayInfo(response);
 			},
 			error: function () {
      		console.log("ERROR");
   			 }
		});
	}


function displayInfo (info){

		var name= info.tracks.items[0].name;
		var artists=info.tracks.items[0].artists[0].name;
		 var picture=info.tracks.items[0].album.images[0].url;
		 var preview=info.tracks.items[0].preview_url;


		console.log(name);
		console.log(artists);
		console.log(picture);
		console.log(preview);
	// 		var html= `
	// 		<li>


		$('.title').text(name);
		$('.author').text(artists);
		$(".js-image").prop("src",picture);
		$(".js-preview-song").prop("src",preview);

	}


// }
});