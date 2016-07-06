console.log('Loading a web page');

var fs = require('fs');

grab = function(){
  var x = document.querySelectorAll('a.oc-odds-desc');
  
  if(x.length == 0){
    return null;
  }
  var attributes = [
    'data-oc-price-num', 
    'data-oc-price-den', 
    'data-oc-handicap-value',
    'data-oc-type', 
  ]
  

  var results = {}
  for(var i=0; i < x.length; i++){
    var ret = {}
    var it = x[i];
    for(var j in attributes){
      var attr = attributes[j];
      
      var attrVal = it.getAttribute(attr);
      ret[attr] = attrVal;
      
    }
    results[it.getAttribute('data-oc-desc')] = ret;
  }
  
  
  return results;
}

var page = require('webpage').create();
var url = 'https://www.skybet.com/politics/eu-referendum/event/17856059';
page.open(url, function (status) {
  //Page is loaded!
  setInterval(function(){
    var result = page.evaluate(grab);
    if(result != null){
      
      console.log(JSON.stringify(result));
      try{
        fs.write("logs.txt", [new Date(),JSON.stringify(result)].join(",") + "\n", 'a')
        phantom.exit();
      }catch(e){
        console.log(e)
      }
      
    }
  },2000)
  
});