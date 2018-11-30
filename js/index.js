function control_checkbox() {
    if (document.getElementById('agreement').checked) {
        document.getElementById('agreement').style.visibility = 'visible';
    } else {
        alert('By clicking OK, you agree to providing personal information. \n Klikając OK wyrażasz zgodę na podanie danych osobowych.');
    }
}
