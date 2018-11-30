function control_checkbox() {
    if (document.getElementById('agreement').checked) {
        document.getElementById('agreement').style.visibility = 'visible';
    } else {
        alert('Please agree to the processing of personal data \nZaznacz zgodę na przetwarzanie danych osobowych');
    }
}
