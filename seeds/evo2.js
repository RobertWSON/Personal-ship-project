
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1,
          ship_name: "Oxfordshire",
          service_years: "1957 to 1964",
          passenger_full_capacity: "1300",
          crew_capacity:  "700",
          gross_tonnage: "21619",
          length: "185.76 m (609 feet 5.4 inches)",
          beam: "23.86 m (78 feet 3 inches)",
          draft: "8.41 m (27 feet 7 inches)",
          height: "47.85 m (167 feet)",
          deadweight: "8800 Tonnes",
          light_ship: "14250 Tonnes",
          loaded_displacement: "23050 Tonnes"
        },
        {id: 2,
          ship_name: "Fairstar",
          service_years: "1964 to 1997",
          passenger_full_capacity: "1300",
          crew_capacity:  "700",
          gross_tonnage: "23169",
          length: "185.76 m (609 feet 5.4 inches)",
          beam: "23.86 m (78 feet 3 inches)",
          draft: "8.41 m (27 feet 7 inches)",
          height: "47.85 m (167 feet)",
          deadweight: "8800 Tonnes",
          light_ship: "14250 Tonnes",
          loaded_displacement: "23050 Tonnes"
        },
        {id: 3,
          ship_name: "Michelangelo"
          }
      ]);
    });
};
