$(document).ready(function () {
    $('select').material_select();

    $('#submit-button').click(function() {
        var day = parseInt($('#day').val(), 10);
        var month = parseInt($('#month').val(), 10);
        var year = parseInt($('#year').val(), 10);

        var birthday = moment({year: year, month: month - 1, day: day}); // Months are zero-based...
        var today = moment();

        if (birthday.date() == today.date() && birthday.month() == today.month()) {
            var birthdayYear = today.year() - birthday.year();
            $('#birthday-year').text(birthdayYear);
            $('#birthday-modal').openModal();
        } else {
            var averageLifeExpectancy = 71; // years, according to Google
            var expectedDeath = birthday.clone().add(averageLifeExpectancy, 'years');

            var durationToDate = today.diff(birthday);
            var totalDuration = expectedDeath.diff(birthday);
            var proportionDone = durationToDate / totalDuration;
            var percentageDone = clampToPercentage(proportionDone * 100);

            $('#life-progress-bar').css('width', percentageDone + '%');

            $('#not-birthday-modal').openModal();
        }
    });
});

function clampToPercentage(value) {
    return Math.max(Math.min(value, 100), 0);
}
