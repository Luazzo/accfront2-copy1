<template>
    <div class="wrapper contact-page">
        <div data-v-6cb22cbe="" class="separator-line separator-primary"></div>

        <!--Pour afficher Google Maps j'utilise simple iframe;
        L'autre moyen de l'afficher - c'est avec API_KEY, mais ça coute 300e -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5061.282464808288!2d5.565214527289389!3d50.633781248531946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fa034ff756bf%3A0x62c3829e2a0d3f37!2sAvenue%20Rogier%2010%2C%204000%20Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1580774371112!5m2!1sfr!2sbe"
                width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="">
        </iframe>

        <!--CONTACTEZ-NOUS-->
        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                            <h2 class="title">Envoyez nous un message</h2>
                            <p class="description">Vous pouvez nous contacter pour tout ce qui concerne nos produits.
                                Nous prendrons contact avec vous dans les plus brefs délais.
                                <br>
                                <br>
                            </p>
                            <flash-message></flash-message>
                            <form role="form" id="contact-form" method="post">

                                <label v-if="errors.nom" class="labelError">Nom est obligatoire.</label>
                                <fg-input
                                    placeholder="Nom..."
                                    v-model="form.nom"
                                    addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>

                                <label v-if="errors.email" class="labelError">Email est invalide.</label>
                                <fg-input
                                    placeholder="Email..."
                                    v-model="form.email"
                                    addon-left-icon="now-ui-icons ui-1_email-85">
                                </fg-input>

                                <label v-if="errors.gsm" class="labelError">GSM est obligatoire.</label>
                                <fg-input
                                    placeholder="Téléphone..."
                                    v-model="form.gsm"
                                    addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <div class="form-group">
                                    <label v-if="errors.message" class="labelError">Message est vide.</label>
                                    <textarea v-model="form.message"
                                              name="message"
                                              class="form-control"
                                              id="message"
                                              rows="6"
                                              placeholder="Veuillez formuler votre demande en quelques mots simple, s'il vous plait">
                                    </textarea>
                                </div>
                                <div class="send-button">
                                    <a href="#" class="btn btn-primary btn-round btn-lg btn-block"
                                       @click.prevent="sendForm">Envoyer</a>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5 ml-auto mr-auto">
                            <info-section type="primary"
                                          class="mt-5"
                                          icon="now-ui-icons location_pin">
                                <h4 class="info-title">Notre adresse</h4>
                                <p> Avenue Rogier 10,
                                    <br> 4000 Liège
                                </p>
                            </info-section>

                            <info-section type="primary"
                                          icon="now-ui-icons tech_mobile">
                                <h4 class="info-title">Appellez-nous</h4>
                                <p> Sabri El Amri
                                    <br> +32 489 12 34 56
                                    <br> Lun - Ven, 8:30-17:00
                                </p>
                            </info-section>

                            <info-section type="primary"
                                          icon="business_briefcase-24 now-ui-icons">
                                <h4 class="info-title">Information légale</h4>
                                <p> AConseils
                                    <br> N° Ent. · 0875146074
                                    <br> IBAN · BE91 0004 4215 3076
                                </p>
                            </info-section>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import { Button, HeadImage, InfoSection, FormGroupInput } from '../components';
    import axios from "axios";

    export default {
        name: 'contact-us',
        bodyClass: 'contact-page',
        components: {
            InfoSection,
            HeadImage,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        },
        data() {
            return {
                form: {
                    nom: '',
                    email: '',
                    gsm: '',
                    message: ''
                },
                errors: {
                    nom: '',
                    email: '',
                    gsm: '',
                    message: ''
                },
            }
        },
        methods:{

            validEmail(email) {
                let re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test(email);
            },

            videChamps(form){
                for (const prop in form) {
                    this.form[prop]  = ''
                }
            },
            sendForm(){
                this.errors = {};
                //validation des champs
                for (const prop in this.form) {
                    if(prop === "email") {
                        if (this.validEmail(this.form.email) === false) {
                            this.errors.email = true
                        }
                    }else if( !this.form[prop] ) {
                        this.errors[prop] = true
                    }
                }
                //Je verifie est-e qu'il y a au moins un TRUE d'error et si non j'appelle une fonction envoyer un email.
                if(!Object.values(this.errors).some(value => true)) {
                    axios.post('contact', this.form )
                        .then(response => {
                            if(response.status === 200){
                                this.videChamps(this.form)
                                this.flash('Merci! Votre message est bien envoyé.', 'success', {
                                    timeout: 4000,
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            },
        },
    }
</script>
<style>
    .form-control {
        height: inherit;
    }
    .main{
        text-align: left;
    }

</style>
