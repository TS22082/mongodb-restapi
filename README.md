# Mongodb CLI Cheat Sheet

## Set up mongodb server on windows:

`mongod`

**_Note:_** open a new tab or instance of command prompt

## Enter the mongodb cli

`mongo`

## Show available databases:

`show dbs`

## Switch or create db

`use <db_name>`

When you create a value it will automatically create the collection name

`db.staff.insert({"name": "Thomas"})` <br>
`db.staff.insert({"name": "Donny"})` <br>
`db.staff.insert({"name": "Clarence"})` <br>

`db.students.insert({"name": "Mat"})` <br>
`db.staff.insert({"name": "Danielle"})` <br>
`db.staff.insert({"name": "Tracy"})` <br>

## Show your collections:

`show collections`

Find by any criteria:

`db.students.find({"name": "Mat"})`<br>
`db.staff.find()`<br>
`db.students.find({ _id : ObjectId("5f0f59fb9331e12029ccf8f5")})`<br>

## Updating your collection instances (destructive)

`db.staff.update({"name": "Donny"}, {"name": "Don"})`<br>
`db.staff.update({ _id : ObjectId("5f0f59fb9331e12029ccf8f5")}, {"name": "Donny"}`<br>

This is destructive. If there are any keys other user defined keys they will be erased and replaced with the `name` key and value.

## Updating your collection (not destructive)

First create some examples in a new collection within the database.

`db.projects.insert({"project": 1, "status": "complete"})`<br>
`db.projects.insert({"project": 2, "status": "complete"})`<br>
`db.projects.insert({"project": 3, "status": "not complete"})`<br>
`db.projects.insert({"project": 4, "status": "fake"})`<br>

**_Note:_** The "projects" collection will be created automatically.

Update non destructively
`db.projects.update({"project": 3}, { $set: {status: "incomplete"}})`

**_Note:_** The \$set operator will update the status key and keep all the previous keys and values (project)

Show all data in collection: <br>`db.projects.find()`<br>

## Deleting from a collection

`db.projects.remove({"project" : 4})`

## Delete entire collection:

`db.projects.remove()`

## Drop collection:

`db.projects.drop({})`

**_Note:_** An empty object needs to be passed. Cannot be left empty.

## Dropping entire database

See which database you are using currently.

`db`

Drop database:
`db.dropDatabase()`
