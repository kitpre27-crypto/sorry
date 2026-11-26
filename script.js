
// สร้างหัวใจลอยบนหน้าจอ
const sky = document.getElementById("sky");

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");

        heart.className = "float-heart";
        heart.innerHTML = ["☁️", "☁️", "☁️", "☁️"][Math.floor(Math.random() * 4)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.animationDuration = (7 + Math.random() * 10) + "s";
        heart.style.animationDelay = Math.random() * 10 + "s";

        sky.appendChild(heart);
    }
}

createHearts();

// เปิดซองจดหมาย
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const letterSection = document.getElementById("letterSection");

function openLetter() {
    envelope.classList.add("open");

    openBtn.textContent = "กำลังเปิดจดหมาย... 💙";
    openBtn.disabled = true;

    setTimeout(() => {
        letterSection.classList.remove("hidden");

        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 800);
}

openBtn.addEventListener("click", openLetter);
envelope.addEventListener("click", openLetter);

// ไปยังหน้าเซอร์ไพรส์
const nextBtn = document.getElementById("nextBtn");
const surpriseSection = document.getElementById("surpriseSection");

nextBtn.addEventListener("click", () => {
    surpriseSection.classList.remove("hidden");

    surpriseSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti();
});

// ปุ่มกอด
const forgiveBtn = document.getElementById("forgiveBtn");
const response = document.getElementById("response");

forgiveBtn.addEventListener("click", () => {
    response.classList.add("show");

    forgiveBtn.textContent = "🍀 ขอบคุณนะ 🍀";

    response.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createConfetti();
});

// เอฟเฟกต์หัวใจและประกาย
function createConfetti() {
    const symbols = ["", "", "", ""];

    for (let i = 0; i < 45; i++) {
        const item = document.createElement("div");

        item.innerText = symbols[
            Math.floor(Math.random() * symbols.length)
        ];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-30px";
        item.style.fontSize = (18 + Math.random() * 20) + "px";
        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";
        item.style.transition = `transform ${2 + Math.random() * 2}s linear, opacity 2s`;

        document.body.appendChild(item);

        requestAnimationFrame(() => {
            item.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
            item.style.opacity = "0";
        });

        setTimeout(() => {
            item.remove();
        }, 4500);
    }
}
