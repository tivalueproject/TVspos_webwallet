<template>
    <div class="download cold-download">
        <section>
            <span>{{ title }}</span>
        </section>
        <article>
            <img :src="twoPlanarCode">
        </article>
        <div class="downloadBtns">
            <a :href="iphoneAppResource">
                <i class="anticon anticon-apple"><img src="../../assets/imgs/download/icon-iphone.svg" /></i>
                <span>iPhone版下载</span>
            </a>
            <a :href="androidAppResource">
                <i class="anticon anticon-android"><img src="../../assets/imgs/download/icon-android.svg" /></i>
                <span>Android版下载</span>
            </a>
        </div>
    </div>
</template>

<script>
// import {NODE_IP} from '../constants'
export default {
    name: 'DownloadColdMobile',
    data() {
        return {
            title: 'TV COLD',
            twoPlanarCode: 'https://pulsar-resource.oss-cn-shanghai.aliyuncs.com/static/img/c800317.png',
            iphoneAppResource: 'itms-services://?action=download-manifest&url=https://link-e-pro.oss-cn-beijing.aliyuncs.com/install-manifest.plist',
            androidAppResource: 'https://link-e-pro.oss-cn-beijing.aliyuncs.com/Tchat_online_enc_signed_Aligned.apk'
        }
    },
    created() {
        // const url = NODE_IP + '/blocks/last'
        // this.$http.get(url).then(response => {
        //     if (response.body.height) {
        //         this.$router.push('/login')
        //     }
        // }, respError => {
        //     this.$router.push('/download')
        // })
    }
}
</script>

<style scoped>
.download{
    width: 100%;
    height: 100%;
    font-size: 10px;
}
.download>section{
    width: 160px;
    min-height: 180px;
    margin: 0 auto;
    font-size: 1em;
}

.cold-download>section{
    background: url('../../assets/imgs/download/fontIcon-cold.png') no-repeat center;
    background-size: 120px auto;
}
.cold-download>section>span{
    display: inline-block;
    width: 100%;
    font-weight: bolder;
    font-size: 3.2em;
    margin-top: 160px;
}
.download>article{
    width: 100%;
    margin: 40px auto;
}
.download>article>img{
    width: 60%;
}
.downloadBtns>a{
    display: block;
    width: 90%;
    height: 2.8em;
    line-height: 2.8em;
    margin: 20px auto 0 auto;
    outline: none;
    text-decoration: none;
    background: #fff;
    color: #222222;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 2.6em;
}
.downloadBtns>a>i,.downloadBtns>a>span{
    vertical-align: middle;
}
.downloadBtns>a>i>img{
    width: 30px;
    height: 30px;
    display: inline-block;
}
</style>
