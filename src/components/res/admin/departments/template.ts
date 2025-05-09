export const departmentTemplate = {
  type: 'layout',
  model: {},
  key: 'layout_1636893091603_0',
  model_key: 'layout_1636893091603_0',
  fields: [
    {
      name: '普通布局',
      type: 'layout',
      fields: [
        {
          name: '名称',
          type: 'input',
          rules: [],
          model: { attr_type: 'string' },
          options: { span: 24 },
          key: 'input_1636893096855_3',
          model_key: 'name',
          fields: [],
          conditions: [],
          model_key_prefix: '',
        },
        {
          name: '标识',
          type: 'input',
          rules: [],
          model: { attr_type: 'string' },
          options: { span: 24 },
          key: 'input_1636893095907_2',
          model_key: 'code',
          fields: [],
          conditions: [],
          model_key_prefix: '',
        },
        {
          name: '简称',
          type: 'input',
          rules: [],
          model: { attr_type: 'string' },
          options: { span: 24 },
          key: 'input_1636893095907_3',
          model_key: 'short_name',
          fields: [],
          conditions: [],
          model_key_prefix: '',
        },
      ],
      options: { span: 24, label: { width: 50, align: 'left' } },
      key: 'layout_1636893094756_1',
      model_key: 'layout_1636893094756_1',
      conditions: [],
      model_key_prefix: '',
    },
  ],
  conditions: [],
  options: { label: {}, disabled_actions: {} },
  actions: [
    // { key: 'create', enabled: true },
    { key: 'update', enabled: true },
    { key: 'delete', enabled: true },
  ],
};

export const departmentIdentityTemplate = {
  type: 'layout',
  model: {},
  key: 'layout_1636893091603_0',
  model_key: 'layout_1636893091603_0',
  fields: [
    {
      name: '普通布局',
      type: 'layout',
      fields: [
        {
          name: '名称',
          type: 'input',
          rules: [],
          model: { attr_type: 'string' },
          options: { span: 24 },
          key: 'input_1636893096855_3',
          model_key: 'name',
          fields: [],
          conditions: [],
          model_key_prefix: '',
        },
        {
          name: '部门类型',
          type: 'input',
          rules: [],
          model: { attr_type: 'string' },
          options: { span: 24 },
          key: 'input_1636893095907_2',
          model_key: 'department_type',
          fields: [],
          conditions: [],
          model_key_prefix: '',
        },
        {
          name: '标签颜色',
          type: 'color',
          rules: [],
          model: { attr_type: 'string' },
          options: { span: 24 },
          key: 'input_1636893095907_2',
          model_key: 'color',
          fields: [],
          conditions: [],
          model_key_prefix: '',
        },
      ],
      options: { span: 24, label: { width: 50, align: 'left' } },
      key: 'layout_1636893094756_1',
      model_key: 'layout_1636893094756_1',
      conditions: [],
      model_key_prefix: '',
    },
  ],
  conditions: [],
  options: { label: {}, disabled_actions: {} },
  actions: [
    // { key: 'create', enabled: true },
    { key: 'update', enabled: true },
    { key: 'delete', enabled: true },
  ],
};
