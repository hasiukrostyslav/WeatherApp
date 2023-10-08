type DashboardBlockProps = {
  children: React.ReactNode;
  type: 'top' | 'bottom'
  value: string
}

function DashboardBlock({type,value, children}: DashboardBlockProps) {
  const baseStyle = 'rounded-xl py-6 px-8'

  const styles = {
    top: `${baseStyle} mb-4 bg-sky-100`,
    bottom: `${baseStyle} bg-sky-100/60`,
  }
  return (
    <section className={styles[type]}>
      <h2 className="text-gray-500 text-lg font-medium mb-3">{value}</h2>
      {children}
    </section>
  )
}

export default DashboardBlock
