
// Array of student objects with required properties
const students = [
    {
      firstName: "Eric",
      lastName: "Eze",
      age: 20,
      score: 92,
      courses: ["DevOps", "Game Design"],
    },
    {
      firstName: "Chukwu",
      lastName: "Nwankwo",
      age: 22,
      score: 88,
      courses: ["VR Development", "3D Modeling"],
    },
    {
      firstName: "Fatima",
      lastName: "Diop",
      age: 21,
      score: 95,
      courses: ["UI/UX", "Animation"],
    },
    {
      firstName: "Kwame",
      lastName: "Mensah",
      age: 23,
      score: 84,
      courses: ["AR Development", "Digital Art"],
    },
    {
      firstName: "Aisha",
      lastName: "Bello",
      age: 19,
      score: 97,
      courses: ["Mobile Dev", "Cloud Computing"],
    },
];

// Select the container div where student cards will be inserted
const container = document.getElementById("students-container");

if (!container) {
    console.error("Error: #students-container element not found!");
}

// Use .map() to create an array of description strings (demonstrating destructuring)
const descriptions = students.map(({ firstName, lastName, age, score, courses }) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}.`;
});

// Log each description to the console nicely formatted using .map() results
console.log("=== Student Descriptions (from .map()) ===");
descriptions.forEach((desc, index) => {
    console.log(`Student ${index + 1}: ${desc}`);
});

// Additional: Use .forEach() directly on students array to log student details with destructuring
console.log("\n=== Student Details (using .forEach() and destructuring) ===");
students.forEach(({ firstName, lastName, age, score, courses }, index) => {
    console.log(
        `Student ${index + 1}: ${firstName} ${lastName} | Age: ${age} | Score: ${score} | Courses: ${courses.join(", ")}`
    );
});

// Function to create and append student cards to the DOM
function displayStudents() {
    if (!container) return;

    students.forEach((student, index) => {
        // Destructure student object
        const { firstName, lastName, age, score, courses } = student;

        // Create a div element for the student card
        const card = document.createElement("div");
        card.className = "student-card";

        // Set the inner HTML of the card using proper HTML formatting
        card.innerHTML = `
            <h3>${firstName} ${lastName}</h3>
            <p>Age: ${age} | Score: ${score}</p>
            <div class="score-bar" style="width: 0;"></div>
            <p>Courses: ${courses.map(course => `<em>${course}</em>`).join(", ")}</p>
        `;

        // Append the card to the container
        container.appendChild(card);

        // Animate the score bar width after a small delay for smooth effect
        setTimeout(() => {
            const scoreBar = card.querySelector(".score-bar");
            if (scoreBar) {
                scoreBar.style.width = `${score}%`;
            }
        }, 100 * index); // stagger animation by 100ms per card

        // Animate the slide-in with delay
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        }, 150 * index);
    });
}

// Call the function to display students on page load
displayStudents();
