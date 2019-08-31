$(document).ready(() => {
    let testSettings = {};

    $('.submit').click((e) => {
        e.preventDefault();
        testSettings.dep = $('.department').val();
        testSettings.test = $('.test').val();
        testSettings.intFrom = $('.from .num_input').val();
        testSettings.intTo = $('.to .num_input').val();
        testSettings.numQuest = $('.numquest_block .num_input').val();
        testSettings.mixQuest = $('#cbxF').is(':checked');
        testSettings.mixAnsw = $('#cbxS').is(':checked');
        testSettings.timer = $('#cbxT').is(':checked');
        testSettings.timerDur = $('.timerInput').val();
        testSettings.saveQuests = $('#cbxFth').is(':checked');
        testSettings.showAnsw = $('#cbxSx').is(':checked');
        checkValues(testSettings);
    });

    async function sendData() {
        $.ajax({
            type: 'POST',
            data: `testSettings=${JSON.stringify(testSettings)}`,
            success: function(responseText) {
                window.location = responseText;
            }
        });
    }

    function checkValues(test) {
        let testForNum = /\d/;

        if (testForNum.test(test.intFrom) && testForNum.test(test.intTo)) {
            if (test.numQuest > (parseInt(test.intTo) - parseInt(test.intFrom) + 1)) {
                alert('Количество вопросов не должно быть больше количества вопросов в интервале');
                return false;
            }
            sendData()
        }
        else {
            alert('Неверно заполнены поля');
            return false;
        }
    }
});