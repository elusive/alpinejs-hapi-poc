
const API_URL = 'http://openlibrary.org';
const PERSON_ID = 'john_gilliland659';

/*
table ref w/editing
https://codepen.io/sanjayojha/pen/qBONdVm
*/

const getBookList = async function() {
    const booklistUrl = `${API_URL}/people/${PERSON_ID}/lists.json`;

    const response = await fetch(booklistUrl,{
      mode:  'cors',
      method: 'POST',
      credentials: 'omit',
      headers: {
      },
    });
  const data = await response.json();
  console.log(data);
  return data;
}

function getBooks() {
  return {
    numFound: 21,
    start: 0,
    numFoundExact: true,
    add: () => { alert('add'); },
    docs: [
      {
        "key": "OL2728173A",
        "type": "author",
        "name": "Alexander Dumas",
        "top_work": "The Three Musketeers",
        "work_count": 38,
        "_version_": 1787459272618016768
      },
      {
        "key": "OL10293751A",
        "type": "author",
        "name": "Alexander Dumas",
        "top_work": "The three musketeers",
        "work_count": 28,
        "top_subjects": ["Louis XIII, 1610-1643", "History", "France", "Fiction"],
        "_version_": 1787813221520900096
      },
      {
        "key": "OL11249507A",
        "type": "author",
        "name": "Alexander dumas",
        "top_work": "Graf Von Monte Cristo",
        "work_count": 5,
        "_version_": 1767956686885093378
      },
      {
        "key": "OL11428344A",
        "type": "author",
        "name": "ALEXANDER DUMAS",
        "top_work": "The PIDGEON PRIZE.",
        "work_count": 3,
        "_version_": 1767957482458578956
      },
      {
        "key": "OL9387929A",
        "type": "author",
        "name": "Alexander Dumas",
        "birth_date": "1879",
        "top_work": "\u00dcber einen Fall von Neuroglioma ganglionare des Grosshirns ...",
        "work_count": 1,
        "top_subjects": ["Case Report", "Cancer", "Brain Neoplasms", "Brain"],
        "_version_": 1768017694564548609
      },
      {
        "key": "OL4945016A",
        "type": "author",
        "name": "Alexander Dumas",
        "birth_date": "1802",
        "death_date": "1870",
        "work_count": 0,
        "_version_": 1781811893026947072
      },
      {
        "key": "OL7621600A",
        "type": "author",
        "name": "Alexander Dumas",
        "work_count": 0,
        "_version_": 1787612958305550336
      },
      {
        "key": "OL11769350A",
        "type": "author",
        "name": "Alexander Dumas Pere",
        "top_work": "Joan of Naples",
        "work_count": 2,
        "_version_": 1767960166100107272
      },
      {
        "key": "OL12191509A",
        "type": "author",
        "name": "Alexander Dumas Jr.",
        "top_work": "Camille",
        "work_count": 1,
        "_version_": 1767962971935342599
      },
      {
        "key": "OL11465789A",
        "type": "author",
        "name": "Alexander Dumas fils",
        "top_work": "The Lady Of The Camellias",
        "work_count": 1,
        "_version_": 1767957638673334274
      },
      {
        "key": "OL9151809A",
        "type": "author",
        "name": "Alexander Dumas-Pere",
        "top_work": "\u00dc\u00e7 Silah\u015f\u00f6rler",
        "work_count": 1,
        "_version_": 1768016207732015104
      },
      {
        "key": "OL3010702A",
        "type": "author",
        "name": "Pere, Alexander Dumas",
        "work_count": 0,
        "_version_": 1781838538559455232
      },
      {
        "key": "OL3769116A",
        "type": "author",
        "name": "Alexander Dumas Pere",
        "work_count": 0,
        "_version_": 1782196536506056704
      },
      {
        "key": "OL9102047A",
        "type": "author",
        "name": "Alexander Dumas J. Brickler IV",
        "top_work": "Black Bodies and Transhuman Realities",
        "work_count": 1,
        "top_subjects": [
          "Literature, history and criticism",
          "Literature",
          "Human body in literature",
          "History and criticism",
          "Blacks in literature"
        ],
        "_version_": 1768015928439603209
      },
      {
        "key": "OL12513321A",
        "type": "author",
        "name": "Fils (preface By Jules Janin) Alexander Dumas",
        "top_work": "La Dame Aux Camelias (In French Language)",
        "work_count": 1,
        "_version_": 1767965379368321029
      },
      {
        "key": "OL10167861A",
        "type": "author",
        "name": "Dumas Alexander",
        "top_work": "Count of Monte Cristo Novel",
        "work_count": 4,
        "_version_": 1767949968206725130
      },
      {
        "key": "OL123344A",
        "type": "author",
        "name": "Alexander George Dumas",
        "birth_date": "1896",
        "top_work": "A psychiatric primer for the veteran's family and friends",
        "work_count": 1,
        "top_subjects": [
          "World War, 1939-1945",
          "Veterans' families",
          "Veterans",
          "United States",
          "Rehabilitation",
          "Psychiatry",
          "Personality disorders",
          "People with disabilities",
          "Mental health",
          "Mental Disorders"
        ],
        "_version_": 1767964780387106816
      },
      {
        "key": "OL10049694A",
        "type": "author",
        "name": "Alexander G. Dumas",
        "top_work": "Psychiatric Primer for the Veteran's Family and Friends",
        "work_count": 1,
        "top_subjects": [
          "Veterans, medical care",
          "Psychiatry",
          "Personality disorders"
        ],
        "_version_": 1767948885501673481
      },
      {
        "key": "OL5672394A",
        "type": "author",
        "name": "Alexander Anderson Dumas",
        "top_work": "The competencies required in secondary school teaching and their implications for teacher education",
        "work_count": 1,
        "_version_": 1767995378734465026
      },
      {
        "key": "OL12491988A",
        "type": "author",
        "name": "Alexander (Alexandre) Dumas - Translated By Marguerite E Wilbur",
        "top_work": "The Journal of Madame Giovanni",
        "work_count": 1,
        "_version_": 1767965026616868864
      },
      {
        "key": "OL12512444A",
        "type": "author",
        "name": "Alexander (Alexandre) Dumas - Translated and Edited By A Craig Bell",
        "top_work": "THE FLIGHT TO VARENNES",
        "work_count": 1,
        "_version_": 1767965267890012170
      }
    ]
  }
  
}