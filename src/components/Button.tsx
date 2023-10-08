type ButtonProps = {
  children: React.ReactNode
  useType: 'theme' | 'search' | 'location'
  type?: 'submit'
}

function Button({useType,type, children}: ButtonProps) {
const baseStyles = `focus:outline-none focus-visible:ring focus:ring-sky-600 active:ring-0 p-1 rounded-md`;

const inputButtonsStyles = `text-xl text-sky-700 absolute top-2`

const styles = {
  theme: `${baseStyles} text-2xl text-sky-900`,
  search: `${baseStyles} ${inputButtonsStyles} left-2.5`,
  location:`${baseStyles} ${inputButtonsStyles} right-2.5`
}

  return (
    <button className={styles[useType]} type={type}>
      {children}
    </button>
  )
}

export default Button
