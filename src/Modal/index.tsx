import React, { useEffect, useRef, useState } from 'react';
import withComponent, { ComponentProps } from '../common/withComponent';

const Modal = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      setVisible(!visible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false)
    }


    if (shadowRoot.querySelector('.kdds-modal__body-container')) {
      shadowRoot.querySelector('.kdds-modal__body-container')!.innerHTML = '<div>Modal Body</div>';
    }

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal" ref={domRef} />
      <kdcq-modal label="Modal" style={style} ref={modalRef} />
    </div>
  )
};

const AsyncModal = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      setVisible(!visible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }


    if (shadowRoot.querySelector('.kdds-modal__body-container')) {
      shadowRoot.querySelector('.kdds-modal__body-container')!.innerHTML = '<div>Modal Body</div>';
    }

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Async Modal" ref={domRef} />
      <kdcq-modal label="Async Modal" style={style} ref={modalRef} />
    </div>
  )
};

const CustomModalHeader = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      setVisible(!visible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }


    if (shadowRoot.querySelector('.kdds-modal-header__right')) {
      shadowRoot.querySelector('.kdds-modal-header__right')!.innerHTML = '<div>My Header</div>';
    }

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal with customized header" ref={domRef} />
      <kdcq-modal label="Custom Header Slot" style={style} ref={modalRef} />
    </div>
  )
};

const CustomModalBody = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      setVisible(!visible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }


    if (shadowRoot.querySelector('.kdds-modal__body-container')) {
      shadowRoot.querySelector('.kdds-modal__body-container')!.innerHTML = '<div>My Body</div>';
    }

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal with customized body" ref={domRef} />
      <kdcq-modal label="Custom Body Slot" style={style} ref={modalRef} />
    </div>
  )
};

const CustomModalFooter = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      setVisible(!visible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }


    if (shadowRoot.querySelector('.kdds-modal__footer-container')) {
      shadowRoot.querySelector('.kdds-modal__footer-container')!.innerHTML = '<div data-name="close">Click me to close</div>';
    }

    shadowRoot.querySelectorAll('[data-name="close"]')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('[data-name="close"]')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal with customized footer" ref={domRef} />
      <kdcq-modal label="Custom Footer Slot" style={style} ref={modalRef} />
    </div>
  )
};

const CustomModalTitle = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      setVisible(!visible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal with customized title" ref={domRef} />
      <kdcq-modal label="This is modal title" style={style} ref={modalRef} />
    </div>
  )
};

const ModalCloseButton = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      const newVisible = !visible;
      setVisible(newVisible);
      if (newVisible) {
        const keyDownHandler = (evt) => {
          if (evt.code === 'Escape' || evt.code === 'Esc') {
            setVisible(false);
            document.body.removeEventListener('keydown', keyDownHandler);
          }
        }
        document.body.addEventListener('keydown', keyDownHandler);
      }
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }

    shadowRoot.querySelector('.kdds-modal-header__close')?.addEventListener('click', clickHandler);

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal" ref={domRef} />
      <kdcq-modal label="Modal Title" style={style} ref={modalRef} show-close-button />
    </div>
  )
};

const ResizeModal = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      const newVisible = !visible;
      setVisible(newVisible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal" ref={domRef} />
      <kdcq-modal label="Modal Title" style={style} ref={modalRef} resize-grip />
    </div>
  )
};

const RectModal = (props: ComponentProps) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }

    const shadowRoot = domRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }

    const clickHandler = () => {
      const newVisible = !visible;
      setVisible(newVisible);
    }

    shadowRoot.querySelector('button')?.addEventListener('click', clickHandler);
    shadowRoot.querySelector('div')?.addEventListener('click', clickHandler);
    return () => {
      shadowRoot.querySelector('button')?.removeEventListener('click', clickHandler);
      shadowRoot.querySelector('div')?.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const shadowRoot = modalRef.current.shadowRoot;
    if (!shadowRoot) {
      return;
    }
    const clickHandler = () => {
      setVisible(false);
    }

    shadowRoot.querySelector('.kdds-modal-container')!.style.width = '800px';
    shadowRoot.querySelector('.kdds-modal-container')!.style.height = '600px';

    shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.addEventListener('click', clickHandler));
    return () => {
      shadowRoot.querySelectorAll('kd-button')?.forEach((item) => item.removeEventListener('click', clickHandler));
    }
  }, []);

  const style = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  }

  return (
    <div>
      <kdcq-button {...props} label="Open Modal" ref={domRef} />
      <kdcq-modal label="Modal Title" style={style} ref={modalRef} width='800px' height='600px' />
    </div>
  )
};

export default {
  Default: withComponent(Modal),
  Async: withComponent(AsyncModal),
  CustomHeaderSlot: withComponent(CustomModalHeader),
  CustomBodySlot: withComponent(CustomModalBody),
  CustomFooterSlot: withComponent(CustomModalFooter),
  CustomModalTitle: withComponent(CustomModalTitle),
  ModalCloseButton: withComponent(ModalCloseButton),
  ResizeModal: withComponent(ResizeModal),
  RectModal: withComponent(RectModal),
}
