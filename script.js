const button = document.getElementById("calculate");
button.addEventListener("click", function () {
    const scores = document.querySelectorAll(".score");
    const weights = document.querySelectorAll(".weight");
    let total_score = 0;
    let total_weight = 0;
    let is_a_number = true;
    for (let i = 0; i < weights.length; i++) {
        total_score += parseFloat(weights[i].value) * 0.01 * parseFloat(scores[i].value);
        total_weight += parseFloat(weights[i].value);
        if (isNaN(parseFloat(weights[i].value))||isNaN(parseFloat(scores[i].value)) ) {
            is_a_number = false;
        }
    }

    const result_display = document.getElementById("result");
    if (!is_a_number){
        result_display.textContent = `Error, make sure you enter a value in the empty boxes.`
        return;
    }

    if (total_weight > 100) {
        result_display.textContent = `Error, make sure the total weight does not exceed 100%`;
        return;
    }

    if (total_weight === 0) {
        result_display.textContent = `Error, make sure the total weight does not exceed 100%`;
        return;
    }

    if (total_weight === '') {
        result_display.textContent = `Error, make sure the total weight does not exceed 100%`;
        return;
    }

    result_display.textContent = `current grade: ${total_score.toFixed(2)}%`;
});
const plus = document.getElementById("addRow");
plus.addEventListener("click", function () {
    const table = document.getElementById("inputTable").querySelector("tbody");
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
        <td><input type="number" placeholder="e.g., 85" class="score"></td>

        <td><input type="number" placeholder="e.g., 20" class="weight"></td>
    `;
    table.appendChild(newrow);
});
