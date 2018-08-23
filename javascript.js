function enviar(form) {
    var persona = new FormData(form);
    var req = ajaxRequest("upload.php");
    req.send(persona);
}

function ajaxRequest(url) {
  if (window.XMLHttpRequest) {
     var request = new XMLHttpRequest();
  } else if(window.ActiveXObject) {
     var request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.onload = function(Event) {
     if (request.status == 200) {
       var response = JSON.parse(request.responseText);
       if(response.success){
          alert("Persona procesada exitosamente");
       } else {
          alert("Hubo un problema al procesar, codigo: " + response.status);
       }
     }
   };

}

function leer(input, form) {
        for(var i =0; i< input.files.length; i++){
        if (input.files[i]) {
            var reader = new FileReader();

            reader.onload = function (e) {
               var img = $('<img id="dynamic">');
               img.attr('src', e.target.result);
               img.appendTo(form);
            }
            reader.readAsDataURL(input.files[i]);
           }
        }
    }

var archivo = document.getElementById("pic");
archivo.addEventListener("change", function(event) {
  leer();
}
