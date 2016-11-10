var Plejmo = function() {
	this.VideoList;

	var that = this;

	this.Init = function() {

		that.GetVideos();

	}

	that.GetVideos = function() {

		$.getJSON('scripts/list.json', function(Data) {
			that.VideoList = Data;

			VideoListHTML = '';

			for(I in that.VideoList) {
				// console.log(that.VideoList[I]['title']);
				VideoListHTML += '<div class="VideoItem">'
								+ '<div class="VideoPoster"><img src="images/' + that.VideoList[I]['image'] + '"></div>'
								+ '<span class="Price">Kolla nu ' + that.VideoList[I]['price'] + 'kr</span>'
								+ '<div class="VideoInfo">'
								+ '<span class="Title">' + that.VideoList[I]['title'] + '</span><div class="TitleMenu"></div><br>'
								+ '<span class="Genre">' + that.VideoList[I]['genre'] + '</span><br>'
								+ '<span class="Rating">' + that.VideoList[I]['rating'] + '<span>'
								+ '</div>'
								+ '</div>'
			}

			$('.VideosWrapper').html(VideoListHTML);
		}).done(function() {
			$('.Rating').each(function() {
				Rating = $(this).text();
				$(this).rateYo({
					rating: Rating,
					starWidth: "10px",
					ratedFill: "#332967"
				});

			})
		});
	}
}

// Initialize
var PlejmoFilms;
$(window).on('load', function() {
	PlejmoFilms    = new Plejmo(window);

	PlejmoFilms.Init();
});