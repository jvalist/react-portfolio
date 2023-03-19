import Nav from './Nav';
function Header(){
    return(
        <header>
    <div className="header-container">
      <img src={require("./workpicthumbnail.jpg")} alt="Developer's photo or avatar" height={350} width={300} />
      <h1>Johnny Velasco</h1>
     {/* Nav goers here */}
     <Nav/>
    </div>
  </header>
    )
}
export default Header;