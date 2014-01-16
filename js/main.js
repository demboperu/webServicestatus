$(document).ready(function() {
    $.getJSON('data/mockdata/services.json', function(data) {
        console.log(data);
    });
});