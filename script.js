/*function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Création de l'objet à envoyer
  var data = {
    email: username,
    password: password
  };

  // Configuration de la requête
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Envoi de la requête
  fetch('http://localhost:3000/auth/login1', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log('id est:', data.idclient);
      console.log('Token:', data.token);
      idClient = data.idclient;

      const url = `http://localhost:4200/calendar/?id=${data.idclient}`;
     
   
      //document.getElementById('iframe').style.display = 'block';

     

      document.getElementById('iframe').src = url;
      document.getElementById('loginWrapper').style.display = 'none';
    })
    .catch(error => console.error('Erreur lors de la requête:', error));


  
}
function showCalendar() {
  document.getElementById('iframe').style.display = 'block';
  document.getElementById('loginWrapper').style.display = 'none';
}*/
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Création de l'objet à envoyer
  var data = {
    email: username,
    password: password
  };

  // Configuration de la requête
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Envoi de la requête
  fetch('http://localhost:3000/auth/login1', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log('id est:', data.idclient);
      console.log('Token:', data.token);
      
      const url = `http://localhost:4200/calendar/?id=${data.idclient}`;
      localStorage.setItem('calendarUrl', url); // Stocker l'URL du calendrier dans le stockage local
      window.location.href = "index.html"; 
      
     // document.getElementById('loginWrapper').style.display = 'none';
      //document.getElementById('calendarIcon').style.display = 'block'; // Afficher l'icône du calendrier
      //document.getElementById('calendarIcon').dataset.url = url; // Stocker l'URL dans l'attribut data-url
    })
    .catch(error => console.error('Erreur lors de la requête:', error));
}

function showCalendarIcon() {
  login(); // Appeler la fonction login pour obtenir l'URL
}
/*
function showIframe() {
  const url = document.getElementById('calendarIcon').dataset.url; // Récupérer l'URL depuis l'attribut data-url
  document.getElementById('iframe').src = url; // Afficher l'iframe avec l'URL récupéré
  document.getElementById('iframe').style.display = 'block'; // Afficher l'iframe
}
function toggleCalendar() {
  var iframe = document.getElementById('iframe');
  var calendarIcon = document.getElementById('calendarIcon');

  if (iframe.style.display === 'none') {
    var url = calendarIcon.dataset.url;
    iframe.src = url;
    iframe.style.display = 'block';
    otherIcon.style.display = 'block';
    document.getElementById('calendarIcon').style.display = 'none';
  } else {
    iframe.style.display = 'none';
  }
}
function toggleOtherIcon(url) {
  var iframe = document.getElementById('iframe');
  var otherIcon = document.getElementById('otherIcon');

  if (iframe.style.display === 'none') {
    iframe.src = url;
    iframe.style.display = 'block';
    // Masquer l'icône actuelle
    otherIcon.style.display = 'none';
    // Afficher l'icône du calendrier
    document.getElementById('calendarIcon').style.display = 'block';
  } else {
    iframe.style.display = 'none';
    // Afficher l'icône actuelle
    otherIcon.style.display = 'block';
    // Cacher l'icône du calendrier
    document.getElementById('calendarIcon').style.display = 'block';
    otherIcon.style.display = 'none';
  }
}*/
