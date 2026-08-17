

        const form = document.getElementById("orderForm");
        const orderButton = document.getElementById("orderButton");

        function selectLaptop(name, price) {
            document.getElementById("selectedLaptop").value =
                name + " - " + price;

            document.getElementById("payment").scrollIntoView({
                behavior: "smooth"
            });

            checkForm();
        }


        function checkForm() {

            const inputs = form.querySelectorAll(
                "input[required], textarea[required]"
            );

            let valid = true;

            inputs.forEach(function(input) {
                if (input.value.trim() === "") {
                    valid = false;
                }
            });

            orderButton.disabled = !valid;
        }


        form.addEventListener("input", checkForm);


        form.addEventListener("submit", function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const email =
                document.getElementById("email").value;

            const address =
                document.getElementById("address").value;

            const laptop =
                document.getElementById("selectedLaptop").value;

            const reference =
                document.getElementById("paymentReference").value;


            const message =
                "NEW LAPTOP ORDER%0A%0A" +
                "Name: " + name + "%0A" +
                "Phone: " + phone + "%0A" +
                "Email: " + email + "%0A" +
                "Address: " + address + "%0A" +
                "Laptop: " + laptop + "%0A" +
                "Payment Reference: " + reference;


            const whatsappURL =
                "https://wa.me/2348106417282?text=" + message;


            document.getElementById("message").innerHTML =
                "✅ Your details have been accepted. Redirecting to WhatsApp...";

            window.open(whatsappURL, "_blank");

        });

 