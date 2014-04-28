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

    $('form').submit(function () {
        $('form :input').prop('readonly', true);
        $('form :submit').prop('disabled', true);
        $('.loginsubmit').html('Engångskod skickas till din mobil...');
        $('.otpsubmit').html('Vänta...');
    });
});
