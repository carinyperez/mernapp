// import tweet actions into the tweets-reducer 
import { RECEIVE_TWEETS,RECEIVE_USER_TWEETS,RECEIVE_NEW_TWEET } from "../actions/tweet-actions";

const TweetsReducer = 
    (state =  {
        all: {}, 
        user: {},
        new: undefined
    }, action
    ) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state); 

    switch(action.type) {
        case RECEIVE_TWEETS: 
            newState.all = action.tweets.data;
            return newState; 
        case RECEIVE_USER_TWEETS: 
            newState.user = actions.tweets.data
            return newState;
        case RECEIVE_NEW_TWEET: 
            newState.new = action.tweet.data
            return newState; 
        default:
            return state 
    }
    }
export default TweetsReducer; 
