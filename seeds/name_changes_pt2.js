
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('name_changes_pt2').del()
    .then(function () {
      // Inserts seed entries
      return knex('name_changes_pt2').insert([
        { id: 1, 
          // Originally called these names in evo2 table
          // first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '', 
          // fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
          // ninth_name_change: '',
          second_ship_name: 'Fairstar', second_name_years: '1964 to 1997', 
          third_ship_name: '', third_name_years: '',
          fourth_ship_name: '', fourth_name_years: '', fifth_ship_name: '', fifth_name_years: '',
          sixth_ship_name: '', sixth_name_years: '', seventh_ship_name: '', seventh_name_years: '', 
          eighth_ship_name: '', eighth_name_years: '', ninth_ship_name: '', ninth_name_years: '',
          last_ship_name: 'Ripa', last_name_years: '1997'     
        },
        { id: 2,  
          second_ship_name: 'Sea Princess', second_name_years: '1979 to 1995', 
          third_ship_name: 'Victoria', third_name_years: '1995 to 2002',
          fourth_ship_name: 'Mona lisa', fourth_name_years: '2002 to 2007', 
          fifth_ship_name: 'Oceanic II', fifth_name_years: '2007 to 2008',
          sixth_ship_name: 'Mona Lisa', sixth_name_years: '2008 to 2010', 
          seventh_ship_name: '', seventh_name_years: '', 
          eighth_ship_name: '', eighth_name_years: '', ninth_ship_name: '', ninth_name_years: '',
          last_ship_name: 'Veronica', last_name_years: '2010 to 2016'
        },
        { id: 3, 
          // Queen Elizabeth 2 Ship has never had a name change
          second_ship_name: '', second_name_years: '', third_ship_name: '', third_name_years: '',
          fourth_ship_name: '', fourth_name_years: '', fifth_ship_name: '', fifth_name_years: '',
          sixth_ship_name: '', sixth_name_years: '', seventh_ship_name: '', seventh_name_years: '', 
          eighth_ship_name: '', eighth_name_years: '', ninth_ship_name: '', ninth_name_years: '',
          last_ship_name: '', last_name_years: ''
        },
        { id: 4,
          // Name Changes for Song of Norway 
          second_ship_name: 'Sundream (1997 to 2004)', second_name_years: '1997 to 2004', 
          third_ship_name: 'Dream Princess (2004 to 2006)', third_name_years: '2004 to 2006',
          fourth_ship_name: 'Dream (2006 to 2007)', fourth_name_years: '2006 to 2007', 
          fifth_ship_name: 'Clipper Pearl (2007 to 2008)', fifth_name_years: '2007 to 2008',
          sixth_ship_name: 'Clipper Pacific (2008 to 2009)', sixth_name_years: '2008 to 2009', 
          seventh_ship_name: 'Festival (2009 to 2010)', seventh_name_years: '2009 to 2010', 
          eighth_ship_name: 'Ocean Pearl (2010 to 2011', eighth_name_years: '2010 to 2011', 
          ninth_ship_name: '', ninth_name_years: '', 
          last_ship_name: 'Formosa Queen (2012 to 2013)', last_name_years: '2012 to 2013'
        },
        { id: 5, 
          // Name Changes for Royal Viking Sky
          second_ship_name: 'Sunward (1991 to 1992)', second_name_years: '1991 to 1992', 
          third_ship_name: 'Birka Queen (1992)', third_name_years: '1992',
          fourth_ship_name: 'Sunward (1992 to 1993)', fourth_name_years: '1992 to 1993', 
          fifth_ship_name: 'Golden Princess (1993 to 1997)', fifth_name_years: '1993 to 1997',
          sixth_ship_name: 'Superstar Capricorn (1997 to 1998)', sixth_name_years: '1997 to 1998', 
          seventh_ship_name: 'Hyundai Keumgang (1998 to 2001)', seventh_name_years: '1998 to 2001', 
          eighth_ship_name: 'Superstar Capricorn (2001 to 2004)', eighth_name_years: '2001 to 2004', 
          ninth_ship_name: 'Grand Latino (2004 to 2005)', ninth_name_years: '2004 to 2005',
          last_ship_name: 'Boudicca (2005 to 2021)', last_name_years: '2005 to 2021'
        },
        { id: 6, 
          // Name change for Sovereign of the Seas
          second_ship_name: '', second_name_years: '', 
          third_ship_name: '', third_name_years: '', fourth_ship_name: '', fourth_name_years: '', 
          fifth_ship_name: '', fifth_name_years: '', sixth_ship_name: '', sixth_name_years: '', 
          seventh_ship_name: '', seventh_name_years: '', eighth_ship_name: '', eighth_name_years: '', 
          ninth_ship_name: '', ninth_name_years: '', 
          last_ship_name: 'Sovereign (2008 to 2020)', last_name_years: '2008 to 2020'
        },

      ]);
    });
};
