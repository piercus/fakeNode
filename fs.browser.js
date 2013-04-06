sand.define("fs", function(r){
  var fileSystem = {};
  return {
    readFile : function(fileName, encoding, cb) {
      try {
        if(typeof(fileSystem[fileName]) === "undefined"){
          throw Error("cannot find "+fileName+" in local fake storage");
        }         
        setTimeout(function(){
          cb(null, fileSystem[fileName]); 
        },0);
      } catch (e) {
        cb && cb(e);
      }
    },
    writeFile : function(fileName, data, encoding, cb) {
      fileSystem[fileName] = data;
      cb && cb();
    }
  };
});