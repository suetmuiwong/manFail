/**
 * Created by zhengguorong on 16/6/23.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  list: [],
  detail : {},
  comments:[],
  comment:{commentText:""},
  isShowComment:false
}

export default{
  state,
  actions,
  getters,
  mutations
}
