import {apiPhpLegacy} from '../../../../utils/request';

//       city | state | country
//index:  0   |   1   | 2
const processLocaleString = (string) => {
  return string.split(',').reduce(
    (acc, word, i) => {
      let prop;
      word = word.trim();

      switch (i) {
        case 0:
          prop = 'city';
          break;
        case 1:
          prop = 'state';
          break;
        case 2:
          prop = 'country';
          break;
        default:
          return acc;
      }

      return {...acc, [prop]: word ? word : 'all'};
    },
    {city: 'all', state: 'all', country: 'all'},
  );
};

const formatPlaces = (places) => {
  return places.map((place) => ({
    label: `${place.st_city}, ${place.st_state}, ${place.st_country}`,
    value: place,
  }));
};

export const getLocation = async (string, lang=1) => {
  const locale = processLocaleString(string);

  try {
    const {data: response} = await apiPhpLegacy.get(
      `/v2/local/autocomplete/${locale.city}/${locale.state}/${locale.country}/${lang}`,
    );

    if (response.result && response.data.length > 0) {
      return formatPlaces(response.data);
    }

    return [];
  } catch (error) {
    return [];
  }
};
