const Header = ({ toggleInput }) => {
  let title = ''
  toggleInput ? title = 'Weather for (location)' : title = 'Heavy Weather'
  return (
    <header>
      <h1 className="header">{title}</h1>
    </header>
  )
}

export default Header
