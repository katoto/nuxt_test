<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
	export default {
        asyncData( context ){
            return { name : 'World' }
        },
        head(){
            return {
            	title:'nuxt Demo',
                meta:[
                    { charset:'utf-8' },
                    { name:'description' ,content:'foo,我的nuxt Key world'},
                    { hid:'description' , name:'description' ,content:'My coustom description'},
                ]
            }
        }

	}
</script>
<style src="@/assets/css/public.css" />
