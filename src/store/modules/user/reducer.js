import {} from '../../../config/ReactotronConfig';
export default function user(state, action) {
  console.tron.log('state: ', state);

  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    default:
      return [];
  }
}
