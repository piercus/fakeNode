sand.define("util", function(r){ 
  
  return {
    inherits : function(cstr, superCstr){
      cstr.super_ = superCstr;  
      var f = function(){};
      f.prototype = superCstr.prototype;
      cstr.prototype = new f();
    }    
  };
});