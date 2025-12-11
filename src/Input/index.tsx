import React from 'react'
import withComponent, { ComponentProps } from '../common/withComponent'
const Input = (props: ComponentProps) => {
  return <kdcq-input {...props} />
}

const Status = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input {...props} label='Label' disabled placeholder='disabled' />
      <kdcq-input {...props} label='Label' disabled />
      <kdcq-input {...props} label='Label' readonly placeholder='read-only' />
      <kdcq-input {...props} label='Label' readonly />
    </div>
  )
}

const Size = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input {...props} label='Label' placeholder='Large' size='large' />
      <kdcq-input {...props} label='Label' placeholder='medium' />
      <kdcq-input {...props} label='Label' placeholder='small' size='small' />
    </div>
  )
}

const Variant = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input
        {...props}
        label='Label'
        variant='underlined'
        placeholder='Underlined'
      />
      <kdcq-input
        {...props}
        label='Label'
        variant='outlined'
        placeholder='Outlined'
      />
      <kdcq-input
        {...props}
        label='Label'
        variant='borderless'
        placeholder='Borderless'
      />
    </div>
  )
}

const LabelPosition = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'baseline' }}>
      <kdcq-input
        {...props}
        label='Label'
        label-position='vertical'
        placeholder='Vertical'
      />
      <kdcq-input
        {...props}
        label='Label'
        label-position='inline'
        placeholder='Inline'
      />
      <kdcq-input
        {...props}
        label='Label'
        label-position='hidden'
        placeholder='Hidden'
      />
    </div>
  )
}

const Required = (props: ComponentProps) => {
  return <kdcq-input {...props} label='Label' required />
}

const WithClearIcon = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input {...props} label='Label' />
      <kdcq-input {...props} type='textarea' label='Label' />
    </div>
  )
}

const FeedbackAndTip = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input {...props} label='Label' state='success' message='Success' />
      <kdcq-input {...props} label='Label' state='error' message='Error' />
    </div>
  )
}

const Limit = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input {...props} label='Label' min-length={2} />
      <kdcq-input {...props} label='Label' max-length={10} />
    </div>
  )
}

const Search = (props: ComponentProps) => {
  return <kdcq-input {...props} label='Label' placeholder='Search something' />
}

const Password = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input
        {...props}
        label='Label'
        type='password'
        placeholder='Input password'
      />
      <kdcq-input
        {...props}
        label='Label'
        type='password'
        placeholder='Input password'
      />
    </div>
  )
}

const Textarea = (props: ComponentProps) => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <kdcq-input {...props} label='Label' type='textarea' />
      <kdcq-input
        {...props}
        label='Label'
        type='textarea'
        placeholder='Autosize height based on content lines'
      />
      <kdcq-input
        {...props}
        label='Label'
        type='textarea'
        placeholder='Autosize height with minimun and maximum number of linesAutosize height with minimun and maximum number of linesAutosize height with minimun and maximum number of lines'
        autosize={{ minRows: 2, maxRows: 5 }}
      />
    </div>
  )
}

export default {
  Default: withComponent(Input),
  Status: withComponent(Status),
  Size: withComponent(Size),
  Variant: withComponent(Variant),
  LabelPosition: withComponent(LabelPosition),
  Required: withComponent(Required),
  WithClearIcon: withComponent(WithClearIcon),
  FeedbackAndTip: withComponent(FeedbackAndTip),
  Limit: withComponent(Limit),
  Search: withComponent(Search),
  Password: withComponent(Password),
  Textarea: withComponent(Textarea),
}
