# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

elderly1 = Elderly.create(name: 'Rose', age: 87, phone: '7026781234')
elderly2 = Elderly.create(name: 'Jane', age: 97, phone: '2068346040', disability: 'hard of hearing', housing: 'assisted living')
elderly3 = Elderly.create(name: 'Dave', age: 74, phone: '8083246942', disability: 'limited mobility', housing: 'apartment')
elderly4 = Elderly.create(name: 'Rick', age: 83, phone: '7026347245', housing: 'mobile home')

volunteer1 = Volunteer.create(name: 'Taci', age: 23, phone: '41583572246')
volunteer2 = Volunteer.create(name: 'Akiko', age: 23, phone: '4151075983')
volunteer3 = Volunteer.create(name: 'Danira', age: 32, phone: '7023582453')
volunteer4 = Volunteer.create(name: 'John', age: 18, phone: '2067834520')

task1 = Task.create()