// read the json data, form element with an id of search, + div that has an id of update 
$('#search').keyup(
    function () {
    var searchfield = $('#search').val();
    var myexpression = new RegExp(searchfield, "i"); 
    $.getJSON('data.json', function (data) {
        var output = '<ul class = "searchresults">' ; // read each ul 
        $.each(data, function(key, val) {
            if ((val.name.search(myexpression) != -1) || 
            (val.bio.search(myexpression) != -1)) {
                output += '<li>'; // read each li 
                output += '<h2>' + val.name + '</h2>' ; // read the name for each li en forme de h2 
                output += '<img src ="images/' + val.shortname + '_tn.jpg" alt="'+ val.name +'"/>'; // img folder + shortname nafs el ism with img + alt de l'img 
                output += '<p>'+ val.bio +'</p>'; // read the bio pour chaque personne 
                output += '<p>'+ val.reknown+'</p>';
                output += '</li>';                
            }
        });  
        output += '</ul>';
        $('#update').html(output);
        }); 
       // get json data   
});
 


















/*
$.getJSON('data.json', function (data) {
    console.log(data);
    var output = '<ul>';
    $.each(data, function(key, val) {
        output += '<li>' + val.bio  + '</li>';
    });
    output += '</ul>';
    $('#update').append(output);
});
*/








/*
$('.update:even').load('data.txt');*/ // read from data.txt in just one ligne

/*var mybutton = document.getElementById('button');
mybutton.onclick = function LoadAJAX () {  
    var request = new XMLHttpRequest ();
    request.open ('GET','data.json');
    request.onreadystatechange = function () {
        if ((request.status===200) && (request.readyState===4)) {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';

            for ( var key in items ) {
                output += '<li>' + items[key].name + '</li>';
            }
            output += '</ul>'; 
            document.getElementById('update').innerHTML = output;
        } 
    }
    request.send();
}
*/
