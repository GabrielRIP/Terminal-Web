import './style/style.css'

export default function LsdList ({ classPersonalizado, typeD, valueLsdText }) {
  return (
    /* eslint 'jsx-quotes': ['error', 'prefer-double'] */
    <article className={classPersonalizado}>
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d={typeD} /></svg>
      <p>{valueLsdText}</p>
    </article>
  )
}
