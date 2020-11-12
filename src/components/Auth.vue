<template>
  <validation-observer
    ref="observer"
  >
    <form>
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Password"
        rules="required"
      >
        <v-text-field
          v-model="password"
          :error-messages="errors"
          type='password'
          label="Password"
          required
        ></v-text-field>
      </validation-provider>
      <br>
      <v-btn
        class="mr-4"
        @click="submit"
      >
        valider
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
  import { required, email } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      password: '',
      email: '',
      select: null,
      errors: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate();
        const emailInput = this.email;
        const passwordInput = this.password;
        this.$store.dispatch("login", { emailInput, passwordInput }).then(
          
            () => {
                this.$router.push('/')
            }
        );
      }
    },
  }
</script>

<style>

</style>