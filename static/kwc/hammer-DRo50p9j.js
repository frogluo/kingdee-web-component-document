!(function (t, e, n, i) {
  function s (t, e, n) {
    return setTimeout(u(t, n), e)
  }
  function o (t, e, n) {
    return !!Array.isArray(t) && (r(t, n[e], n), !0)
  }
  function r (t, e, n) {
    let s
    if (t)
      if (t.forEach) t.forEach(e, n)
      else if (t.length !== i)
        for (s = 0; s < t.length; ) e.call(n, t[s], s, t), s++
      else for (s in t) t.hasOwnProperty(s) && e.call(n, t[s], s, t)
  }
  function c (e, n, i) {
    const s = `DEPRECATED METHOD: ${n}\n${i} AT \n`
    return function () {
      const n = new Error('get-stack-trace'),
        i =
          n && n.stack
            ? n.stack
                .replace(/^[^\(]+?[\n$]/gm, '')
                .replace(/^\s+at\s+/gm, '')
                .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
            : 'Unknown Stack Trace',
        o = t.console && (t.console.warn || t.console.log)
      return o && o.call(t.console, s, i), e.apply(this, arguments)
    }
  }
  function h (t, e, n) {
    let i,
      s = e.prototype
    ;(i = t.prototype = Object.create(s)),
      (i.constructor = t),
      (i._super = s),
      n && it(i, n)
  }
  function u (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  }
  function a (t, e) {
    return typeof t === rt ? t.apply((e && e[0]) || i, e) : t
  }
  function l (t, e) {
    return t === i ? e : t
  }
  function p (t, e, n) {
    r(g(e), function (e) {
      t.addEventListener(e, n, !1)
    })
  }
  function f (t, e, n) {
    r(g(e), function (e) {
      t.removeEventListener(e, n, !1)
    })
  }
  function d (t, e) {
    for (; t; ) {
      if (t == e) return !0
      t = t.parentNode
    }
    return !1
  }
  function m (t, e) {
    return t.indexOf(e) > -1
  }
  function g (t) {
    return t.trim().split(/\s+/g)
  }
  function v (t, e, n) {
    if (t.indexOf && !n) return t.indexOf(e)
    for (let i = 0; i < t.length; ) {
      if ((n && t[i][n] == e) || (!n && t[i] === e)) return i
      i++
    }
    return -1
  }
  function T (t) {
    return Array.prototype.slice.call(t, 0)
  }
  function y (t, e, n) {
    for (var i = [], s = [], o = 0; o < t.length; ) {
      const n = t[o][e]
      v(s, n) < 0 && i.push(t[o]), (s[o] = n), o++
    }
    return (
      (i = i.sort(function (t, n) {
        return t[e] > n[e]
      })),
      i
    )
  }
  function E (t, e) {
    for (
      var n, s, o = e[0].toUpperCase() + e.slice(1), r = 0;
      r < st.length;

    ) {
      if ((s = (n = st[r]) ? n + o : e) in t) return s
      r++
    }
    return i
  }
  function I (e) {
    const n = e.ownerDocument || e
    return n.defaultView || n.parentWindow || t
  }
  function A (t, e) {
    const n = this
    ;(this.manager = t),
      (this.callback = e),
      (this.element = t.element),
      (this.target = t.options.inputTarget),
      (this.domHandler = function (e) {
        a(t.options.enable, [t]) && n.handler(e)
      }),
      this.init()
  }
  function _ (t, e, n) {
    const i = n.pointers.length,
      s = n.changedPointers.length,
      o = e & yt && i - s === 0,
      r = e & (It | At) && i - s === 0
    ;(n.isFirst = !!o),
      (n.isFinal = !!r),
      o && (t.session = {}),
      (n.eventType = e),
      (function (t, e) {
        const n = t.session,
          i = e.pointers,
          s = i.length
        n.firstInput || (n.firstInput = S(e)),
          s > 1 && !n.firstMultiple
            ? (n.firstMultiple = S(e))
            : 1 === s && (n.firstMultiple = !1)
        const o = n.firstInput,
          r = n.firstMultiple,
          c = r ? r.center : o.center,
          h = (e.center = b(i))
        ;(e.timeStamp = ut()),
          (e.deltaTime = e.timeStamp - o.timeStamp),
          (e.angle = w(c, h)),
          (e.distance = x(c, h)),
          (function (t, e) {
            let n = e.center,
              i = t.offsetDelta || {},
              s = t.prevDelta || {},
              o = t.prevInput || {}
            ;(e.eventType !== yt && o.eventType !== It) ||
              ((s = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
              (i = t.offsetDelta = { x: n.x, y: n.y })),
              (e.deltaX = s.x + (n.x - i.x)),
              (e.deltaY = s.y + (n.y - i.y))
          })(n, e),
          (e.offsetDirection = D(e.deltaX, e.deltaY))
        const u = P(e.deltaTime, e.deltaX, e.deltaY)
        ;(e.overallVelocityX = u.x),
          (e.overallVelocityY = u.y),
          (e.overallVelocity = ht(u.x) > ht(u.y) ? u.x : u.y),
          (e.scale = r
            ? (function (t, e) {
                return x(e[0], e[1], Rt) / x(t[0], t[1], Rt)
              })(r.pointers, i)
            : 1),
          (e.rotation = r
            ? (function (t, e) {
                return w(e[1], e[0], Rt) + w(t[1], t[0], Rt)
              })(r.pointers, i)
            : 0),
          (e.maxPointers = n.prevInput
            ? e.pointers.length > n.prevInput.maxPointers
              ? e.pointers.length
              : n.prevInput.maxPointers
            : e.pointers.length),
          C(n, e)
        let a = t.element
        d(e.srcEvent.target, a) && (a = e.srcEvent.target), (e.target = a)
      })(t, n),
      t.emit('hammer.input', n),
      t.recognize(n),
      (t.session.prevInput = n)
  }
  function C (t, e) {
    let n,
      s,
      o,
      r,
      c = t.lastInterval || e,
      h = e.timeStamp - c.timeStamp
    if (e.eventType != At && (h > Tt || c.velocity === i)) {
      const i = e.deltaX - c.deltaX,
        u = e.deltaY - c.deltaY,
        a = P(h, i, u)
      ;(s = a.x),
        (o = a.y),
        (n = ht(a.x) > ht(a.y) ? a.x : a.y),
        (r = D(i, u)),
        (t.lastInterval = e)
    } else
      (n = c.velocity), (s = c.velocityX), (o = c.velocityY), (r = c.direction)
    ;(e.velocity = n), (e.velocityX = s), (e.velocityY = o), (e.direction = r)
  }
  function S (t) {
    for (var e = [], n = 0; n < t.pointers.length; )
      (e[n] = {
        clientX: ct(t.pointers[n].clientX),
        clientY: ct(t.pointers[n].clientY),
      }),
        n++
    return {
      timeStamp: ut(),
      pointers: e,
      center: b(e),
      deltaX: t.deltaX,
      deltaY: t.deltaY,
    }
  }
  function b (t) {
    const e = t.length
    if (1 === e) return { x: ct(t[0].clientX), y: ct(t[0].clientY) }
    for (var n = 0, i = 0, s = 0; e > s; )
      (n += t[s].clientX), (i += t[s].clientY), s++
    return { x: ct(n / e), y: ct(i / e) }
  }
  function P (t, e, n) {
    return { x: e / t || 0, y: n / t || 0 }
  }
  function D (t, e) {
    return t === e ? _t : ht(t) >= ht(e) ? (0 > t ? Ct : St) : 0 > e ? bt : Pt
  }
  function x (t, e, n) {
    n || (n = Ot)
    const i = e[n[0]] - t[n[0]],
      s = e[n[1]] - t[n[1]]
    return Math.sqrt(i * i + s * s)
  }
  function w (t, e, n) {
    n || (n = Ot)
    const i = e[n[0]] - t[n[0]],
      s = e[n[1]] - t[n[1]]
    return (180 * Math.atan2(s, i)) / Math.PI
  }
  function O () {
    ;(this.evEl = zt),
      (this.evWin = Nt),
      (this.pressed = !1),
      A.apply(this, arguments)
  }
  function R () {
    ;(this.evEl = Ft),
      (this.evWin = Wt),
      A.apply(this, arguments),
      (this.store = this.manager.session.pointerEvents = [])
  }
  function M () {
    ;(this.evTarget = kt),
      (this.evWin = Ht),
      (this.started = !1),
      A.apply(this, arguments)
  }
  function z (t, e) {
    let n = T(t.touches),
      i = T(t.changedTouches)
    return e & (It | At) && (n = y(n.concat(i), 'identifier')), [n, i]
  }
  function N () {
    ;(this.evTarget = Ut), (this.targetIds = {}), A.apply(this, arguments)
  }
  function X (t, e) {
    const n = T(t.touches),
      i = this.targetIds
    if (e & (yt | Et) && 1 === n.length)
      return (i[n[0].identifier] = !0), [n, n]
    let s,
      o,
      r = T(t.changedTouches),
      c = [],
      h = this.target
    if (
      ((o = n.filter(function (t) {
        return d(t.target, h)
      })),
      e === yt)
    )
      for (s = 0; s < o.length; ) (i[o[s].identifier] = !0), s++
    for (s = 0; s < r.length; )
      i[r[s].identifier] && c.push(r[s]),
        e & (It | At) && delete i[r[s].identifier],
        s++
    return c.length ? [y(o.concat(c), 'identifier'), c] : void 0
  }
  function Y () {
    A.apply(this, arguments)
    const t = u(this.handler, this)
    ;(this.touch = new N(this.manager, t)),
      (this.mouse = new O(this.manager, t)),
      (this.primaryTouch = null),
      (this.lastTouches = [])
  }
  function F (t, e) {
    t & yt
      ? ((this.primaryTouch = e.changedPointers[0].identifier), W.call(this, e))
      : t & (It | At) && W.call(this, e)
  }
  function W (t) {
    const e = t.changedPointers[0]
    if (e.identifier === this.primaryTouch) {
      const t = { x: e.clientX, y: e.clientY }
      this.lastTouches.push(t)
      const n = this.lastTouches,
        i = function () {
          const e = n.indexOf(t)
          e > -1 && n.splice(e, 1)
        }
      setTimeout(i, Vt)
    }
  }
  function q (t) {
    for (
      let e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0;
      i < this.lastTouches.length;
      i++
    ) {
      const t = this.lastTouches[i],
        s = Math.abs(e - t.x),
        o = Math.abs(n - t.y)
      if (jt >= s && jt >= o) return !0
    }
    return !1
  }
  function k (t, e) {
    ;(this.manager = t), this.set(e)
  }
  function H (t) {
    ;(this.options = it({}, this.defaults, t || {})),
      (this.id = pt++),
      (this.manager = null),
      (this.options.enable = l(this.options.enable, !0)),
      (this.state = ne),
      (this.simultaneous = {}),
      (this.requireFail = [])
  }
  function L (t) {
    return t & ce
      ? 'cancel'
      : t & oe
      ? 'end'
      : t & se
      ? 'move'
      : t & ie
      ? 'start'
      : ''
  }
  function U (t) {
    return t == Pt
      ? 'down'
      : t == bt
      ? 'up'
      : t == Ct
      ? 'left'
      : t == St
      ? 'right'
      : ''
  }
  function V (t, e) {
    const n = e.manager
    return n ? n.get(t) : t
  }
  function j () {
    H.apply(this, arguments)
  }
  function G () {
    j.apply(this, arguments), (this.pX = null), (this.pY = null)
  }
  function $ () {
    j.apply(this, arguments)
  }
  function Z () {
    H.apply(this, arguments), (this._timer = null), (this._input = null)
  }
  function B () {
    j.apply(this, arguments)
  }
  function J () {
    j.apply(this, arguments)
  }
  function K () {
    H.apply(this, arguments),
      (this.pTime = !1),
      (this.pCenter = !1),
      (this._timer = null),
      (this._input = null),
      (this.count = 0)
  }
  function Q (t, e) {
    return (
      ((e = e || {}).recognizers = l(e.recognizers, Q.defaults.preset)),
      new tt(t, e)
    )
  }
  function tt (t, e) {
    ;(this.options = it({}, Q.defaults, e || {})),
      (this.options.inputTarget = this.options.inputTarget || t),
      (this.handlers = {}),
      (this.session = {}),
      (this.recognizers = []),
      (this.oldCssProps = {}),
      (this.element = t),
      (this.input = (function (t) {
        let e = t.options.inputClass
        return new (e || (dt ? R : mt ? N : ft ? Y : O))(t, _)
      })(this)),
      (this.touchAction = new k(this, this.options.touchAction)),
      et(this, !0),
      r(
        this.options.recognizers,
        function (t) {
          const e = this.add(new t[0](t[1]))
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        },
        this,
      )
  }
  function et (t, e) {
    const n = t.element
    if (n.style) {
      let i
      r(t.options.cssProps, function (s, o) {
        ;(i = E(n.style, o)),
          e
            ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = s))
            : (n.style[i] = t.oldCssProps[i] || '')
      }),
        e || (t.oldCssProps = {})
    }
  }
  function nt (t, n) {
    const i = e.createEvent('Event')
    i.initEvent(t, !0, !0), (i.gesture = n), n.target.dispatchEvent(i)
  }
  var it,
    st = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
    ot = e.createElement('div'),
    rt = 'function',
    ct = Math.round,
    ht = Math.abs,
    ut = Date.now
  it =
    'function' != typeof Object.assign
      ? function (t) {
          if (t === i || null === t)
            throw new TypeError('Cannot convert undefined or null to object')
          for (var e = Object(t), n = 1; n < arguments.length; n++) {
            const t = arguments[n]
            if (t !== i && null !== t)
              for (const n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }
          return e
        }
      : Object.assign
  var at = c(
      function (t, e, n) {
        for (let s = Object.keys(e), o = 0; o < s.length; )
          (!n || (n && t[s[o]] === i)) && (t[s[o]] = e[s[o]]), o++
        return t
      },
      'extend',
      'Use `assign`.',
    ),
    lt = c(
      function (t, e) {
        return at(t, e, !0)
      },
      'merge',
      'Use `assign`.',
    ),
    pt = 1,
    ft = 'ontouchstart' in t,
    dt = E(t, 'PointerEvent') !== i,
    mt =
      ft && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
    gt = 'touch',
    vt = 'mouse',
    Tt = 25,
    yt = 1,
    Et = 2,
    It = 4,
    At = 8,
    _t = 1,
    Ct = 2,
    St = 4,
    bt = 8,
    Pt = 16,
    Dt = Ct | St,
    xt = bt | Pt,
    wt = Dt | xt,
    Ot = ['x', 'y'],
    Rt = ['clientX', 'clientY']
  A.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && p(this.element, this.evEl, this.domHandler),
        this.evTarget && p(this.target, this.evTarget, this.domHandler),
        this.evWin && p(I(this.element), this.evWin, this.domHandler)
    },
    destroy: function () {
      this.evEl && f(this.element, this.evEl, this.domHandler),
        this.evTarget && f(this.target, this.evTarget, this.domHandler),
        this.evWin && f(I(this.element), this.evWin, this.domHandler)
    },
  }
  var Mt = { mousedown: yt, mousemove: Et, mouseup: It },
    zt = 'mousedown',
    Nt = 'mousemove mouseup'
  h(O, A, {
    handler: function (t) {
      let e = Mt[t.type]
      e & yt && 0 === t.button && (this.pressed = !0),
        e & Et && 1 !== t.which && (e = It),
        this.pressed &&
          (e & It && (this.pressed = !1),
          this.callback(this.manager, e, {
            pointers: [t],
            changedPointers: [t],
            pointerType: vt,
            srcEvent: t,
          }))
    },
  })
  var Xt = {
      pointerdown: yt,
      pointermove: Et,
      pointerup: It,
      pointercancel: At,
      pointerout: At,
    },
    Yt = { 2: gt, 3: 'pen', 4: vt, 5: 'kinect' },
    Ft = 'pointerdown',
    Wt = 'pointermove pointerup pointercancel'
  t.MSPointerEvent &&
    !t.PointerEvent &&
    ((Ft = 'MSPointerDown'),
    (Wt = 'MSPointerMove MSPointerUp MSPointerCancel')),
    h(R, A, {
      handler: function (t) {
        let e = this.store,
          n = !1,
          i = t.type.toLowerCase().replace('ms', ''),
          s = Xt[i],
          o = Yt[t.pointerType] || t.pointerType,
          r = o == gt,
          c = v(e, t.pointerId, 'pointerId')
        s & yt && (0 === t.button || r)
          ? 0 > c && (e.push(t), (c = e.length - 1))
          : s & (It | At) && (n = !0),
          0 > c ||
            ((e[c] = t),
            this.callback(this.manager, s, {
              pointers: e,
              changedPointers: [t],
              pointerType: o,
              srcEvent: t,
            }),
            n && e.splice(c, 1))
      },
    })
  var qt = { touchstart: yt, touchmove: Et, touchend: It, touchcancel: At },
    kt = 'touchstart',
    Ht = 'touchstart touchmove touchend touchcancel'
  h(M, A, {
    handler: function (t) {
      const e = qt[t.type]
      if ((e === yt && (this.started = !0), this.started)) {
        const n = z.call(this, t, e)
        e & (It | At) && n[0].length - n[1].length === 0 && (this.started = !1),
          this.callback(this.manager, e, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: gt,
            srcEvent: t,
          })
      }
    },
  })
  var Lt = { touchstart: yt, touchmove: Et, touchend: It, touchcancel: At },
    Ut = 'touchstart touchmove touchend touchcancel'
  h(N, A, {
    handler: function (t) {
      const e = Lt[t.type],
        n = X.call(this, t, e)
      n &&
        this.callback(this.manager, e, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: gt,
          srcEvent: t,
        })
    },
  })
  var Vt = 2500,
    jt = 25
  h(Y, A, {
    handler: function (t, e, n) {
      const i = n.pointerType == gt,
        s = n.pointerType == vt
      if (
        !(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)
      ) {
        if (i) F.call(this, e, n)
        else if (s && q.call(this, n)) return
        this.callback(t, e, n)
      }
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy()
    },
  })
  var Gt = E(ot.style, 'touchAction'),
    $t = Gt !== i,
    Zt = 'compute',
    Bt = 'auto',
    Jt = 'manipulation',
    Kt = 'none',
    Qt = 'pan-x',
    te = 'pan-y',
    ee = (function () {
      if (!$t) return !1
      const e = {},
        n = t.CSS && t.CSS.supports
      return (
        [
          'auto',
          'manipulation',
          'pan-y',
          'pan-x',
          'pan-x pan-y',
          'none',
        ].forEach(function (i) {
          e[i] = !n || t.CSS.supports('touch-action', i)
        }),
        e
      )
    })()
  k.prototype = {
    set: function (t) {
      t == Zt && (t = this.compute()),
        $t &&
          this.manager.element.style &&
          ee[t] &&
          (this.manager.element.style[Gt] = t),
        (this.actions = t.toLowerCase().trim())
    },
    update: function () {
      this.set(this.manager.options.touchAction)
    },
    compute: function () {
      let t = []
      return (
        r(this.manager.recognizers, function (e) {
          a(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
        }),
        (function (t) {
          if (m(t, Kt)) return Kt
          const e = m(t, Qt),
            n = m(t, te)
          return e && n ? Kt : e || n ? (e ? Qt : te) : m(t, Jt) ? Jt : Bt
        })(t.join(' '))
      )
    },
    preventDefaults: function (t) {
      const e = t.srcEvent,
        n = t.offsetDirection
      if (this.manager.session.prevented) return void e.preventDefault()
      const i = this.actions,
        s = m(i, Kt) && !ee[Kt],
        o = m(i, te) && !ee[te],
        r = m(i, Qt) && !ee[Qt]
      if (s) {
        const e = 1 === t.pointers.length,
          n = t.distance < 2,
          i = t.deltaTime < 250
        if (e && n && i) return
      }
      return r && o
        ? void 0
        : s || (o && n & Dt) || (r && n & xt)
        ? this.preventSrc(e)
        : void 0
    },
    preventSrc: function (t) {
      ;(this.manager.session.prevented = !0), t.preventDefault()
    },
  }
  var ne = 1,
    ie = 2,
    se = 4,
    oe = 8,
    re = oe,
    ce = 16,
    he = 32
  ;(H.prototype = {
    defaults: {},
    set: function (t) {
      return (
        it(this.options, t),
        this.manager && this.manager.touchAction.update(),
        this
      )
    },
    recognizeWith: function (t) {
      if (o(t, 'recognizeWith', this)) return this
      const e = this.simultaneous
      return (
        e[(t = V(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this
      )
    },
    dropRecognizeWith: function (t) {
      return (
        o(t, 'dropRecognizeWith', this) ||
          ((t = V(t, this)), delete this.simultaneous[t.id]),
        this
      )
    },
    requireFailure: function (t) {
      if (o(t, 'requireFailure', this)) return this
      const e = this.requireFail
      return (
        -1 === v(e, (t = V(t, this))) && (e.push(t), t.requireFailure(this)),
        this
      )
    },
    dropRequireFailure: function (t) {
      if (o(t, 'dropRequireFailure', this)) return this
      t = V(t, this)
      const e = v(this.requireFail, t)
      return e > -1 && this.requireFail.splice(e, 1), this
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0
    },
    canRecognizeWith: function (t) {
      return !!this.simultaneous[t.id]
    },
    emit: function (t) {
      function e (e) {
        n.manager.emit(e, t)
      }
      var n = this,
        i = this.state
      oe > i && e(n.options.event + L(i)),
        e(n.options.event),
        t.additionalEvent && e(t.additionalEvent),
        i >= oe && e(n.options.event + L(i))
    },
    tryEmit: function (t) {
      return this.canEmit() ? this.emit(t) : void (this.state = he)
    },
    canEmit: function () {
      for (let t = 0; t < this.requireFail.length; ) {
        if (!(this.requireFail[t].state & (he | ne))) return !1
        t++
      }
      return !0
    },
    recognize: function (t) {
      const e = it({}, t)
      return a(this.options.enable, [this, e])
        ? (this.state & (re | ce | he) && (this.state = ne),
          (this.state = this.process(e)),
          void (this.state & (ie | se | oe | ce) && this.tryEmit(e)))
        : (this.reset(), void (this.state = he))
    },
    process: function (t) {},
    getTouchAction: function () {},
    reset: function () {},
  }),
    h(j, H, {
      defaults: { pointers: 1 },
      attrTest: function (t) {
        const e = this.options.pointers
        return 0 === e || t.pointers.length === e
      },
      process: function (t) {
        const e = this.state,
          n = t.eventType,
          i = e & (ie | se),
          s = this.attrTest(t)
        return i && (n & At || !s)
          ? e | ce
          : i || s
          ? n & It
            ? e | oe
            : e & ie
            ? e | se
            : ie
          : he
      },
    }),
    h(G, j, {
      defaults: { event: 'pan', threshold: 10, pointers: 1, direction: wt },
      getTouchAction: function () {
        const t = this.options.direction,
          e = []
        return t & Dt && e.push(te), t & xt && e.push(Qt), e
      },
      directionTest: function (t) {
        let e = this.options,
          n = !0,
          i = t.distance,
          s = t.direction,
          o = t.deltaX,
          r = t.deltaY
        return (
          s & e.direction ||
            (e.direction & Dt
              ? ((s = 0 === o ? _t : 0 > o ? Ct : St),
                (n = o != this.pX),
                (i = Math.abs(t.deltaX)))
              : ((s = 0 === r ? _t : 0 > r ? bt : Pt),
                (n = r != this.pY),
                (i = Math.abs(t.deltaY)))),
          (t.direction = s),
          n && i > e.threshold && s & e.direction
        )
      },
      attrTest: function (t) {
        return (
          j.prototype.attrTest.call(this, t) &&
          (this.state & ie || (!(this.state & ie) && this.directionTest(t)))
        )
      },
      emit: function (t) {
        ;(this.pX = t.deltaX), (this.pY = t.deltaY)
        const e = U(t.direction)
        e && (t.additionalEvent = this.options.event + e),
          this._super.emit.call(this, t)
      },
    }),
    h($, j, {
      defaults: { event: 'pinch', threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [Kt]
      },
      attrTest: function (t) {
        return (
          this._super.attrTest.call(this, t) &&
          (Math.abs(t.scale - 1) > this.options.threshold || this.state & ie)
        )
      },
      emit: function (t) {
        if (1 !== t.scale) {
          const e = t.scale < 1 ? 'in' : 'out'
          t.additionalEvent = this.options.event + e
        }
        this._super.emit.call(this, t)
      },
    }),
    h(Z, H, {
      defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
      getTouchAction: function () {
        return [Bt]
      },
      process: function (t) {
        const e = this.options,
          n = t.pointers.length === e.pointers,
          i = t.distance < e.threshold,
          o = t.deltaTime > e.time
        if (((this._input = t), !i || !n || (t.eventType & (It | At) && !o)))
          this.reset()
        else if (t.eventType & yt)
          this.reset(),
            (this._timer = s(
              function () {
                ;(this.state = re), this.tryEmit()
              },
              e.time,
              this,
            ))
        else if (t.eventType & It) return re
        return he
      },
      reset: function () {
        clearTimeout(this._timer)
      },
      emit: function (t) {
        this.state === re &&
          (t && t.eventType & It
            ? this.manager.emit(`${this.options.event}up`, t)
            : ((this._input.timeStamp = ut()),
              this.manager.emit(this.options.event, this._input)))
      },
    }),
    h(B, j, {
      defaults: { event: 'rotate', threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [Kt]
      },
      attrTest: function (t) {
        return (
          this._super.attrTest.call(this, t) &&
          (Math.abs(t.rotation) > this.options.threshold || this.state & ie)
        )
      },
    }),
    h(J, j, {
      defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: Dt | xt,
        pointers: 1,
      },
      getTouchAction: function () {
        return G.prototype.getTouchAction.call(this)
      },
      attrTest: function (t) {
        let e,
          n = this.options.direction
        return (
          n & (Dt | xt)
            ? (e = t.overallVelocity)
            : n & Dt
            ? (e = t.overallVelocityX)
            : n & xt && (e = t.overallVelocityY),
          this._super.attrTest.call(this, t) &&
            n & t.offsetDirection &&
            t.distance > this.options.threshold &&
            t.maxPointers == this.options.pointers &&
            ht(e) > this.options.velocity &&
            t.eventType & It
        )
      },
      emit: function (t) {
        const e = U(t.offsetDirection)
        e && this.manager.emit(this.options.event + e, t),
          this.manager.emit(this.options.event, t)
      },
    }),
    h(K, H, {
      defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10,
      },
      getTouchAction: function () {
        return [Jt]
      },
      process: function (t) {
        const e = this.options,
          n = t.pointers.length === e.pointers,
          i = t.distance < e.threshold,
          o = t.deltaTime < e.time
        if ((this.reset(), t.eventType & yt && 0 === this.count))
          return this.failTimeout()
        if (i && o && n) {
          if (t.eventType != It) return this.failTimeout()
          const n = !this.pTime || t.timeStamp - this.pTime < e.interval,
            i = !this.pCenter || x(this.pCenter, t.center) < e.posThreshold
          ;(this.pTime = t.timeStamp),
            (this.pCenter = t.center),
            i && n ? (this.count += 1) : (this.count = 1),
            (this._input = t)
          if (0 === this.count % e.taps)
            return this.hasRequireFailures()
              ? ((this._timer = s(
                  function () {
                    ;(this.state = re), this.tryEmit()
                  },
                  e.interval,
                  this,
                )),
                ie)
              : re
        }
        return he
      },
      failTimeout: function () {
        return (
          (this._timer = s(
            function () {
              this.state = he
            },
            this.options.interval,
            this,
          )),
          he
        )
      },
      reset: function () {
        clearTimeout(this._timer)
      },
      emit: function () {
        this.state == re &&
          ((this._input.tapCount = this.count),
          this.manager.emit(this.options.event, this._input))
      },
    }),
    (Q.VERSION = '2.0.8'),
    (Q.defaults = {
      domEvents: !1,
      touchAction: Zt,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [B, { enable: !1 }],
        [$, { enable: !1 }, ['rotate']],
        [J, { direction: Dt }],
        [G, { direction: Dt }, ['swipe']],
        [K],
        [K, { event: 'doubletap', taps: 2 }, ['tap']],
        [Z],
      ],
      cssProps: {
        userSelect: 'none',
        touchSelect: 'none',
        touchCallout: 'none',
        contentZooming: 'none',
        userDrag: 'none',
        tapHighlightColor: 'rgba(0,0,0,0)',
      },
    })
  ;(tt.prototype = {
    set: function (t) {
      return (
        it(this.options, t),
        t.touchAction && this.touchAction.update(),
        t.inputTarget &&
          (this.input.destroy(),
          (this.input.target = t.inputTarget),
          this.input.init()),
        this
      )
    },
    stop: function (t) {
      this.session.stopped = t ? 2 : 1
    },
    recognize: function (t) {
      const e = this.session
      if (!e.stopped) {
        this.touchAction.preventDefaults(t)
        let n,
          i = this.recognizers,
          s = e.curRecognizer
        ;(!s || (s && s.state & re)) && (s = e.curRecognizer = null)
        for (let o = 0; o < i.length; )
          (n = i[o]),
            2 === e.stopped || (s && n != s && !n.canRecognizeWith(s))
              ? n.reset()
              : n.recognize(t),
            !s && n.state & (ie | se | oe) && (s = e.curRecognizer = n),
            o++
      }
    },
    get: function (t) {
      if (t instanceof H) return t
      for (let e = this.recognizers, n = 0; n < e.length; n++)
        if (e[n].options.event == t) return e[n]
      return null
    },
    add: function (t) {
      if (o(t, 'add', this)) return this
      const e = this.get(t.options.event)
      return (
        e && this.remove(e),
        this.recognizers.push(t),
        (t.manager = this),
        this.touchAction.update(),
        t
      )
    },
    remove: function (t) {
      if (o(t, 'remove', this)) return this
      if ((t = this.get(t))) {
        const e = this.recognizers,
          n = v(e, t)
        ;-1 !== n && (e.splice(n, 1), this.touchAction.update())
      }
      return this
    },
    on: function (t, e) {
      if (t !== i && e !== i) {
        const n = this.handlers
        return (
          r(g(t), function (t) {
            ;(n[t] = n[t] || []), n[t].push(e)
          }),
          this
        )
      }
    },
    off: function (t, e) {
      if (t !== i) {
        const n = this.handlers
        return (
          r(g(t), function (t) {
            e ? n[t] && n[t].splice(v(n[t], e), 1) : delete n[t]
          }),
          this
        )
      }
    },
    emit: function (t, e) {
      this.options.domEvents && nt(t, e)
      const n = this.handlers[t] && this.handlers[t].slice()
      if (n && n.length) {
        ;(e.type = t),
          (e.preventDefault = function () {
            e.srcEvent.preventDefault()
          })
        for (let t = 0; t < n.length; ) n[t](e), t++
      }
    },
    destroy: function () {
      this.element && et(this, !1),
        (this.handlers = {}),
        (this.session = {}),
        this.input.destroy(),
        (this.element = null)
    },
  }),
    it(Q, {
      INPUT_START: yt,
      INPUT_MOVE: Et,
      INPUT_END: It,
      INPUT_CANCEL: At,
      STATE_POSSIBLE: ne,
      STATE_BEGAN: ie,
      STATE_CHANGED: se,
      STATE_ENDED: oe,
      STATE_RECOGNIZED: re,
      STATE_CANCELLED: ce,
      STATE_FAILED: he,
      DIRECTION_NONE: _t,
      DIRECTION_LEFT: Ct,
      DIRECTION_RIGHT: St,
      DIRECTION_UP: bt,
      DIRECTION_DOWN: Pt,
      DIRECTION_HORIZONTAL: Dt,
      DIRECTION_VERTICAL: xt,
      DIRECTION_ALL: wt,
      Manager: tt,
      Input: A,
      TouchAction: k,
      TouchInput: N,
      MouseInput: O,
      PointerEventInput: R,
      TouchMouseInput: Y,
      SingleTouchInput: M,
      Recognizer: H,
      AttrRecognizer: j,
      Tap: K,
      Pan: G,
      Swipe: J,
      Pinch: $,
      Rotate: B,
      Press: Z,
      on: p,
      off: f,
      each: r,
      merge: lt,
      extend: at,
      assign: it,
      inherit: h,
      bindFn: u,
      prefixed: E,
    })
  ;((void 0 !== t ? t : 'undefined' != typeof self ? self : {}).Hammer = Q),
    'function' == typeof define && define.amd
      ? define(function () {
          return Q
        })
      : 'undefined' != typeof module && module.exports
      ? (module.exports = Q)
      : (t.Hammer = Q)
})(window, document)
