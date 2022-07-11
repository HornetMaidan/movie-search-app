import { connect } from 'react-redux';

function MovieCounter(props) {
    return (
        <div>
            <button className='button' onClick={props.onIncrement}>+</button>
            <h4 className='top'>movies watched: {props.moviesCount}</h4>
        </div>
    )
}

function mapStateToProps(state) {

    const { movieReducer } = state;
    return {
        moviesCount: movieReducer.moviesCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => {
            return dispatch({type: 'INCREMENT'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCounter);