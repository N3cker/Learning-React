import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});



export const getCardsForColumn = ({cards}, listId) => cards.filter(card => card.columnId == listId);
export default connect(mapStateToProps)(Column);