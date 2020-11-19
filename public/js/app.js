$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
});

$("#form").on('submit', function(e) {
    let email = $("#equifax_email").val();
    let confirm = $("#equifax_confirmation_email").val();

    if (email != confirm) {
       alert('Please ensure both emails are matching!');
       e.preventDefault();
    }
});

$('#').on('keypress', function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
       e.preventDefault();
       return false;
    }
});

