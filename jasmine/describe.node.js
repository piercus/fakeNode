sand.define("jasmine/describe", ["jasmine-node/lib/jasmine-node/index", "jasmine-node/lib/jasmine-node/reporter", "util"], function(r){     
  var jasmineEnv = jasmine.getEnv(), util = r.util;
  var jasmineNode = r.reporter.jasmineNode;   
  
  function removeJasmineFrames(text) {
    var lines = [];
    text.split(/\n/).forEach(function(line){
      if (line.indexOf(filename) == -1) {
        lines.push(line);
      }
    });
    return lines.join('\n');
  }
  
  jasmineEnv.addReporter(new jasmineNode.TerminalReporter({print:       util.print,
                                               color:       true,
                                               onComplete:  null,
                                               stackFilter: removeJasmineFrames})); 
  global.asyncSpecDone = jasmine.asyncSpecDone;                                             
  return describe;
});