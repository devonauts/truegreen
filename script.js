// 1. Validate Email Function
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com")); // true
  
  // 2. Random Service Picker
  const services = ["Lawn Mowing", "Fertilization", "Weed Control", "Aeration"];
  function getRandomService() {
    const index = Math.floor(Math.random() * services.length);
    return services[index];
  }
  console.log("Featured Service:", getRandomService());
  
  // 3. Calculate Total Cost
  const servicePrices = [25, 40, 35];
  function calculateTotalCost() {
    return servicePrices.reduce((total, price) => total + price, 0);
  }
  console.log("Total Cost: $" + calculateTotalCost());
  
  // 4. Store User Feedback
  let feedback = [];
  function addFeedback(message) {
    feedback.push(message);
    return feedback;
  }
  console.log(addFeedback("Great service!"));
  
  // 5. Toggle Extra Service Details
  function toggleServiceDetails(serviceId) {
    const element = document.getElementById(serviceId);
    if (element) {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    }
    console.log("toggled")
  }
  
    // Grab elements
    const zipForm = document.getElementById('zipForm');
    const zipInput = document.getElementById('zipInput');
    const zipDropdownBtn = document.getElementById('zipDropdownBtn');
  
    // Handle form submission
    zipForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page reload
  
      // Get the new ZIP code from the input
      const newZip = zipInput.value.trim();
  
      // If it's not empty, update the button text
      if (newZip !== '') {
        zipDropdownBtn.innerHTML = `${newZip} <i class="bi bi-caret-down-fill"></i>`;
      }
    });