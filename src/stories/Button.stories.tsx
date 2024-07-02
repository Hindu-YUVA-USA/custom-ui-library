import type { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button";


const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

//Stories hold variants of a component

//Here's an example primary button
export const Primary:Story = {
    //Providing the values for the component's props
    args:{
        color: 'primary',
        text: 'Primary Button'
    }
}

//Secondary button with different props
export const Secondary:Story = {
    args:{
        color: 'black',
        text: 'Secondary Button'
    }
}

