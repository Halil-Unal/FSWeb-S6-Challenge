// Karakter bileşeniniz buraya gelecek

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown} from 'reactstrap';
export default function Karakter(props) {
  //const { data} = props;
 

  return (
   
    <UncontrolledDropdown>
    <DropdownToggle
      caret
      color="dark"
    >
      {props.stardata.name}
    </DropdownToggle>
    <DropdownMenu dark>

      <DropdownItem header>
     
      gender:  {props.stardata.gender}
      </DropdownItem>
      <DropdownItem>
     
     Height:  {props.stardata.height}
      </DropdownItem>
      <DropdownItem text>
      
      Mass:  {props.stardata.mass}
      </DropdownItem>
      <DropdownItem disabled>
     
      BirthYear:  {props.stardata.birth_year}

      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
      
      Eye Color:  {props.stardata.eye_color}

      </DropdownItem>
      <DropdownItem>
      
      Hair Color: {props.stardata.hair_color}

      </DropdownItem>
      <DropdownItem>
      
      Skin Color:  {props.stardata.skin_color}
      
      </DropdownItem>


      <UncontrolledDropdown>
    <DropdownToggle
      caret
      color="dark"
    >
      Appears in 4 films
    </DropdownToggle>
    <DropdownMenu dark>

    <DropdownItem>
      
      {props.stardata.films}

     </DropdownItem>
     <DropdownItem>
     
     {props.stardata.films[1]}

    </DropdownItem>
    <DropdownItem>
     
    {props.stardata.films[2]}

     </DropdownItem>
     <DropdownItem>
     
     {props.stardata.films[3]}

     </DropdownItem>



    </DropdownMenu>
    
      
    </UncontrolledDropdown>
      
    </DropdownMenu>
  </UncontrolledDropdown>






);


}



