import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Header from '../../components/Header';
import { IRootState } from '../../reducers/initialState';
import { RootActions } from '../../reducers';

const mapStateToProps = (state: IRootState) => {
  return {
    progressBar: state.progressBar,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
  return {
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Container;
