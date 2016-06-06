function requestData(citta) {

    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8080/WorldRest/api/cities/";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            console.log(myArr);
            //myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' +
                    arr[i].display + '</a><br>';
        }
        $('#citta').html(out);
    }
}
