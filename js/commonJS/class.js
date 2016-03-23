/**
 * Created by gukui on 2016/3/21.
 */
'use strict';

define(['jquery'],function(jquery) {
    var allStudents =[];
    return{
        classID:"001",
        department:"computer",

        addToClass:function(student){
            allStudents.push(student);
        },
        getClassSize:function(){
            return allStudents.length;
        },
        getAllStudents:function(){
            return allStudents;
        },
        sum:function(a1,a2){
            var sum = a1+a2;
            return sum;
        }
    };
});

