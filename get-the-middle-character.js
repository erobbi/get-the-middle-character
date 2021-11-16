function getMiddle(s)
{
  let p = Math.floor( (s.length) / 2 );
  if (s.length % 2 === 1) {
    return s.charAt( p )
  } else {
    return `${s.charAt( p - 1 )}${s.charAt( p )}`
  }
//   charAt returns index of string, starting at 0.
}
