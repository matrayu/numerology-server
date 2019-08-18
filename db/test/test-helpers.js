const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  const testUsers = [
    {
      "id" : 1,
      "username" : "matrayu",
      "first_name" : "Matthew",
      "middle_name" : "Charles",
      "last_name" : "Friedberg",
      "dob" : "1979-08-03T00:00:00.000Z",
      "password" : "$2a$12$0/C.O9U47sFRvjf6ne7QFuTCS5zlBFd3wthW7W8SqRJr49QjOw09G",
      "motivation" : 4,
      "inner_self" : 1,
      "expression" : 5,
      "karmic_lessons" : [9],
      "hidden_tendencies" : [5,9],
      "subconscious_response" : 9,
      "destiny" : 1,
      "first_lifecycle" : [8,1979,2015],
      "second_lifecycle" : [3,2015,2042],
      "third_lifecycle" : [8,2042],
      "first_turning_point" : [11,1979,2015],
      "second_turning_point" : [2,2015,2024],
      "third_turning_point" : [4,2024,2033],
      "fourth_turning_point" : [7,2033],
      "first_minor_challenge" : 5,
      "second_minor_challenge" : 5,
      "major_challenge" : 0,
      "personal_year" : 5,
      "astrological_influence" : 9,
      "date_created" : "2019-08-13T23:23:27Z",
      "date_modified" : null
    },
    {
      "id" : 2,
      "username" : "kobe24",
      "first_name" : "Kobe",
      "middle_name" : "Bean",
      "last_name" : "Bryant",
      "dob" : "1978-08-23T07:00:00Z",
      "password" : "$2a$12$e.XJMtUGyNjdJi5heVYGT.tTU5Hz9JWO4H6rXpjyXT6.jDTWeL9h.",
      "motivation" : 9,
      "inner_self" : 9,
      "expression" : 9,
      "karmic_lessons" : [3,4,8],
      "hidden_tendencies" : [2,5],
      "subconscious_response" : 6,
      "destiny" : 11,
      "first_lifecycle" : [8,1978,2004],
      "second_lifecycle" : [23,2004,2031],
      "third_lifecycle" : [7,2031],
      "first_turning_point" : [4,1978,2004],
      "second_turning_point" : [3,2004,2013],
      "third_turning_point" : [7,2013,2022],
      "fourth_turning_point" : [6,2022],
      "first_minor_challenge" : 15,
      "second_minor_challenge" : 16,
      "major_challenge" : 1,
      "personal_year" : 7,
      "astrological_influence" : 9,
      "date_created" : "2019-08-13T23:24:53Z",
      "date_modified" : null
    },
    {
      "id" : 3,
      "username" : "myusername",
      "first_name" : "Matty",
      "middle_name" : "",
      "last_name" : "Fried",
      "dob" : "1994-03-10T08:00:00Z",
      "password" : "$2a$12$bzcQ9.N0WPP2T76T7sX92e2wmjRr0uYRHNP7LYCD3KC2lhYGQn8Du",
      "motivation" : 6,
      "inner_self" : 7,
      "expression" : 4,
      "karmic_lessons" : [3,8],
      "hidden_tendencies" : [],
      "subconscious_response" : 7,
      "destiny" : 9,
      "first_lifecycle" : [3,1994,2022],
      "second_lifecycle" : [10,2022,2049],
      "third_lifecycle" : [5,2049],
      "first_turning_point" : [4,1994,2022],
      "second_turning_point" : [6,2022,2031],
      "third_turning_point" : [1,2031,2040],
      "fourth_turning_point" : [8,2040],
      "first_minor_challenge" : 7,
      "second_minor_challenge" : 5,
      "major_challenge" : 2,
      "personal_year" : 7,
      "astrological_influence" : 12,
      "date_created" : "2019-08-14T03:28:40Z",
      "date_modified" : null
    },
    {
      "id" : 4,
      "username" : "tester",
      "first_name" : "Matthew",
      "middle_name" : "",
      "last_name" : "Friedberg",
      "dob" : "1990-02-21T08:00:00Z",
      "password" : "$2a$12$16fJ8yFFNl10bj.NXplaVu4tRo3xVsDGDt\/T6Qq6\/pF.4O0FOB5qy",
      "motivation" : 7,
      "inner_self" : 4,
      "expression" : 11,
      "karmic_lessons" : [3],
      "hidden_tendencies" : [5],
      "subconscious_response" : 8,
      "destiny" : 6,
      "first_lifecycle" : [2,1990,2021],
      "second_lifecycle" : [21,2021,2048],
      "third_lifecycle" : [1,2048],
      "first_turning_point" : [5,1990,2021],
      "second_turning_point" : [4,2021,2030],
      "third_turning_point" : [9,2030,2039],
      "fourth_turning_point" : [3,2039],
      "first_minor_challenge" : 19,
      "second_minor_challenge" : 20,
      "major_challenge" : 1,
      "personal_year" : 8,
      "astrological_influence" : 8,
      "date_created" : "2019-08-14T04:08:38Z",
      "date_modified" : null
    },
    {
      "id" : 5,
      "username" : "sharonlavi",
      "first_name" : "Sharon",
      "middle_name" : "",
      "last_name" : "AzizLavi",
      "dob" : "1979-02-21T08:00:00Z",
      "password" : "$2a$12$PPJ4i2GqaW3Mhx7pNRYKwO1ZdT32.zLOl\/a91E2Beh0C87iPRf.N2",
      "motivation" : 9,
      "inner_self" : 1,
      "expression" : 1,
      "karmic_lessons" : [2,7],
      "hidden_tendencies" : [1],
      "subconscious_response" : 7,
      "destiny" : 4,
      "first_lifecycle" : [2,1979,2012],
      "second_lifecycle" : [21,2012,2039],
      "third_lifecycle" : [8,2039],
      "first_turning_point" : [5,1979,2012],
      "second_turning_point" : [2,2012,2021],
      "third_turning_point" : [7,2021,2030],
      "fourth_turning_point" : [1,2030],
      "first_minor_challenge" : 19,
      "second_minor_challenge" : 13,
      "major_challenge" : 6,
      "personal_year" : 8,
      "astrological_influence" : 9,
      "date_created" : "2019-08-14T04:31:43Z",
      "date_modified" : null
    },
    {
      "id" : 6,
      "username" : "kuchulou",
      "first_name" : "Sharon",
      "middle_name" : "",
      "last_name" : "Aziz Lavi",
      "dob" : "1979-02-21T08:00:00Z",
      "password" : "$2a$12$bDuy\/oNZ01CoLhct81\/0Uur5hMPI4A1YmBiMyTidrNpFC2HNK0JVm",
      "motivation" : 9,
      "inner_self" : 1,
      "expression" : 1,
      "karmic_lessons" : [2,7],
      "hidden_tendencies" : [1],
      "subconscious_response" : 7,
      "destiny" : 4,
      "first_lifecycle" : [2,1979,2012],
      "second_lifecycle" : [21,2012,2039],
      "third_lifecycle" : [8,2039],
      "first_turning_point" : [5,1979,2012],
      "second_turning_point" : [2,2012,2021],
      "third_turning_point" : [7,2021,2030],
      "fourth_turning_point" : [1,2030],
      "first_minor_challenge" : 19,
      "second_minor_challenge" : 13,
      "major_challenge" : 6,
      "personal_year" : 8,
      "astrological_influence" : 9,
      "date_created" : "2019-08-14T04:38:14Z",
      "date_modified" : null
    },
    {
      "id" : 7,
      "username" : "dunxtand",
      "first_name" : "Myles",
      "middle_name" : "Duncan",
      "last_name" : "Standish",
      "dob" : "1990-12-15T08:00:00Z",
      "password" : "$2a$12$gXeeHksDnl2NQhEXH8SXLuSgd\/LdglkeLVBKjgILkegUgLgvmrao6",
      "motivation" : 1,
      "inner_self" : 8,
      "expression" : 9,
      "karmic_lessons" : [6],
      "hidden_tendencies" : [1,5],
      "subconscious_response" : 8,
      "destiny" : 1,
      "first_lifecycle" : [12,1990,2026],
      "second_lifecycle" : [15,2026,2053],
      "third_lifecycle" : [1,2053],
      "first_turning_point" : [9,1990,2026],
      "second_turning_point" : [7,2026,2035],
      "third_turning_point" : [7,2035,2044],
      "fourth_turning_point" : [4,2044],
      "first_minor_challenge" : 3,
      "second_minor_challenge" : 14,
      "major_challenge" : 11,
      "personal_year" : 3,
      "astrological_influence" : 9,
      "date_created" : "2019-08-14T20:00:38Z",
      "date_modified" : null
    }
  ]
  return { testUsers }
    
}


function getBasicUserData(users, userId) {
  const user = users.find(user => {
    return user.id === userId
  })
    
  return {
    id: user.id,
    username: user.username,
    motivation: user.motivation,
    inner_self: user.inner_self,
    expression: user.expression,
    karmic_lessons: user.karmic_lessons,
    hidden_tendencies: user.hidden_tendencies,
    subconscious_response: user.subconscious_response,
    first_name: user.first_name,
    middle_name: user.middle_name,
    last_name: user.last_name,
    dob: user.dob
  }
}

function makeExpectedThing(users, thing, reviews=[]) {
  const user = users
    .find(user => user.id === thing.user_id)

  return {
    id: thing.id,
    image: thing.image,
    title: thing.title,
    content: thing.content,
    date_created: thing.date_created,
    //number_of_reviews,
    //average_review_rating,
    user: {
      id: user.id,
      user_name: user.user_name,
      full_name: user.full_name,
      dob: user.dob,
      date_created: user.date_created,
    },
  }
}

function makeMaliciousThing(user) {
  const maliciousThing = {
    id: 911,
    image: 'http://placehold.it/500x500',
    date_created: new Date().toISOString(),
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    user_id: user.id,
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
  }
  const expectedThing = {
    ...makeExpectedThing([user], maliciousThing),
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  }
  return {
    maliciousThing,
    expectedThing,
  }
}

function makeThingsFixtures() {
  const testUsers = makeUsersArray()
  const testThings = makeThingsArray(testUsers)
  //const testReviews = makeReviewsArray(testUsers, testThings)
  return { testUsers, testThings/* , testReviews */ }
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      users
      RESTART IDENTITY CASCADE`
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db
    .into('users')
    .insert(preppedUsers)
    .then(() => 
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('users_id_seq', ?)`,
        [users[users.length - 1].id]
      )
    )
}

function seedThingsTables(db, users, things, reviews=[]) {
  // use a transaction to group the queries and auto rollback on any failure
  return db.transaction(async trx => {
    await seedUsers(trx, users)
    await trx
      .into('numerology_things')
      .insert(things)
    // update the auto sequence to match the forced id values
    await trx
      .raw(
        `SELECT setval('numerology_things_id_seq', ?)`,
        [things[things.length - 1].id],
      )
    // only insert comments if there are some, also update the sequence counter
    /* if (reviews.length) {
      await trx
        .into('numerology_reviews')
        .insert(reviews)
      await trx
        .raw(
          `SELECT setval('numerology_reviews_id_seq', ?)`,
          [reviews[reviews.length - 1].id],
        )
    } */
  })
}

function seedMaliciousThing(db, user, thing) {
  return seedUsers(db, [user])
    .then(() =>
      db
        .into('numerology_things')
        .insert([thing])
    )
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const subject = user.username;
  const payload = { user_id: user.id }
  
  const token = jwt.sign(
    payload, 
    secret, 
    {
      subject,
      algorithm: 'HS256',
    }
  )

  return `Bearer ${token}`
}

function generateHash(pass) {
  bcrypt.hash(pass, 12).then(hash => console.log({ hash }))
}

module.exports = {
  makeUsersArray,
  cleanTables,
  makeAuthHeader,
  seedUsers,
  generateHash,
  getBasicUserData,
}
