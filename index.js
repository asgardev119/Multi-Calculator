function showCalculator(type) {
  const section = document.getElementById("calculator-section");
  section.innerHTML = ""; // Clear previous content

  switch (type) {
    case "age":
      section.innerHTML = `
          <h2>Age Calculator</h2>
          <input type="date" id="dob" placeholder="Enter your birth date">
          <button onclick="calculateAge()">Calculate Age</button>
          <p id="age-result"></p>
        `;
      break;

    case "emi":
      section.innerHTML = `
          <h2>EMI Calculator</h2>
          <input type="number" id="loan-amount" placeholder="Loan Amount">
          <input type="number" id="interest-rate" placeholder="Interest Rate (%)">
          <input type="number" id="tenure" placeholder="Tenure (Months)">
          <button onclick="calculateEMI()">Calculate EMI</button>
          <p id="emi-result"></p>
        `;
      break;
    case "holiday":
      section.innerHTML = `
        <h2>Holiday Countdown</h2>
        <input type="date" id="holiday-date" placeholder="Holiday Date">
        <button onclick="countdownToHoliday()">Countdown</button>
        <p id="holiday-result"></p>
      `;
      break;

    case "birthday":
      section.innerHTML = `
          <h2>Birthday Calculator</h2>
          <input type="date" id="birthday" placeholder="Enter your birthday">
          <button onclick="calculateNextBirthday()">Calculate Next Birthday</button>
          <p id="birthday-result"></p>
        `;
      break;

    case "interest":
      section.innerHTML = `
          <h2>Interest Calculator</h2>
          <input type="number" id="principal" placeholder="Principal Amount">
          <input type="number" id="rate" placeholder="Rate (%)">
          <input type="number" id="time" placeholder="Time (month)">
          <button onclick="calculateInterest()">Calculate Interest</button>
          <p id="interest-result"></p>
        `;
      break;

    case "love":
      section.innerHTML = `
          <h2>Love Calculator</h2>
          <input type="text" id="name1" placeholder="Your Name">
          <input type="text" id="name2" placeholder="Partner's Name">
          <button onclick="calculateLove()">Calculate Love Percentage</button>
          <p id="love-result"></p>
          <p class="error" id="love-error"></p>
        `;
      break;

    case "bmi":
      section.innerHTML = `
          <h2>BMI Calculator</h2>
          <input type="number" id="weight" placeholder="Weight (kg)">
          <input type="number" id="height" placeholder="Height (cm)">
          <button onclick="calculateBMI()">Calculate BMI</button>
          <p id="bmi-result"></p>
        `;
      break;
    case "happiness":
      section.innerHTML = `
              <h2>Happiness Calculator</h2>
              <label>How happy are you with your hobbies? (1-10)</label>
              <input type="number" id="hobbies" min="1" max="10">
              <label>How happy are you with your relationships? (1-10)</label>
              <input type="number" id="relationships" min="1" max="10">
              <button onclick="calculateHappiness()">Calculate Happiness</button>
              <p id="happiness-result"></p>
            `;
      break;
    case "salary":
      section.innerHTML = `
                  <h2>Salary Calculator</h2>
                  <input type="number" id="hourly-wage" placeholder="Hourly Wage">
                  <input type="number" id="hours-per-week" placeholder="Hours Per Week">
                  <button onclick="calculateSalary()">Calculate Monthly Salary</button>
                  <p id="salary-result"></p>
                `;
      break;

    case "percentage":
      section.innerHTML = `
                      <h2>Percentage Calculator</h2>
                      <input type="number" id="value" placeholder="Value">
                      <input type="number" id="total" placeholder="Total">
                      <button onclick="calculatePercentage()">Calculate Percentage</button>
                      <p id="percentage-result"></p>
                    `;
      break;
    case "sgpa":
      section.innerHTML = `
          <h2>SGPA to Percentage Calculator</h2>
          <input type="number" id="sgpa" placeholder="Enter SGPA/CGPA (e.g., 8.5)">
          <button onclick="calculateSGPAPercentage()">Calculate Percentage</button>
          <p id="sgpa-result"></p>
        `;
      break;
    default:
      section.innerHTML = "<p>Select a calculator from the options above.</p>";
  }
}

// Age Calculator
function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (!dob || isNaN(age)) {
    document.getElementById("age-result").innerText =
      "Please enter a valid date.";
    return;
  }

  document.getElementById("age-result").innerText = `Your age is ${age} years.`;
}

// EMI Calculator
function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate = parseFloat(
    document.getElementById("interest-rate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  if (!loanAmount || !interestRate || !tenure) {
    document.getElementById("emi-result").innerText = "Please fill all fields.";
    return;
  }

  const monthlyRate = interestRate / 12 / 100;
  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  document.getElementById("emi-result").innerText = `Your EMI is ₹${emi.toFixed(
    2
  )}`;
}

// Birthday Calculator
function calculateNextBirthday() {
  const birthday = new Date(document.getElementById("birthday").value);
  const today = new Date();
  let nextBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  document.getElementById(
    "birthday-result"
  ).innerText = `Your next birthday is in ${daysLeft} days.`;
}

// Interest Calculator
function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  if (!principal || !rate || !time) {
    document.getElementById("interest-result").innerText =
      "Please fill all fields.";
    return;
  }

  const interest = (principal * rate * time) / 100;
  document.getElementById(
    "interest-result"
  ).innerText = `Total Interest: ₹${interest.toFixed(2)}`;
}

// Love Calculator
function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const errorElement = document.getElementById("love-error");

  errorElement.innerText = ""; // Clear previous errors

  if (!name1 || !name2) {
    errorElement.innerText = "Both names are required.";
    return;
  }

  const lovePercentage = Math.floor(Math.random() * 100) + 1;
  document.getElementById(
    "love-result"
  ).innerText = `Love Percentage: ${lovePercentage}%`;

  // Clear inputs after calculation
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
}

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!weight || !height) {
    document.getElementById("bmi-result").innerText = "Please fill all fields.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  document.getElementById("bmi-result").innerText = `Your BMI is ${bmi.toFixed(
    2
  )}.`;
}

// Holiday Countdown
function countdownToHoliday() {
  const holidayDate = new Date(document.getElementById("holiday-date").value);
  const today = new Date();

  if (!holidayDate || isNaN(holidayDate)) {
    document.getElementById("holiday-result").innerText =
      "Please enter a valid date.";
    return;
  }

  const daysLeft = Math.ceil((holidayDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById(
    "holiday-result"
  ).innerText = `Days left until holiday: ${daysLeft}`;
}

// Happiness Calculator
function calculateHappiness() {
  const hobbies = parseFloat(document.getElementById("hobbies").value);
  const relationships = parseFloat(
    document.getElementById("relationships").value
  );

  if (!hobbies || !relationships) {
    document.getElementById("happiness-result").innerText =
      "Please fill all fields.";
    return;
  }

  const happinessScore = ((hobbies + relationships) / 20) * 100;
  document.getElementById(
    "happiness-result"
  ).innerText = `Your happiness score is ${happinessScore.toFixed(2)}%.`;
}

// Salary Calculator
function calculateSalary() {
  const hourlyWage = parseFloat(document.getElementById("hourly-wage").value);
  const hoursPerWeek = parseFloat(
    document.getElementById("hours-per-week").value
  );

  if (!hourlyWage || !hoursPerWeek) {
    document.getElementById("salary-result").innerText =
      "Please fill all fields.";
    return;
  }

  const monthlySalary = hourlyWage * hoursPerWeek * 4;
  document.getElementById(
    "salary-result"
  ).innerText = `Your monthly salary is ₹${monthlySalary.toFixed(2)}.`;
}

// Percentage Calculator
function calculatePercentage() {
  const value = parseFloat(document.getElementById("value").value);
  const total = parseFloat(document.getElementById("total").value);

  if (!value || !total) {
    document.getElementById("percentage-result").innerText =
      "Please fill all fields.";
    return;
  }

  const percentage = (value / total) * 100;
  document.getElementById(
    "percentage-result"
  ).innerText = `Percentage: ${percentage.toFixed(2)}%`;
}

function calculateSGPAPercentage() {
    const sgpa = parseFloat(document.getElementById('sgpa').value);
  
    if (!sgpa || sgpa <= 0) {
      document.getElementById('sgpa-result').innerText = 'Please enter a valid SGPA/CGPA.';
      return;
    }
  
    const percentage = sgpa * 10; // Assuming the formula is SGPA * 10
    document.getElementById('sgpa-result').innerText = `Your percentage is ${percentage.toFixed(2)}%.`;
  }
//footer
const currentYear = new Date().getFullYear();

// Insert the current year into the span element
document.getElementById("current-year").textContent = currentYear;
