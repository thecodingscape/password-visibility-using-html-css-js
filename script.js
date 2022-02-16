const togglePassword = document.querySelector("#showPassword"),
      password = document.querySelector(".password");

      togglePassword.addEventListener("click", function(){

        //changing type of attribute from password to text

        const type = password.getAttribute("type") ==="password" ? "text" : "password";
        password.setAttribute("type",type);

        //now toggle the icon

        this.classList.toggle("bi-eye");

      });
