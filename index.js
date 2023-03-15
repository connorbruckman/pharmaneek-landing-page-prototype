$(document).ready(function () {

    // Pulls YouTube link from the button that's clicked to open the modal. 
    // Allows for reusability if more videos need to be implemented.
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    // Autoplays the video upon opening the modal. 
    $('#modal-video').on('shown.bs.modal', function (e) {
        // Allegedly prevents video recommendations once the video ends.
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;controls=1");
    })

    // Stops playing the video when the modal is closed.
    $('#modal-video').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

});