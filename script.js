const form = document.getElementById("booking-form"); // un form id "form" nu irukanum

form.addEventListener("submit", function(e){
    e.preventDefault(); // page reload stop

    // success message popup create
    const popup = document.createElement("div");
    popup.innerText = "✅ Table Booked Successfully!";
    
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.background = "green";
    popup.style.color = "white";
    popup.style.padding = "12px 18px";
    popup.style.borderRadius = "10px";
    popup.style.zIndex = "9999";
    popup.style.fontSize = "16px";

    document.body.appendChild(popup);

    // 3 seconds la remove
    setTimeout(() => {
        popup.remove();
    }, 3000);

    // form reset
    form.reset();
});






 function scrollToTop(){
            window.scrollTo({
                top: 200,
                behavior: "smooth"
            });
        }