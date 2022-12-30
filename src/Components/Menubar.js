// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Components/Search.css';
import IC from '../image/IC logo.png'
import Divider from '../image/SwirlDivider.png'
import ICLogo from '../image/IClogoblack.png';



//For Demo only
var links = document.getElementsByClassName('link')
for (var i = 0; i <= links.length; i++)
  addClass(i)


function addClass(id) {
  setTimeout(function () {
    if (id > 0) links[id - 1].classList.remove('hover')
    links[id].classList.add('hover')
  }, id * 750)
}


function OffcanvasExample() {


  return (


    <>

      {[false].map((expand) => (

        <Navbar key={expand} bg="light" expand={expand} className="mb-3 sticky-top "  style={{ boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.2)'}} >
        {/* <Navbar key={expand} bg="light" expand={expand} className="mb-3 " sticky="top"  > */}


          <Container fluid >

            {/* <img className="App-logo" src={IC} style={{width:"50", height:"50"}} alt="IC Logo"/> */}
            {/* <Navbar.Brand href="#" >
              <img className="App-logo" src={IC} style={{ width: "50", height: "50", marginTop: '0px', backgroundColor:'transparent' }} alt="IC Logo" />
              <span style={{ margin: '10px', fontSize: "32px", fontWeight: "normal", color: "#8b2266" }}>
                INDIAN CULTURE<br/>
              </span>
              <span style={{ margin: '10px', fontSize: "16px", fontWeight: "normal", color: "#8b2266" }}>Discover, Learn, Immerse, Connect</span>
             
            </Navbar.Brand> */}
            <Navbar.Brand href="#">
              <img className="App-logo" src={ICLogo} style={{ marginTop: '0px', backgroundColor:'transparent' }} alt="IC Logo" />
              
            </Navbar.Brand>
          

            {/* <form className="w-75 text-end unisearch"> */}
          {/*   <form className="w-75 text-end unisearch">
            <input type="text" className="border" placeholder="Universal Search..."  element/>
           </form> */}
        
       {/* <div class="searchcon">
  <form action="/search" method="get">
    <input class="search expandright" id="searchright" type="search" name="q" placeholder="Search"/>
    <label class="button searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
  </form>
</div>  */}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ margin: '10px 0px 0px -220px' }} />

            <Navbar.Offcanvas className="sidepan"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >


              {/* <form className="">
               <input type="text" className="border" placeholder="Search" />
           </form> */}

              <Navbar.Brand href="#" style={{ margin: "auto", fontSize: "30px", fontWeight: "normal", color: "#8b2266" }}><img className="App-logo-side" src={IC} style={{ width: "50", height: "50", margin: "10px" }} alt="IC Logo" />INDIAN CULTURE</Navbar.Brand>
              <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '120px' }} />
              {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CATAGORIES
                </Offcanvas.Title>
              </Offcanvas.Header> */}
              
              <Offcanvas.Body className='scroller '>
                <Nav className="justify-content-end flex-grow-1 pe-3 menuit ">
                  <Nav.Link className="itemeffect" href="#action1">Forts Of India</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action2">Historic Cities</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action3">Photo Essay</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action4">Textile and Fabrics</Nav.Link>

                  <Nav.Link className="itemeffect" href="#action5">Rarebook</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action6">E-Book</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action7">Food and culture</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action8">Gazetter</Nav.Link>

                  <Nav.Link className="itemeffect" href="#action9">Images</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action10">Snippets</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action11">Archives</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action12">UNSECO</Nav.Link>

                  <Nav.Link className="itemeffect" href="#action13">Video</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action14">Story</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action15">Manuscript</Nav.Link>
                  <Nav.Link className="itemeffect" href="#action16">Paintings</Nav.Link>
                  <NavDropdown
                    title="Other Catagories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="itemeffect" href="#action17">List1</NavDropdown.Item>
                    <NavDropdown.Item className="itemeffect" href="#action18">List2</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="itemeffect" href="#action19">
                      Other
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>


              </Offcanvas.Body>


            </Navbar.Offcanvas>
            
          </Container>


        </Navbar>

      ))}
      <div style={{ width: '100%', flex: 1, height: '10px', background: 'linear-gradient(to right, #912569 0%, #d34156 100%)', margin: '-11px', marginTop: '-15px', marginLeft: '0px' }} />

    </>

  );


}


export default OffcanvasExample;