<template>
  <div class="parent">
    <div class="registration-box">
      <!-- Left: Form -->
      <form @submit.prevent="submitForm" novalidate class="form-container">
        <div>
          <h2>Bug Beware</h2>
          <p>Registration Fee ₹100/people (lunch included)</p>
        </div>
        <div class="input-box">
          <label for="name">Name</label>
          <input id="name" v-model="name" type="text" placeholder="Full Name" autocomplete="off" required
            :class="{ invalid: !nameValid }" @input="validateName" />
          <div>
            <p v-if="nameValid">&nbsp;</p>
            <p v-if="!nameValid" class="error-msg">Name is required</p>
          </div>
        </div>

        <div class="input-box">
          <label for="address">Address</label>
          <input id="address" v-model="address" placeholder="Department Name, College, City, State, Pincode"
            autocomplete="off" type="text" required :class="{ invalid: !addressValid }" @input="validateAddress" />
          <div>
            <p v-if="addressValid">&nbsp;</p>
            <p v-if="!addressValid" class="error-msg">Address is required</p>
          </div>
        </div>

        <div class="input-box">
          <label for="mobile">Mobile Number</label>
          <input id="mobile" v-model="mobile" placeholder="Mobile" type="number" autocomplete="off" required
            :class="{ invalid: !mobileValid }" @input="validateMobile" />
          <div>
            <p v-if="mobileValid">&nbsp;</p>
            <p v-if="!mobileValid" class="error-msg">Enter a valid 10-digit mobile number</p>
          </div>
        </div>

        <div class="input-box">
          <label for="email">Email ID</label>
          <input id="email" v-model="email" placeholder="Email" type="email" autocomplete="off" required
            :class="{ invalid: !emailValid }" @input="validateEmail" />
          <div>
            <p v-if="emailValid">&nbsp;</p>
            <p v-if="!emailValid" class="error-msg">Enter a valid email address</p>
          </div>
        </div>

        <div class="input-box">
          <label for="transaction">Transaction ID</label>
          <input id="transaction" v-model="transaction" placeholder="501542XXXXXX..." type="text" autocomplete="off"
            required :class="{ invalid: !transactionValid }" @input="validateTransaction" />
          <div>
            <p v-if="transactionValid">&nbsp;</p>
            <p v-if="!transactionValid" class="error-msg">Transaction ID is required</p>
          </div>
        </div>

        <div class="input-box">
          <label for="transaction">Transaction Date</label>
          <input id="transaction" v-model="transactionDate" placeholder="501542XXXXXX..." type="date" autocomplete="off"
            required :class="{ invalid: !transactionDateValid }" @input="validateTransactionDate" />
          <div>
            <p v-if="transactionDateValid">&nbsp;</p>
            <p v-if="!transactionDateValid" class="error-msg">Transaction Date is required</p>
          </div>
        </div>

        <div class="input-box">
          <label for="payment">Payment Receipt Link</label>
          <input id="payment" v-model="payment" placeholder="Google Drive Link" type="link" autocomplete="off" required
            :class="{ invalid: !paymentValid }" @input="validatePayment" />
          <div>
            <p v-if="paymentValid">&nbsp;</p>
            <p v-if="!paymentValid" class="error-msg">Receipt link is required</p>
          </div>
        </div>


        <div class="qr-box" @click="showOverlay">
          <img src="@/assets/rupees_100_qr.png" alt="UPI QR Code" />
          <p>Click to expand</p>
        </div>

        <div style="display: flex; flex-direction: column;">
          <button type="submit" class="register-btn" :class="{ 'btn-disabled': isSubmitting }" :disabled="isSubmitting">
            <span>Register</span>
            <i v-if="isSubmitting" class="pi pi-spin pi-spinner"></i>
          </button>
          <p v-if="!message">&nbsp;</p>
          <p v-if="message" class="message">{{ message }}</p>
        </div>
      </form>

      <div class="event-picture">
        <img src="@/assets/debugging.png" alt="Event" />
      </div>
    </div>
    <!-- UPI QR Code Popup -->
    <div v-if="showQR" class="overlay" @click="closeOverlay">
      <div class="popup">
        <img src="@/assets/rupees_100_qr.png" alt="UPI QR Code" />
        <p>Tap anywhere to close</p>
      </div>
    </div>

    <!-- Success Alert -->
     <div v-if="showSuccess" class="overlay">
       <div class="alert-box">
         <span>Success</span>
         <p>Sit tight untill we add you to our Whatsapp Group</p>
         <button @click="redirectToHome"><i class="pi pi-arrow-left"></i> Home</button>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      address: "",
      mobile: "",
      email: "",
      transaction: "",
      payment: "",
      message: "",
      transactionDate: "",
      showQR: false,
      isSubmitting: false,
      showSuccess: false,
      // Validation state
      nameValid: true,
      addressValid: true,
      mobileValid: true,
      emailValid: true,
      transactionValid: true,
      transactionDateValid: true,
      paymentValid: true,
    };
  },
  computed: {
    formValid() {
      return (
        this.nameValid &&
        this.addressValid &&
        this.mobileValid &&
        this.emailValid &&
        this.transactionValid &&
        this.transactionDateValid &&
        this.paymentValid
      );
    },
  },
  methods: {
    validateName() {
      this.nameValid = this.name.trim() !== "";
    },
    validateAddress() {
      this.addressValid = this.address.trim() !== "";
    },
    validateMobile() {
      this.mobileValid = /^\d{10}$/.test(this.mobile);
    },
    validateEmail() {
      this.emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    validateTransaction() {
      this.transactionValid = this.transaction.trim() !== "";
    },
    validateTransactionDate() {
      this.transactionDateValid = this.transactionDate.trim() !== "";
    },
    validatePayment() {
      this.paymentValid = this.payment.trim() !== "";
    },
    async submitForm() {
      this.validateName();
      this.validateAddress();
      this.validateMobile();
      this.validateEmail();
      this.validateTransaction();
      this.validateTransactionDate();
      this.validatePayment();

      if (!this.formValid) {
        this.message = "❌ Please correct the errors in the form.";
        return;
      }

      this.isSubmitting = true;


      const formData = new FormData();
      formData.append("entry.1656351910", "Debugging");
      formData.append("entry.938701165", this.name);
      formData.append("entry.1571206702", this.address);
      formData.append("entry.461936171", this.mobile);
      formData.append("entry.1921963937", this.email);
      formData.append("entry.1066922307", this.transaction);
      formData.append("entry.1558697021", this.transactionDate);
      formData.append("entry.1914149981", this.payment);

      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSdCDueLekPARJEiIRHL3577v7j_I6BXZFf03ZWcxF3gCMRqGg/formResponse",
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
          }
        );
        this.showSuccess = true;
      } catch (error) {
        alert("❌ Registration failed. Please try again.");
      } finally {
        this.isSubmitting = false; // Hide spinner
      }
    },
    redirectToHome() {
      window.location.href = "/";
    },
    showOverlay() {
      this.showQR = true;
      document.body.style.overflow = "hidden";
    },
    closeOverlay() {
      this.showQR = false;
      document.body.style.overflow = "auto";
    },
    showSuccessOverlay(){
      this.showSuccess = true;
      document.body.style.overflow = "hidden";
    },
    resetForm() {
      this.name = "";
      this.address = "";
      this.mobile = "";
      this.email = "";
      this.transaction = "";
      this.transactionDate = "";
      this.payment = "";
    },
  },
};
</script>

<style scoped>
.qr-box {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  p {
    font-size: 14px;
    color: hsl(var(--background));
  }
}

.qr-box img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
}

/* QR Code Popup */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  p{
    font-size: 14px;
    color: hsl(var(--background));
  }
}

.popup img {
  width: 250px;
  height: 250px;
}

/* Success Alert */
.alert-box {
  display: flex;
  flex-direction: column;
  background: white;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  gap: 0.5rem;

  span{
    font-size: 20px;
    font-weight: bold;
    color: hsl(var(--background));
  }

  p{
    font-size: 14px;
    color: hsl(var(--background));
  }

  button{
    background: green;
    cursor: pointer;
    align-self: end;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: white;
    border: none;
  }
}

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: hsl(var(--background));
  padding: 20px;
  z-index: 0;
}

.registration-box {
  padding: 1rem;
  display: flex;
  width: 80%;
  max-width: 900px;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  gap: 1rem;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 15px;

  .input-box {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      border: 1px solid hsl(var(--background));
      border-radius: 8px;
      font-size: 16px;
      transition: 0.3s;

      &:focus-visible {
        outline: none;
        border-color: none;
      }
    }

    div {
      .error-msg {
        text-align: start;
        color: rgb(179, 2, 2);
      }
    }


    label {
      color: hsl(var(--background));
    }
  }

}

h2 {
  text-align: center;
  color: hsl(var(--background));
  font-size: 1.8rem;
}

p{
  text-align: center;
  color: hsl(var(--background));
  font-size: 14px;
}

.register-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(var(--popover));
  color: white;
  font-size: 16px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin: 1rem 0 0 0;
  text-transform: uppercase;
  border: none;
  gap: 1rem;
}

.register-btn:hover, .btn-disabled {
  background: #3b40a0;
}

/* Event Picture */
.event-picture {
  flex: 1;
  background: hsl(var(--background));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
}

.event-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: luminosity;
}

/* Message Styling */
.message {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: hsl(var(--background));
}

/* Responsive Design */
@media (max-width: 768px) {
  .registration-box {
    flex-direction: column-reverse;
  }

  .event-picture {
    height: 200px;
  }
}

@media (max-width: 550px) {
  h2 {
    font-size: 1.3rem;
  }

  .popup{
    padding: 10px;
  }

  .popup img{
    width: 200px;
    height: 200px;
  }

  .form-container {
    padding: 0rem;
    gap: 0.5rem;

    .input-box {
      input {
        font-size: 0.7rem;
        padding: 0.5rem;
      }

      label {
        font-size: 0.7rem;
      }

      div {

        .error-msg {
          font-size: 0.5rem;
        }
      }
    }
  }

  .alert-box{
    padding: 10px;
    gap: 0.2rem;
    width: min(15rem, 75vw);


    span{
      font-size: 20px;
    }

    p{
      font-size: 12px;
    }

    button{
      font-size: 12px;
    }
  }

  .message {
    font-size: 0.5rem;
  }
}
</style>
