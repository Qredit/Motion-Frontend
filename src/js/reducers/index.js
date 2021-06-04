
const initialState = {
    isLoggedIn: false,
    requestedPage: 'landing',
    registerForm: {},
    loginForm: {},
    registerFormFeedback: {},
    loginFormFeedback: {},
    alert: '',
    alerttype: '',
    accessToken: ''
};
  
function rootReducer(state = initialState, action) {
    if (action.type === 'update') {
        let key = action.payload.key;
        let subkey = action.payload.subkey;
        let value = action.payload.value;
        let obj = {};

        if (subkey)
        {
            if (!obj[key]) obj[key] = state[key];
            obj[key][subkey] = value;
        }
        else
        {
            obj[key] = value;
        }

        return Object.assign({}, state, obj);
    }
    return state;
}

export default rootReducer;