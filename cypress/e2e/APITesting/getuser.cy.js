
describe.skip('Get api user tests', () => {
  const accessToken = '313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213'
  const expectedbody = [{ "id": 5148063, "name": "Ekdant Patil II", "email": "patil_ii_ekdant@block.test", "gender": "male", "status": "active" }, { "id": 5148062, "name": "Mr. Ankal Sethi", "email": "ankal_mr_sethi@abbott-dicki.example", "gender": "male", "status": "active" }, { "id": 5148061, "name": "Mrs. Chandak Mishra", "email": "mishra_chandak_mrs@parker-goldner.test", "gender": "male", "status": "inactive" }, { "id": 5148060, "name": "Chandramani Shukla", "email": "chandramani_shukla@dibbert.test", "gender": "male", "status": "inactive" }, { "id": 5148059, "name": "Rev. Anang Jha", "email": "jha_anang_rev@hirthe.example", "gender": "male", "status": "active" }, { "id": 5148058, "name": "Ms. Somnath Khanna", "email": "khanna_somnath_ms@bednar-jacobson.example", "gender": "male", "status": "active" }, { "id": 5148057, "name": "Lila Banerjee PhD", "email": "banerjee_phd_lila@macejkovic-murray.example", "gender": "female", "status": "active" }, { "id": 5148056, "name": "Chandramohan Kaur", "email": "chandramohan_kaur@johnson.example", "gender": "male", "status": "inactive" }, { "id": 5148054, "name": "Gorakhnath Bhattacharya", "email": "bhattacharya_gorakhnath@goyette.example", "gender": "female", "status": "inactive" }, { "id": 5148053, "name": "Ekaling Malik", "email": "ekaling_malik@schiller.test", "gender": "female", "status": "inactive" }]
  const expectedbodydata = [{ "id": 1, "firstname": "sudarshan", "lastname": "naidu", "pohne": 1234 }, { "id": 2, "firstname": "sudarshan1", "lastname": "naidu1", "pohne": 12345 }, { "id": 3, "firstname": "sudarshan2", "lastname": "naidu2", "pohne": 123456 }]

  it('get users', () => {
    cy.request({

      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': "Bearer" + accessToken
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body[0]).to.have.property('email', 'patil_ii_ekdant@block.test')
      expect(res.body[0]).to.have.property('id', 5148063)
      //expect(res.body).to.deep.eq(expectedbody)
    })
  })
  it('get specific user', () => {
    cy.request({

      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/5148063', failOnStatusCode: false,
      headers: {
        'authorization': "Bearer" + accessToken
      }
    }).then((res) => {
      //expect(res.status).to.eq(200)
      expect(res.body).to.have.property('email', 'patil_ii_ekdant@block.test')
      expect(res.body).to.have.property('id', 5148063)
      //expect(res.body).to.deep.eq(expectedbody)
    })
  })

  it('sample api test', () => {

    cy.request({

      method: "GET",
      url: 'https://gorest.co.in/public/v2/users/5148063', failOnStatusCode: false,
      headers: {
        'authorization': "Bearer" + accessToken
      }

    }).then((res) => {
      expect(res.body).to.have.property('')
    })

  })



  //LOCAL API server 
  it.skip('get users test  ', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3800/api/users',
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body[0]).to.have.property('firstname', 'sudarshan')
      expect(res.body[0]).to.have.property('lastname', 'naidu')
      expect(res.body[0]).to.have.property('pohne', 1234)
      //expect(res.body).to.deep.eq(expectedbodydata)

    })
  })

  it.skip('get user using id test', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3800/api/users/1',
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('firstname', 'sudarshan')
      expect(res.body).to.have.property('lastname', 'naidu')
      expect(res.body).to.have.property('pohne', 1234)
      // expect(res.body).to.deep.eq(expectedbodydata)

    })
  })
  it.skip('no user test', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3800/api/users/5',
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.not.have.property('firstname', 'sudarshan')
      expect(res.body).to.not.have.property('lastname', 'naidu')
      expect(res.body).to.not.have.property('pohne', 1234)
      expect(res.body).to.eq('this user is not found')

    })
  })


  it("api get function Test", () => {

    cy.request({
      method: "post",
      url: "https://reqres.in/api/users?page=2"

    }).then((res)=>{

      expect(res.status).to.eq(200)
    })
  })


})