var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/ErnestoCb/Arquitectura/master/README.json?token=AkT7EJGjoDL6tvyYOZ5FiDd2AFf0JnXvks5bhvRgwA%3D%3D');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
  };
  ourRequest.send();
});
