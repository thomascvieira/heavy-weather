const Header = ({ toggleInput, locationData }) => {
  let title = ''
  toggleInput ? title = 'Weather for ' + locationData[0] : title = 'Heavy Weather'
  return (
    <header>
      {/* ternary to change font size if zip is entered */}
      <h1 className={toggleInput ? `header header-weather` : `header`}>{title}</h1>
    </header>
  )
}

export default Header
