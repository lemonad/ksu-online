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

    $('form').submit(function () {
        $('form :input').prop('disabled', true);
        $('form :submit').prop('disabled', true);
        $('.loginsubmit').val('Engångskod skickas till din mobil...');
        $('.otpsubmit').val('Vänta...');
    });
});
