import { TextInput as NativeTextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {}

const TextInput = (props: Props) => {
  return <NativeTextInput {...props} />;
};

export default TextInput;
