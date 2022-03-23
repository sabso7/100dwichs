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
                            <v-row v-for="ingredients in listIngredients" v-bind:key="ingredients.ingredient">
                                <p class="ml-6">{{ingredients.quantite}} {{ingredients.ingredient}}</p>
                                <v-spacer></v-spacer>
                                <v-icon justify="end" class="icon mr-6" color="red" @click="deleteIngredient(ingredients.ingredient)">mdi-minus-circle</v-icon>
                            </v-row>
                            <v-row>
                                <v-col cols="4">
                                    <v-text-field v-model="quantite" :error-messages="errors" label="quantite" required></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <v-text-field v-model="ingredient" :error-messages="errors" label="Ingrédient" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row justify="center" class="pa-8">
                                <v-btn color="green" @click="addIngredient">
                                    <v-icon class="icon" color="white">mdi-plus</v-icon>
                                </v-btn>
                            </v-row>
                            <v-row justify="center">
                                <h3 class="ma-3">La recette par étapes</h3>
                            </v-row>
                            <v-row v-for="etapes in listEtapes" v-bind:key="etapes.etape">
                                <p class="ma-3">{{etapes.numero}} - {{etapes.etape}}</p>
                                <v-spacer></v-spacer>
                                <v-icon justify="end" class="icon mr-6" color="red" @click="deleteEtape(etapes.etape)">mdi-minus-circle</v-icon>
                            </v-row>
                            <v-textarea v-model="etape" :error-messages="errors" label="Etape" required></v-textarea>
                            <v-row justify="center" class="pa-8">
                                <v-btn color="green" @click="addEtape">
                                    <v-icon class="icon" color="white">mdi-plus</v-icon>
                                </v-btn>
                            </v-row>
                            <v-container class="champ-form">
                                <v-file-input v-model="file" label="File input" accept="image/*" filled prepend-icon="mdi-camera"></v-file-input>
                                <br>
                                <v-textarea v-model="descriptionPhoto" label="descriptionPhoto" required></v-textarea>
                            </v-container>
                            <v-row justify="center">
                                <v-btn color="#80AA5E" dark class="mr-4" @click="submit">
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
            quantite: '',
            listIngredients: [],
            etape: '',
            listEtapes: [],
            file: null,
            descriptionPhoto: '',
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
            let photo = this.file;
            let descriptionPhoto = this.descriptionPhoto;
            this.createSousCateg({
                nomSousCateg,
                categorie,
                description,
                listIngredients,
                listEtapes,
                photo,
                descriptionPhoto
            }).then(() =>
                this.dialog = false,
            );
        },
        addIngredient() {
            let ingredient = this.ingredient;
            let quantite = this.quantite;

            this.listIngredients.push({
                "ingredient": ingredient,
                "quantite": quantite
            });
        },
        deleteIngredient(ingred) {
            const array = this.listIngredients;
            var index = array.findIndex( item => item.ingredient === ingred);
            if (index > -1) {
                array.splice(index, 1);
            }
        },
        deleteEtape(etape) {
            const array = this.listEtapes;
            var index = array.findIndex( item => item.etape === etape);
            if (index > -1) {
                array.splice(index, 1);
            }
            console.log(array);
        },
        addEtape() {
            let etape = this.etape;
            let numero = this.listEtapes.length + 1;
            this.listEtapes.push({
                "etape": etape,
                "numero": numero
            });
        }
    },
    watch: {
        file(newValue) {
            if (newValue.size > (8000000)) {
                alert("photo trop grosse")
            }
        }
    }
}
</script>

<style>
#form_souscateg {
    padding: 30px;
}
</style>
