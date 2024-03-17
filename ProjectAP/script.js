// Function to display available time slots based on selected lab appointment
function displayTimeSlots() {
 var labAppointment = document
  .getElementById("lab_appointment").value;
 var timeSlots = {
  "MRI": ["9:00 AM", "10:00 AM",
   "11:00 AM"
  ],
  "X-Ray": ["1:00 PM", "2:00 PM",
   "3:00 PM"
  ],
  "Ultrasound": ["4:00 PM", "5:00 PM",
   "6:00 PM"
  ]
 };

 var timeSlotSelect = document
  .getElementById("time_slot");
 timeSlotSelect.innerHTML =
 ""; // Clear previous options

 var slots = timeSlots[labAppointment];
 for (var i = 0; i < slots.length; i++) {
  var option = document.createElement(
   "option");
  option.text = slots[i];
  timeSlotSelect.add(option);
 }
}
// Function to retrieve user details from sessionStorage and display them on the page
function displayAppointmentDetails() {
    var userDetails = sessionStorage.getItem('userDetails');
    if (userDetails) {
        userDetails = JSON.parse(userDetails);
        var appointmentDetails = document.getElementById('appointmentDetails');
        appointmentDetails.innerHTML = '<h2>Appointment Details:</h2>' +
                                        '<p>Name: ' + userDetails.name + '</p>' +
                                        '<p>Booking Date: ' + userDetails.bookingDate + '</p>' +
                                        '<p>Lab Appointment: ' + userDetails.labAppointment + '</p>' +
                                        '<p>Time Slot: ' + userDetails.timeSlot + '</p>';
    }
}

// Function to validate payment method selection
function validatePayment() {
    var paymentMethod = document.querySelector('input[name="payment_method"]:checked');
    if (!paymentMethod) {
        alert("Please select a payment method.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

// Call the function to display appointment details when the page loads
displayAppointmentDetails();
