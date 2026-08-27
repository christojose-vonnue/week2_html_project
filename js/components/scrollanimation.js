const sections = document.getElementsByTagName("section");
let targets = [];

// Collect all target divs inside sections
for (let i of sections) {
    const divs = i.querySelectorAll("div");
    for (let j of divs) {
        targets.push(j);
    }
}

// 1. Correct callback parameters: receives an array of 'entries'
const observer = new IntersectionObserver((entries) => {
    // 2. Loop through each entry being observed
    entries.forEach((entry) => {
        // 3. Access the DOM element via entry.target & fix classList capitalization
        if (entry.isIntersecting) {
            entry.target.classList.add("fadein");
            entry.target.classList.remove("fadeout");
        } else {
            entry.target.classList.remove("fadein");
            entry.target.classList.add("fadeout");
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible in the viewport
});

// Observe each collected element
targets.forEach((element) => {
    observer.observe(element);
});