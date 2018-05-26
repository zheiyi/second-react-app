import Hello from '../components/Hello';
import { IProps } from "../components/Hello";
import * as actions from '../actions/';
import { IStoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  };
}

export default connect<IProps>(mapStateToProps, mapDispatchToProps)(Hello);
