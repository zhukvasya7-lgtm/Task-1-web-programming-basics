    const checkBtn = document.getElementById("checkBtn");
    const submitBtn = document.getElementById("submitBtn");
    const result = document.getElementById("result");

    checkBtn.addEventListener("click", function () {
        const questions = document.querySelectorAll(".question-block");
        let allCorrect = true;

        questions.forEach((question) => {
            const correctValues = question.dataset.correct.split("|").sort();
            const inputs = question.querySelectorAll("input");
            const selectedValues = Array.from(inputs)
                .filter((input) => input.checked)
                .map((input) => input.value)
                .sort();

            const isCorrect =
                selectedValues.length === correctValues.length &&
                selectedValues.every((value, index) => value === correctValues[index]);

            inputs.forEach((input) => {
                const answer = input.closest("li");
                answer.classList.remove("correct", "incorrect");

                if (input.checked) {
                    answer.classList.add(
                        correctValues.includes(input.value) ? "correct" : "incorrect"
                    );
                } else if (correctValues.includes(input.value)) {
                    answer.classList.add("correct");
                }
            });

            if (!isCorrect) {
                allCorrect = false;
            }
        });

        submitBtn.disabled = !allCorrect;
        result.textContent = allCorrect
            ? "Все ответы верны! Теперь можно отправить форму."
            : "Есть ошибки или пропущенные ответы. Проверьте тест.";
    });

    document.getElementById("quizForm").addEventListener("input", function () {
        submitBtn.disabled = true;
    });