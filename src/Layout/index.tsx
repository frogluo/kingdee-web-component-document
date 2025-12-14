import React from 'react';
import withComponent, { ComponentProps } from '../common/withComponent';

const Layout = (props: ComponentProps) => {
  return (
    <kdcq-layout {...props}>
      <kdcq-layout-item size={8}>
        <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
      </kdcq-layout-item>
      <kdcq-layout-item size={8}>
        <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
      </kdcq-layout-item>
      <kdcq-layout-item size={8}>
        <div style={{ height: '50px', backgroundColor: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 3</div>
      </kdcq-layout-item>
    </kdcq-layout>
  );
};

const HorizontalAlign = (props: ComponentProps) => {
  return (
    <div>
      <h4>Start (默认)</h4>
      <kdcq-layout {...props} horizontal-align="start">
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Center</h4>
      <kdcq-layout {...props} horizontal-align="center">
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Space</h4>
      <kdcq-layout {...props} horizontal-align="space">
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Spread</h4>
      <kdcq-layout {...props} horizontal-align="spread">
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>End</h4>
      <kdcq-layout {...props} horizontal-align="end">
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={6}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
    </div>
  );
};

const VerticalAlign = (props: ComponentProps) => {
  return (
    <div>
      <h4>Start (默认)</h4>
      <kdcq-layout {...props} style={{ height: '150px', backgroundColor: '#fafafa' }}>
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ height: '100px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Center</h4>
      <kdcq-layout {...props} vertical-align="center" style={{ height: '150px', backgroundColor: '#fafafa' }}>
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ height: '100px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>End</h4>
      <kdcq-layout {...props} vertical-align="end" style={{ height: '150px', backgroundColor: '#fafafa' }}>
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ height: '100px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Stretch</h4>
      <kdcq-layout {...props} vertical-align="stretch" style={{ height: '150px', backgroundColor: '#fafafa' }}>
        <kdcq-layout-item size={8}>
          <div style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
    </div>
  );
};

const MultipleRows = (props: ComponentProps) => {
  return (
    <div>
      <h4>允许换行</h4>
      <kdcq-layout {...props} multiple-rows="true">
        {[...Array(5)].map((_, index) => (
          <kdcq-layout-item key={index} size={6}>
            <div style={{ height: '50px', backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Item {index + 1}
            </div>
          </kdcq-layout-item>
        ))}
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>不允许换行，超出一行宽度横向滚动 (默认)</h4>
      <div style={{ overflow: 'auto' }}>
        <kdcq-layout {...props}>
          {[...Array(5)].map((_, index) => (
            <kdcq-layout-item key={index} size={6}>
              <div style={{ height: '50px', backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Item {index + 1}
              </div>
            </kdcq-layout-item>
          ))}
        </kdcq-layout>
      </div>
    </div>
  );
};

const PullToBoundary = (props: ComponentProps) => {
  return (
    <div style={{ border: '1px solid #ddd' }}>
      <h4>Small</h4>
      <kdcq-layout {...props} pull-to-boundary="small">
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Medium</h4>
      <kdcq-layout {...props} pull-to-boundary="medium">
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
      
      <h4 style={{ marginTop: '24px' }}>Large</h4>
      <kdcq-layout {...props} pull-to-boundary="large">
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={8}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
        </kdcq-layout-item>
      </kdcq-layout>
    </div>
  );
};

const LayoutItemSize = (props: ComponentProps) => {
  return (
    <div>
      <h4>不同尺寸的布局项</h4>
      <kdcq-layout>
        <kdcq-layout-item size={12} xs={2} sm={4} md={6} lg={8} xl={10}>
          <div style={{ height: '50px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item1</div>
        </kdcq-layout-item>
        <kdcq-layout-item size={12} xs={20} sm={16} md={12} lg={8} xl={4}>
          <div style={{ height: '50px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item2</div>  
        </kdcq-layout-item>
        <kdcq-layout-item size={12} xs={2} sm={4} md={6} lg={8} xl={10}>
          <div style={{ height: '50px', backgroundColor: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item3</div>  
        </kdcq-layout-item>
      </kdcq-layout>
    </div>
  );
};

export default {
  Default: withComponent(Layout),
  HorizontalAlign: withComponent(HorizontalAlign),
  VerticalAlign: withComponent(VerticalAlign),
  MultipleRows: withComponent(MultipleRows),
  PullToBoundary: withComponent(PullToBoundary),
  LayoutItemSize: withComponent(LayoutItemSize),
};