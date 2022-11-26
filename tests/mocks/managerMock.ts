export const createManagerMock = {
  validBody: {
    name: 'any-valid-name',
    email: 'any-valid-email',
    password: 'any-valid-password'
  },

  savedManager: {
    id: 'any-valid-id',
    name: 'any-valid-name',
    email: 'any-valid-email',
  },

  registeredManager: {
    id: 'any-valid-id',
    name: 'any-valid-name',
    email: 'any-valid-email',
    password: 'any-valid-hash-password',
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

export const loginMock = {
  validBody: {
    email: 'any-valid-email',
    password: 'any-valid-password'
  }
}