const xss = require('xss')
const Treeize = require('treeize')

const NumerologyDataService = {
  getAllNumerologyData(db) {
    return db
      .from('things AS thg')
      .select(
        'thg.id',
        'thg.title',
        'thg.date_created',
        'thg.content',
        'thg.image',
        ...userFields,
      )
      .leftJoin(
        'users AS usr',
        'thg.user_id',
        'usr.id',
      )
      .groupBy('thg.id', 'usr.id')
  },

  getById(db, id) {
    return NumerologyDataService.getAllNumerologyData(db)
      .where('thg.id', id)
      .first()
  },

  serializeAllData(allData) {
    return allData.map(this.serializeData)
  },

  serializeData(data) {
    const dataTree = new Treeize()

    // Some light hackiness to allow for the fact that `treeize`
    // only accepts arrays of objects, and we want to use a single
    // object.
    const numerologyData = dataTree.grow([ data ]).getData()[0]

    return {
      id: numerologyData.id,
      title: xss(numerologyData.title),
      content: xss(numerologyData.content),
      date_created: numerologyData.date_created,
      image: numerologyData.image,
      user: numerologyData.user || {},
    }
  },
}

const userFields = [
  'usr.id AS user:id',
  'usr.username AS user:username',
  'usr.first_name AS user:first_name',
  'usr.middle_name AS user:middle_name',
  'usr.last_name AS user:last_name',
  'usr.dob AS user:dob',
  'usr.date_created AS user:date_created',
  'usr.date_modified AS user:date_modified',
]

module.exports = NumerologyDataService
