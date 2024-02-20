const contact_btn = document.getElementById('contact-btn');
const msg_btn = document.getElementById('msg-btn');

contact_btn.addEventListener("click", function () {
    console.log("yes clicked");
});
let formVisible = false;

msg_btn.addEventListener("click", function () {
    if (!formVisible) {
        const form_div = document.createElement("div");
        form_div.style.display = "flex";
        form_div.style.justifyContent = "center";
        form_div.style.alignItems = "center";
        form_div.style.maxWidth = "1440px";
        // form_div.style.height = "40vh";
        form_div.style.margin = "0 auto";
        // form_div.style.width = "100vh";
        form_div.style.padding = "20px";
        form_div.style.borderRadius = "5px";

        form_div.innerHTML = `
    <form id="contact-form">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required style="width: 400px; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px; "><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required style="width: 400px; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px; box-sizing: border-box;"><br>
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" placeholder="Optional" style="width: 400px; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px; box-sizing: border-box;"></textarea><br>
    <button type="submit" style="width: 100px; padding: 10px; border: none; border-radius: 3px; background-color: #007bff; color: #fff; cursor: pointer;">Submit</button>
</form>
    `;

     msg_btn.insertAdjacentElement('afterend', form_div);

        const contact_form = document.getElementById('contact-form');
        contact_form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(contact_form);
            const formValues = Object.fromEntries(formData.entries());
            console.log(formValues);
            contact_form.reset();
        });
        formVisible = true;
    }
    else {
        const form_div = document.getElementById('contact-form');
        if (form_div) {
            form_div.remove();
        }
        formVisible = false;
    }
});
