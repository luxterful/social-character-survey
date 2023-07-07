<template>
  <DevelopmentFinishButton @click="setTestDataIntoStore">
    test data to store
  </DevelopmentFinishButton>
</template>

<script setup lang="ts">
import DevelopmentFinishButton from './DevelopmentFinishButton.vue'
import { useLocalStorage } from '@/composables/useLocalStorage'

const demoStoreData = {
  me: 'TkpKSk5OVkpKTkpWVlZWVkpKVlZWSkpOSlZWTlZWVk5KSlZWVlZKSk5KTk5OSkpWSkpKVk5WVkpWTk5KVk5WTk5KSlZWTk5KTlZWTlZOSkpOTkpWTlZOVk5WVlZKSkpKVk5WTkpKSko7MTY4ODY1ODg1MTE2Mw==',
  others: [
    {
      name: 'Marco',
      result:
        'Tk5WTk5WVlZOVk5OSk5KVk5WTkpWTk5WSlZOSk5KSk5WTkpKSkpKTk5OSkpKSlZWVk5OVk5KTlZKVkpWSk5KSlZWTk5KSk5OTkpWSkpKTkpWSlZOTk5OVlZKSk5KSkpWVkpOSk5OSlY7MTY4ODY2MDQ0MDQzMg==',
      color: '#e6194B'
    },
    {
      name: 'Michael',
      result:
        'VkpOTlZOTkpKSlZKSlZOTlZWSkpKSlZKTlZOVk5KTlZOVkpOSk5WTk5OSk5KVlZWVlZWTkpWTkpOSkpKSlZWVk5WVlZWTkpOVlZWTk5OVk5KVkpWSkpKVlZWTk5OTk5WSkpWVk5WSlY7MTY4ODY2MDQ1NTc4MQ==',
      color: '#3cb44b'
    },
    {
      name: 'Kevin',
      result:
        'Vk5WTk5OVlZOTkpWVk5OTkpKTk5WTlZWVkpWVkpKVk5OSlZKVlZOVlZKTkpKSkpWSlZOVk5WTk5KTkpWSk5KSlZKVlZKVkpWSk5WTlZOSlZOVlZWSk5KSkpWVk5OSk5OSlZOTkpWTlY7MTY4ODY2MDQ3MDk4Mg==',
      color: '#ffe119'
    },
    {
      name: 'Gulia',
      result:
        'Tk5KTk5KSkpOSlZOTk5OSk5KSk5WSk5WTk5KTkpKSkpKVkpOVlZOVk5KSk5OSlZWTlZWVk5KVlZKSk5WTkpWSk5KVlZOVkpWTkpKTk5KSk5OVkpWVlZKSk5WSkpOVk5WVlZWTlZKVlY7MTY4ODY2MDQ4NDIwMg==',
      color: '#4363d8'
    },
    {
      name: 'Kathy',
      result:
        'Sk5KVk5WSkpOTk5WTk5OVlZOVlZKVlZOSlZKSk5OVk5OSlZKTlZOSlZOTkpWSlZOSlZWSlZOVkpWTk5OTkpKVk5WVk5OTk5KVk5OVlZOTk5OTk5OVk5KVk5KTlZKVlZKTlZOTkpOVlY7MTY4ODY2MDQ5NzE4NQ==',
      color: '#f58231'
    }
  ]
}

const { mainStore } = useLocalStorage()
function setTestDataIntoStore() {
  mainStore.value = demoStoreData
}
</script>
