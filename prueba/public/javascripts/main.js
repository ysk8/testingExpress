/**
* Created with testingCodio_1.
* User: ysk8
* Date: 2014-09-23
* Time: 08:36 PM
* To change this template use Tools | Templates.
*/
function onDocumentReady()
{
	console.log("Main Ready! -> 0.2.0");
    
    /*$("#hora").attr("disable", true);
    
    $("#hora").click(function(e)
    {
        e.preventDefault();
        console.log("Falta paso 1");
    }); */
    
    
    
    $("#nav1").hide();
    $("#calendarioApp").hide();       
    $("#tiempo").hide();
    $("#ok_button").hide();
    $("#auto_app").hide();
    
    $("#addMarker").on('click', function(e)
    {
        $("#nav1").show();
        
        $("#nav1").offset({left:200, top:100});
        
        console.log("AddMarker!")
                         
    });
    
    $("#calendario_btn").on('click', function(e)
    {
        $("#calendarioApp").show();
        
        x=$("#nav1").offset().left;
        y=$("#nav1").offset().top;
    
        console.log("x = "+x+" y = "+y);
    
        $("#calendarioApp").offset({left:x, top:y+80});
        
        console.log("Muestro los Dias!")
                         
    });
    
    $(".calendario").on('click', function(e)
    {
        $("#calendarioApp").hide();
        
        $("#tiempo").show();
        $("#ok_button").show();
        
        x=$("#nav1").offset().left;
        y=$("#nav1").offset().top;
    
        console.log("x = "+x+" y = "+y);
    
        $("#tiempo").offset({left:x+5, top:y+80});
        $("#ok_button").offset({left:x+70, top:y+135});
        
    });
    
    $(".okButton").on('click', function(e)
    {
        console.log("Boton OK");
        
        $("#tiempo").hide();
        $("#ok_button").hide();
        
        $("#auto_app").show();
        
         x=$("#nav1").offset().left;
         y=$("#nav1").offset().top;
        
        console.log("x = "+x+" y = "+y);
    
        $("#auto_app").offset({left:x+65, top:y+80});
    });
    
    $(".autosApp").on('click', function(e)
    {
        console.log("Placa: "+$(this).text());        
        
    });
    
}

$(document).on('ready', onDocumentReady);