setup = function(){
  console.log("initialized.");
  payload = para["payload"];
  webhookurl = para["webhookurl"];
}
onfire = function(){
  console.log("recognized!!");
  document.bgColor = 'red';
  setTimeout(function(){
    document.bgColor = 'white';
  },1000);
  var url = webhookurl;
  $.ajax({
    type: "POST",
    url: webhookurl,
    data: JSON.parse(payload)
  });
}
