/*jslint browser: true, vars: true*/
/*global $, jQuery*/

/*
 * ksuonline.se
 *
 * Kärnkraftsäkerhet och Utbildning AB 2014
 *
 */

$(function () {
    'use strict';

    // Slight delay before starting scale animation.
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 300);

    // Initialize starfield parallax scrolling.
    $('#parallax').parallax({limitY: 0});

    // Enable form placeholder behavior for browsers that
    // aren't trying hard enough yet.
    $('input').placeholder();

    // Replace common radius info/error messages.
    var msg = $('.err').text().trim();
    var found;
    if (msg === 'Enter OTP:') {
        $('.err').text('');
    } else if (msg === 'Invalid username or password') {
        $('.err').text('Ogiltigt användarnamn eller lösenord.');
    } else if (msg === 'Invalid OTP.') {
        $('.err').text('Ogiltig engångskod. Var vänlig försök igen.');
    } else {
        found = msg.match(/^Phone not reachable\. Please sign (\d+)\.$/);
        if (found) {
            $('.err').html(['Din mobil kunde inte nås. Om du har appen',
                            'Mideye+ installerad kan du öppna den och',
                            'signera med',
                            '<code>' + found[1] + '</code>.'].join(' '));
        }
    }

    $('form').submit(function () {
        $('form :input').prop('readonly', true);
        $('form :submit').prop('disabled', true);
        $('.loginsubmit').html('Engångskod skickas till din mobil...');
        $('.otpsubmit').html('Vänta...');
    });
});
