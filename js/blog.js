 $(document).ready(function(){

	var $boardgamelist = $("#boardgamelist");
	var $boardgamepic = $("#boardgamepic");
	var $boardgametime = $("#boardgametime");

	$.ajax({

		type: 'get',
		url: 'https://bgg-json.azurewebsites.net/collection/jayellexo',
		dataType: 'json',
		success: function(boardgames) {
							
			$(boardgames).each(function(i, value) {
				$boardgamepic.append('<li>' + '<img src="' + value.thumbnail + '">' + '</li>');
				$boardgamelist.append('<li>' + value.name + '</li>');
				$boardgametime.append('<li>' + value.playingTime + '</li>');
			});
		}
	});
 });


