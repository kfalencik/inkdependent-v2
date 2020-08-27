<template>
  <section id="contact" class="contact" v-cloak>
    <div class="container">
      <div class="row">
        <div class="col u-white u-text-center">
          <h2 class="h2 u-cinzel" v-scroll-reveal="{ cleanup: true, delay: 500, duration: 1000, distance: '250px', origin: 'top', interval: 300 }">
            <span class="u-gold">Have any questions?</span> <span class="u-white">Let us know!</span>
          </h2>
          <p class="contact__item" v-scroll-reveal="{ cleanup: true, delay: 500, duration: 1000, distance: '250px', origin: 'left', interval: 300 }"><fa :icon="['fas', 'map-marker-alt']"/> 56 DALRY ROAD, EH11 2BA, EDINBURGH, UK</p>
          <p class="contact__item" v-scroll-reveal="{ cleanup: true, delay: 700, duration: 1000, distance: '250px', origin: 'left', interval: 300 }"><fa :icon="['fas', 'envelope']"/> <a href="mailto:INKDEPENDENTTATTOOS@GMAIL.COM">INKDEPENDENTTATTOOS@GMAIL.COM</a></p>
          <p class="contact__item" v-scroll-reveal="{ cleanup: true, delay: 900, duration: 1000, distance: '250px', origin: 'left', interval: 300 }"><fa :icon="['fas', 'phone']"/> 0131 623 65 65</p>

          <form id="contact-form" @submit="sendEmail" method="POST">
            <div class="container">
              <div class="row">
                <div class="col">
                  <p class="contact__confirmation" v-if="contactConfirmation != ''">{{ contactConfirmation }}</p>
                  <p class="contact__error" v-if="contactError != ''">{{ contactError }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <label for="contact-name"><span class="sr-only">Name</span>
                    <input id="contact-name" v-scroll-reveal="{ cleanup: true, delay: 1000, duration: 1000, distance: '250px', origin: 'top', interval: 300 }" v-model="contactName" name="from_name" placeholder="Your name" required />
                  </label>
                </div>

                <div class="col-lg-4">
                  <label for="contact-email"><span class="sr-only">Email</span>
                    <input id="contact-email" v-scroll-reveal="{ cleanup: true, delay: 1200, duration: 1000, distance: '250px', origin: 'top', interval: 300 }" v-model="contactEmail" name="reply_to" type="email" placeholder="Your email" required />
                  </label>
                </div>

                <div class="col-lg-4">
                  <label for="contact-subject"><span class="sr-only">Subject</span>
                    <input id="contact-subject" v-scroll-reveal="{ cleanup: true, delay: 1400, duration: 1000, distance: '250px', origin: 'top', interval: 300 }" v-model="contactSubject" name="subject" placeholder="Your subject" required />
                  </label>
                </div>

                <div class="col">
                  <label for="contact-message"><span class="sr-only">Message</span>
                    <textarea id="contact-message" v-scroll-reveal="{ cleanup: true, delay: 1600, duration: 1000, distance: '250px', origin: 'top', interval: 300 }" v-model="contactMessage" name="message_html" placeholder="Your message" required></textarea>
                  </label>

                  <button type="submit" class="btn" v-scroll-reveal="{ cleanup: true, delay: 1800, duration: 1000, distance: '250px', origin: 'right', interval: 300 }">Send your message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data () {
    return {
      contactEmail: '',
      contactMessage: '',
      contactSubject: '',
      contactMessage: '',
      contactName: '',
      contactError: '',
      contactConfirmation: ''
    }
  },

  methods: {
    sendEmail: function(event) {
      event.preventDefault();

      if (this.contactEmail !== '' && this.contactSubject !== '' && this.contactMessage !== '' && this.contactName != '') {
        let service_id = "default_service";
        let template_id = "template_0FUSa2lo";

        const message =  {
          email: this.contactEmail,
          name: this.contactName,
          subject: this.contactSubject,
          message: this.contactMessage
        };
        
        emailjs.send(service_id, template_id, message).then(response => {
          this.contactMessage = '';
          this.contactName = '';
          this.contactEmail = '';
          this.contactSubject = '';

          this.contactError = '';
          this.contactConfirmation = 'Thank you for your message! We will be in touch as soon as possible.';
        }, err => {
          this.contactError = 'There has been an error sending your message. Please try again!';
          this.contactConfirmation = '';
          console.log(err)
        })
      } else {
        this.contactError = 'Please fill in all fields and try again.';
        this.contactConfirmation = '';
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
	&__item {
		font-size: 16px;
		font-family: $font-bold;
		letter-spacing: 1px;
		text-transform: uppercase;

		a {
			color: #fff;
		}

		i {
			margin-right: 10px;
			font-size: 22px;
		}
	}

	&__confirmation {
		background: $gold-color;
		font-family: $font-body;
		font-size: 20px;
		letter-spacing: 3px;
		padding: 15px 0;
		margin: 15px 0;
	}

	&__error {
		background: orangered;
		font-family: $font-body;
		font-size: 20px;
		letter-spacing: 3px;
		padding: 15px 0;
		margin: 15px 0;
	}

	form {
		margin-top: 35px;

		input, textarea {
			width: 100%;
			border: 1px solid $grey-color;
			background: none;
			resize: none;
			font-family: $font-bold;
			text-transform: uppercase;
			padding: 15px;
			margin-bottom: 20px;
			color: #fff;
			text-align: center;
			font-size: 18px;
		}

		textarea {
			height: 200px;
		}
	}
}

</style>