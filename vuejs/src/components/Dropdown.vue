<script >
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

import authApi from '../libs/apis/auth'
export default {

        methods: {
                async onLogout() {
                        const result = await authApi.logout();
                        if (result) this.$router.push({ name: "auth/login" });
                        console.log("successful")
                },
        }
}
</script>
<template>
        <dropdown text="Bottom" class="m-5">
                <list-group>
                        <list-group-item>
                                <button>
                                        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                        clip-rule="evenodd"></path>
                                        </svg>
                                </button>
                                Profile
                        </list-group-item>
                        <list-group-item>
                                <template #prefix>
                                       <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><title/><g id="Order_history">
                                        <path d="M251.2305,448H70.7735a150.4432,150.4432,0,0,0,32.2656-93.5391V64H381.4336V217.1719a8,8,0,0,0,16,0V56a7.9979,7.9979,0,0,0-8-8H95.0391a7.9979,7.9979,0,0,0-8,8V354.4609a134.7126,134.7126,0,0,1-39.711,95.8829A7.9993,7.9993,0,0,0,52.9844,464H251.2305a8,8,0,0,0,0-16Z"/>
                                        <path d="M333.9961,148.7656h-183.52a8,8,0,0,0,0,16h183.52a8,8,0,0,0,0-16Z"/><path d="M341.9961,210.9688a7.9979,7.9979,0,0,0-8-8h-183.52a8,8,0,1,0,0,16h183.52A7.9979,7.9979,0,0,0,341.9961,210.9688Z"/><path d="M262.2305,265.1719a7.9979,7.9979,0,0,0-8-8H150.4766a8,8,0,0,0,0,16H254.2305A7.9979,7.9979,0,0,0,262.2305,265.1719Z"/><path d="M150.4766,311.375a8,8,0,1,0,0,16h65.2539a8,8,0,0,0,0-16Z"/>
                                                <path d="M436.7266,287.4609A103.32,103.32,0,0,0,261.7905,342.873l-6.3569-6.3574a7.9991,7.9991,0,0,0-11.3125,11.3125L262.53,366.2363a8.026,8.026,0,0,0,11.3232,0l18.4126-18.4082a7.9991,7.9991,0,0,0-11.3125-11.3125l-1.8169,1.8164a87.3378,87.3378,0,1,1,22.6568,84.0664,7.9991,7.9991,0,0,0-11.3125,11.3125,103.413,103.413,0,0,0,146.2461-146.25Z"/><path d="M363.6055,291.32a7.9979,7.9979,0,0,0-8,8v61.2656a8.115,8.115,0,0,0,2.3506,5.6641l28.9931,28.9922A7.9991,7.9991,0,0,0,398.2617,383.93l-26.6562-26.6563V299.32A7.9979,7.9979,0,0,0,363.6055,291.32Z"/></g></svg>
                                </template>
                                Order History 
                        </list-group-item>
                        <list-group-item  >
                             <button v-on:click="onLogout()">   
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>

                        Logout </button>
                </list-group-item>
                
        </list-group>
</dropdown></template>