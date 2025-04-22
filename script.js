// script.js

document.getElementById("ticket-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting the traditional way
  
  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const issue = document.getElementById("issue").value;

  // Validate the input (for demo, assume all fields are valid)
  if (name && email && issue) {
      // Create a new ticket entry
      const ticketEntry = {
          name: name,
          email: email,
          issue: issue,
          status: "Pending"
      };
      
      // Simulate adding the ticket to the system (in reality, you would save this to a database)
      const logItem = document.createElement("li");
      logItem.textContent = `Ticket from ${ticketEntry.name} (${ticketEntry.email}): ${ticketEntry.issue} - Status: ${ticketEntry.status}`;
      
      // Append new ticket to the error log
      document.getElementById("log-list").appendChild(logItem);
      
      // Reset the form
      document.getElementById("ticket-form").reset();
  } else {
      alert("Please fill out all fields.");
  }
});
