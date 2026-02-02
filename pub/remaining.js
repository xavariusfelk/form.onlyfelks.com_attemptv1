const remainingquestion = document.getElementById("remainingquestion");
const question = document.getElementById("question")

question.addEventListener('input', () => {
    remainingquestion.textContent = `${256 - question.value.length}`
});

const remainingname = document.getElementById("remainingname");
const formname = document.getElementById("name")

formname.addEventListener('input', () => {
    remainingname.textContent = `${64 - formname.value.length}`
});