/**
* Created with testingCodio_1.
* User: ysk8
* Date: 2014-09-23
* Time: 08:36 PM
* To change this template use Tools | Templates.
*/
function onDocumentReady()
{
	console.log("Main Ready! -> 0.2.7");
    
    /*$("#hora").attr("disable", true);
    
    $("#hora").click(function(e)
    {
        e.preventDefault();
        console.log("Falta paso 1");
    }); */
    
    var servicio_resumen = [];
    
    $("#nav1").hide();
    $("#calendarioApp").hide();       
    $("#tiempo").hide();
    $("#ok_button").hide();
    $("#auto_app").hide();
    $("#destino_app").hide();
    $("#pago_app").hide();
    $("#servicio_app").hide();
    $("#solicitar_servicio_button").hide();
    
    function posicionReferencia(instancia, vx, vy, i)
    {
        x=$("#nav1").offset().left;
        y=$("#nav1").offset().top;
        
        console.log("X = "+x+" Y = "+y);
        
        $(instancia).offset({left:x+vx, top:y+vy});
        
        $("#indicador_t").offset({left:x+i});
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
        
        posicionReferencia("#calendarioApp", 0, 87, 0);        
                         
    });
    
    $(".calendario").on('click', function(e)
    {
        console.log("Fecha: "+$(this).text());
        
        servicio_resumen[0] = $(this).text();
        
        $("#calendarioApp").hide();
        
        $("#tiempo").show();
        $("#ok_button").show();
        
        posicionReferencia("#tiempo", 5, 87, 70);
        posicionReferencia("#ok_button", 70, 142, 70);       
        
    });
    
    $(".okButton").on('click', function(e)
    {
        
        hora = $('#hora_selector :selected').text()+":"+$('#minuto_selector :selected').text()+$('#am_pm :selected').text();        
        console.log("Boton OK - Hora: "+hora);
        
        servicio_resumen[1] = hora;
        
        $("#tiempo").hide();
        $("#ok_button").hide();
        
        $("#auto_app").show();
        
        posicionReferencia("#auto_app", 65, 87, 140);
    });
    
    $(".autosApp").on('click', function(e)
    {
        console.log("Placa: "+$(this).text());
        
        servicio_resumen[2] = $(this).text();
        
        $("#auto_app").hide();
        
        $("#destino_app").show();
        
        posicionReferencia("#destino_app", 125, 87, 210);       
        
    });
    
    $(".destinosApp").on('click', function(e)
    {
        console.log("Destino: "+$(this).text());
        
        servicio_resumen[3] = $(this).text();
        
        $("#destino_app").hide();
        
        $("#pago_app").show();
        
        posicionReferencia("#pago_app", 185, 87, 280);       
        
    });
    
    $(".pagoApp").on('click', function(e)
    {
        console.log("Tipo de pago: "+$(this).text());
        
        servicio_resumen[4] = $(this).text();
        
        console.log("Resumen: "+servicio_resumen);
        
        $("#pago_app").hide();
        
        $("#servicio_app").show();
        $("#solicitar_servicio_button").show();
        
        $.each(servicio_resumen, function(index, value){
            var lista = $('<li />');
            
            switch(index)
            {
                case 0:
                    lista.html("Día: "+value);
                    break;
                case 1:
                    lista.html("Hora: "+value);
                    break;
                case 2:
                    lista.html("Placa: "+value);
                    break;
                case 4:
                    lista.html("Pago: "+value);
                    break;
                default:
                    lista.html(value);
                    break;                    
            }
                        
            $("#servicio_app").append(lista);
        });
        
                
        posicionReferencia("#servicio_app", 255, 87, 350);
        posicionReferencia("#solicitar_servicio_button", 490, 90, 350);
        
    });
}

$(document).on('ready', onDocumentReady);