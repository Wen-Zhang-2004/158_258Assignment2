function submitCorrection() {
    var inputArea = document.getElementById('inputArea');
    var submitButton = document.getElementById('submitButton');
    var thankYouMessage = document.getElementById('thankYouMessage');

    inputArea.style.display = 'none';
    submitButton.style.display = 'none';
    thankYouMessage.style.display = 'block';
    thankYouMessage.style.color = 'white';
}