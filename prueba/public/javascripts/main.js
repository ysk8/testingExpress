/**
* Created with testingCodio_1.
* User: ysk8
* Date: 2014-09-23
* Time: 08:36 PM
* To change this template use Tools | Templates.
*/
function onDocumentReady()
{
	console.log("Main Ready! -> 1");
    
    /*$("#hora").attr("disable", true);
    
    $("#hora").click(function(e)
    {
        e.preventDefault();
        console.log("Falta paso 1");
    }); */
        
    $("#nav1").offset({left:200, top:100});
    
    x=$("#content").offset().left;
    y=$("#content").offset().top;
    
    console.log("x = "+x+" y = "+y);
    
}

$(document).on('ready', onDocumentReady);