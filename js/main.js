/*jslint browser: true, vars: true*/
/*global $, jQuery*/

/*
 * ksu-online.se
 *
 * Kärnkraftsäkerhet och Utbildning AB 2014
 *
 */

$(function () {
    'use strict';

    var titles = [
        'laddledare',
        'eloperatör',
        'turbinoperatör',
        'stationstekniker',
        'skiftchef',
        'reaktoroperatör'
    ], courses = [
        'bränslehantering.',
        'reläskyddsteknik.',
        'simulator.',
        'härdkylning.',
        'kommunikation.',
        'reaktorfysik.'
    ];
    var titleindex = 0, courseindex = 0;
    var animationevents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.titles').bind(animationevents, function () {
        if ($(this).hasClass('flipOutX')) {
            // Switch to next title while not showing.
            $(this).text(titles[titleindex]);
            titleindex = (titleindex + 1) % titles.length;

            // Animate in.
            $('.titles').toggleClass('flipOutX flipInX');
        } else {
            // We don't want to animate out as fast as we animate in.
            setTimeout(function () {
                $('.titles').toggleClass('flipOutX flipInX');
            }, 2000);
        }
    });

    $('.courses').bind(animationevents, function () {
        if ($(this).hasClass('flipOutX')) {
            // Switch to next course while not showing.
            $(this).text(courses[courseindex]);
            courseindex = (courseindex + 1) % courses.length;

            // Animate in.
            $('.courses').toggleClass('flipOutX flipInX');
        } else {
            // We don't want to animate out as fast as we animate in.
            setTimeout(function () {
                $('.courses').toggleClass('flipOutX flipInX');
            }, 2000);
        }
    });

    // Wait a short while before first title animation.
    setTimeout(function () {
        $('.titles').addClass('flipOutX');
    }, 1000);

    // We want a slight offset so wait slightly longer before
    // first course animation.
    setTimeout(function () {
        $('.courses').addClass('flipOutX');
    }, 2000);

    // Slight delay before starting scale animation.
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 300);
});
