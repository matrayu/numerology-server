const xss = require('xss')
const Treeize = require('treeize')

const NumerologyService = {
    getMotivation(db) {
        return db
            .from('users AS u')
            .select(
                'u.id', 
                'u.username', 
                'mu.motivation_number', 
                'm.motivation_content',
            )
            .leftJoin(
                'motivation_users AS mu',
                'mu.user_id',
                'u.id',
            )
            .leftJoin(
                'motivation AS m',
                'm.motivation_numer',
                'mu.motivation_number'
            )
    }
}

const MotivationService = {
  getAllMotivation(db) {
    return db
      .from('motivation')
      .select(
        'motivation.motivation_id',
        'motivation.motivation_number',
        'motivation.motivation_content',
        ...userFields,
      )
      .leftJoin(
        'thingful_reviews AS rev',
        'motivation.id',
        'rev.thing_id',
      )
      .leftJoin(
        'thingful_users AS usr',
        'motivation.user_id',
        'usr.id',
      )
      .groupBy('motivation.id', 'usr.id')
  },

  getById(db, id) {
    return MotivationService.getAllThings(db)
      .where('motivation.id', id)
      .first()
  },

  getReviewsForThing(db, thing_id) {
    return db
      .from('thingful_reviews AS rev')
      .select(
        'rev.id',
        'rev.rating',
        'rev.text',
        'rev.date_created',
        ...userFields,
      )
      .where('rev.thing_id', thing_id)
      .leftJoin(
        'thingful_users AS usr',
        'rev.user_id',
        'usr.id',
      )
      .groupBy('rev.id', 'usr.id')
  },

  serializeThings(things) {
    return things.map(this.serializeThing)
  },

  serializeThing(thing) {
    const thingTree = new Treeize()

    // Some light hackiness to allow for the fact that `treeize`
    // only accepts arrays of objects, and we want to use a single
    // object.
    const thingData = thingTree.grow([ thing ]).getData()[0]

    return {
      id: thingData.id,
      title: xss(thingData.title),
      content: xss(thingData.content),
      date_created: thingData.date_created,
      image: thingData.image,
      user: thingData.user || {},
      number_of_reviews: Number(thingData.number_of_reviews) || 0,
      average_review_rating: Math.round(thingData.average_review_rating) || 0,
    }
  },

  serializeThingReviews(reviews) {
    return reviews.map(this.serializeThingReview)
  },

  serializeThingReview(review) {
    const reviewTree = new Treeize()

    // Some light hackiness to allow for the fact that `treeize`
    // only accepts arrays of objects, and we want to use a single
    // object.
    const reviewData = reviewTree.grow([ review ]).getData()[0]

    return {
      id: reviewData.id,
      rating: reviewData.rating,
      thing_id: reviewData.thing_id,
      text: xss(reviewData.text),
      user: reviewData.user || {},
      date_created: reviewData.date_created,
    }
  },
}

const userFields = [
  'usr.id AS user:id',
  'usr.user_name AS user:user_name',
  'usr.full_name AS user:full_name',
  'usr.nickname AS user:nickname',
  'usr.date_created AS user:date_created',
  'usr.date_modified AS user:date_modified',
]

module.exports = {
    MotivationService,
    NumerologyService
}
