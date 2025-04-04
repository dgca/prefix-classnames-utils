/* eslint-disable no-useless-escape */
export const input = `
.relative
.-top-px
.-right-px
.-bottom-px
.-left-px
.col-span-full
.col-start-1
.col-start-2
.col-start-3
.col-start-4
.row-span-full
.row-start-1
.row-start-2
.row-start-3
.row-start-4
.my-6
.mb-3
.mb-11\.5
.ml-3
.flex
.grid
.h-6
.h-\[1lh\]
.h-px
.min-h-screen
.w-5\.5
.w-full
.max-w-lg
.shrink-0
.grid-cols-\[1fr_2\.5rem_auto_2\.5rem_1fr\]
.grid-rows-\[1fr_1px_auto_1px_1fr\]
.flex-col
.space-y-3
:where(& > :not(:last-child))
.space-y-6
:where(& > :not(:last-child))
.rounded-xl
.border-x
.border-\(--pattern-fg\)
.border-x-\(--pattern-fg\)
.bg-\(--pattern-fg\)
.bg-gray-100
.bg-white
.bg-\[image\:repeating-linear-gradient\(315deg\,_var\(--pattern-fg\)_0\,_var\(--pattern-fg\)_1px\,_transparent_0\,_transparent_50\%\)\]
.bg-\[size\:10px_10px\]
.bg-fixed
.fill-sky-400\/25
.stroke-sky-400\/25
.stroke-sky-800
.p-2
.p-10
.font-mono
.text-sm\/7
.font-medium
.font-semibold
.text-gray-700
.text-gray-950
.underline
.decoration-sky-400
.underline-offset-3
.\[--pattern-fg\:var\(--color-gray-950\)\]\/5
.not-dark\:hidden
.hover\:decoration-2
&:hover
.dark\:hidden
.dark\:bg-gray-950
.dark\:bg-white\/10
.dark\:stroke-sky-300
.dark\:text-gray-300
.dark\:text-white
.dark\:\[--pattern-fg\:var\(--color-white\)\]\/10
.foo
`;
/* eslint-enable no-useless-escape */

export const expected = `
  -bottom-px
  -left-px
  -right-px
  -top-px
  [--pattern-fg:var(--color-gray-950)]/5
  bg-(--pattern-fg)
  bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
  bg-[size:10px_10px]
  bg-fixed
  bg-gray-100
  bg-white
  border-(--pattern-fg)
  border-x
  border-x-(--pattern-fg)
  col-span-full
  col-start-1
  col-start-2
  col-start-3
  col-start-4
  dark:[--pattern-fg:var(--color-white)]/10
  dark:bg-gray-950
  dark:bg-white/10
  dark:hidden
  dark:stroke-sky-300
  dark:text-gray-300
  dark:text-white
  decoration-sky-400
  fill-sky-400/25
  flex
  flex-col
  font-medium
  font-mono
  font-semibold
  grid
  grid-cols-[1fr_2.5rem_auto_2.5rem_1fr]
  grid-rows-[1fr_1px_auto_1px_1fr]
  h-6
  h-[1lh]
  h-px
  hover:decoration-2
  max-w-lg
  mb-11.5
  mb-3
  min-h-screen
  ml-3
  my-6
  not-dark:hidden
  p-10
  p-2
  relative
  rounded-xl
  row-span-full
  row-start-1
  row-start-2
  row-start-3
  row-start-4
  shrink-0
  space-y-3
  space-y-6
  stroke-sky-400/25
  stroke-sky-800
  text-gray-700
  text-gray-950
  text-sm/7
  underline
  underline-offset-3
  w-5.5
  w-full
  foo
`;
