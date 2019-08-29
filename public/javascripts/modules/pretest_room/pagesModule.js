$(window).ready(() => {
    $('.drop_btn').click((event) => {
        let shells = ['.shell_start_test', '.shell_list', '.shell_statistics', '.shell_quest'];
        let buttons = ['drop_btn drop_start', 'drop_btn drop_tests', 'drop_btn drop_stats', 'drop_btn drop_quests'];
        
        let btnInd = buttons.find((el, ind) => {
                if (event.target.className == el) return el;
            });
            
            console.log(btnInd);
        
        (function () {
            $(shells.find((el) => {
                if ($(el).css('display') == 'block') return el;
            })).fadeOut(0);
            
            $(shells[buttons.indexOf(buttons.find((el, ind) => {
                if (event.target.className == el) return el;
            }))]).fadeIn(200);
        })();
        
//        console.log(shells);
//        console.log($(shells[3]).css('display'));
//        console.log(buttons);
//        console.log(event.target.className);
////        if(event.target.className == 'drop_btn drop_tests') {
////            $('.shell_start_test').fadeOut(0);
////            $('.shell_list').fadeIn(200);
////        }
    });
});