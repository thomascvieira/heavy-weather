
const Header = ({toggleInput, zipCode}) => {
  if(!toggleInput){
    return (
      <header>
        <h1 className="title">Heavy Weather</h1>
      </header>
    )
  }
  else{
    return (
      <header>
        <h1 className="title">Weather for {zipCode}</h1>
      </header>
    )
  }
}

export default Header
