import {} from '../../../config/ReactotronConfig';
export default function user(state, action) {
  console.tron.log('teste: ', action);

  switch (action.type) {
    case 'ADD_USER':
      return [];
    default:
      return [];
  }
}
