/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env mocha */
import chai from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import Context from 'borders'

import sendEmail, { SEND_EMAIL } from '../commands/send-email'

chai.use(sinonChai)
const { expect } = chai

export default (createBackend) => {
  let backend

  const execute = generatorFunction => () => {
    const context = new Context().use(backend)
    return context.execute(generatorFunction())
  }

  beforeEach(() => {
    backend = createBackend()
    sinon.stub(backend, SEND_EMAIL)
  })

  afterEach(() => {
    backend[SEND_EMAIL].restore()
  })

  context('without mail options', () => {
    it('should handle "sendEmail" command', execute(function* test() {
      yield sendEmail(
        'recipient@mail.com',
        'Some Subject',
        {
          text: 'Some Text Content',
          html: '<html><body>Some HTML Content</body></html>',
        },
      )

      expect(backend[SEND_EMAIL]).to.have.been.calledWith({
        address: 'recipient@mail.com',
        from: undefined,
        subject: 'Some Subject',
        text: 'Some Text Content',
        html: '<html><body>Some HTML Content</body></html>',
      })
    }))
  })

  context('with mail options', () => {
    it('should handle "sendEmail" command', execute(function* test() {
      yield sendEmail(
        'recipient@mail.com',
        'Some Subject',
        {
          text: 'Some Text Content',
          html: '<html><body>Some HTML Content</body></html>',
        },
        {
          from: '"John Doe" <john@doe.com>',
        },
      )

      expect(backend[SEND_EMAIL]).to.have.been.calledWith({
        address: 'recipient@mail.com',
        from: '"John Doe" <john@doe.com>',
        subject: 'Some Subject',
        text: 'Some Text Content',
        html: '<html><body>Some HTML Content</body></html>',
      })
    }))
  })
}
