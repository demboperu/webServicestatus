$(document).ready(function() {
    $.getJSON('data/mockdata/services.json', function(data) {
        initRequest(data);
        var htmlServices = '';
        $.each(data, function(index, item) {
            htmlServices += '<div class="container">'
            htmlServices += '    <div class="col-xs-4">'
            htmlServices += '        	<h4>' + item.name + '<h4>'
            htmlServices += '    </div>'
            htmlServices += '    <div class="col-xs-4">'
            htmlServices += '    	<div class="progress">'
            htmlServices += '        	<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">'
            htmlServices += '            	<span class="sr-only">20% Complete</span>'
            htmlServices += '        	</div>'
            htmlServices += '    	</div>'
            htmlServices += '    </div>'
            htmlServices += '</div>'
        });
        $('#status-bar').html(htmlServices);
    });
});

function initRequest(services) {
    for (i in services) {
        setInterval(function() {
            console.log(services[i].name);
            sendRequest(services[i]);
        }, 1000);
    }
}

function sendRequest(service, target) {
    console.log(service);
    var dataService = {
        url: service.url,
        method: service.method
    };
    $.ajax({
        url: 'http://localhost:3000/request',
        data: dataService,
        type: 'post',
        success: function(response) {
            if (response.successfull) {

            }
        }
    })
}