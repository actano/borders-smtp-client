import { SEND_EMAIL } from '../commands/send-email'

export default () => {
  const backend = {
    // eslint-disable-next-line no-empty-function
    async [SEND_EMAIL]() {},
  }

  return backend
}
