import {Card} from './Card/Card'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

const App = () => {
    return [<Card />, <Statistics />, <FriendList />, <TransactionHistory />]
}


export default App
