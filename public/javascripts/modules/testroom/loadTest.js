$(document).ready(() => {
    let test;
    let counterOfQuests = 0;
    let rightAnswers = [];
    let wrongAnswers = [];

    $.ajax({
        type: 'POST',
        dataType: 'json',
        success: async function getJSON(jsondata) {
            test = await jsondata;
            $('.test_title .char').append(test.title);
            $('.test_interval .char').append(test.int[0] + ' - ' + test.int[1]);
            $('.test_quantity .char').append(test.quests.length);
            $('.test_current .all').append(test.quests.length);
            
            if (test.timer) {
                let minutes = test.timerDur;
                let seconds = 0;

                $('.chars p').css('width', 'calc(100%/7)');
                $('.test_timer').css('display', 'flex');

                setTimeout(testTermination, test.timerDur*60000);
                let interval = setInterval(() => {
                    if (minutes == 0 && seconds == 0) {
                        clearInterval(interval);
                    }

                    if (seconds == 0) {
                        minutes -= 1;
                        seconds = 59;
                    }
                    else {
                        seconds--;
                    }
                    $('.test_timer .char').empty();
                    $('.test_timer .char').append(minutes + ':' + seconds);
                }, 1000);
            }
            else {
                $('.test_timer').css('display', 'none');
            }
            startTest(test);
        }
    });

    $('.submit').click(() => {
        if (counterOfQuests !== test.quests.length) {
            let midAnswers = [];
            let right = test.quests[counterOfQuests].right;
            let wrong = test.quests[counterOfQuests].wrong;
            
            $('.answer:checked').each((index, el) => {
                midAnswers.push($(`.answers label[for=${$(el).attr('id')}]`).text());
            });

            checkAnswers(midAnswers, right);
            //showAnswers and change class to next question
            if (!test.showAnsw) {
                // showAnswers(test.quests[counterOfQuests].answers, right);
                refreshQuestion(counterOfQuests);
            }
            
            counterOfQuests++;
        }
        else {
            testTermination();
        }
    });

    function startTest(test) {
        refreshQuestion(counterOfQuests);
        counterOfQuests++;
    }

    function refreshQuestion(count) {
        $('.answers').empty();
        $('.title').empty();
        $('.test_current .cur').empty();
        $('.test_right .char').empty();
        $('.test_wrong .char').empty();

        $('.test_current .cur').append(count + 1);
        $('.test_right .char').append(rightAnswers.length);
        $('.test_wrong .char').append(wrongAnswers.length);

        let quests = test.quests;
        let titleQuest = quests[count].name;
        let answers = quests[count].answers;

        $('.title').append(titleQuest);

        answers.forEach((item, ind) => {
            $('.answers').append(`<div>
                                    <input class = 'answer' id = 'answer${ind}' type = 'checkbox' name = 'answer' value = '${item}'>
                                    <label for = 'answer${ind}'>${item}</label>
                                </div>`);
            // $('.answers').append(`<div><input class = 'answer' id = 'answer${ind}' type = 'checkbox' name = 'answer' value = '${item}'>`);
            // $('.answers').append(`<label for = 'answer${ind}'>${item}</label></div>`);
        });
        // $('.answers').append(`<input type = 'button' class = 'submit' value = 'Next question'>`);
    }

    function testTermination() {
        $('form').css('display', 'none');
        $('.title').css('display', 'none');
        $('.chars').css('display', 'none');
        $('.results').css('display', 'flex');
    }

    function checkAnswers(arr, right) {
        let middleArr = [];

        arr.forEach((el) => {
            right.find((item) => {
                if (item == el) {
                    middleArr.push(el);
                }
            });
        });
        
        if (middleArr.length == right.length && arr.length == middleArr.length) {
            rightAnswers.push(middleArr);
        }
        else {
            wrongAnswers.push(arr);
        }
    }

    // function showAnswers(answers, right) {
        
    // }
});