class userDto {
  constructor(user) {
    this.id = user._id
    this.email = user.email
    this.password = user.password
    this.name = user.name
    this.age = user.age
    this.city = user.city
    this.zipcode = user.zipcode
  }
}

export default userDto;