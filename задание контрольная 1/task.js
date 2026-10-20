let isSolved = false;

const form = document.getElementById("UserEnter");
const fields = ["sideA", "heightH", "radiusR", "volumeM"]
    .map(id => document.getElementById(id));

function calculate(event) {
    event?.preventDefault();

    const [A, H, R, M] = fields.map(field => Number(field.value));
    const output = document.getElementById("output");

    if (fields.some(field => field.value === "" || !Number.isFinite(Number(field.value))) ||
        [A, H, R, M].some(value => value <= 0)) {
        output.textContent = "Введите все значения больше нуля.";
        isSolved = false;
        return;
    }

    const cubeFits = M <= A ** 3;
    const cylinderFits = M <= Math.PI * R ** 2 * H;

    if (cubeFits && cylinderFits) {
        output.textContent = "Жидкость поместится в обе ёмкости.";
    } else if (cubeFits) {
        output.textContent = "Жидкость поместится только в куб.";
    } else if (cylinderFits) {
        output.textContent = "Жидкость поместится только в цилиндр.";
    } else {
        output.textContent = "Жидкость не поместится ни в одну ёмкость.";
    }

    isSolved = true;
}

form.addEventListener("submit", event => {
    if (!isSolved) {
        event.preventDefault();
        alert("Сначала заполните поля и нажмите «Определить».");
    }
});

fields.forEach(field => {
    field.addEventListener("input", () => {
        isSolved = false;
    });
});