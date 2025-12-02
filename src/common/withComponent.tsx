import { Icon, Tabs, Tooltip } from '@kdcloudjs/kdesign';
import { usePrefersColor, useLocale } from 'dumi';
import React, { type FC, useEffect, useState } from 'react';
import CodeBlock from './codeBlock';
export interface Info {
  language: string;
  content: string;
}
export interface ComponentProps {
  codeInfo: Info[];
}

export default function withComponent(Component: any): FC<ComponentProps> {
  const ComponentWrap: FC<ComponentProps> = (props) => {
    const { codeInfo, ...rest } = props;
    const [curKey, setCurKey] = useState<string | number>('javascript');
    const [showCode, setShowCode] = useState<boolean>(false);
    const [direction, setDirection] = useState(
      document.documentElement.getAttribute('data-direction') || 'ltr',
    );
    const locale = useLocale();

    const showChange = (language: string | number) => {
      setCurKey(language);
    };

    const handleChange = () => {
      setShowCode(!showCode);
    };

    useEffect(() => {
      const html = document.documentElement;

      const observer = new MutationObserver(() => {
        setDirection(html.getAttribute('data-direction') || '');
      });

      observer.observe(html, {
        attributes: true,
        attributeFilter: ['data-direction'],
      });

      return () => observer.disconnect();
    }, []);

    const [theme] = usePrefersColor();
    const codeClassName = `kwc-default-previewer-demo-code ${
      showCode ? 'show' : 'hide'
    }`;
    return (
      <div className="kwc-default-previewer-demo-container">
        <div className="kwc-default-previewer-demo-preview">
          <Component
            {...(rest as any)}
            direction={direction}
            theme={theme}
            locale={locale}
          />
        </div>
        <div className="kwc-default-previewer-demo-code-wrap">
          <div className="kwc-default-previewer-demo-action">
            <Tooltip placement="top" tip={showCode ? '隐藏代码' : '显示代码'}>
              <Icon
                onClick={handleChange}
                className="demo-code-icon"
                type="code"
              />
            </Tooltip>
          </div>
          <div className={codeClassName}>
            <Tabs activeKey={curKey} onChange={showChange}>
              {(codeInfo || []).map((item) => (
                <Tabs.TabPane key={item.language} tab={item.language}>
                  <CodeBlock
                    codeString={item.content}
                    language={item.language}
                    isDark={theme === 'dark'}
                  />
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    );
  };

  // 方便调试显示原组件名
  ComponentWrap.displayName =
    Component.displayName || Component.name || 'ComponentWrap';

  return ComponentWrap;
}
