const y = '\u037C',
  g = typeof Symbol > 'u' ? '__' + y : Symbol.for(y),
  c = typeof Symbol > 'u' ? '__styleSet' + Math.floor(Math.random() * 1e8) : Symbol('styleSet'),
  w = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : {}
class x {
  constructor(e, l) {
    this.rules = []
    let { finish: u } = l || {}
    function n(t) {
      return /^@/.test(t) ? [t] : t.split(/,\s*/)
    }
    function s(t, i, h, T) {
      let f = [],
        r = /^@(\w+)\b/.exec(t[0]),
        m = r && r[1] == 'keyframes'
      if (r && i == null) return h.push(t[0] + ';')
      for (let o in i) {
        let a = i[o]
        if (/&/.test(o))
          s(
            o
              .split(/,\s*/)
              .map(d => t.map(S => d.replace(/&/, S)))
              .reduce((d, S) => d.concat(S)),
            a,
            h
          )
        else if (a && typeof a == 'object') {
          if (!r)
            throw new RangeError('The value of a property (' + o + ') should be a primitive value.')
          s(n(o), a, f, m)
        } else
          a != null &&
            f.push(
              o.replace(/_.*/, '').replace(/[A-Z]/g, d => '-' + d.toLowerCase()) + ': ' + a + ';'
            )
      }
      ;(f.length || m) &&
        h.push((u && !r && !T ? t.map(u) : t).join(', ') + ' {' + f.join(' ') + '}')
    }
    for (let t in e) s(n(t), e[t], this.rules)
  }
  getRules() {
    return this.rules.join(`
`)
  }
  static newName() {
    let e = w[g] || 1
    return (w[g] = e + 1), y + e.toString(36)
  }
  static mount(e, l) {
    ;(e[c] || new C(e)).mount(Array.isArray(l) ? l : [l])
  }
}
let p = null
class C {
  constructor(e) {
    if (!e.head && e.adoptedStyleSheets && typeof CSSStyleSheet < 'u') {
      if (p) return (e.adoptedStyleSheets = [p.sheet].concat(e.adoptedStyleSheets)), (e[c] = p)
      ;(this.sheet = new CSSStyleSheet()),
        (e.adoptedStyleSheets = [this.sheet].concat(e.adoptedStyleSheets)),
        (p = this)
    } else {
      this.styleTag = (e.ownerDocument || e).createElement('style')
      let l = e.head || e
      l.insertBefore(this.styleTag, l.firstChild)
    }
    ;(this.modules = []), (e[c] = this)
  }
  mount(e) {
    let l = this.sheet,
      u = 0,
      n = 0
    for (let s = 0; s < e.length; s++) {
      let t = e[s],
        i = this.modules.indexOf(t)
      if ((i < n && i > -1 && (this.modules.splice(i, 1), n--, (i = -1)), i == -1)) {
        if ((this.modules.splice(n++, 0, t), l))
          for (let h = 0; h < t.rules.length; h++) l.insertRule(t.rules[h], u++)
      } else {
        for (; n < i; ) u += this.modules[n++].rules.length
        ;(u += t.rules.length), n++
      }
    }
    if (!l) {
      let s = ''
      for (let t = 0; t < this.modules.length; t++)
        s +=
          this.modules[t].getRules() +
          `
`
      this.styleTag.textContent = s
    }
  }
}
export { x as S }
