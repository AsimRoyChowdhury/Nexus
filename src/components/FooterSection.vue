<template>
  <div class="footer">
    <div class="map-address">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.8511241936903!2d75.09166669999999!3d12.3928975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47b031dc7334f%3A0xffe04fb35cc41116!2sCentral%20University%20of%20Kerala%20(CUK)!5e0!3m2!1sen!2sin!4v1740269252629!5m2!1sen!2sin"
        width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="address-phone-email">
        <a href="https://www.cukerala.ac.in/">
          <img v-if="screenWidth > 715 | screenWidth <= 450" src="../assets/cuklogo.png" alt="Central University of Kerala" />
        </a>
        <div class="address">
          <span>Computer Science Department</span>
          <span>Gangotri Building</span>
          <span>Central University of Kerala</span>
          <span>Kasaragod (DT), Kerala-671325</span>
          <span>INDIA</span>
        </div>
        <hr>
        <div class="phone-email">
          <a href="https://www.cukerala.ac.in/">
            <img v-if="screenWidth <= 715 & screenWidth > 450" src="../assets/cuklogo.png" alt="Central University of Kerala" />
          </a>
          <span>Phone: 9567435951</span>
          <span>Email: <a href="mailto:registrar@cukerala.ac.in">registrar@cukerala.ac.in</a></span>
        </div>
      </div>
    </div>
    <div class="footer-text">
      <div class="logo-copyright">
        <div class="nexus-wrapper">
        <div class="nexus">
            <span id="footer-ne">
              ne
            </span>
            <span id="footer-x">
              x
            </span>
            <span id="footer-us">
              us
            </span>
          </div>
          <span id="footer-version">
            2.0
          </span>
        </div>
        <div class="copyright">
          <div>All Rights Reserved</div>
          <div>&copy; Nexus 2025</div>
        </div>
      </div>
      <div class="social-designer">
        <div class="social-media">
          <a href="https://www.facebook.com/mrocukerala/">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/central_university_of_kerala/?hl=en">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="https://x.com/cukeralatweet">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/central-university-of-kerala-official/">
            <i class="pi pi-linkedin"></i>
          </a>
        </div>
        <div class="designer">
          <span>Designed by</span>
          <a href="https://www.linkedin.com/in/asim-roy-chowdhury/">
            Asim Roy Chowdhury
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  }
};
</script>

<style scoped>
.footer {
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 100%;
  background: hsl(var(--primary));


  .footer-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .map-address {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    height: 100%;
    align-items: center;
    /* color: hsl(var(--background)); */

    a {
      color: white;
      width: fit-content;

      &:hover {
        background: none;
        text-decoration: underline;
        text-underline-offset: 0.2rem;
      }
    }


    iframe {
      border-radius: 1rem;
      width: 30vw;
    }

    .address-phone-email {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      font-size: clamp(0.6rem, 1.2vw, 1rem);

      hr {
        border: 0.1rem solid hsl(var(--background));
        width: 80%;
      }

      img {
        height: clamp(4rem, 10vw, 8rem);
        width: clamp(4rem, 10vw, 8rem);
        border-radius: 50%;
        background: white;
      }

      .address {
        display: flex;
        flex-direction: column;
        line-height: 1.2rem;
      }

      .phone-email {
        display: flex;
        flex-direction: column;
      }
    }

  }

  .footer-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    height: 100%;
    padding: 1rem;

    .nexus-wrapper {
      display: flex;
      justify-content: center;
      align-items: end;
      gap: 0.5rem;

      .nexus {
        display: flex;
        justify-content: center;
        align-items: center;
        color: hsl(var(--highlight));
        background: hsl(var(--background));
        line-height: 3rem;
        padding: clamp(0.2rem, 0.8vw, 1rem);
        padding-top: clamp(0.4rem, 1vw, 1.4rem);
        border-radius: 1rem;
        text-transform: uppercase;
      }

      #footer-ne {
        font-family: "Bubbler One";
        font-size: clamp(2rem, 4vw, 4rem);
      }

      #footer-x {
        font-family: "Bubbler One";
        font-size: clamp(3rem, 5.5vw, 6rem);
      }

      #footer-us {
        font-family: "Bubbler One";
        font-size: clamp(2rem, 4vw, 4rem);
      }

      #footer-version {
        font-family: "Bubbler One";
        font-size: clamp(2.5rem, 5vw, 5rem);
        line-height: 4rem;
        letter-spacing: 1px;
        color: hsl(var(--highlight));
      }
    }

    .logo-copyright {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 1rem;
    }

    .copyright {
      display: flex;
      flex-direction: column;
      align-items: end;
      text-align: end;
      font-family: "Montserrat";
      font-size: clamp(1rem, 2vw, 1.5rem);
      line-height: clamp(1.2rem, 2.2vw, 1.8rem);
      /* color: hsl(var(--background)); */
    }

    .social-designer{
      display: flex;
      flex-direction: column;
      gap: clamp(1rem, 2vw, 2rem);
    }

    .social-media {
      display: flex;
      justify-content: end;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.2rem;
    }

    a:hover {
      background: none;
    }

    .pi {
      font-size: clamp(1.5rem, 2vw, 2rem);
      color: hsla(var(--highlight), 0.5);
      background: hsl(var(--primary));
      border-radius: 50%;
      padding: 0.5rem;

      &:hover {
        background: hsl(var(--background));
        color: hsl(var(--highlight));
        cursor: pointer;
      }
    }

    .designer {
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      align-items: center;
      gap: clamp(0rem, 0.5vw, 0.5rem);
      font-family: "Montserrat";
      font-size: clamp(0.8rem, 2vw, 1.5rem);
      font-weight: 500;
      line-height: clamp(1.2rem, 2.5vw, 1.8rem);

      a {
        color: white;
        text-underline-offset: 0.2rem;
        text-decoration: underline;
        border-radius: 0.5rem;
        padding: 0 0.5rem;

        &:hover {
          color: hsl(var(--highlight));
          cursor: pointer;
        }
      }
    }

  }

}

@media (max-width: 715px) {
  .footer {
    .map-address {
      flex-direction: column;

      iframe {
        width: 100%;
        height: 100%;
      }

      .address-phone-email {
        flex-direction: row;
        line-height: 0.8rem;
        font-size: clamp(0.6rem, 1.2vw, 1rem);

        hr {
          width: 0;
          height: 80%;
          margin: 0.3rem;
        }

        img {
          height: clamp(4rem, 10vw, 8rem);
          width: clamp(4rem, 10vw, 8rem);
          border-radius: 50%;
        }

        .address {
          line-height: 0.8rem;
        }

        .phone-email {
          flex-direction: column;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .footer {
    height: fit-content;
    flex-direction: column;

    .map-address{
      width: 100%;
      flex-direction: row;
      gap: 0.5rem;
      padding: 0 1rem;
      height: fit-content;

      iframe{
        height: 230px;
        width: 40vw;
      }

      .address-phone-email{
        flex-direction: column;
        gap: 0.5rem;
        font-size: clamp(0.6rem, 1.2vw, 1rem);
        width: 100%;

        hr{
          height: 0;
          width: 100%;
          margin: 0;
        }

        img{
          height: clamp(4rem, 10vw, 8rem);
          width: clamp(4rem, 10vw, 8rem);
          border-radius: 50%;
        }

        .address{
          line-height: 1rem;
        }

        .phone-email{
          flex-direction: column;
        }
      }
    }

    .footer-text {
      width: 100%;
      height: fit-content;
      padding: 0 1rem;
      flex-direction: row;
      align-items: start;

      .nexus-wrapper {
        .nexus {
          padding: clamp(0.2rem, 0.8vw, 1rem);
          padding-top: clamp(0.4rem, 1vw, 1.4rem);
        }

        #footer-ne {
          font-size: clamp(1.5rem, 3vw, 3rem);
        }

        #footer-x {
          font-size: clamp(2rem, 4vw, 4rem);
        }

        #footer-us {
          font-size: clamp(1.5rem, 3vw, 3rem);
        }

        #footer-version {
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 3rem;
        }

      }

      .logo-copyright {
        gap: 0.5rem;
      }
      .copyright{
        width: 100%;
        text-align: start;
        justify-content: start;
        align-items: start;
        font-size: 0.7rem;
      }

      .social-designer{
        padding: 0.5rem 0;
        align-self: end;
        justify-self: end;
        gap: 0.5rem;

        .pi{
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          padding: 0.3rem;
        }

        .designer{
          font-size: clamp(0.8rem, 1.2vw, 1rem);

          a{
            text-align: end;
          }
        }
      }
    }
  }
}
</style>
