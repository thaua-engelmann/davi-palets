var firebaseConfig = {     
    apiKey : "AIzaSyC9NzjZKk4ZczcRaTFKphhNPc2Kfw4co5M" ,    
    authDomain : "form-davipalets.firebaseapp.com" ,     
    projectId : "form-davipalets", 
    storageBucket: "form-davipalets.appspot.com" ,     
    messagingSenderId : "838930262219" ,     
    appId : "1: 838930262219: web: 54ddb765378b2f103d534e"
};

// Initialize Firebase;
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections;
let contactInfo = firebase.database().ref('infos');

// Listen for a submit;
document.querySelector('.contact-modal').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // Get input values;
    let name = document.querySelector('.nameInput').value;
    let email = document.querySelector('.emailInput').value;
    let phone = document.querySelector('.phoneInput').value;
    let message = document.querySelector('.messageInput').value;

    saveContactInfo(name, email, phone, message);

    document.querySelector('.contact-modal').reset();

    swal.fire({
        title: 'Obrigado!',
        text: 'Sua mensagem foi enviada.',
        icon: 'success',
        confirmButtonText: 'Fechar',
        customClass: {
            popup: 'swal-class',
        },
    })

    document.querySelector('.modal-overlay').classList.remove('active');
}

// Safe infos to firebase;
function saveContactInfo(name, email, phone, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set(
        {
            userName: name,
            userEmail: email,
            userPhone: phone,
            userMessage: message
        }
    )
};
