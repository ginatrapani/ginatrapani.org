const tooltip = document.getElementById("tooltip");

function createGrid() {
    document.getElementById("grid").innerHTML = "";
    colors.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color.hex;

        const textColor = getContrastColor(color.hex);
        const colorLabel = document.createElement("div");
        colorLabel.classList.add("color-label");
        colorLabel.textContent = color.name;
        colorLabel.style.color = color.textColor;

        colorBox.appendChild(colorLabel);
        colorBox.addEventListener("click", () =>
            enterFullScreen(color.name, color.hex, textColor),
        );
        document.getElementById("grid").appendChild(colorBox);
    });
}

function getContrastColor(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 128 ? "#000" : "#FFF";
}

function generateBlends(color1, color2, steps) {
    const hexToRgb = (hex) => hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    const rgbToHex = (r, g, b) =>
        `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);
    return Array.from({ length: steps }, (_, i) =>
        rgbToHex(
            Math.round(r1 + ((r2 - r1) * i) / (steps - 1)),
            Math.round(g1 + ((g2 - g1) * i) / (steps - 1)),
            Math.round(b1 + ((b2 - b1) * i) / (steps - 1)),
        ),
    );
}

function showTooltip(text, x, y) {
    tooltip.textContent = text;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add("show");
    setTimeout(() => tooltip.classList.remove("show"), 1500);
}

function enterFullScreen(name, hex, textColor) {
    const colorData = colors.find(color => color.name === name);
    if (!colorData) {
        console.error(`Color ${name} not found`);
        return;
    }
    const { associations = [], brand = [], more = [] } = colorData; // Object destructuring with default values
    const shades = generateBlends(hex, "#FFFFFF", 7);
    shades.pop();
    document.getElementById("fs").innerHTML = `
        <div class="fullscreen" style="background-color: ${hex}; color: ${textColor};" onclick="exitFullScreen()">
            <div class="blend-head">
            <h1>${name} Blue</h1>
            ${brand.length ? `<div class="description"><i class="bi bi-megaphone"></i> ${brand}</div>` : ""}
            ${associations.length ? `<div class="description"><i class="bi bi-heart-arrow"></i> ${associations.join(", ")}</div>` : ""}
            ${more.length ? `<div class="description"><i class="bi bi-arrow-up-right-circle"></i> <a href="${more}" style="color: ${textColor}" target="_blank">more</a></div>` : ""}
            </div>

            <table class="blend-table">
                ${shades
                    .map(
                        (shade) => `
                    <tr>
                        <td style="background: ${shade};" onclick="copyToClipboard('${shade}', event)">
                            ${shade} <i class="bi bi-copy copy-icon"></i>
                        </td>
                    </tr>`, ).join("")}
            </table>
            <div class="blend-head">
            <p>Tap anywhere to close</p>
            </div>
        </div>`;
    document.getElementById("grid").style.visibility = "hidden";
    document.getElementById("fs").style.visibility = "visible";
}

function exitFullScreen() {
    document.getElementById("fs").style.visibility = "hidden";
    document.getElementById("grid").style.visibility = "visible";
}

function copyToClipboard(hex, event) {
    navigator.clipboard.writeText(hex);
    event.stopPropagation();

    const icon = event.target;
    if (icon.classList.contains("bi-copy")) {
        icon.classList.replace("bi-copy", "bi-check2");
        const rect = icon.getBoundingClientRect();
        showTooltip("Copied!", rect.left, rect.top - 30);
        setTimeout(() => icon.classList.replace("bi-check2", "bi-copy"), 1500);
    }
}

createGrid();
