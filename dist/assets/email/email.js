function submitToAPI(e) {
    e.preventDefault();
    //Enter the API Gateway endpoint URL you have configured here.
    var URL = "https://0v4n9z3n5c.execute-api.ap-northeast-1.amazonaws.com/TolopSendEmail";


    //Check the input value of the form
    var name = /[A-Za-z]{1}[A-Za-z]/;
    if (!name.test($("#name-input").val())) {
        alert("Problem in Name *: Please enter at least 2 characters.");
        return;
    }

    var subject = /[A-Za-z]{1}[A-Za-z]/;
    if (!subject.test($("#subject-input").val())) {
        alert("Problem in Subject *: Please enter at least 2 characters.");
        return;
    }
    if ($("#email-input").val() == "") {
        alert("Problem in Email *: Please enter your email.");
        return;
    }


    var name = $("#name-input").val();
    var subject = $("#subject-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        name: name,
        subject: subject,
        email: email,
        desc: desc
    };

    $.ajax({
        type: "POST",
        url: "https://0v4n9z3n5c.execute-api.ap-northeast-1.amazonaws.com/TolopSendEmail",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),

        success: function() {
            alert("Success!\nYour message has been sent 😃");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function() {
            alert("Message Transmission Failure！\nI'm sorry, seems like there's a prblem 🙁");
        }
    });
}