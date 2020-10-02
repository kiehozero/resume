function sendMail(contactForm) {
    emailjs.send("gmail", "template_bd40mjq", {
        "fullname": contactForm.name.value, 
        "emailaddress": contactForm.emailaddress.value, 
        "projectsummary": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED");
        });
    return false;
}