<template>
<v-container class="home-block" fluid>
    <v-row justify="center">
            <div style="padding:20px" class="overline text-h5 text-sm-h5 mb-4">Contact</div>
        </v-row>
    <v-row justify="center">
        
        <v-col cols="12" sm="8">
                <v-list>
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>mdi-phone</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title class="font-weight-light">(650) 555-1234</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>mdi-email</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title class="font-weight-light">elodie(.)bolatto(@)gmail.com</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>mdi-map-marker</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title class="font-weight-light">Annecy, Haute-Savoie 74000</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>
                </v-list>
        </v-col>
        <v-container id="logos-footer">
            <v-row justify="center">
                <span class="logo-footer">
                    <v-btn rel="noopener" aria-label="go to instagram" icon href="https://www.instagram.com/elodiebolatto/?hl=fr" target="_blank">
                        <v-icon x-large class="icon">mdi-instagram</v-icon>
                    </v-btn>
                </span>
                <span class="logo-footer">
                    <v-btn rel="noopener" aria-label="go to facebook" icon href="https://www.facebook.com/elodiebolattophotographie" target="_blank">
                        <v-icon x-large class="icon">mdi-facebook</v-icon>
                    </v-btn>
                </span>
            </v-row>
        </v-container>
    </v-row>
</v-container>
</template>

<script>
export default {};
</script>

<style>
a {
    text-decoration: none;
}

.photo_about {
    margin-top: 100px;
}
</style>
