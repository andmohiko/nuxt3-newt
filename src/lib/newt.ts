import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: 'spaceuid',
  token: 'token',
  apiType: 'cdn'
})
