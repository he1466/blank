class g {
  constructor(...t) {
    const [a = 100, h = 40] = t
    ;(this.width = a),
      (this.height = h),
      (this.size = 16),
      (this.code = []),
      (this.canvas = document.createElement('canvas')),
      (this.ctx = this.canvas.getContext('2d')),
      (this.canvas.width = this.width),
      (this.canvas.height = this.height),
      (this.ctx.fillStyle = o(180, 240)),
      this.ctx.fillRect(0, 0, this.width, this.height)
  }
  setBgColor(t) {
    return (this.bgColor = t), this
  }
  setBgImg(t) {
    return (this.bgImage = t), this
  }
  setWidth(t) {
    return (this.width = t), this
  }
  setHeight(t) {
    return (this.height = t), this
  }
  render(t) {
    const { canvas: a, ctx: h } = this
    h.clearRect(0, 0, a.width, a.height),
      (this.code = t ? t.split('') : []),
      (this.size = Math.min(16, this.height - 14)),
      (this.width = Math.max(this.width, (this.size + 5) * this.code.length)),
      (this.canvas.width = this.width),
      (this.canvas.height = this.height),
      (this.ctx.fillStyle = this.bgColor || o(180, 240)),
      this.ctx.fillRect(0, 0, this.width, this.height),
      this.bgImage && this.ctx.drawImage(this.bgImage, 0, 0, this.width, this.height),
      (this.canvas.style.cursor = 'pointer'),
      (this.canvas.innerHTML =
        "<span style='color: red'>\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas</span>"),
      (h.textBaseline = 'middle')
    const n = this.width / (this.code.length + 1),
      s = this.height / 2
    return (
      this.code.forEach((r, l) => {
        const c = n * (l + 0.5)
        ;(h.font = e(this.height / 2, this.height) + 'px SimHei'),
          (h.fillStyle = o(50, 160)),
          (h.shadowOffsetX = e(-3, 3)),
          (h.shadowOffsetY = e(-3, 3)),
          (h.shadowBlur = e(-3, 3)),
          (h.shadowColor = 'rgba(0, 0, 0, 0.3)'),
          h.translate(c, s),
          h.fillText(r, 0, 0),
          h.translate(-c, -s)
      }),
      this.canvas.toDataURL('image/jpeg', 1)
    )
  }
}
function e(i, t) {
  return Math.floor(Math.random() * (t - i) + i)
}
function o(i, t) {
  return 'rgb(' + e(i, t) + ', ' + e(i, t) + ', ' + e(i, t) + ')'
}
function d(i) {
  i = i || 4
  const t = [],
    a = []
  let h = []
  for (let s = 65; s < 91; s++) t.push(String.fromCharCode(s))
  for (let s = 97; s < 123; s++) a.push(String.fromCharCode(s))
  h = new Array(10).fill('').map((s, r) => `${r}`)
  const n = [...h, ...t, ...a]
  return new Array(i)
    .fill('')
    .map(() => n[e(0, n.length - 1)])
    .join('')
}
export { d as s, g as t }
