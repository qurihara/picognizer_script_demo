setup = function(){
  console.log("initialized.");
  webhookurl = para["webhookurl"];
}
onfire = function(){
  console.log("recognized!!");
  document.bgColor = 'red';
  setTimeout(function(){
    document.bgColor = 'white';
  },1000);
  var url = webhookurl;
  var data = {
    from: "picognizer"
  };
  $.ajax({
    type: "POST",
    url: webhookurl,
    data: data
  });
}
