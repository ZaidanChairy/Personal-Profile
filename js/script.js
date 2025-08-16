function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName && userName.trim() !== '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}