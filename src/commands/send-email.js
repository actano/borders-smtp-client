import commandWithStackFrame from 'borders/command-with-stackframe'

export const SEND_EMAIL = 'send-email'

export default commandWithStackFrame((address, subject, content) =>
  ({
    type: SEND_EMAIL,
    payload: {
      address,
      subject,
      content,
    },
  }),
)
