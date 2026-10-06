console.log("JobFinder JavaScript is connected!");

const jobs = {
    frontend: {
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Chennai",
        type: "Full Time",
        experience: "Fresher",
        skills: "HTML, CSS, JavaScript, Problem Solving",
        description: "We are looking for a motivated junior developer to work with our development team and build user-friendly web applications."
    },

    java: {
        title: "Java Developer",
        company: "Digital Systems",
        location: "Bangalore",
        type: "Full Time",
        experience: "Fresher",
        skills: "Java, SQL, OOP",
        description: "We are looking for a junior Java developer to develop and maintain reliable software applications."
    },

    sql: {
        title: "SQL Developer",
        company: "DataWorks",
        location: "Chennai",
        type: "Full Time",
        experience: "Fresher",
        skills: "SQL, Database, Queries",
        description: "We are looking for a junior SQL developer to work with databases and write efficient queries."
    }
};

const detailsContent = document.querySelector(".details-content");
const buttons = document.querySelectorAll(".view-details");

console.log("Number of View Details buttons:", buttons.length);

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const job = button.getAttribute("data-job");
        console.log("Selected job:", job);
        const selectedJob = jobs[job];
        console.log("Selected title:", selectedJob.title);

        detailsContent.parentElement.style.display = "block";

        detailsContent.innerHTML = `
            <h2>${selectedJob.title}</h2>
            <p class="company">${selectedJob.company}</p>
            <p><strong>Location:</strong> ${selectedJob.location}</p>
            <p><strong>Job Type:</strong> ${selectedJob.type}</p>
            <p><strong>Experience:</strong> ${selectedJob.experience}</p>

            <h3>Required Skills</h3>
            <p>${selectedJob.skills}</p>

            <h3>Job Description</h3>
            <p>${selectedJob.description}</p>

            <button class="apply-button">Apply Now</button>
        `;
        console.log("Details HTML updated for:", selectedJob.title);
        const applyButton = detailsContent.querySelector(".apply-button");

applyButton.addEventListener("click", function() {
    const applicationSection = document.getElementById("application");

    applicationSection.style.display = "block";

    applicationSection.scrollIntoView({
        behavior: "smooth"
    });
});

        detailsContent.scrollIntoView({
            behavior: "smooth"
        });
    });
});





const searchButton = document.getElementById("search-button");

const searchInputs = document.querySelectorAll(".search-box input");

searchButton.addEventListener("click", function() {

    detailsContent.parentElement.style.display = "none";

    const jobSearch = searchInputs[0].value.toLowerCase();
    const locationSearch = searchInputs[1].value.toLowerCase();


    console.log("Job search:", jobSearch);
    console.log("Location search:", locationSearch);
    let foundJobs = 0;

    jobCards.forEach(function(card) {
        const jobText = card.innerText.toLowerCase();

        if (
            jobText.includes(jobSearch) &&
            jobText.includes(locationSearch)
        ) {
            card.style.display = "block";
            foundJobs++;
        } else {
            card.style.display = "none";
        }
    });

    if (foundJobs === 0) {
        noJobsMessage.style.display = "block";
    } else {
        noJobsMessage.style.display = "none";
    }
});

const jobCards = document.querySelectorAll(".job-card");

const noJobsMessage = document.getElementById("no-jobs");


noJobsMessage.style.display = "none";

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
    searchInputs[0].value = "";
    searchInputs[1].value = "";


    jobCards.forEach(function(card) {
        card.style.display = "block";
    });
    noJobsMessage.style.display = "none";
    
});

const applicationForm = document.getElementById("application-form");
const applicationMessage = document.getElementById("application-message");

applicationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("applicant-name").value.trim();
    const email = document.getElementById("applicant-email").value.trim();
    const phone = document.getElementById("applicant-phone").value.trim();
    const coverNote = document.getElementById("cover-note").value.trim();

    if (name === "" || email === "" || phone === "" || coverNote === "") {
        applicationMessage.textContent = "Please fill in all the fields.";
        applicationMessage.style.color = "red";
        return;
    }

    const application = {
    name: name,
    email: email,
    phone: phone,
    coverNote: coverNote
};

localStorage.setItem("jobApplication", JSON.stringify(application));

    applicationMessage.textContent = "Application submitted successfully!";
    applicationMessage.style.color = "green";
});

