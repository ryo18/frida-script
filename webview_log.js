Java.perform(function () {

  var _log = Java.use("android.webkit.WebView").loadUrl.overload("java.lang.String").implementation = function (s) {
    //send(s.toString());
    this.loadUrl.overload("java.lang.String").call(this, s);
  };

  console.log("done: "+_log)
  
})

// ok
Java.perform(function () { Java.use("android.webkit.WebView").loadUrl.overload("java.lang.String","java.util.Map").implementation = function (s) { send(s.toString()); this.loadUrl.overload("java.lang.String","java.util.Map").call(this, s); };}) 


Java.perform(function () { var test = Java.use("android.webkit.WebView"); console.log(test);}) 

Java.perform(function() {
    var Webview = Java.use("android.webkit.WebView")
    Webview.loadUrl.overload("java.lang.String").implementation = function(url) {
        console.log("\n[+]Loading URL from", url);
        console.log("[+]Setting the value of setWebContentsDebuggingEnabled() to TRUE");
        this.setWebContentsDebuggingEnabled(true);
        this.loadUrl.overload("java.lang.String").call(this, url);
    }
});

Java.perform(function() {    var Webview = Java.use("android.webkit.WebView");    Webview.loadUrl.overload("java.lang.String").implementation = function(url) {        console.log("\n[+]Loading URL from", url);    this.loadUrl.overload("java.lang.String").call(this, url);    }});


Java.perform(function() {    var Webview = Java.use("android.webkit.WebView");    Webview.loadUrl.overload("java.lang.String","java.util.Map").implementation = function(url,data) {        console.log("\n[+]Loading URL from", url); console.log("\n[+]Loading URL from", data); var HashMapNode = Java.use('java.util.HashMap$Node'); var iterator = data.entrySet().iterator(); while (iterator.hasNext()) { var entry = Java.cast(iterator.next(), HashMapNode); console.log(entry.getKey());console.log(entry.getValue()); } this.loadUrl.overload("java.lang.String","java.util.Map").call(this, url,data);    }});

Java.perform(function() {
    var str = Java.use('java.lang.String'), objectClass = 'java.lang.Object';
    str.equals.overload(objectClass).implementation = function(obj) {
        var response = str.equals.overload(objectClass).call(this, obj);
        if (obj) {
            if (obj.toString().length > 5) {
                send(str.toString.call(this) + ' == ' + obj.toString() + ' ? ' + response);
            }
        }
        return response;
    }
});




Java.perform(function() {    var str = Java.use('java.lang.String'), objectClass = 'java.lang.Object';    str.equals.overload(objectClass).implementation = function(obj) {        var response = str.equals.overload(objectClass).call(this, obj);        if (obj) {            if (obj.toString().length > 5) {                send(str.toString.call(this) + ' == ' + obj.toString() + ' ? ' + response);            }        }        return response;    }});

//ok
Java.perform(function(){   var Webview = Java.use("android.webkit.WebView");   Webview.loadUrl.overload("java.lang.String","java.util.Map").implementation = function(url,data){     console.log("\n[+]Loading URL 2 from: ",url);     console.log("\n[+]Setting the value of setWebContentsDebuggingEnable() to True");     this.setWebContentsDebuggingEnabled(true);     var HashMapNode = Java.use("java.util.HashMap$Node");     var iterator = data.entrySet().iterator();     while (iterator.hasNext()){       var entry = java.cast(iterator.next(),HashMapNode);       console.log("\n[+]Key: ",entry.getKey());       console.log("\n[+]Value: ",entry.getValue());     }     this.loadUrl.overload("java.lang.String","java.util.Map").call(this,url,data);   } })

Java.perform(function(){
  var Webview = Java.use("android.webkit.WebView");
  Webview.loadUrl.overload("java.lang.String","java.util.Map").implementation = function(url,data){
    console.log("\n[+]Loading URL from: ",url);
    console.log("\n[+]Setting the value of setWebContentsDebuggingEnable() to True");
    this.setWebContentsDebuggingEnabled(true);
    var HashMapNode = Java.use("java.util.HashMap$Node");
    var iterator = data.entrySet().iterator();
    while (iterator.hasNext()){
      var entry = java.cast(iterator.next(),HashMapNode);
      console.log("\n[+]Key: ",entry.getKey());
      console.log("\n[+]Value: ",entry.getValue());
    }
    this.loadUrl.overload("java.lang.String","java.util.Map").call(this,url,data);
  }
})









