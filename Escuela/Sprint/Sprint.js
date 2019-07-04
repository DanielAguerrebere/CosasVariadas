var url = "http://nyc.pixan.io/lanes/public/api/tasks";
var status = '?status=';
var student_number = '&student_number=';

const socket = new WebSocket('ws://nyc.pixan.io/lanes/public/api/tasks');

socket.onopen = (event) => {
  console.log('Connected');
};

socket.onmessage = (event) => {
    console.log(event.data);
};
socket.send(JSON.stringify(ioMeroCaguameroGet));



var ioMeroCaguameroGet = {
    status: '',
    student_number: 2995979,
    name: 'Daniel Alejandro Aguerrebere Leon',
    description: ''
};

function OnLoadPageStatus1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
        }
    };
        xhttp.open('GET',
            url + status + '1' + student_number + ioMeroCaguameroGet.student_number,
            true);
        xhttp.send();
        xhttp.open('GET',
            url + status + '2' + student_number + ioMeroCaguameroGet.student_number,
            true);
        xhttp.send();
}

function OpenModal() {
    document.getElementById('id01').style.display='block';
}

