// Karakter bileşeniniz buraya gelecek

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown} from 'reactstrap';
export default function Karakter(props) {
  const { data} = props;
 

  return (
   
    <UncontrolledDropdown>
    <DropdownToggle
      caret
      color="dark"
    >
      {data[0].name}
    </DropdownToggle>
    <DropdownMenu dark>
      <DropdownItem header>
      gender: {data[0].gender}
      </DropdownItem>
      <DropdownItem>
      Height:  {data[0].height}
      </DropdownItem>
      <DropdownItem text>
      Mass:  {data[0].mass}
      </DropdownItem>
      <DropdownItem disabled>
      Birth Year:  {data[0].birth_year
}
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
      Eye Color:  {data[0].eye_color
}
      </DropdownItem>
      <DropdownItem>
      Hair Color:  {data[0].hair_color
}
      </DropdownItem>
      <DropdownItem>
      Skin Color:  {data[0].skin_color
}
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>






);


}