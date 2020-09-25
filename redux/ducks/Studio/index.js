import reducer from 'lib/reducer'

import remove from './handler/remove'
import set from './handler/set'

const initialState = {
  data: {
    id: '',
    name: '',
  },
}

const Driver = reducer(
  Object.assign(
    remove,
    set,
  ),
  initialState,
)

export default Driver
