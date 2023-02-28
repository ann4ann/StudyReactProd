import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title Lorem ipsum",
    text: "Quo iste voluptas a modi quis aut. Aut nihil qui omnis minima nam facere ut itaque. Voluptatem exercitationem eum odio dolor qui.",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title Lorem ipsum",
    text: "Quo iste voluptas a modi quis aut. Aut nihil qui omnis minima nam facere ut itaque. Voluptatem exercitationem eum odio dolor qui.",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: "Title Lorem ipsum",
    text: "Quo iste voluptas a modi quis aut. Aut nihil qui omnis minima nam facere ut itaque. Voluptatem exercitationem eum odio dolor qui.",
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: "Title Lorem ipsum",
    text: "Quo iste voluptas a modi quis aut. Aut nihil qui omnis minima nam facere ut itaque. Voluptatem exercitationem eum odio dolor qui.",
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "Title Lorem ipsum",
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: "Title Lorem ipsum",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "Quo iste voluptas a modi quis aut. Aut nihil qui omnis minima nam facere ut itaque. Voluptatem exercitationem eum odio dolor qui.",
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: "Quo iste voluptas a modi quis aut. Aut nihil qui omnis minima nam facere ut itaque. Voluptatem exercitationem eum odio dolor qui.",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
