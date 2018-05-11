# LAYOUTS

This directory contains your Application Layouts.

布局目录 layouts 用于组织应用的布局组件。

该目录名为Nuxt.js保留的，不可更改。

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/views#layouts

**This directory is not required, you can delete it if you don't want to use it.**


<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else >应用发送错误异常</h1>
        <nuxt-link to="/">首页</nuxt-link>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				title: '我是頭部'
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
</style>



<template>
    <h1 class="red">Hello nuxt</h1>
</template>

<script>
	export default {
		asyncData(context){
			// before loading the component
        },
        fetch(){
			//
        },
        head(){

        },
	}
</script>
<style>
</style>




