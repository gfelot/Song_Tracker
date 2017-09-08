import Api from '@/services/Api'

export default {
  register (credential) {
    return Api().post('register', credential)
  }

  // AuthenticationService.register({
  //   email: 'test@gmail.com',
  //   password: '1234567890'
  // })
}
