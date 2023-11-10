document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            text: "Do you prefer fruit tea or milk tea?",
            options: ["A. milk tea", "B. fruit tea"],
        },
        {
            text: "How sweet do you like it?",
            options: ["A. very sweet", "B. normal sweet", "C. little sweet", "D. not sweet"],
        },
        {
            text: "Do you prefer a more refreshing taste or do you want a drink with lots of pulp or ingredients?",
            options: ["A. Simple ingredients", "B. Complex ingredients"],
        }
    ];

    const recommendations = {
        "AAA": ["Classic milk tea", "Chocolate Milk Tea"],
        "AAB": ["Classic brown sugar bubble tea", "pudding milk tea", "Roasted herbal milk tea", "oreo milk tea", "Pudding and coconut milk tea", "milk tea with taro balls"],
        'ABB': ["Black glutinous rice milk tea"],
        'ACA': ["Matcha milk tea\n" +
            "Matcha milk"],
        'ACB': ["Cheese milk covered with green tea\n" +
            "Cheese milk covered with black tea"],
        'ADA': ["Cheese milk covered with green tea\n" +
            "Cheese milk covered with black tea"],
        'ADB': ["Cheese milk covered with green tea and pearls"],
        'BAA': ["Orange juice mixed with grapefruit juice"],
        'BAB': ["mango pomelo sago\n" +
            "Cheese milk covered strawberry tea"],
        'BBA': ["Strawberry lemon tea"],
        'BBB': ["Refreshing version poplar branch nectar\n" +
            "Barra juice and sago"],
        'BCA': ["Cheese milk covered with mango juice"],
        'BCB': ["Green and grape smoothies"],
        'BDA': ["Peaches and green tea\n" +
            "Red grapefruit juice and green tea"],
        'BDB': ["Grapefruit peach juice and jelly"],
    };

    let currentQuestionIndex = 0;
    let choices = "";

    function displayQuestion() {
        if (currentQuestionIndex >= questions.length) {
            displayRecommendation();
            return;
        }

        const question = questions[currentQuestionIndex];
        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");

        questionText.innerText = (currentQuestionIndex + 1) + ". " + question.text;
        optionsContainer.innerHTML = "";

        question.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.className = "option-button";
            button.addEventListener("click", function () {
                choices += option[0];
                currentQuestionIndex++;
                displayQuestion();
            });
            optionsContainer.appendChild(button);
        });
    }

    function displayRecommendation() {
        const recommendation = recommendations[choices];
        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");

        questionText.innerText = "We recommend to you:";
        optionsContainer.innerHTML = recommendation.map(item => `<div>${item}</div>`).join('');
    }

    displayQuestion();
});
