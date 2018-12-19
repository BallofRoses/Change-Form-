$(document).ready(function(){

	console.log('Mark 0');

	$('#editButton').click(function(){

		console.log('Mark 1');
		// Hide tyhe main view, shiw the form 
		$('#mainView').addClass('hidden');
		$('#editForm').removeClass('hidden');

		console.log('Mark 2');

		// Take text in html
		// Put it in the form
		$('#titleInput').val( $('#titleText').text() );
		$('#paragraphInput').val( $('#paragraphText').text() );

		console.log('Mark 3');
	});

	$('#submitButton').click(function(event){
		event.preventDefault();
		//Hide the form, show the main viww  
		$('#editForm').addClass('hidden');
		$('#mainView').removeClass('hidden');
		// Take the values in the form
		// Put them in/Replace the text in the html
		$('#titleText').text( $('#titleInput').val() );
		$('#paragraphText').text( $('#paragraphInput').val() );

		console.log( $('#titleInput').val() );
		console.log( $('#paragraphInput').val() );
	});

	$('#cancelButton').click(function(){
		
		//Hide the form, show the main viww
		$('#editForm').addClass('hidden');
		$('#mainView').removeClass('hidden');
		console.log('submit');

	})

});





