export const priceSection = {
  title: 'Price section',
  name: 'priceSection',
  type: 'document',
  fields: [
    {
      title: 'Заголовок',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Глобальные плюсы',
      description: '3 штуки',
      name: 'pricePluses',
      type: 'array',
      of: [
        {
          type: 'pricePlus',
        },
      ],
    },
    {
      title: 'Фоновая картинка',
      name: 'backgroundImage',
      type: 'reference',
      to: [
        {
          type: 'picture',
        },
      ],
    },
  ],
};
