document.addEventListener("DOMContentLoaded", function() {
    var addQuestionButton = document.getElementById("add-question");
    addQuestionButton.addEventListener("click", addQuestion);

    var exportButton = document.getElementById("export");
    exportButton.addEventListener("click", exportQuestions);
});

function addQuestion() {
    var questionsContainer = document.getElementById("questions-container");

    var newQuestionDiv = document.createElement("div");
    newQuestionDiv.classList.add("question");

    var questionLabel = document.createElement("label");
    questionLabel.textContent = "Kérdés:";
    var questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.name = "question";

    var br = document.createElement("br");

    var answerLabel = document.createElement("label");
    answerLabel.textContent = "Válasz:";
    var answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.name = "answer";

    newQuestionDiv.appendChild(questionLabel);
    newQuestionDiv.appendChild(questionInput);
    newQuestionDiv.appendChild(br);
    newQuestionDiv.appendChild(answerLabel);
    newQuestionDiv.appendChild(answerInput);

    questionsContainer.appendChild(newQuestionDiv);
}

function exportQuestions() {
    var questions = document.getElementsByClassName("question");
    var exportedText = "";

    for (var i = 0; i < questions.length; i++) {
        var question = questions[i].querySelector("input[name='question']").value;
        var answer = questions[i].querySelector("input[name='answer']").value;

        exportedText += "m " + question + "\n";
        exportedText += "m " + answer + "\n";
        exportedText += "pm " + question + "\n";
        exportedText += "pm " + answer + "\n";
    }

    console.log(exportedText);
    // Itt lehetne a szöveget például egy textArea-be vagy letölthető fájlba is beilleszteni.
}
