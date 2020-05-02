<template>
    <!--Image HEAD -->
    <div class="page-header page-header-medium">
        <parallax class="page-header-image"
                  style="background-image: url('img/presentation-page/liege-atlas.jpg'); z-index: 0;background-position: top 20px center;">
        </parallax>
        <div class="contentcenter">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                    <h1 class="title">L'Assurence, simplement...</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head-image"
    }
</script>

<style scoped>
    .contentcenter {
        position: absolute;
        top: 80%;
        left: 50%;
        z-index: 2;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        color: #FFFFFF;
        padding: 0 15px;
        width: 100%;
        /*max-width: 880px;*/
    }

</style>
