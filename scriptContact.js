function submitInfos() {
    if (document.querySelector('.email').value == "") {
        document.getElementById('labelMail').style.borderBottom = '3px solid red'; 
    }
    if(document.querySelector('.objet').value == "") {

        document.getElementById('labelObjet').style.borderBottom = '3px solid red';
    }
    if(document.querySelector('.message').value == "") {
        document.getElementById('labelDescription').style.borderBottom = '2px solid red';
    }
    if(document.querySelector('.message').value != "" && document.querySelector('.objet').value != "" && document.querySelector('.email').value != "") {
        sendEmail(document.querySelector('.nom').value, document.querySelector('.email').value, document.querySelector('.objet').value, document.querySelector('.message').value);
        document.querySelector('.nom').value = "";
        document.querySelector('.email').value = "";
        document.querySelector('.objet').value = "";
        document.querySelector('.message').value = "";
        document.getElementById('labelMail').style.borderBottom = '3px solid #012032'; 
        document.getElementById('labelObjet').style.borderBottom = '3px solid #012032';
        document.getElementById('labelDescription').style.borderBottom = '2px solid #012032';
    }
}

function sendEmail(nom, mail, objet, message) {
    Email.send({
        SecureToken: "cc586577-17b0-4fe5-a9e3-f4c9e3b81557",
        Host : "smtp.gmail.com",
        Username : "joseph.bot56@gmail.com",
        Password : "zvsvftrplkwpeorq",
        To : 'joseph.bot56@gmail.com',
        From : "joseph.bot56@gmail.com",
        Subject : objet,
        Body : "<b><u>Nom :</b></u>  " + nom + "<br><b><u>Email : </u></b></br>" + mail + "<br/><br/><b><u>Message : </b></u>" + "<br/><br/>" + message
    })
    .then(  document.getElementById("textConfirmation").style.display = "block",
            setTimeout(function() {document.getElementById("textConfirmation").style.display = "none"}, 5000)  );
}