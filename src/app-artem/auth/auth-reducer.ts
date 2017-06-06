export const LOGIN = 'login_action';
export const LOGOUT = 'logout_action';

export const authReducer = (state = {}, action) => {
  console.log('reducer initial state:', state);
  switch (action.type) {
    case LOGIN:
      console.log('reducer action:', LOGIN);
      return action.payload;
    case LOGOUT:
      console.log('reducer action:', LOGOUT);
      return {
        user: null
      };
    default:
      return state;
  }
};
