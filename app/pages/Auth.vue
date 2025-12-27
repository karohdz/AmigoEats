<script setup lang="ts">

const meta = definePageMeta({
    middleware: 'auth',
})

const loading = ref<boolean>(false);
const isSignup = ref<boolean>(false);

const supabase = useSupabaseClient();
const config = useRuntimeConfig();
const username = ref<string>("");
const password = ref<string>("");


const signUp = async () => {

    if (isSignup.value){
        const { data, error } = await supabase.auth.signUp({
            email: username.value,
            password: password.value,
            options: {
                emailRedirectTo: '',
            }
            
        })

        if (!error){
            // display message
        }

 
    } else { // trying to login
        const {data, error} = await supabase.auth.signInWithPassword({
            email: username.value,
            password: password.value
        })

        if (!error) await navigateTo('/');
    }

}

onMounted(() => {
    console.log("Supabase client: ", supabase);
    console.log("Runtime Configuration: ", config);
})

</script>

<template>

    <div>
        <div>
            <img src="" alt="App Image"/>
            <h2>{{ isSignup ? 'Sign in to Account' : 'Login to Account' }}</h2>
        </div>

        <div>
            <form @submit.prevent="signUp">

                <div>
                    <label for="username">
                        Username
                    </label>

                    <input  id="username" v-model="username" placeholder="Email"/>
                </div>

                <div>
                    <label for="password">
                        Password
                    </label>

                    <input id="password" type="password" v-model="password" placeholder="Password"/>
                </div>

                <button type="submit" >
                    {{ isSignup ? 'Sign Up' : 'Login' }}
                </button>

                <button type="button" @click="isSignup = !isSignup" >
                    {{ isSignup ? 'Already have an account? Log in' : 'Need an account? Sign up' }}
                </button>
            </form>
        </div>
    </div>

</template>