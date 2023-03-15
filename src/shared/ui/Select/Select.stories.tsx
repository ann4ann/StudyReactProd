import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "select",
    options: [
        { value: "1", content: "select opt 1" },
        { value: "2", content: "select opt 2" },
        { value: "3", content: "select opt 3" },
    ],
};
