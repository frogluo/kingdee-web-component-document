import { Link } from 'dumi';
import React from 'react';
import './componentOverview.less';
const context = (require as any).context('./images/overview', false, /\.png$/);
const overViewMap: Record<string, string> = {};

context.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace('_overview.png', '');
  overViewMap[name] = context(key).default || context(key);
});
interface OverViewItem {
  name: string;
  imgSrc: string;
  link: string;
}

interface OverViewCategory {
  title: string;
  items: OverViewItem[];
}
const overviewData: OverViewCategory[] = [
  {
    title: '布局',
    items: [{ name: '布局', imgSrc: overViewMap['form'], link: 'layout' }],
  },
  {
    title: '导航',
    items: [{ name: '选项卡', imgSrc: overViewMap['tab'], link: 'tabset' }],
  },
  {
    title: '反馈',
    items: [
      {
        name: '对话框',
        imgSrc: overViewMap['dialog_framework'],
        link: 'modal',
      },
      {
        name: '加载中',
        imgSrc: overViewMap['loading'],
        link: 'loading',
      },
      {
        name: '消息提示',
        imgSrc: overViewMap['notification_prompt'],
        link: 'toast',
      },
    ],
  },
  {
    title: '基础',
    items: [
      { name: '按钮', imgSrc: overViewMap['button'], link: 'button' },
      {
        name: '按钮菜单',
        imgSrc: overViewMap['drop_down_list'],
        link: 'button-menu',
      },
      { name: '图标', imgSrc: overViewMap['icon'], link: 'icon' },
      { name: '标签', imgSrc: overViewMap['tag'], link: 'tag' },
    ],
  },
  {
    title: '数据录入',
    items: [
      {
        name: '日期选择器',
        imgSrc: overViewMap['date_picker'],
        link: 'date-picker',
      },
      { name: '文本', imgSrc: overViewMap['input'], link: 'input' },
      {
        name: '数值输入框',
        imgSrc: overViewMap['input-number'],
        link: 'input-number',
      },
    ],
  },
  {
    title: '数据输入',
    items: [
      { name: '复选框', imgSrc: overViewMap['checkbox'], link: 'checkbox' },
      { name: '复选框组', imgSrc: overViewMap['checkbox-g'], link: 'checkbox' },
      { name: '单选框', imgSrc: overViewMap['selection'], link: 'radio' },
      { name: '单选框组', imgSrc: overViewMap['selection-g'], link: 'radio' },
      { name: '下拉选择', imgSrc: overViewMap['selector'], link: 'select' },
      { name: '开关', imgSrc: overViewMap['switch'], link: 'switch' },
    ],
  },
    {
    title: '数据展示',
    items: [
      { name: '卡片', imgSrc: overViewMap['card'], link: 'card' },
      { name: '数据表格', imgSrc: overViewMap['table'], link: 'data-table' },
      { name: '图片展示', imgSrc: overViewMap['image'], link: 'image' },
      { name: '树', imgSrc: overViewMap['tree'], link: 'tree' },
    ],
  },
];
const ComponentOverview = () => {
  return (
    <div className="overviewContainer">
      {overviewData.map((category) => (
        <div className="overviewGroup" key={category.title}>
          <div className="title">{category.title}</div>
          <div className="itemWrapper">
            {category.items.map((item, index) => (
              <div className="overviewItem" key={`${item.name}-${index}`}>
                <Link to={`/components/${item.link}`}>
                  <img key={item.name} src={item.imgSrc} alt={item.name} />
                </Link>
                <div className="itemName">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ComponentOverview;
