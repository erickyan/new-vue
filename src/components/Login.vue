<template>
<div class='container'>
<!-- <img src='../assets/cplogo.png'> -->
<!-- login form -->
  <div class="login-wrapper border border-light">
    <form class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputUsername" class="sr-only">Username</label>
      <input v-model="input.user" type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="input.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click='sendData()'>Sign in</button>
    </form>
		<textarea>{{ input.user }} {{ input.password }} {{ response }}</textarea>
  </div>
<!-- end of login form -->
	<!-- <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="checkMD5">
      <h2 class="form-signin-heading">MD5</h2>
      <label for="inputMD5" class="sr-only">MD5</label>
      <input v-model="md5" type="text" id="inputMD5" class="form-control" placeholder="md5" required autofocus>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Check</button>
    </form>
  </div> -->
<!-- end of login form -->

</div>
</template>

<script>
import axios from '../../node_modules/axios'

export default {
  name: 'login',
  data () {
    return {
      input: {
        user: '',
        password: ''
      },
      response: ''
    }
  },
  methods: {
    sendData () {
      axios({
        method: 'POST',
        'url': 'https://58.185.96.20/web_api/login',
        'data': this.input,
        'headers': {
          'content-type': 'application/json'
        }
      })
        .then(result => {
          this.response = result.data
        },
        error => {
          console.error(error)
        }
        )
    }
  }
}
</script>

<style lang="css">
body {
  background: #605B56;
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
