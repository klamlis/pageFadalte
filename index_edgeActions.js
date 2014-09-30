/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("container").html('<iframe scrolling="no" src="fondos/canvas_01.html" width="1025" height="688" frameborder="0"></iframe>');
         sym.$("con_slide").html('<iframe scrolling="no" src="slide/demo/basic.htm" width="1025" height="688" frameborder="0"></iframe>');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nosotros}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'footer'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_icono_map}", "click", function(sym, e) {
         //window.open("contacto.html")
         // Open Spotlight Overlay with Animation 
         var config = {
             width: 425,
             height: 350,
             type: "animate",
             source: "pages/mapa.html"
         };		
         
         EC.Spotlight.open( config );
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icono_map}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.getSymbol("animMapa").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icono_map}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.getSymbol("animMapa").play();
         
         

      });
      //Edge binding end

   })("footer");
   //Edge symbol end:'footer'

   //=========================================================
   
   //Edge symbol: 'btn_nosotros'
   (function(symbolName) {   
   
   })("btn_nosotros");
   //Edge symbol end:'btn_nosotros'

   //=========================================================
   
   //Edge symbol: 'btn_productos'
   (function(symbolName) {   
   
   })("btn_productos");
   //Edge symbol end:'btn_productos'

   //=========================================================
   
   //Edge symbol: 'btn_contacto'
   (function(symbolName) {   
   
   })("btn_contacto");
   //Edge symbol end:'btn_contacto'

   //=========================================================
   
   //Edge symbol: 'rec_amarillo'
   (function(symbolName) {   
   
   })("rec_amarillo");
   //Edge symbol end:'rec_amarillo'

   //=========================================================
   
   //Edge symbol: 'rec_azul'
   (function(symbolName) {   
   
   })("rec_azul");
   //Edge symbol end:'rec_azul'

   //=========================================================
   
   //Edge symbol: 'rect_verde'
   (function(symbolName) {   
   
   })("rect_verde");
   //Edge symbol end:'rect_verde'

   //=========================================================
   
   //Edge symbol: 'logo_google'
   (function(symbolName) {   
   
   })("logo_google");
   //Edge symbol end:'logo_google'

   //=========================================================
   
   //Edge symbol: 'logo_in'
   (function(symbolName) {   
   
   })("logo_in");
   //Edge symbol end:'logo_in'

   //=========================================================
   
   //Edge symbol: 'logo_youtube'
   (function(symbolName) {   
   
   })("logo_youtube");
   //Edge symbol end:'logo_youtube'

   //=========================================================
   
   //Edge symbol: 'logo_twitter'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_logo_twitter}", "click", function(sym, e) {
         window.open('https://twitter.com/CablesFadalte');

      });
      //Edge binding end

   })("logo_twitter");
   //Edge symbol end:'logo_twitter'

   //=========================================================
   
   //Edge symbol: 'logo_face'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_logo_face2}", "click", function(sym, e) {
         window.open('https://www.facebook.com/CablesFadalte');
         // Establecer el valor de una variable Símbolo
         
         

      });
      //Edge binding end

   })("logo_face");
   //Edge symbol end:'logo_face'

   //=========================================================
   
   //Edge symbol: 'animMapa'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("animMapa");
   //Edge symbol end:'animMapa'

   //=========================================================
   
   //Edge symbol: 'botonAlambres'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1102, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnuno}", "mouseover", function(sym, e) {
         sym.play("slideOpen");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2667, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnuno}", "mouseout", function(sym, e) {
         sym.play("slideGone");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn1}", "mouseover", function(sym, e) {
         sym.play("slideStay");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn2}", "mouseover", function(sym, e) {
         sym.play("slideStay");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn3}", "mouseover", function(sym, e) {
         sym.play("slideStay");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn4}", "mouseover", function(sym, e) {
         sym.play("slideStay");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn5}", "mouseover", function(sym, e) {
         sym.play("slideStay");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn1}", "mouseout", function(sym, e) {
         sym.play("slideGone");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn2}", "mouseout", function(sym, e) {
         sym.play("slideGone");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn3}", "mouseout", function(sym, e) {
         sym.play("slideGone");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn4}", "mouseout", function(sym, e) {
         sym.play("slideGone");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_uno_btn5}", "mouseout", function(sym, e) {
         sym.play("slideGone");

      });
      //Edge binding end

   })("botonAlambres");
   //Edge symbol end:'botonAlambres'

   //=========================================================
   
   //Edge symbol: 'botones_up'
   (function(symbolName) {   
   
   })("botones_up");
   //Edge symbol end:'botones_up'

   //=========================================================
   
   //Edge symbol: 'uno_btn1'
   (function(symbolName) {   
   
   })("uno_btn1");
   //Edge symbol end:'uno_btn1'

   //=========================================================
   
   //Edge symbol: 'uno_btn1_1'
   (function(symbolName) {   
   
   })("uno_btn2");
   //Edge symbol end:'uno_btn2'

   //=========================================================
   
   //Edge symbol: 'uno_btn2_1'
   (function(symbolName) {   
   
   })("uno_btn3");
   //Edge symbol end:'uno_btn3'

   //=========================================================
   
   //Edge symbol: 'uno_btn3_1'
   (function(symbolName) {   
   
   })("uno_btn4");
   //Edge symbol end:'uno_btn4'

   //=========================================================
   
   //Edge symbol: 'uno_btn4_1'
   (function(symbolName) {   
   
   })("uno_btn5");
   //Edge symbol end:'uno_btn5'

   //=========================================================
   
   //Edge symbol: 'btnuno'
   (function(symbolName) {   
   
   })("btnuno");
   //Edge symbol end:'btnuno'

   //=========================================================
   
   //Edge symbol: 'botonCables'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1344, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3375, function(sym, e) {
         // introducir código aquí
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btndos}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.play('slideOpen');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btndos}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn1}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn2}", "mouseover", function(sym, e) {
         sym.play('slideStay');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn3}", "mouseover", function(sym, e) {
         sym.play('slideStay');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn4}", "mouseover", function(sym, e) {
         sym.play('slideStay');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn5}", "mouseover", function(sym, e) {
         sym.play('slideStay');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn6}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn6}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn5}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn4}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn3}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn2}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dos_btn1}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         
         

      });
      //Edge binding end

   })("botonCables");
   //Edge symbol end:'botonCables'

   //=========================================================
   
   //Edge symbol: 'uno_btn1_1'
   (function(symbolName) {   
   
   })("dos_btn1");
   //Edge symbol end:'dos_btn1'

   //=========================================================
   
   //Edge symbol: 'dos_btn1_1'
   (function(symbolName) {   
   
   })("dos_btn2");
   //Edge symbol end:'dos_btn2'

   //=========================================================
   
   //Edge symbol: 'dos_btn2_1'
   (function(symbolName) {   
   
   })("dos_btn3");
   //Edge symbol end:'dos_btn3'

   //=========================================================
   
   //Edge symbol: 'dos_btn3_1'
   (function(symbolName) {   
   
   })("dos_btn4");
   //Edge symbol end:'dos_btn4'

   //=========================================================
   
   //Edge symbol: 'dos_btn4_1'
   (function(symbolName) {   
   
   })("dos_btn5");
   //Edge symbol end:'dos_btn5'

   //=========================================================
   
   //Edge symbol: 'dos_btn5_1'
   (function(symbolName) {   
   
   })("dos_btn6");
   //Edge symbol end:'dos_btn6'

   //=========================================================
   
   //Edge symbol: 'btndos'
   (function(symbolName) {   
   
   })("btndos");
   //Edge symbol end:'btndos'

   //=========================================================
   
   //Edge symbol: 'botonCorazas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 858, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2092, function(sym, e) {
         // introducir código aquí
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btntres}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.play('slideOpen');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btntres}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tres_btn1}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tres_btn1_1}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tres_btn1}", "mouseover", function(sym, e) {
         sym.play('slideStay');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tres_btn1_1}", "mouseover", function(sym, e) {
         sym.play('slideStay');
         
         

      });
      //Edge binding end

   })("botonCorazas");
   //Edge symbol end:'botonCorazas'

   //=========================================================
   
   //Edge symbol: 'botonExtensiones'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2408, function(sym, e) {
         // introducir código aquí
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btncuatro}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.play('slideOpen');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btncuatro}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn1}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn2}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn3}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn4}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn5}", "mouseover", function(sym, e) {
         sym.play('slideStay');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn5}", "mouseout", function(sym, e) {
         sym.play('slideGone');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn4}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn3}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn2}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cuatro_btn1}", "mouseout", function(sym, e) {
         sym.play('slideGone');

      });
      //Edge binding end

   })("botonExtensiones");
   //Edge symbol end:'botonExtensiones'

   //=========================================================
   
   //Edge symbol: 'dos_btn1_1'
   (function(symbolName) {   
   
   })("tres_btn1");
   //Edge symbol end:'tres_btn1'

   //=========================================================
   
   //Edge symbol: 'tres_btn1_1'
   (function(symbolName) {   
   
   })("tres_btn2");
   //Edge symbol end:'tres_btn2'

   //=========================================================
   
   //Edge symbol: 'dos_btn1_1'
   (function(symbolName) {   
   
   })("cuatro_btn1");
   //Edge symbol end:'cuatro_btn1'

   //=========================================================
   
   //Edge symbol: 'cuatro_btn1_1'
   (function(symbolName) {   
   
   })("cuatro_btn2");
   //Edge symbol end:'cuatro_btn2'

   //=========================================================
   
   //Edge symbol: 'cuatro_btn2_1'
   (function(symbolName) {   
   
   })("cuatro_btn3");
   //Edge symbol end:'cuatro_btn3'

   //=========================================================
   
   //Edge symbol: 'cuatro_btn3_1'
   (function(symbolName) {   
   
   })("cuatro_btn4");
   //Edge symbol end:'cuatro_btn4'

   //=========================================================
   
   //Edge symbol: 'cuatro_btn4_1'
   (function(symbolName) {   
   
   })("cuatro_btn5");
   //Edge symbol end:'cuatro_btn5'

   //=========================================================
   
   //Edge symbol: 'btntres'
   (function(symbolName) {   
   
   })("btntres");
   //Edge symbol end:'btntres'

   //=========================================================
   
   //Edge symbol: 'btncuatro'
   (function(symbolName) {   
   
   })("btncuatro");
   //Edge symbol end:'btncuatro'

})(jQuery, AdobeEdge, "EDGE-26067516");