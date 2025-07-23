function saveData(e) {
    e.preventDefault();
    const nameValue = document.getElementById("name").value;
    const feedbackValue = document.getElementById("feedback").value;

    localStorage.setItem("name", nameValue);
    localStorage.setItem("feedback", feedbackValue);

    displayData(); 
  }

  function displayData() {
    const savedName = localStorage.getItem("name");
    const savedFeedback = localStorage.getItem("feedback");

    if (savedName && savedFeedback) {
      document.getElementById("result").innerText = `${savedName}: ${savedFeedback}`;
    }
  }
  window.onload = displayData;

// --------------------- For Session Storage ----------------------
  function saveData(e) {
    e.preventDefault();
    const nameValue = document.getElementById("name").value;
    const feedbackValue = document.getElementById("feedback").value;

    sessionStorage.setItem("name", nameValue);
    sessionStorage.setItem("feedback", feedbackValue);

    displayData(); 
  }

  function displayData() {
    const savedName = sessionStorage.getItem("name");
    const savedFeedback = sessionStorage.getItem("feedback");

    if (savedName && savedFeedback) {
      document.getElementById("result").innerText = `${savedName}: ${savedFeedback}`;
    }
  }
  window.onload = displayData;