const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { iceCreamActions } = require('./features/icecream/icecreamSlice');
const { fetchUsers } = require('./features/user/userSlice');

const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));

unsubscribe();