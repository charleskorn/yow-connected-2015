$(document).ready(function () {
    $('#submit-button').click(function() {
        var day = parseInt($('#day').val(), 10);
        var month = parseInt($('#month').val(), 10);
        var year = parseInt($('#year').val(), 10);

        var birthday = moment({year: year, month: month - 1, day: day}); // Months are zero-based...
        var today = moment();

        if (birthday.date() == today.date() && birthday.month() == today.month()) {
            alert("Happy birthday!");
        } else {
            alert("Sorry, it's not your birthday yet, come back later.");
        }
    });
});
