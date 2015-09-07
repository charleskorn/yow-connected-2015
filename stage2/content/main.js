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
            var nextBirthday = moment({year: today.year(), month: birthday.month(), day: birthday.date()});

            if (nextBirthday < today) {
                nextBirthday.add(1, 'year');
            }

            var daysToNextBirthday = nextBirthday.diff(today, 'days') + 1;
            $('#days-to-birthday').text(daysToNextBirthday);

            $('#not-birthday-modal').openModal();
        }
    });
});
