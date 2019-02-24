import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Page from './Page';
import { IRootState } from '../../reducers/initialState';
import { RootActions } from '../../reducers';
import { fetchAll, fetchAllParamsChange } from '../../actions';
import { IFetchAllEventsParams } from '../../api';

const mapStateToProps = (state: IRootState) => {
  return {
    events: state.events,
    progressBar: state.progressBar,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
  return {
    fetchItems: (params?: IFetchAllEventsParams) => dispatch(fetchAll(params)),
    changeParam: (params: IFetchAllEventsParams) => dispatch(fetchAllParamsChange(params)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
