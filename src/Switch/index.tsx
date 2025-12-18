import React from 'react';
import withComponent, { ComponentProps } from '../common/withComponent';
const Switch = (props: ComponentProps) => {
  return <kdcq-switch {...props} />
};

const Disabled = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <kdcq-switch {...props} disabled />
      <kdcq-switch {...props} checked disabled />
    </div>
  )
};

const Size = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <kdcq-switch {...props} size="small" />
      <kdcq-switch {...props} size="medium" />
      <kdcq-switch {...props} size="large" />
    </div>
  )
}

const Loading = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <kdcq-switch {...props} loading />
        <kdcq-switch {...props} checked loading />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <kdcq-switch {...props} loading size="small" />
        <kdcq-switch {...props} checked loading size="small"/>
      </div>
    </div>
  )
}

const Label = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <kdcq-switch {...props} label="Label"/>
      <kdcq-switch {...props} label="Switch Title" />
    </div>
  )
}

const LabelPosition = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <div><kdcq-switch {...props} label="Vertical Label" label-position="vertical"/></div>
      <div><kdcq-switch {...props} label="Inline" label-position="inline" /></div>
      <div><kdcq-switch {...props} label="Hidden" label-position="hidden" /></div>
    </div>
  )
}

export default {
  Default: withComponent(Switch),
  Disabled: withComponent(Disabled),
  Size: withComponent(Size),
  Loading: withComponent(Loading),
  Label: withComponent(Label),
  LabelPosition: withComponent(LabelPosition),
}
