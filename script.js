const validator = {
   handleSubmit: (event) => {
      event.preventDefault();
      let send = true;
      const inputs = form.querySelectorAll("input:not([type='submit'])");

      validator.clearErrors();

      for (let input of inputs) {
         let check = validator.checkInput(input);
         if (check !== true) {
            send = false;
            validator.showError(input, check);
         }
      }

      if (send) {
         form.submit();
      }
   },

   checkInput: (input) => {
      let rules = input.getAttribute("data-rules");

      if (rules !== null) {
         rules = rules.split("|");

         for (let rule of rules) {
            let rDetails = rule.split("=");

            switch (rDetails[0]) {
               case "required":
                  if (input.value.trim() === "") {
                     return "Preencha este campo.";
                  }
                  break;

               case "min":
                  if (input.value.length < parseInt(rDetails[1])) {
                     return `Mínimo de ${rDetails[1]} caracteres.`;
                  }
                  break;

               case "email":
                  if (input.value.trim() !== "") {
                     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                     if (!regex.test(input.value.toLowerCase())) {
                        return "O e-mail digitado não é válido.";
                     }
                  }
                  break;
            }
         }
      }
      return true;
   },

   showError: (input, error) => {
      input.classList.add("input-error");

      let errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.innerText = error;

      input.parentNode.appendChild(errorElement);
   },

   clearErrors: () => {
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => input.classList.remove("input-error"));

      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach((element) => element.remove());
   },
};

const form = document.querySelector(".validador");
form.addEventListener("submit", validator.handleSubmit);
