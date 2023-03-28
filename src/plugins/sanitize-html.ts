// @ts-ignore
import sanitizeHTML from 'sanitize-html'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      sanitize: sanitizeHTML,
    },
  }
})
