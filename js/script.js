const myIP = document.querySelector(".ip");

let fetchRes = fetch("https://api.ipify.org/?format=json");
fetchRes
  .then((res) => res.json())
  .then((ip) => {
    myIP.innerHTML = ip.ip;
  });
