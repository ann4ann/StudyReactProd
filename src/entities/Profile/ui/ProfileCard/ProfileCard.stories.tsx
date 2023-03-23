import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
// @ts-ignore
import AvatarImg from "shared/assets/tests/StorybookAvatar.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "admin",
        age: 18,
        country: Country.Russia,
        lastname: "Personov",
        firstname: "Person",
        city: "Moskow",
        currency: Currency.EUR,
        avatar: AvatarImg,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: "Some error",
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
