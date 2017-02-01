$(function(){
    console.log( 'jQuery Started.' );

// open div when clicking on specific icons
    var lastId;

    $('#firebase, #android, #java, #html').click(function(){
        var id = $(this).attr("id");
        console.log(id); 
        if(id!=lastId){
            switch(id) {
                case $('#firebase').attr("id"):
                    $("#info").text($('#firebase-info').text());
                    break;
                case $('#android').attr("id"):
                    $("#info").text($('#android-info').text());
                    break;
                case $('#java').attr("id"):
                    $("#info").text($('#java-info').text());
                    break;
                case $('#html').attr("id"):
                    $("#info").text($('#html-info').text());
                    break;
                default:
            }   
            $('#info').slideDown(1000);        
            $("#info").show();
            lastId = id;
        }
        else{
            $('#info').slideUp(1000);
            lastId = null;
        }
    });
    
    $('#email').click(function(){
    $(this).next().fadeToggle(1000) 
    });
    
    $('.marlee').hover(function(){
    $('#marlee-info').fadeTo('slow', 1);
    });

});