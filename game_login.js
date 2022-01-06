function addUser() {
  number_1 = document.getElementById("number1_name_input").value;
  number_2 = document.getElementById("number2_name_input").value;

    localStorage.setItem("number_1", number_1);
    localStorage.setItem("number_2", number_2);
  
    window.location = "game_page.html";
}

