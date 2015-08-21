


$(document).ready(function() {

    $.ajax('data.json', {
        type: 'GET',
        success: callbackData,
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

    function templateGet(data){
	    $.ajax('handlebarsTemplate.html', {
	        type: 'GET',
	        dataType: 'html',
	        success: function(response){
	        	
				var source   = response;
			    var template = Handlebars.compile(source);
			    $('.content').html(template(data));

			},
	        error: function(request, errorType, errorMessage){
	            alert(errorType + " " + errorMessage);
	        }
	    });
	}

function callbackData(response){
	templateGet(response);
}



})



