var tg = window.Telegram.WebApp;
var buy = document.getElementById("buy");
var order = document.getElementById("order");

buy.addEventListener("click", () => {
   document.getElementById("main").style.display = "none"
   document.getElementById("form").style.display = "block";
   document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
});

order.addEventListener("click", () => {
    tg.close();})