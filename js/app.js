// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Logged in:', user);
            window.location.href = "pages/admin.html";
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});

// Admin functions
const addMemberForm = document.getElementById('addMemberForm');

addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const memberData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        feePackage: document.getElementById('feePackage').value
    };

    db.collection('members').add(memberData)
        .then((docRef) => {
            console.log('Member added:', docRef.id);
            addMemberForm.reset();
        })
        .catch((error) => {
            console.error('Error adding member:', error);
        });
});