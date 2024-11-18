<template>
  <header>
    <a href ="/"><img src="../assets/images/house.png" alt ="maison"></a>
  </header>
<div class="login-container">
        <h2>Register</h2>
        <p>Crée toi un nouveau compte</p>
        <form class="form">
            <div class="input-container ic2">
              <input id="firstname" class="input" type="text" placeholder=" " required>
              <div class="cut"></div>
              <label for="firstname" class="placeholder">First name</label>
            </div>

            <div class="input-container ic2">
              <input id="lastname" class="input" type="text" placeholder=" " required>
              <div class="cut"></div>
              <label for="lastname" class="placeholder">Last Name</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="email" placeholder=" " required>
              <div class="cut"></div>
              <label for="email" class="placeholder">Email</label>
            </div>

            <div class="input-container ic2">
              <input id="password" class="input" type="password" placeholder=" " required>
              <div class="cut"></div>
              <label for="Password" class="placeholder">Password</label>
            </div>

            <div class="input-container ic2">
                <input id="password" class="input" type="password" placeholder=" " required>
                <div class="cut"></div>
                <label for="Password" class="placeholder">Confirm Password</label>
            </div>

            <button type="text" class="submit" onsubmit="handleSubmit()">
              submit
            </button>
            <p id="error" class="error"></p>
          </form>
    </div>
</template>

