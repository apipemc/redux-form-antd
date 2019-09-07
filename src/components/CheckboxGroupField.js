import Checkbox from "antd/lib/checkbox";
import { customMap, defaultTo } from "../maps/mapError";
import { isImmutable } from 'immutable';
import createComponent from "./BaseComponent";

const CheckboxGroup = Checkbox.Group;

const checkboxGroupMap = customMap((mapProps, { input: { onChange, value = [] } }) => {
  if(isImmutable(value)){
    value = value.toJS();
  }
  value = defaultTo(value, []);
  return { ...mapProps, onChange, value };
});

export default createComponent(
  CheckboxGroup,
  checkboxGroupMap
);
