
## About

Formula is a calculator for creating em-based form and button styles that vertically align.
This is loosely based on calculations that I would have previously done manually,
but that are easily displayed using functional UI components.

When calculated values for total height or line height are non-integer values,
the fields are highlighted in red to warn about sub-pixel rendering issues.

### 16px Base Font Size

In order to prevent zooming on iOS and other mobile devices,
the input font size should always be 16px.
To test other font sizes, adjust the values in the leftmost column.

### Baseline Shift

The baseline shift adjusts top and bottom padding to help visually align
fonts that have different baselines than default system fonts.

### Border Width

To avoid the additional height added from border-width,
consider using an inset box-shadow instead.
Note: if you need support for IE 8 and earlier, box-shadow is not supported.
Another option is to use `calc()` - e.g. `padding-top: calc(0.25em - 1px)`.

