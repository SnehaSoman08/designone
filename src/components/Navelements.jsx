import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import user from '../images/user.png';

export default function App() {
  const [openNavCentred, setOpenNavCentred] = useState(false);

  return (
    <MDBNavbar expand='lg'style={{boxShadow:'none'}} className='mb-5 mt-2'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavCentred(!openNavCentred)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavCentred} center id='navbarCenteredExample' className='justify-content-center'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Dash board
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Transactions
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Journal
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            

            
          </MDBNavbarNav>
          
        </MDBCollapse>
        <img src={user} alt="" style={{width:'80px'}}/>
        
      </MDBContainer>
      
     
    </MDBNavbar>
  );
}