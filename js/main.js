const cartButton=document.querySelector("#cart-button");
const modal=document.querySelector(".modal");
const close=document.querySelector(".close");
if (cartButton)
{
	cartButton.addEventListener("click", function (event) {
		modal.style.display="flex";
	});
	close.addEventListener("click", function (event) {
		modal.style.display = "none";
	});
}
new WOW().init();
