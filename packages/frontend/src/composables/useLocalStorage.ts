import { useStorage } from '@vueuse/core'

const mainStore = useStorage<{
  me: string | null
  others: { result: string; name: string; color: string }[]
}>('main', {
  me: null, //'Sk5WSlZOVkpWTlZKVk5WSlZOVkpWTlZKVk5WSlZOVkpWTlZKVk5WTk5WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlY=',
  others: []
})

export function useLocalStorage() {
  return { mainStore }
}
