# 🏁 FlagMask

A lightweight CSS utility library that allows you to mask text and elements with country flags using simple CSS classes. Transform any text into beautiful flag patterns using SVG masks and background images.

## ✨ Features

- 🌍 **240+ Country Flags**: Comprehensive collection including countries, territories, and regions
- 🎨 **Text Masking**: Apply flag patterns to any text content
- 📱 **Responsive**: Works seamlessly across all device sizes
- 🚀 **Zero Dependencies**: Pure CSS implementation, no JavaScript required
- 🎯 **Easy to Use**: Simple class-based API
- 🔧 **Customizable**: Override styles to fit your design needs
- ⚡ **Lightweight**: Minimal file size with optimized SVG flags

## 🚀 Quick Start

### Installation

#### 📦 Via CDN
Add this line to your HTML `<head>` section:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flagmask@latest/flagmask.css">
```

#### 📋 Via npm
Install the package:
```bash
npm install flagmask
```

**Import in your JavaScript/TypeScript:**
```javascript
// Automatic CSS import (recommended)
import 'flagmask';

// Or explicit CSS import
import 'flagmask/flagmask.css';
```

**Note**: The automatic CSS import works with modern bundlers like Webpack, Vite, Rollup, etc. that support CSS imports in JavaScript modules.

### Basic Usage

Simply add the appropriate flag class to any HTML element:

```html
<!-- Basic text masking -->
<span class="flag-us">United States</span>
<span class="flag-gb">United Kingdom</span>
<span class="flag-fr">France</span>
<span class="flag-de">Germany</span>

<!-- Works with any text element -->
<h1 class="flag-ca">Canada</h1>
<p class="flag-jp">Japan</p>
<div class="flag-br">Brazil</div>
```

## 🎨 Examples

### Text Masking
```html
<h2 class="flag-us">AMERICA</h2>
<h2 class="flag-gb">BRITAIN</h2>
<h2 class="flag-fr">FRANCE</h2>
```

### Custom Styling
```css
.my-flag-text {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
}
```

```html
<div class="flag-de my-flag-text">Deutschland</div>
```

## 🗺️ Available Flags

FlagMask includes flags for:

### Countries (ISO 3166-1 alpha-2)
- **Americas**: `us`, `ca`, `br`, `mx`, `ar`, `cl`, `pe`, `co`, `ve`, etc.
- **Europe**: `gb`, `fr`, `de`, `it`, `es`, `nl`, `se`, `no`, `fi`, `pl`, etc.
- **Asia**: `cn`, `jp`, `in`, `kr`, `th`, `sg`, `my`, `ph`, `id`, `vn`, etc.
- **Africa**: `za`, `ng`, `eg`, `ma`, `ke`, `gh`, `tz`, `ug`, `dz`, etc.
- **Oceania**: `au`, `nz`, `fj`, `pg`, `sb`, `vu`, `to`, `ws`, etc.

### Special Territories & Regions
- **UK Subdivisions**: `gb-eng` (England), `gb-sct` (Scotland), `gb-wls` (Wales), `gb-nir` (Northern Ireland)
- **Spanish Regions**: `es-ct` (Catalonia), `es-ga` (Galicia), `es-pv` (Basque Country)
- **Saint Helena**: `sh-ac` (Ascension), `sh-hl` (Saint Helena), `sh-ta` (Tristan da Cunha)

### International Organizations
- `eu` - European Union
- `un` - United Nations
- `arab` - Arab League
- `asean` - ASEAN
- `eac` - East African Community
- `cefta` - Central European Free Trade Agreement

## 🔧 Browser Support

FlagMask works in all modern browsers that support:
- CSS `mask` property
- CSS `background-clip: text`
- SVG images

| Browser | Version |
|---------|---------|
| Chrome  | 120+    |
| Firefox | 53+     |
| Safari  | 15.4+   |
| Edge    | 79+     |

## 📋 Complete Flag List

<details>
<summary>Click to expand full list of available flags</summary>

### A
`ad`, `ae`, `af`, `ag`, `ai`, `al`, `am`, `ao`, `aq`, `ar`, `arab`, `as`, `asean`, `at`, `au`, `aw`, `ax`, `az`

### B
`ba`, `bb`, `bd`, `be`, `bf`, `bg`, `bh`, `bi`, `bj`, `bl`, `bm`, `bn`, `bo`, `bq`, `br`, `bs`, `bt`, `bv`, `bw`, `by`, `bz`

### C
`ca`, `cc`, `cd`, `cefta`, `cf`, `cg`, `ch`, `ci`, `ck`, `cl`, `cm`, `cn`, `co`, `cp`, `cr`, `cu`, `cv`, `cw`, `cx`, `cy`, `cz`

### D-E
`de`, `dg`, `dj`, `dk`, `dm`, `do`, `dz`, `eac`, `ec`, `ee`, `eg`, `eh`, `er`, `es`, `es-ct`, `es-ga`, `es-pv`, `et`, `eu`

### F-G
`fi`, `fj`, `fk`, `fm`, `fo`, `fr`, `ga`, `gb`, `gb-eng`, `gb-nir`, `gb-sct`, `gb-wls`, `gd`, `ge`, `gf`, `gg`, `gh`, `gi`, `gl`, `gm`, `gn`, `gp`, `gq`, `gr`, `gs`, `gt`, `gu`, `gw`, `gy`

### H-L
`hk`, `hm`, `hn`, `hr`, `ht`, `hu`, `ic`, `id`, `ie`, `il`, `im`, `in`, `io`, `iq`, `ir`, `is`, `it`, `je`, `jm`, `jo`, `jp`, `ke`, `kg`, `kh`, `ki`, `km`, `kn`, `kp`, `kr`, `kw`, `ky`, `kz`, `la`, `lb`, `lc`, `li`, `lk`, `lr`, `ls`, `lt`, `lu`, `lv`, `ly`

### M-P
`ma`, `mc`, `md`, `me`, `mf`, `mg`, `mh`, `mk`, `ml`, `mm`, `mn`, `mo`, `mp`, `mq`, `mr`, `ms`, `mt`, `mu`, `mv`, `mw`, `mx`, `my`, `mz`, `na`, `nc`, `ne`, `nf`, `ng`, `ni`, `nl`, `no`, `np`, `nr`, `nu`, `nz`, `om`, `pa`, `pc`, `pe`, `pf`, `pg`, `ph`, `pk`, `pl`, `pm`, `pn`, `pr`, `ps`, `pt`, `pw`, `py`

### Q-Z
`qa`, `re`, `ro`, `rs`, `ru`, `rw`, `sa`, `sb`, `sc`, `sd`, `se`, `sg`, `sh`, `sh-ac`, `sh-hl`, `sh-ta`, `si`, `sj`, `sk`, `sl`, `sm`, `sn`, `so`, `sr`, `ss`, `st`, `sv`, `sx`, `sy`, `sz`, `tc`, `td`, `tf`, `tg`, `th`, `tj`, `tk`, `tl`, `tm`, `tn`, `to`, `tr`, `tt`, `tv`, `tw`, `tz`, `ua`, `ug`, `um`, `un`, `us`, `uy`, `uz`, `va`, `vc`, `ve`, `vg`, `vi`, `vn`, `vu`, `wf`, `ws`, `xk`, `xx`, `ye`, `yt`, `za`, `zm`, `zw`

</details>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Clone the repository
2. Make your changes
3. Test with various browsers
4. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:
- Create an [issue](https://github.com/ToJaCytryn/flagmask/issues) on GitHub
- Contact me via email: `tojacytryn@gmail.com`


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [ToJaCytryn](https://github.com/ToJaCytryn)

*🤖 Readme generated with GitHub Copilot*
