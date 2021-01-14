# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Elderly.delete_all
Volunteer.delete_all
Task.delete_all

elderly1 = Elderly.create(name: 'Rose', username: 'rubyred', age: 87, phone: '7026781234')
elderly2 = Elderly.create(name: 'Jane', username: 'liljane', age: 97, phone: '2068346040', disability: 'hard of hearing', housing: 'assisted living')
elderly3 = Elderly.create(name: 'Dave', username: 'bigD', age: 74, phone: '8083246942', disability: 'limited mobility', housing: 'apartment')
elderly4 = Elderly.create(name: 'Rick', username: 'ricky', age: 83, phone: '7026347245', housing: 'mobile home')

volunteer1 = Volunteer.create(name: 'Taci', username: 'taciteach', age: 23, phone: '41583572246')
volunteer2 = Volunteer.create(name: 'Akiko', username: 'allycat', age: 23, phone: '4151075983')
volunteer3 = Volunteer.create(name: 'Danira', username: 'ms_danira', age: 32, phone: '7023582453')
volunteer4 = Volunteer.create(name: 'John', username: 'jj', age: 18, phone: '2067834520')

task1 = Task.create(title: 'conversation', elderly_id: 5, volunteers_id: 5)
task1 = Task.create(title: 'technology', elderly_id: 6, volunteers_id: 6)
task1 = Task.create(title: 'ride', elderly_id: 7)
task1 = Task.create(title: 'conversation', elderly_id: 7)