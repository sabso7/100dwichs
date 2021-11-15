<template>
<div class="text-center">
    <v-dialog v-model="dialog" width="900">
        <template v-slot:activator="{ on, attrs }">
            <v-btn aria-label="create-button" color="red" dark v-bind="attrs" v-on="on">
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
                                <v-text-field v-model="souscateg" :error-messages="errors" label="Titre" required></v-text-field>
                            </validation-provider>
                            <br>
                            <validation-provider v-slot="{ errors }" names="description" rules="required">
                                <v-textarea v-model="description" :error-messages="errors" label="Description" required></v-textarea>
                            </validation-provider>
                            <br>
                            <v-row justify="center">
                                <h3 class="ma-3">liste des ingrédients</h3>
                            </v-row>
                            <v-row v-for="(ingredients,index) in listIngredients" v-bind:key="index">
                                <p>{{ingredients.ingredient}}</p>
                            </v-row>
                            <v-text-field v-model="ingredient" :error-messages="errors" label="Ingrédient" required></v-text-field>
                            <v-row justify="center" class="pa-8">
                                <v-btn  color="green" @click="addIngredient">
                                    <v-icon class="icon" color="white">mdi-plus</v-icon>
                                </v-btn>
                            </v-row>
                            <v-row justify="center">
                                <h3 class="ma-3">La recette par étapes</h3>
                            </v-row>
                            <v-row v-for="(etapes,index) in listEtapes" v-bind:key="index">
                                <p class="ma-3">{{etapes.numero}} - {{etapes.etape}}</p>
                            </v-row>
                            <v-textarea v-model="etape" :error-messages="errors" label="Etape" required></v-textarea>
                            <v-row justify="center" class="pa-8">
                                <v-btn  color="green" @click="addEtape">
                                    <v-icon class="icon" color="white">mdi-plus</v-icon>
                                </v-btn>
                            </v-row>
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
            description: '',
            ingredient: '',
            listIngredients: [],
            etape:'',
            listEtapes: []
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
            let listIngredients = this.listIngredients;
            let listEtapes = this.listEtapes;
            this.createSousCateg({
                nomSousCateg,
                categorie,
                description,
                listIngredients,
                listEtapes
            }).then(() =>
                this.dialog = false,
            );
        },
        addIngredient() {
            let ingredient = this.ingredient;
            this.listIngredients.push({"ingredient": ingredient});
        },
        addEtape() {
            let etape = this.etape;
            let numero = this.listEtapes.length + 1;
            this.listEtapes.push({"etape": etape, "numero": numero});
        }
    }
}
</script>

<style>
#form_souscateg {
    padding: 30px;
}
</style>
