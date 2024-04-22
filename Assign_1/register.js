function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

  return `${day}-${month}-${year}`;
}

document.getElementById("registerationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

    const today = new Date();
    const formattedDate = formatDate(today);

  const userData = {
    name: name,
    email: email,
    password: password,
    date: formattedDate
  };

    console.log(userData);
  const xhr = new XMLHttpRequest(); // Use XMLHttpRequest for AJAX

  // Replace with any dummy URL to avoid unintended server interaction
  xhr.open("POST", "data:text/plain,Dummy%20Data");

  xhr.onload = function () {
    if (xhr.status === 200) { // Assuming success status code is 200
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      window.location.href = "index.html";
    } else {
      console.error("Error saving data:", xhr.statusText);
    }
  };

  xhr.send(JSON.stringify(userData));
});


