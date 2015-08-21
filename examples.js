


$(document).ready(function() {

    $.ajax('data.json', {
        type: 'GET',
        success: callback,
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });



})

function callback(response){
	// response.forEach(function(object,index){
	// 	var $newDiv = $('<div>', { class: response[index].color });
	// 	var $newP = $('<p>');
	// 	var $currentDiv, $currentP;
	// 	$('body').append($newDiv);
	// 	$currentDiv = $('body').children().last();
	// 	$currentDiv.append($newP);
	// 	$currentP = $currentDiv.children().first();
	// 	$currentP.text(response[index].color)


	// });

	var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    $('.content').html(template(response));
}

