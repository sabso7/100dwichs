<template>
<div class="text-center">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn rounded aria-label="create-button" color="blue" class="ma-3" dark v-bind="attrs" v-on="on">
                <v-icon class="icon">mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <template>
                    <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
                    <validation-observer ref="observer">
                        <form id="form_categ">
                            <validation-provider v-slot="{ errors }" names="categ" rules="required">
                                <v-text-field v-model="categ" :error-messages="errors" label="Catégorie" required></v-text-field>
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
            categ: '',
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
        ...mapActions(["createCateg"]),
        submit() {
            this.$refs.observer.validate();
            let nomCateg = this.categ;
            let description = this.description;
            this.createCateg({
                nomCateg,
                description
            }).then(() =>
                this.dialog = false,
            );
        }
    }
}
</script>

<style>
#form_categ {
    padding: 30px;
}
</style>