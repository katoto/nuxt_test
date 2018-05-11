<template>
    <div>
        <ul>
            <li v-for="(post, index ) in posts" :key="index">
                <h3>{{ post.data }}</h3>
                <p>{{ post.title }}</p>
            </li>
        </ul>
        <!--<style src="@/assets/less/lessTest.less" />-->

        <p class="box">less 样式是否编译
            <span class="box-shadow">
                    box-shadow
            </span>
        </p>
        <p class="box2">
            背景图片
        </p>
        <div style="display: block;height: 200px">
            {{ svgDemo }}
            <img style="display: inline-block;width: 100%;height: 100%" :src=svgDemo alt="">
            <img style="display: inline-block;width: 100%;height: 100%" src="~/assets/img/icon/carPay.png" alt="">
        </div>

    </div>
</template>
<script>
    import svgDemo from '~/assets/img/img_svg/svgDemo.svg'
	export default {
		data(){
			return {
				title: 'qwe',
				posts: [
					{data: 123, title: 'Deep live into Ocean1'},
					{data: 345, title: 'Deep live into Ocean2'},
					{data: 456, title: 'Deep live into Ocean3'},
				],
				svgDemo
			}
		},
		watch: {},
		methods: {},
		computed: {},
		mounted(){

		}
	}
</script>
<style>
    .box {
        border: 1px solid #000;
        background-image: url( '~/assets/img/1.png');
    }
    .box2{
        background-image: url( '~/assets/img/2.png');
    }
</style>
<!--<style lang="less" src="~/assets/less/lessTest.less" />-->
<!--<style lang="scss" src="~/assets/sass/main.scss" />-->
<!--<style lang="scss">-->
<!--$primary-color: #fff;-->

<!--.box {-->
<!--color: $primary-color;-->
<!--}-->
<!--</style>-->