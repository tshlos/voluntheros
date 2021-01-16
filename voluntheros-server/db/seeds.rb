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
elderly5 = Elderly.create(name: 'Nancy', username: 'gma', age: 71, phone: '6396732581')
elderly6 = Elderly.create(name: 'James', username: 'jimmy', age: 82, phone: '4046725964')
elderly7 = Elderly.create(name: 'Consuelo', username: 'amor', age: 68, phone: '3217643883')
elderly8 = Elderly.create(name: 'Jesus', username: 'jj', age: 63, phone: '9479582017')

volunteer1 = Volunteer.create(name: 'Taci', username: 'taciteach', age: 23, phone: '41583572246')
volunteer2 = Volunteer.create(name: 'Akiko', username: 'allycat', age: 23, phone: '4151075983')
volunteer3 = Volunteer.create(name: 'Danira', username: 'ms_danira', age: 32, phone: '7023582453')
volunteer4 = Volunteer.create(name: 'John', username: 'jj', age: 18, phone: '2067834520')

task1 = Task.create(title: 'Companionship', elderly_id: elderly1.id, volunteers_id: volunteer4.id)
task2 = Task.create(title: 'Technology', elderly_id: elderly3.id, volunteers_id: volunteer3.id)
task3 = Task.create(title: 'Transportation', elderly_id: elderly2.id)
task4 = Task.create(title: 'Companionship', elderly_id: elderly4.id)
task5 = Task.create(title: 'PostOffice', elderly_id: elderly5.id)
task6 = Task.create(title: 'PostOffice', elderly_id: elderly6.id)
task7 = Task.create(title: 'Gardening', elderly_id: elderly7.id)
task8 = Task.create(title: 'Repair', elderly_id: elderly8.id)
task9 = Task.create(title: 'Repair', elderly_id: elderly4.id)
task10 = Task.create(title: 'Walks', elderly_id: elderly6.id)
task11 = Task.create(title: 'Walks', elderly_id: elderly3.id)
task12 = Task.create(title: 'Other', details: 'take out trash', elderly_id: elderly6.id)
task13 = Task.create(title: 'Other', details: 'moving', elderly_id: elderly1.id)
task14 = Task.create(title: 'Other', details: 'general cleaning', elderly_id: elderly2.id)