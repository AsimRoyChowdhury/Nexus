<template>
  <div class="parent">
    <div class="registration-box">
      <form @submit.prevent="submitForm">
        <FloatLabel>
          <InputText id="name" v-model="name" type="text" name="entry.148626869" required />
          <label for="name">Name</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="event" v-model="event" type="text" name="entry.366108254" required />
          <label for="name">Name</label>
        </FloatLabel>
        <InputText v-model="event" type="text" name="entry.366108254" placeholder="Event" required />
        <InputText v-model="event" type="text" name="entry.366108254" placeholder="Event" required />
        <button type="submit">Register</button>
        <p v-if="message">{{ message }}</p>
      </form>
      <div class="event-picture">
        <img src="@/assets/gaming.jpg" alt="Event" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';

export default {
  components: {
    InputText,
    FloatLabel,
  },
  data() {
    return {
      name: "",
      event: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const formData = new FormData();
      formData.append("entry.148626869", this.name);
      formData.append("entry.366108254", this.event);

      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSdGp7D5lBQnzXlaGHzQz3CUdXGoshfdega9qwj4dZPFz08JNQ/formResponse",
          {
            method: "POST",
            body: formData,
            mode: "no-cors", // Prevents CORS errors
          }
        );

        this.message = "Registration successful!";
        this.name = "";
        this.event = "";
      } catch (error) {
        this.message = "Registration failed. Please try again.";
      }
    },
  },
};
</script>

<style>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  .registration-box {
    display: flex;
    height: 50%;
    width: 50%;
    gap: 10px;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .event-picture {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}

button {
  cursor: pointer;
}
</style>
