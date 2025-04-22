const preloadedLogs = [
  "Issue: Form not submitting – Resolved by adding correct event listener.",
  "Issue: Button not visible – Resolved by correcting CSS positioning."
];

// Populate the log with pre-existing issues
preloadedLogs.forEach(log => {
  const logItem = document.createElement("li");
  logItem.textContent = log;
  document.getElementById("log-list").appendChild(logItem);
});
