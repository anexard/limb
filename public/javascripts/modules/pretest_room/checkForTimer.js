$(document).ready(() => {
    let count = 0;
    $('#cbxT').click(() => {
        if (count == 0) {
            $('.timerInput').css('display', 'block');
            count++;
        }
        else {
            $('.timerInput').css('display', 'none');
            count--;
        }
    });
});