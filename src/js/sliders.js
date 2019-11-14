document.addEventListener('DOMContentLoaded', function(){

    var quiz = document.getElementById('quiz_bank');
    var quiz_steps = Array.from(quiz.querySelectorAll('.quiz-step'));

    var quiz_progress = quiz.querySelector('.quiz__progress');
    var quiz_next_btn = quiz.querySelector('.quiz__btn');

    var quiz_anwrs = [];


    //  проверяет чекнут ли какой-либо вариант для текущего шага ( чтобы не пропустить нечекнутый варик )
    function is_checked(){

        if(quiz.querySelector('.quiz-step._show input:checked')){
            return true;
        } else {
            return false;
        }

    };


    //  проверяет, не является ли текущий шаг последним
    function is_last_step(step_id){

        var quiz_last_step = quiz_steps[quiz_steps.length - 1].getAttribute('step');
        if(step_id == quiz_last_step){
            return true;
        } else {
            return false;
        }

    };


    //  показать след шаг
    function show_next_step(next_step_id){

        //  выключить текущий
        quiz.querySelector('.quiz-step._show').classList.remove('_show');


        // включить следующий
        quiz.querySelector('.quiz-step[step="' + next_step_id + '"]').classList.add('_show');


        // Поменять текст в футере
        quiz_progress.innerHTML = 'Вопрос ' + next_step_id + ' из ' + quiz_steps[quiz_steps.length - 1].getAttribute('step');
    };





    quiz_next_btn.addEventListener('click', function(){

        if(is_checked()){

            var current_step = quiz.querySelector('.quiz-step._show').getAttribute('step');
            var next_step_id = +current_step + 1;
            
            //  формировка массива епта
            var step_qtn = quiz.querySelector('.quiz-step._show .quiz__qstn').innerText;
            var step_anw = quiz.querySelector('.quiz-step._show input:checked + span').innerText;
            quiz_anwrs[current_step] = {
                q: step_qtn,
                a: step_anw,
            };


            if(!is_last_step(current_step)){
                //  не последний шаг

                show_next_step(next_step_id);
                console.log(quiz_anwrs);
            } else {
                //  последний шаг - показываем форму

            }
        } else {

        }

    });


});