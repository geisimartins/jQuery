$(document).ready(function () {

    $(".imgsCasas").click(function () {
        $(this).fadeOut();
    });

    $("#VisualizarImgs").click(function (){
        $(".imgsCasas").fadeIn();
    });

})