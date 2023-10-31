$(document).ready(function() {
    
    $("#paragraph").html(function(_, html) {
        return html.replace(/\b\w{9,}\b/g, '<span class="highlight">$&</span>');
    });

    var sourceLink = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
    $("#paragraph").after('<p><a href="' + sourceLink + '">Source</a></p>');

    $("#paragraph").html(function(_, html) {
        return html.replace(/\.\s/g, '.<br>');
    });

    var words = $("#paragraph").text().split(/\s+|\.|!/).filter(Boolean).length;
    $("h1").append('<p>Word Count: ' + words + '</p');

    $("#paragraph").html(function(_, html) {
        return html.replace(/\?/g, '🤔').replace(/!/g, '😲');
    });

});
