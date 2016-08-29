const bakverk = "https://bakverksAPI.herokuapp.com/bakverk";
const company = "https://company-generator.herokuapp.com/company";


/// CRUD functions

var getCompany = function(url) {
    $('#result').append("<ul id='list'></ul>")
    $.get(url, function(data, status) {
        $.each(data, function(index, value) {
            var subList = "<ul id=" + index + "></ul>";
            var listItems = '';
            $('#list').append(subList)
            $.each(value, function(i, v){
                listItems += '<li><span>' + i + ':</span> ' + v + '</li>';
            })
            $("#" + value.id).append(listItems)    
        });
    });
}

var getBakverk = function(url) {
    $('#result').append("<ul id='list'></ul>")
    $.get(url, function(data) {
        $.each(data, function(index, value) {
            var listItems = '';
            $.each(value, function(i, v){
                listItems += '<li>' + i + ': ' + v + '</li>';
            })
            $("#list").append(listItems)    
        });
    })
}

var getBakverkAJAX = function(url, namn) {
    $.ajax({
        method: 'get',
        url: url,
        data: {namn : namn}
    })
    .done(function(data) {
        $('#result').append("<ul id='list'></ul>");
        $.each(data, function(index, value) {
            var listItems = '';
            $.each(value, function(i, v){
                listItems += '<li><span>' + i + ':</span> ' + v + '</li>';
            });
            $("#list").append(listItems);
        });
    })
}

var postCompanyAjax = function(url, data) {
    $.ajax({
        method: 'post',
        url: url,
        data: data
    })
    .done(function(){
        getCompany(company);
    })
}

/// Click functions

$('#get').click(function () {
    $("#result").empty();
    getCompany(company);
});

$('#post').click(function () {
    $.get("https://bakverksAPI.herokuapp.com/bakverk", function(data) {
        $.each(data, function(index, value) {
            $.post("https://bakverksAPI.herokuapp.com/bakverk", { betyg: 1000, namn: "jag dödar alla bakverk", id: value.id }, function(success) {
            console.log("POST completed");
            })
        })
    })
})

$('#getAjax').click(function() {
    $("#result").empty();
    getBakverkAJAX(bakverk, "jag dödar alla bakverk");
});

$('#postAjax').click(function() {
    $("#result").empty();
    var companyData = $("#companyPost").serialize();
    postCompanyAjax(company, companyData)
    $("#companyPost")[0].reset();
});


