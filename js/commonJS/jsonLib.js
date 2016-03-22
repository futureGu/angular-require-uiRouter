/**
 * Created by gukui on 2016/3/22.
 */
'use strict';

define(function(){
    var person = [{
        "name":"顾魁","info":[
            {
                "sex":"男",
                "age":"27",
                "weight":"65Kg"
            }
        ]
    }]
   return {
       getPersonInfo:function (){
            return person;
       }
   };

});