<template>
    <div class="wrapper contact-page">
        <HeadImage></HeadImage>

        <!--FEATURES-->
        <div class="about-description text-center">
            <div class="features-3">
                <div class="container"  style="display:block;">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="title">Écoute et Efficacité</h2>
                            <h4 class="description">Nous vous écoutons. Nous analisons vos besoins. Nous faisons les études comparatives
                                et en suite nous agissons avec éfficacité pour y repondre.</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-success icon-circle">
                                    <i class="now-ui-icons users_single-02"></i>
                                </div>
                                <h4 class="info-title text-success">Particulier</h4>
                                <p class="description">Regroupement avec une mensualité gratuite et franchise anglaise.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons business_briefcase-24"></i>
                                </div>
                                <h4 class="info-title text-info">Entreprise</h4>
                                <p class="description">Plan PME. mensualité gratuite et remboursement jusqu'à 15% de votre prime d'assurence.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-primary icon-circle">
                                    <i class="now-ui-icons media-2_sound-wave"></i>
                                </div>
                                <h4 class="info-title text-danger">Vie & Hospi</h4>
                                <p class="description">Rendement optimisé, securité integrale.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-warning icon-circle">
                                    <i class="now-ui-icons objects_support-17"></i>
                                </div>
                                <h4 class="info-title text-warning">Assistance juridique</h4>
                                <p class="description">Repense aux défis par l'action et les conseils des specialistes independants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--QUI SOMME NOUS-->
        <div class="team-3 section-image" style="background-image: url('img/bg24-fonce.jpg')">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">AConseils, qui sommes-nous ?</h2>
                        <h4 class="description">AConseils, nous sommes des intermédiaires en assurances professionnels et totalement indépendants qui offrons des solutions sur mesures à nos affiliés pour la couvertures d’assurance de leurs patrimoines.
                            Nous garantissons un servie et un suivi personnalisé en partenariat avec nos partenaires dans le but de satisfaire au mieux les demandes de nos affiliés.
                            Si vous êtes intéressé par nos solutions, vous pouvez nous écrire via le menu « contact ».</h4>
                    </div>
                </div>
            </div>
        </div>

        <!--NOS PARTENAIRES-->
        <div class="our-clients section">
            <div class="container" style="display:block;">
                <div class="text-center">
                    <h2 class="title">Nos partenaires</h2>
                </div>

                <div class="row">
                    <div class="col-md-3 ml-auto">
                        <a href="https://www.arag.be/fr/blog/business/des-conditions-generales-pourquoi-est-ce-utile-/"
                           title="Conditions générales">
                            <img class="img-partenaire"  style="padding: 15px;
                                                                height: 80px;
                                                                display: block;
                                                                margin-left: auto;
                                                                margin-right: auto;"
                                 v-lazy="'img/partenaires/arag.png'" alt="arag"/>
                        </a>
                    </div>
                    <div class="col-md-3 ml-auto">
                        <a href="http://www.ardenneprevoyante.be/fr/conditions-generales"
                           title="Conditions générales">
                            <img class="img-partenaire" v-lazy="'img/partenaires/ardennes.png'" alt="ardennes"/>
                        </a>
                    </div>
                    <div class="col-md-3 ml-auto">
                        <a href="https://bnpparibascardif.be/documents/66925/93266/201702_CG_stpp+_FR/05ec10f7-839f-8429-bff6-d05414f27f5f"
                           title="Conditions générales">
                            <img class="img-partenaire" style="padding: 15px;
        height: 80px;
        display: block;
        margin-left: auto;
        margin-right: auto;" v-lazy="'img/partenaires/cardif.png'" alt="cardif"/>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="https://www.baloise.be/fr/contact-service/conditions-generales.html"
                           title="Conditions générales">
                            <img class="img-partenaire" v-lazy="'img/partenaires/baloise.png'" alt="baloise"/>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="https://www.das.be/das/ewcm/ewcm.nsf/0/643EDA480ADF733BC1257FBD0037EF9E/$file/F5010%20Conditions%20ge%CC%81ne%CC%81rales.pdf"
                           title="Conditions générales">
                            <img class="img-partenaire" v-lazy="'img/partenaires/das.png'" alt="das"/>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="https://biblio.dkv.be/pdfbib.ashx?lang=fr&id=11901.pdf"
                           title="Conditions générales">
                            <img class="img-partenaire" v-lazy="'img/partenaires/dkv.jpg'" alt="dkv"/>
                        </a>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <a href="https://www.euromex.be/fr/conditions-de-polices"
                           title="Conditions générales">
                            <img class="img-partenaire" v-lazy="'img/partenaires/euromex.png'" alt="euromex"/>
                        </a>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <a href="https://www.arag.be/fr/blog/business/des-conditions-generales-pourquoi-est-ce-utile-/"
                           title="Conditions générales">
                            <img class="img-partenaire" v-lazy="'img/partenaires/europ.jpg'" alt="europ"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="mybroker" class="subscribe-line subscribe-line-image"
             style="background-image: url('img/project15-blue.jpg');
                    position: relative; padding: 0; width: 100%; ">
            <div class="container"  style="display:block;">
                <div class="row">
                    <div class="col-md-7 ">
                        <div class="text-right">
                            <h4 class="title">
                                <span style="color: #ffbe55">MyBroker</span>,<br>
                                votre courtier toujours à portée de main !
                            </h4>
                            <p class="description">
                                Grâce à MyBroker, <br>
                                consultez vos assurances et communiquez avec votre courtier.
                            </p>
                        </div>
                        <div style="margin-top: 20px; margin-bottom: 30px; float: right;">
                            <p>
                                <img src="img/download.svg" alt="download">
                                <span style="text-transform: uppercase; padding-left: 2%; color: white; font-weight: bold;">Télécharger MyBroker</span>
                            </p>
                            <div>
                                <a href="https://apps.apple.com/be/app/mybroker-en/id517191352?l=fr">
                                    <img src="img/app-store.svg" alt="app-store" class="downloads">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.portima.mybroker&hl=fr">
                                    <img src="img/google-play.svg" alt="google-play">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 " style="position: relative; min-height:300px; ">
                        <div style=" width:100%; height:90%;
                            position: absolute; bottom: 0;  z-index: 3;
                            background-image: url('img/mybroker.png'); background-size: contain;
                            background-repeat: no-repeat; background-position: right 20% bottom 0%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Button, HeadImage, FormGroupInput } from '../components';
    import {mapState} from "vuex"

    export default {
        name: 'accueil',
        bodyClass: 'contact-page',
        components: {
            HeadImage,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        },
        data() {
            return {
                form: {
                    firstName: '',
                    email: '',
                    phone: ''
                },
            }
        },
        computed:{
            ...mapState(["token","loggedIn"])
        },
        mounted() {
            console.log('token',this.token)
            console.log('loggedIn', this.loggedIn)
            //console.log(this.$localStorage.token)
        }
    }
</script>
<style>
    .downloads{
        margin-right: 20px;
    }
    .container::after {
        content: "";
        display: block;
        clear: both;
    }
    .img-partenaire {
        padding: 15px;
        height: 80px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

</style>
