const cars = {
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'popular',
      title: 'Popular',
      type: 'boolean',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'color',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'dimension',
      title: 'Dimension',
      type: 'object',
      fields: [
        {
          name: 'total_length',
          type: 'string',
          title: 'Total Length',
        },
        {
          name: 'overall_width',
          type: 'string',
          title: 'Overall Width',
        },
        {
          name: 'overall_height',
          type: 'string',
          title: 'Overall Height',
        },
        { name: 'wheelbase', type: 'string', title: 'Wheelbase' },
        {
          name: 'ground_clereance',
          type: 'string',
          title: 'Ground Clereance',
        },
      ],
    },
    {
      name: 'engine',
      title: 'Engine',
      type: 'object',
      fields: [
        {
          name: 'detail',
          type: 'string',
          title: 'Detail',
        },
        {
          name: 'transmition',
          type: 'string',
          title: 'Transmition',
        },
        {
          name: 'type',
          type: 'string',
          title: 'Type',
        },
        { name: 'power', type: 'string', title: 'Power' },
        {
          name: 'torque',
          type: 'string',
          title: 'Torque',
        },
        { name: 'fuel_system', type: 'string', title: 'Fuel System' },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'object',
      fields: [
        { name: 'adas', type: 'boolean', title: 'Adas' },
        {
          name: 'cruise_control',
          type: 'boolean',
          title: 'Cruise Control',
        },
        {
          name: 'airbag',
          type: 'boolean',
          title: 'Airbag',
        },
        {
          name: 'sunroof',
          type: 'boolean',
          title: 'Sunroof',
        },
        { name: 'spare_tire', type: 'boolean', title: 'Spare Tire' },
        {
          name: 'fog_lamp',
          type: 'boolean',
          title: 'Fog Lamp',
        },
        {
          name: 'leather_seat',
          type: 'boolean',
          title: 'Leather Seat',
        },
      ],
    },
    {
      name: 'other',
      title: 'Other',
      type: 'object',
      fields: [
        {
          name: 'capacity',
          type: 'string',
          title: 'Capacity',
        },
        {
          name: 'tire_size',
          type: 'string',
          title: 'Tire Size',
        },
        { name: 'spare_key', type: 'string', title: 'Spare Key' },
      ],
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'variant' }],
        },
      ],
    },
  ],
};

export default cars;

/** Dimension */
// total_length
// overall_width
// overall_height
// wheelbase
// ground_clereance

/** Engine */
// type
// transmition
// power
// torque
// fuel_system

/** Feature */
// airbag
// sunroof
// spare_tire
// fog_lamp
// cruise_control
// adas
// leather_seat

/** Other */
// capacity
// tire_size
// spare_key
