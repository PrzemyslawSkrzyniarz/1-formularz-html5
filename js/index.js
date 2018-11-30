function control_checkbox() {
    if (document.getElementById('agreement').checked) {
        document.getElementById('agreement').style.visibility = 'visible';
    } else {
        alert('I agree to send the personal data provided in the form. \nWyrażam zgodę na wysłanie podanych w formularzu danych osobowych.');
    }
}
