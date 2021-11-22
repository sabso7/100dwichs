<template>
<validation-observer ref="observer">
    <form>
        <v-alert dense outlined type="error" v-if="errors !== null">{{ errors }} </v-alert>
        <validation-provider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="Password" rules="required">
            <v-text-field v-model="password" :error-messages="errors" type='password' label="Password" required></v-text-field>
        </validation-provider>
        <br>
        <v-row justify="center">
            <v-btn class="mr-4" @click="submit">
                valider
            </v-btn>
        </v-row>
    </form>
</validation-observer>
</template>

<script>
import {
    required,
    email
} from 'vee-validate/dist/rules'
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode
} from 'vee-validate'
import {
    mapState,
    mapActions
} from "vuex";

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
    computed: {
        ...mapState(["isAuth"]),
    },
    methods: {
        ...mapActions(["login", "logout"]),
        submit() {
            this.$refs.observer.validate();
            const email = this.email;
            const password = this.password;
            this.logout();
            this.login({
                email,
                password
            }).then(() => {
                if (localStorage.getItem('is-auth')) {
                    this.errors = null;
                    this.$router.push('/');
                } else {
                    this.errors = "Bad id !!!!";
                }
            });
        }
    },
}
</script>
