import React from "react";
import "../../globals.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarWithSrc = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AvatarWithSrc.args = {
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
  alt: "Vikrant Bhat",
};

export const AvatarWithText = Template.bind({});
AvatarWithText.args = {
  text: "VB",
};

export const AvatarWithoutAnyProps = Template.bind({});
AvatarWithoutAnyProps.args = {};

// With Image
export const ExtraSmallSize = Template.bind({});
ExtraSmallSize.args = {
  size: "xs",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
};
export const SmallSize = Template.bind({});
SmallSize.args = {
  size: "sm",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
};
export const MediumSize = Template.bind({});
MediumSize.args = {
  size: "md",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
};
export const LargeSize = Template.bind({});
LargeSize.args = {
  size: "lg",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
};
export const ExtraLargeSize = Template.bind({});
ExtraLargeSize.args = {
  size: "xl",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
};
export const DoubleExtraLargeSize = Template.bind({});
DoubleExtraLargeSize.args = {
  size: "2xl",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
};

// With Text
export const ExtraSmallSizeWithText = Template.bind({});
ExtraSmallSizeWithText.args = {
  size: "xs",
  text: "xs",
};
export const SmallSizeWithText = Template.bind({});
SmallSizeWithText.args = {
  size: "sm",
  text: "sm",
};
export const MediumSizeWithText = Template.bind({});
MediumSizeWithText.args = {
  size: "md",
  text: "md",
};
export const LargeSizeWithText = Template.bind({});
LargeSizeWithText.args = {
  size: "lg",
  text: "lg",
};
export const ExtraLargeSizeWithText = Template.bind({});
ExtraLargeSizeWithText.args = {
  size: "xl",
  text: "xl",
};
export const DoubleExtraLargeSizeWithText = Template.bind({});
DoubleExtraLargeSizeWithText.args = {
  size: "2xl",
  text: "2xl",
};

// With Colors
export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: "primary",
  text: "Primary",
};
export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  color: "secondary",
  text: "Secondary",
};
export const SuccessColor = Template.bind({});
SuccessColor.args = {
  color: "success",
  text: "Success",
};
export const DangerColor = Template.bind({});
DangerColor.args = {
  color: "danger",
  text: "Danger",
};
export const WarningColor = Template.bind({});
WarningColor.args = {
  color: "warning",
  text: "Warning",
};
export const InfoColor = Template.bind({});
InfoColor.args = {
  color: "info",
  text: "Info",
};

// SQUARED
export const Squared = Template.bind({});
Squared.args = {
  size: "lg",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
  squared: true,
};

// BORDERED
export const SquaredAndBordered = Template.bind({});
SquaredAndBordered.args = {
  size: "lg",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
  squared: true,
  bordered: true,
};

export const CircledAndBordered = Template.bind({});
CircledAndBordered.args = {
  size: "lg",
  src: "https://avatars.githubusercontent.com/u/50735025?v=4",
  bordered: true,
  color: "success",
};
