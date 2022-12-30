# Layout-classes

[**Containers**](#containers)
  - [Head](#head)
  - [Direction](#direction)
  - [Align](#align)
  - [Sizes](#sizes)
  - [Dividers](#dividers)

[**Buttons**](#buttons)
  - [Selectors](#selectors-buttons)
  - [Decorators](#decorators-buttons)
  - [Colors](#colors-buttons)

[**Inputs**](#inputs)
  - [Selectors](#selectors-inputs)
  - [Decorators](#decorators-inputs)
  - [Colors](#colors-inputs)

[**Media**](#media)
  - [Selectors](#selectors-media)
  - [Decorators](#decorators-media)
  - [Align](#align-media)

[**Texts**](#texts)
  - [Decorators](#decorators-media)
  - [Align](#align-media)
  - [Constrains](#constrains)

<br>

---

<br>

## Containers [🔗](./modules/containers.css)
### Head
| ClassName | Description |
| -- | -- |
| `.viewport` | app view without scroll |
| `.scroll` | scroll component |
| `.scroll.snap` | vertical scroll snap |
| `.slider` | slider component container |
| `.slide` | slide component (.slider > .slide) |
| `.slide.snap` | horizontal scroll snap |

### Direction
| ClassName | Description |
| -- | -- |
| `.row` | row direction component |
| `.row.reverse` | reverse row direction |
| `.col` | col direction component |
| `.col.reverse` | reverse col direction |
| `.nowrap` | flexbox nowrap |
| `.wrap` | flexbox wrap |

### Align
| ClassName | Description |
| -- | -- |
| `.jstart` | justify-content start |
| `.jend` | justify-content end |
| `.jcenter` | justify-content center |
| `.jbetween` | justify-content between |
| `.jaround` | justify-content around |
| `.jevenly` | justify-content evenly |
| `.astart` | align-items start |
| `.aend` | align-items end |
| `.acenter` | align-items center |
| `.abase` | align-items baseline |
| `.astretch` | align-items stretch |
| `.fstart` | both start |
| `.fend` | both end |
| `.fcenter` | both center |
| `.sstart` | align-self start |
| `.send` | align-self end |
| `.sbase` | align-self baseline |
| `.sstretch` | align-self stretch |

### Sizes
| ClassName | Description |
| -- | -- |
| `.xfill` | width 100% |
| `.yfill` | height 100% |
| `.fill` | both 100% |
| `.grow` | grow 1 element to fill |
| `.grow2` | grow 2 element to fill |
| `.grow3` | grow 3 element to fill |
| `.grow4` | grow 4 element to fill |

### Dividers
| ClassName | Description |
| -- | -- |
| `xdiv` | horizontal divider |
| `ydiv` | vertical divider |
| `[@100-@900]` | plain attribute to change divider color |

## Buttons [🔗](./modules/buttons.css)
### Selectors buttons
| ClassName | Description |
| -- | -- |
| `button` | default button tag |
| `.btn` | simulate button on other elements |
| `a` | default anchor tag |
| `.link` | simulate anchor on other elements |
| `:--button` | custom button selector (button, .btn) |
| `:--link` | custom link selector (a, .link) |

### Decorators buttons
| ClassName | Description |
| -- | -- |
| `.round` | round :--button |
| `.outline` | outline :--button (do not work without a color class) |
| `.disabled` | disabled :--button |

### Colors buttons
| ClassName | Description |
| -- | -- |
| `.accent` | color accent :--button |
| `.alt` | color alternative :--button |
| `.success` | color success :--button |
| `.warning` | color warning :--button |
| `.error` | color error :--button |
| `.info` | color info :--button |
| `.[color].outline` | outline color :--button |

## Inputs [🔗](./modules/inputs.css)
### Selectors inputs
| ClassName | Description |
| -- | -- |
| `input` | default input tag |
| `select` | default select tag |
| `textarea` | default textarea tag |
| `:--input` | custom input selector (input, select, textarea) |

### Decorators inputs
| ClassName | Description |
| -- | -- |
| `.round` | round :--input |
| `.outline` | outline :--input |
| `.underline` | underline :--input |
| `.disabled` | disabled :--input |

### Colors inputs
| ClassName | Description |
| -- | -- |
| `.outline.-[100-900]` | outline color :--input |
| `.underline.-[100-900]` | underline color :--input |

## Media [🔗](./modules/media.css)
### Selectors media
| ClassName | Description |
| -- | -- |
| `img` | default img tag |
| `video` | default video tag |
| `:--media` | custom media selector (img, video) |
| `.icon` | icon wrapper for :--media and svg |

### Decorators media
| ClassName | Description |
| -- | -- |
| `.cover` | object-fit cover |
| `.contain` | object-fit contain |

### Align media
| ClassName | Description |
| -- | -- |
| `.top` | object-position top |
| `.right` | object-position right |
| `.bottom` | object-position bottom |
| `.left` | object-position left |
| `.[y-axis].[x-axis]` | object-position combinations |

## Texts [🔗](./modules/texts.css)
### Decorators media
| ClassName | Description |
| -- | -- |
| `.system` | system font |
| `.title` | title font |
| `.text` | text font |

### Align media
| ClassName | Description |
| -- | -- |
| `.tleft` | text-align left |
| `.tcenter` | text-align center |
| `.tright` | text-align right |
| `.tjustify` | text-align justify |
| `.ltr` | left to right |
| `.rtl` | right to left |
| `.rotated` | rotated text |
| `.vertical-lr` | vertical text left to right |
| `.vertical-rl` | vertical text right to left |

### Constrains
| ClassName | Description |
| -- | -- |
| `.clamp` | clamp text to 1 line |
| `.clamp2` | clamp text to 2 lines |
| `.clamp3` | clamp text to 3 lines |
| `.clamp4` | clamp text to 4 lines |