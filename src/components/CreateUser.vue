<template>
<div class="text-center">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn rounded aria-label="create-button" v-if="isAuth" color="blue" text dark v-bind="attrs" v-on="on">
                <v-icon class="icon">mdi-plus</v-icon>Ajouter un utilisateur
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <template>
                    <v-row justify="center">
                    <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
                    </v-row>
                    <validation-observer ref="observer">
                        <form id="form_user">
                            <validation-provider v-slot="{ errors }" names="email" rules="required">
                                <v-text-field v-model="email" :error-messages="errors" label="email" required></v-text-field>
                            </validation-provider>
                            <br>
                            <validation-provider v-slot="{ errors }" names="role" rules="required">
                                <v-select v-model="role" :error-messages="errors" label="role" required :items="roles" item-text="text" item-value="value"></v-select>
                            </validation-provider>
                            <br>
                            <validation-provider v-slot="{ errors }" names="password" rules="required">
                                <v-text-field v-model="password" :error-messages="errors" label="password" required></v-text-field>
                            </validation-provider>
                            <v-row justify="center">
                                <v-btn color="primary" class="mr-4" @click="submit">
                                    Create
                                </v-btn>
                            </v-row>
                        </form>
                    </validation-observer>
                </template>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    required,
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
} from 'vuex'

setInteractionMode('eager')
extend('required', {
    ...required,
    message: 'Ce champ est obligatoire',
})
export default {
    props: ['categorie'],
    data() {
        return {
            dialog: false,
            errors: null,
            email: '',
            password: '',
            role: '',
            roles: [{
                text: 'utilisateur',
                value: ['ROLE_USER']
            }, {
                text: 'admin',
                value: ['ROLE_ADMIN']
            }]
        }
    },
    computed: {
        ...mapState(["isLoading", "isAuth"]),
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    methods: {
        ...mapActions(["createUser"]),
        submit() {
            this.$refs.observer.validate();
            let email = this.email;
            let role = this.role;
            let password = this.password;
            this.createUser({
                email,
                role,
                password,
            }).then(() =>
                this.dialog = false,
            );
        }
    }
}
</script>

<style>
#form_user {
    padding: 30px;
}
</style>
