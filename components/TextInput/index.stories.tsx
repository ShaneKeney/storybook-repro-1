import type { Meta, StoryObj } from "@storybook/react";
import TextInput from ".";
import { View } from "react-native";

const TextInputMeta: Meta<typeof TextInput> = {
  title: "Components/Atoms/TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <View>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </View>
    ),
  ],
};

export default TextInputMeta;

export const Default: StoryObj<typeof TextInput> = {
  args: {},
};
