/*
*
*/
import React                              from "react"      ;
import ReactDOM                           from "react-dom"  ;
import WidgetChatbot                      from "./js/componentes/WidgetChatbot" ;
import {findIdAgente}                     from "./js/utils/utilGenerico"        ;
//
window.addEventListener('load',function () {
  //
  let idBot = findIdAgente() ;
  if ( !idBot ){
    console.log('\n\n'+'*'.repeat(50)+'\n Id incorrecto o no especificado\n'+'*'.repeat(50)+'\n') ;
    return false ;
  }
  //
  let idDiv  = "idWidgetChatbot"+new Date().getTime() ;
  console.log('\n\n.....Iniciando widget eChatbot. Id: '+idBot+' ==> ') ;
  //
  let divApp = document.getElementById( idDiv ) || false ;
  if ( !divApp ){
    divApp    = document.createElement('div') ;
    divApp.id = idDiv ;
    document.body.appendChild( divApp ) ;
  }
  //
  ReactDOM.render( <WidgetChatbot idAgente={idBot} />, divApp );
  //
});
//