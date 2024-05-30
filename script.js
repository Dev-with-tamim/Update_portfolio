document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            // Toggle the visibility of the answer
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";

            // Optionally, you can add an active class to the question to change its appearance
            this.classList.toggle("active");
        });
    });
});
