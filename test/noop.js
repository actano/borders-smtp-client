import noopBackend from '../src/backends/noop'
import testSmtpClient from '../src/spec'

describe('borders-smtp-client/noop-backend', () => {
  testSmtpClient(noopBackend)
})
