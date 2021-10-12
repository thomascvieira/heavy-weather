const Header = ({ toggleInput, locationData }) => {
  let title = ''
  toggleInput ? title = 'Weather for ' + locationData[0] : title = 'Heavy Weather'
  return (
    <header>
      <h1 className={toggleInput ? `header header-weather` : `header`}>{title}</h1>
    </header>
  )
}

export default Header
