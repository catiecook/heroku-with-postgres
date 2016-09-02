
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hikes_completed').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hikes_completed').insert({
          name: 'Royal Arch',
          location: 'Chautauqua Park - Boulder, Colorado',
          distance: 4,
          difficulty: 6,
          rating: 4,
          date_completed: 'June, 2014'
        }),

        knex('hikes_completed').insert({
          name: 'Chicago Lakes Trail',
          location: 'Mt. Evans Wilderness',
          distance: 10,
          difficulty: 7,
          rating: 8,
          date_completed: 'June 2016'
        }),

        knex('hikes_completed').insert({
          name: 'Cloud 9',
          location: 'Ajax - Aspen, Colorado',
          distance: 4,
          difficulty: 2,
          rating: 3,
          date_completed: 'August 2015'
        })
      ]);

    });
};
