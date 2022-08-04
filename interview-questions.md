# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To add a new column to an existing model you would need to create a new special database migration that adds a new column to the database object. The name of the foreign key could be cohort_id, it would be in the student model since the students belong to the cohort. 

Researched answer: You will need to generate a new migration file with an add_column line, then do a new db:migrate command to create the column and add it to the table. The command could be: rails generate migration add_cohort_to_students cohort_id:integer 

2. Which RESTful routes must always be passed params? Why?

Your answer: The Post and Destroy and routes must always be passed params, these two specifically need params to make a new object and also to specify which object to delete. 

Researched answer: According to the guide on rails website, Patch, Put and Delete will always need an ID passed into the path on the route. 

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model; which generates a new type of object in the database, rails generate resource; which generates a object with predefined routes, 

Researched answer: The rails generator command controller generates a controller within a module, rails generate model generates a new model, and rails generate scaffold creates models, database migrations for the models, controllers for the models, and views for the models.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - Read; it would list all student objects

action: "POST" location: /students - Create; it would create a new object in students

action: "GET" location: /students/new - Read; it would show a form that could be used to post a new student object

action: "GET" location: /students/2 - Read; it would show the student object with id 2

action: "GET" location: /students/2/edit - Read; it would show a form to edit the student object with id 2

action: "PATCH" location: /students/2 - Edit; it would edit a object at student object 2

action: "DELETE" location: /students/2 - Deletel it would destroy the object at location 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user I want to be a ble to view a list of things i have to do.
2. As a user i want to be able to add to the list of things i have to do.
3. As a user i want to be able to mark an item complete.
4. As a user i want to be able to edit an item. 
5. As a user i want to be able to add sub items to an item.
6. As a user i want to be able to add a time to each item.
7. As a user i want to be able to send my list to other people to see.
8. As a user i want to be able to customize how the list looks.
9. As a user i want to be able to have some items re occur automatically
10. As a user i want to be able to have a calendar view of my items.

