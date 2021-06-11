<template>
<div class="text-center">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="red" dark v-bind="attrs" v-on="on">
                <v-icon class="icon">mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <template>
                    <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
                    <validation-observer ref="observer">
                        <form id="form_souscateg">
                            <validation-provider v-slot="{ errors }" names="souscateg" rules="required">
                                <v-text-field v-model="souscateg" :error-messages="errors" label="Sous-Catégorie" required></v-text-field>
                            </validation-provider>
                            <br>
                            <validation-provider v-slot="{ errors }" names="description" rules="required">
                                <v-textarea v-model="description" :error-messages="errors" label="Description" required></v-textarea>
                            </validation-provider>
                            <br>
                            <v-row justify="center">
                                <v-btn  color="primary" class="mr-4" @click="submit">
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
    message: 'Can not be empty',
})
export default {
    props: ['categorie'],
    data() {
        return {
            dialog: false,
            errors: null,
            souscateg: '',
            description: ''
        }
    },
    computed: {
        ...mapState(["isLoading"]),
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    methods: {
        ...mapActions(["createSousCateg"]),
        submit() {
            this.$refs.observer.validate();
            let nomSousCateg = this.souscateg;
            let description = this.description;
            let categorie = this.categorie;
            this.createSousCateg({
                nomSousCateg,
                categorie,
                description
            }).then(() =>
                this.dialog = false,
            );
        }
    }
}
</script>

<style>
#form_souscateg {
    padding: 30px;
}
</style>
