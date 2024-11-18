<template>
    <div class="app-container">
      <header>
        <a href ="/"><img src="../assets/images/house.png" alt ="maison"></a>
      </header>
      <div class="login-container">
        <h2>Connexion</h2>
        <p>Connectez-vous pour accéder à votre compte</p>
        <form>
          <input type="text" placeholder="Nom d'utilisateur" required>
          <input type="password" placeholder="Mot de passe" required>
          <button type="submit">Se connecter</button>
        </form>
        <div class="signup-link">
          <p>Pas encore de compte ? <a href="/register">Inscrivez-vous</a></p>
        </div>
      </div>
    </div>
  </template>

