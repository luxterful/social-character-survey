import { useStorage } from '@vueuse/core'

const mainStore = useStorage<{ me: string | null; friends: string[] }>('main', {
  me: null, //'Sk5WSlZOVkpWTlZKVk5WSlZOVkpWTlZKVk5WSlZOVkpWTlZKVk5WTk5WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlY=',
  friends: []
})

export function useLocalStorage() {
  return { mainStore }
}
