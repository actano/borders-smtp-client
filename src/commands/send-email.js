export const SEND_EMAIL = 'send-email'

export default (address, subject, content) =>
  ({
    type: SEND_EMAIL,
    payload: {
      address,
      subject,
      content,
    },
  })
