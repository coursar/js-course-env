import createAlert from './Alert';

export default {
  title: 'Desing/Alert',
  argTypes: {
    message: {
      control: 'text',
    },
    image: {
      control: 'text',
    },
    onClose: {
      action: 'onClose',
    },
  },
};

const Template = (args) => createAlert(args);

export const Default = Template.bind({}); // создаёт копию шаблона
Default.args = {};

export const Filled = Template.bind({}); // создаёт копию шаблона
Filled.args = {
  message: 'Warning!',
  image: 'neutral.svg',
};
