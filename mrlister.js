function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
    fetch('mrlister.json')
        .then(response => response.json())
        .then(cards => {
            console.log(cards);
            var $question = $("#question");
            var $answers = $("#answers");
            var $extraQuestion = $("#extraQuestion");
            var $extraAnswer = $("#extraAnswer");
            var $cardID = $("#cardID");

            var rng = getRndInteger(0,cards.length);
            var card = cards[rng];
            //console.log(cards[rng]);
            $question.empty();
            $answers.empty();
            $extraQuestion.empty();
            $extraAnswer.empty();
            $cardID.empty();

            $question.html(card.question);
            $extraQuestion.html(card.extraQuestion);
            $extraAnswer.html(card.extraAnswer);
            $cardID.html(card.id);
            
            var content = "";
            for(let i = 0; i<card.answers.length; i++){
                content += `<div class="checkbox col-md-6">
                    <label style="font-size: x-large;">
                        <fieldset class="form-inline">
                            <input type="checkbox"/>` +
                            card.answers[i] +
                        `</fieldset>
                    </label>
                </div>`
                
            }
            $answers.append(content);
            

        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
        });
})