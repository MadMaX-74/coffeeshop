<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component></nav-bar-component>
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="sendForm" action="/" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="name-input"
                    v-model="v$.nameInput.$model"
                  />
                  <span v-for="error in v$.nameInput.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    id="email-input"
                    v-model="v$.emailInput.$model"
                  />
                   <span v-for="error in v$.emailInput.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone-input"
                    v-model="v$.phoneInput.$model"
                  />
                   <span v-for="error in v$.phoneInput.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                    v-model="v$.messageInput.$model"
                  ></textarea>
                  <span v-for="error in v$.messageInput.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn" type="submit">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from '@vuelidate/validators';
import { minLength } from "../validators/minLength";

export default {
  components: { NavBarComponent },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      nameInput: "",
      emailInput: "",
      phoneInput: "",
      messageInput: "",
    };
  },
  validations () {
    return {
      nameInput: { required }, 
      messageInput: { 
        required,
         maxLength: maxLength(20),
         minLength: helpers.withMessage('this value must be 5 characters long', minLength) }, 
      phoneInput: {  }, 
      emailInput: { required, email }, 
      
    }
  },
  methods: {
    async sendForm() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      const message = {
        nameInput: this.nameInput,
        emailInput: this.emailInput,
        phoneInput: this.phoneInput,
        messageInput: this.messageInput,
      };
      fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      .then(()=> {
        this.nameInput = "",
        this.emailInput = "",
        this.phoneInput = "",
        this.messageInput = ""
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>