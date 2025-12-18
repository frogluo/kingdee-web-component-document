---
toc: content # 导航在内容区才显示，在左侧导航栏不显示
title: Modal 弹窗 # 组件的标题，会在菜单侧边栏展示
group:
  title: 反馈
---
# 弹窗

在当前页面打开一个浮层，承载相关操作。

## 基本用法

文本信息对话框

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.Default;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    Modal.open({
      label: 'Modal',
      bodyComponent: BodyComponent
    });
  }
}

// c/bodyComponent/bodyComponent.js
import { KingdeeElement } from '@kdcloudjs/kwc'

export default class BodyComponent extends KingdeeElement {
}`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>

      // c/bodyComponent/bodyComponent.html
      <template>
        <div>Modal Body</div>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```
## 异步关闭

在对话框中使用表单时，如提交表单，点击确定后异步关闭对话框。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.Async;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    Modal.open({
      label: 'Modal',
      bodyComponent: BodyComponent,
      confirm: () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
      }
    });
  }
}

// c/bodyComponent/bodyComponent.js
import { KingdeeElement } from '@kdcloudjs/kwc'

export default class BodyComponent extends KingdeeElement {
}`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>

      // c/bodyComponent/bodyComponent.html
      <template>
        <div>Modal Body</div>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 自定义页头

通过传入 `headerComponent` 来自定义页头。`headerProps` 用于传递页头组件的属性。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.CustomHeaderSlot;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import CustomHeader from 'c/CustomHeader;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    Modal.open({
      label: 'Modal',
      headerComponent: CustomHeader,
      headerProps: {
        title: 'My Header',
      }
    });
  }
}

// c/customHeader/customHeader.js
import { KingdeeElement, api } from '@kdcloudjs/kwc'

export default class CustomHeader extends KingdeeElement {
  @api props
  get title() {
    return this.props && this.props.title;
  }
}`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>

      // c/customHeader/customHeader.html
      <template>
        <div>{title}</div>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 自定义页体

通过传入 `bodyComponent` 来自定义页体。`bodyProps` 用于传递页体组件的属性。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.CustomBodySlot;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    Modal.open({
      label: 'Modal',
      bodyComponent: BodyComponent,
      bodyProps: {
        message: 'My Body'
      }
    });
  }
}

// c/bodyComponent/bodyComponent.js
import { KingdeeElement, api } from '@kdcloudjs/kwc'

export default class BodyComponent extends KingdeeElement {
  @api props;

  get content() {
    return this.props && this.props.message;
  }
}`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>

      // c/bodyComponent/bodyComponent.html
      <template>
        <div>{content}</div>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 自定义页脚

通过传入 `footerComponent` 来自定义页脚。`footerProps` 用于传递页脚组件的属性。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.CustomFooterSlot;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import CustomFooter from 'c/CustomFooter;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    const modal = Modal.open({
      label: 'Modal',
      footerComponent: CustomFooter,
      footerProps: {
        close: () => modal.close()
      }
    });
  }
}

// c/customFooter/customFooter.js
import { KingdeeElement, api } from '@kdcloudjs/kwc'

export default class CustomFooter extends KingdeeElement {
  @api props;

  get handleClick() {
    this.props && this.props.close();
  }
}`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>

      // c/customFooter/customFooter.html
      <template>
        <div onclick={handleClick}>Click me to close</div>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 自定义标题

`label` 支持传入文字来展示自定义标题。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.CustomModalTitle;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    Modal.open({
      label: 'This is modal title',
    });
  }
}
`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 展示页头关闭按钮

`showCloseButton` 是否展示头部右上角关闭按钮，不展示时，无法通过esc关闭弹窗。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.ModalCloseButton;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    Modal.open({
      label: 'ModalTitle',
      showCloseButton: true
    });
  }
}
`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 拉伸弹窗

`resizeGrip` 是否展示拉伸弹窗的手柄，不展示时，无法通过拉伸弹窗。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.ResizeModal;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    Modal.open({
      label: 'ModalTitle',
      resizeGrip: true
    });
  }
}
`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## 自定义宽高

`width` 和 `height` 用于自定义弹窗的宽度和高度。

```jsx
import { Button, Modal } from 'kwc';
const _Modal = Modal.RectModal;
const codeInfo = [
  {
    language: 'javascript',
    content: `import { KingdeeElement } from '@kdcloudjs/kwc'
    import BodyComponent from 'c/BodyComponent;

export default class BaseModal extends KingdeeElement {
  handleOpenModal() {
    
    Modal.open({
      label: 'ModalTitle',
      width: '800px',
      height: '600px',
    });
  }
}
`,
  },
  {
    language: 'html',
    content: `
      <template>
        <kd-button onclick={handleOpenModal}></kd-button>
      </template>
    `,
  },
  {
    language: 'css',
    content: '',
  },
];

export default () => <_Modal codeInfo={codeInfo} />;
```

## API

| 属性            | 说明                                         | 类型    | 默认值   | 版本  |
| --------------- | -------------------------------------------- | ------- | -------- | ----- |
| label           | 标题                                         | string  | -        | 1.0.0 |
| label-position  | 标题位置，可选值包括vertical、inline、hidden | string  | vertical | 1.0.0 |
| size            | 开关的尺寸，可选值包括 large、medium、small  | string  | medium   | 1.0.0 |
| checked         | 当前选中状态，受控属性                       | boolean | false    | 1.0.0 |
| default-checked | 初始选中状态，用于非受控模式                 | boolean | false    | 1.0.0 |
| disabled        | 设置开关是否禁用                             | boolean | false    | 1.0.0 |
| loading         | 设置开关加载状态                             | boolean | false    | 1.0.0 |
| size            | 按钮的尺寸，可选值包括 large、medium、small  | string  | medium   | 1.0.0 |
| name            | 开关的名称                                   | string  | -        | 1.0.0 |
| onChange        | 值改变时触发                                 |         | -        | 1.0.0 |


## 设计变量

| 类别    | Token名称                                      | 说明                     | 默认值                                           |
| ------- | ---------------------------------------------- | ------------------------ | ------------------------------------------------ |
| border  | --kdds-c-switch-track-border-radius            | 底部轨道圆角             | 100px                                            |
| border  | --kdds-c-switch-dot-border-radius              | 白色圆点圆角             | 100px                                            |
| border  | --kdds-c-switch-on-track-border-width-active   | 开-激活状态轨道宽度      | var(--kdds-g-sizing-border-2,2px)                |
| border  | --kdds-c-switch-off-track-border-width-active  | 关-激活状态轨道宽度      | var(--kdds-g-sizing-border-2,2px)                |
| color   | --kdds-c-switch-dot-color                      | 圆点默认颜色             | var(--kdds-g-color-on-surface-inverse-1,#FFFFFF) |
| color   | --kdds-c-switch-on-track-border-active         | 开-激活状态轨道边框颜色  | var(--kdds-g-color-accent-1,#5582F34D)           |
| color   | --kdds-c-switch-off-track-border-active        | 关-激活状态轨道边框颜色  | var(--kdds-g-color-on-surface-1,#B2B2B24D)       |
| color   | --kdds-c-switch-on-track-color                 | 开-轨道默认颜色          | var(--kdds-g-color-accent-1, #5582F3)            |
| color   | --kdds-c-switch-on-track-color-hover           | 开-轨道悬停颜色          | var(--kdds- g-color-accent-2, #87A9FF)           |
| color   | --kdds-c-switch-on-track-color-focus           | 开-轨道点击颜色          | var(--kdds-g-color-on-surface-1,#B2B2B2)         |
| color   | --kdds-c-switch-on-track-color-disabled        | 开-轨道禁用颜色          | var(--kdds-g-color-accent-4, #B5CAFF)            |
| color   | --kdds-c-switch-off-track-color                | 关-轨道默认颜色          | var(--kdds-g-color-on-surface-1,#B2B2B2)         |
| color   | --kdds-c-switch-off-track-color-hover          | 关-轨道悬停颜色          | var(--kdds-g-color-on-surface-2, #999999)        |
| color   | --kdds-c-switch-off-track-color-focus          | 关-轨道点击颜色          | var(--kdds-g-color-on-surface-1,#B2B2B2)         |
| color   | --kdds-c-switch-off-track-color-disabled       | 关-轨道禁用颜色          | var(--kdds-g-color-border-disabled-1,#D9D9D9)    |
| color   | --kdds-c-switch-on-loading-icon-color          | 开-加载动画图标颜色      | var(--kdds-g-color-accent-1, #5582F3)            |
| color   | --kdds-c-switch-off-loading-icon-color         | 关-加载动画图标颜色      | var(--kdds-g-color-on-surface-1,#B2B2B2)         |
| sizing  | --kdds-c-switch-track-sizing-width-small       | 小尺寸轨道宽度           | 2rem                                             |
| sizing  | --kdds-c-switch-track-sizing-height-small      | 小尺寸轨道高度           | 1rem                                             |
| sizing  | --kdds-c-switch-track-sizing-width-medium      | 中尺寸轨道宽度           | 2.5rem                                           |
| sizing  | --kdds-c-switch-track-sizing-height-medium     | 中尺寸轨道高度           | 1.25rem                                          |
| sizing  | --kdds-c-switch-track-sizing-width-large       | 大尺寸轨道宽度           | 3rem                                             |
| sizing  | --kdds-c-switch-track-sizing-height-large      | 大尺寸轨道高度           | 1.5rem                                           |
| sizing  | --kdds-c-switch-dot-sizing-width-small         | 小尺寸圆点宽度           | 0.875rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-height-small        | 小尺寸圆点高度           | 0.875rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-width-medium        | 中尺寸圆点宽度           | 1.125rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-height-medium       | 中尺寸圆点高度           | 1.125rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-width-large         | 大尺寸圆点宽度           | 1.375rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-height-large        | 大尺寸圆点高度           | 1.375rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-width-small-focus   | 小尺寸点击状态圆点宽度   | 1.125rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-height-small-focus  | 小尺寸点击状态圆点高度   | 0.875rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-width-medium-focus  | 中尺寸点击状态圆点宽度   | 1.375rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-height-medium-focus | 中尺寸点击状态圆点高度   | 1.125rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-width-large-focus   | 大尺寸点击状态圆点宽度   | 1.625rem                                         |
| sizing  | --kdds-c-switch-dot-sizing-height-large-focus  | 大尺寸点击状态圆点高度   | 1.375rem                                         |
| spacing | --kdds-c-switch-dot-padding-right-small        | 小尺寸圆点右间距         | 0.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-left-small         | 小尺寸圆点左间距         | 1.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-right-medium       | 中尺寸圆点右间距         | 0.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-left-medium        | 中尺寸圆点左间距         | 1.3125rem                                        |
| spacing | --kdds-c-switch-dot-padding-right-large        | 大尺寸圆点右间距         | 0.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-left-large         | 大尺寸圆点左间距         | 1.5625rem                                        |
| spacing | --kdds-c-switch-dot-padding-right-small-focus  | 小尺寸点击状态圆点右间距 | 0.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-left-small-focus   | 小尺寸点击状态圆点左间距 | 0.8125rem                                        |
| spacing | --kdds-c-switch-dot-padding-right-medium-focus | 中尺寸点击状态圆点右间距 | 0.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-left-medium-focus  | 中尺寸点击状态圆点左间距 | 1.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-right-large-focus  | 大尺寸点击状态圆点右间距 | 0.0625rem                                        |
| spacing | --kdds-c-switch-dot-padding-left-large-focus   | 大尺寸点击状态圆点左间距 | 1.3125rem                                        |
