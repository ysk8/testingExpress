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
    $("#destino_app").hide();
    $("#pago_app").hide();
    
    function posicionReferencia(instancia, vx, vy)
    {
        x=$("#nav1").offset().left;
        y=$("#nav1").offset().top;
        
        console.log("X = "+x+" Y = "+y);
        
        $(instancia).offset({left:x+vx, top:y+vy});
    }
    
    $("#addMarker").on('click', function(e)
    {
        $("#nav1").show();
        
        $("#nav1").offset({left:200, top:100});
        
        console.log("AddMarker!")
                         
    });
    
    $("#calendario_btn").on('click', function(e)
    {
        $("#calendarioApp").show();
        
        posicionReferencia("#calendarioApp", 0, 80);        
                         
    });
    
    $(".calendario").on('click', function(e)
    {
        $("#calendarioApp").hide();
        
        $("#tiempo").show();
        $("#ok_button").show();
        
        posicionReferencia("#tiempo", 5, 80);
        posicionReferencia("#ok_button", 70, 135);
        
    });
    
    $(".okButton").on('click', function(e)
    {
        console.log("Boton OK");
        
        $("#tiempo").hide();
        $("#ok_button").hide();
        
        $("#auto_app").show();
        
        posicionReferencia("#auto_app", 65, 80);
    });
    
    $(".autosApp").on('click', function(e)
    {
        console.log("Placa: "+$(this).text());
        
        $("#auto_app").hide();
        
        $("#destino_app").show();
        
        posicionReferencia("#destino_app", 125, 80);       
        
    });
    
    $(".destinosApp").on('click', function(e)
    {
        console.log("Destino: "+$(this).text());
        
        $("#destino_app").hide();
        
        $("#pago_app").show();
        
        posicionReferencia("#pago_app", 185, 80);       
        
    });
    
}

$(document).on('ready', onDocumentReady);