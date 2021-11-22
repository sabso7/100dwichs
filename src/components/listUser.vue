<template>
<v-container fluid>
    <v-row justify="center">
        <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
    </v-row>
    <v-card class="pa-2 mt-9">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Id
                        </th>
                        <th class="text-left">
                            Email
                        </th>
                        <th class="text-left">
                            Role
                        </th>
                        <th class="text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in listUser" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.roles }}</td>
                        <td>
                            <delete-user :idUser="user.id"></delete-user>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <create-user></create-user>
    </v-card>
</v-container>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
import deleteUser from '../components/DeleteUser.vue';
import CreateUser from './CreateUser.vue';
export default {
    data() {
        return {
            transparent: 'rgba(0, 0, 0, 0)',
        }
    },
    components: {
        deleteUser,
        CreateUser
    },
    computed: {
        ...mapState(["listUser", "isLoading"]),
    },
    methods: {
        ...mapActions(["getListUser"]),
    },
    beforeMount() {
        this.getListUser();
    },
}
</script>

<style>

</style>
