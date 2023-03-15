      function recipes() {
        let name = prompt("What is your name?");
        let email = prompt("What is your email?");
        let newsletter = prompt(
          "Would you like to subscribe to our newsletter?"
        );
        newsletter = newsletter.toLocaleLowerCase();

        let noresponse = document.querySelector("button");

        if (newsletter === "yes") {
          noresponse.innerHTML =
            "Thank you, " +
            name +
            "! We'll send you more delicious vegan recipes right away!😋";
        } else {
          noresponse.innerHTML =
            "No problem, " + name + "! Enjoy this meal instead.🤗";
        }
      }

      let recipesButton = document.querySelector(".recipes-button");
      recipesButton.addEventListener("click", recipes);