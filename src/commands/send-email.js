import commandWithStackFrame from 'borders/command-with-stackframe'

export const SEND_EMAIL = 'send-email'

export default commandWithStackFrame((address, subject, { text, html }, { from } = {}) => ({
  type: SEND_EMAIL,
  payload: {
    address,
    from,
    subject,
    text,
    html,
  },
}))
